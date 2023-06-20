/*
 * Copyright (c) 2023.
 * This project is licensed under the GNU Affero General Public License, version 3 (GNU AGPLv3).
 * Copyright Owner: zimo
 *
 *  License terms and conditions can be found at the following link:
 *  https://www.gnu.org/licenses/agpl-3.0.html
 *
 * Unless required by applicable law or agreed to in writing, this project is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 *
 */

(function initialize () {



  console.log('[NanoModules] ' + 'initial...')
  window.dom = { name: 'name' }
  window.onload = () => {
    for (let doc of document.getElementsByTagName('slot')) {
      load(doc.name, () => {
        console.log('[NanoModules] loaded ' + doc.name + '   for index')
      })
    }
    //加载当前页面路由
    updateCurrentRouter({ newURL: '' })
    loadCurrentRouter()
    //默认跳转到主路由
    if (window.location.hash === '' || window.location.hash === null) {
      toRoute('/')
    }
  }

  //创建监听，监听路由变化
  window.onhashchange = function (event) {
    updateCurrentRouter(event)
    loadCurrentRouter()
    // toRoute('/')
  }

}())

/**
 * 是否启用沙盒
 * 启用沙盒：
 *    启用后会隔离不同组件之间的css，js等
 *    但是会导致控制dom困难，你需要使用 dom.组件名称 来获取 dom数组，然后进行处理
 *    因为沙盒对同名称的组件放入了同一个数组之中，这可能对某个组件进行定制会有困难
 *    并且对组件之间的参数传递是个难题
 * 不启用沙盒：
 *  不启用沙盒就不需要通过特殊方式获取特殊的dom集合,可以直接通过 document 来获取
 *  同样因为不启用沙盒 css js 是不会进行隔离的，他们会互相影响
 *  但是同样定制组件是个困难的技术
 * @type {boolean}
 */
let sandbox = false
/**
 * 是否通过json获取关于组件的具体内容，否则你可能需要应对跨域请求，对于本地访问网站的话。如果在服务器则不会出现这问题
 * 启用后会读取被打包后的js文件里面特殊函数
 *
 * 如果你启用了这个，程序将不会去加载位于slot 的组件文件，而是去访问 getSlotAll 函数，位于文件夹中的 Main.java 将会协助你打包程序
 * 并且打包文件你要在 index.html 文件中引入才行，否则将不会被加载
 * @type {boolean}
 */
let jsonSlot = true

/**
 * 加载字符串中的插件
 * @param document 文章字符串
 * @param key
 */
function loadSlots (document, key) {
  const dom = parseDom(document).body
  for (let doc of dom.getElementsByTagName('slot')) {
    if (doc.name === key) {
      console.warn('[NanoModules] ' +
        '循环依赖在slot中发生了，发生循坏的 slot 为 -> ./slot/' + key)
      continue
    }
    load(doc.name, () => {
      console.log('[NanoModules] loaded ' + doc.name + '  for ' + key)
    }, key)
  }
}

/**
 * 解析DOM
 * @param htmlString HTML string
 * @returns {Document}
 */
function parseDom (htmlString) {
  return new DOMParser().parseFromString(htmlString, 'text/html')
}

/**
 * 加载组件文件并读取内容
 * @param name 组件名称
 * @param callback 加载成功会的回调函数
 * @param superName 父组件名称
 */
function load (name, callback, superName) {
  if (callback === null || callback === undefined) {
    callback = () => {}
  }
  if (jsonSlot) {
    //解析插槽
    parseSlot(name, getSlotAll()[name], callback, superName)
  } else {
    fetch('./slot/' + name + '.html')
      .then(function (response) {
        if (response.ok) {
          return response.text()
        }
        throw new Error('[NanoModules] ' + '插件文件加载失败: ' + name)
      })
      .then(function (pluginCode) {
        //解析插槽
        parseSlot(name, pluginCode, callback, superName)
      })
      .catch(function (error) {
        console.error('[NanoModules] ', error)
      })
  }
}

/**
 * 解析插槽
 * @param name 插槽文件名称
 * @param content 插槽文件的内容
 * @param callback 成功后运行的回调函数
 * @param superName 父插槽名称，如果没有则留空，禁止非本文件外的地方使用此参数
 */
function parseSlot (name, content, callback, superName) {
  let slot = null
  let script = null
  let style = null

  //dom解析
  const dom = parseDom(content).body

  //解析dom
  for (let child of dom.children) {
    if (child.tagName === 'slot'.toUpperCase()) {
      slot = child.innerHTML.trim()
    } else if (child.tagName === 'script'.toUpperCase()) {
      script = child.innerHTML.trim()
    } else if (child.tagName === 'style'.toUpperCase()) {
      style = child.innerHTML.trim()
    } else {
      console.warn('[NanoModules] ' + '无法解析的节点 ' + './slot/' + name)
      console.warn('[NanoModules] ', child)
    }
  }
  //渲染dom
  if (sandbox) {
    loadDomForBox(name, slot, script, style, superName)
  } else {
    loadDom(name, slot, script, style)
  }
  //执行子级插件
  loadSlots(slot, name)

  //回调函数
  callback(slot, script, style, content)
}

const loadMap = {}

/**
 * 渲染Dom 无沙盒
 * @param name
 * @param slot
 * @param script
 * @param style
 */
function loadDom (name, slot, script, style) {
  let nodeListOf = document.querySelectorAll('slot[name="' + name + '"]')

  if (nodeListOf.length <= 0 ){
    throw new Error("[NanoModules] 未在页面上找到 slot name = "+name)
  }
  //渲染dom
  for (let slotDom of nodeListOf) {
    slotDom.innerHTML = slot
  }

  //连接css
  let linkElement = document.createElement('link')
  linkElement.rel = 'stylesheet'
  linkElement.href = 'data:text/css,' + encodeURIComponent(style)
  document.head.appendChild(linkElement)

  try {
    //执行js但是不持久化，这样会导致组件中的方法无法被其他组件引用
    // new Function(script).call(null)

    //持久化js并执行js
    let element = document.createElement('script')
    element.innerHTML = script
    //如果已经被持久化了就禁止再次持久化,仅进行执行js
    if (!loadMap[name] || loadMap[name] === undefined || loadMap[name] === null) {
      document.body.appendChild(element)
    }else {
      new Function(script).call(null)
    }


    loadMap[name] = true
  } catch (e) {
    console.error('[NanoModules] ' + 'js 执行错误: ' + name + '\n', e)
  }
}

/**
 * 渲染dom 有沙盒
 * @param name 当前加载的插槽文件名称
 * @param slot 插槽 内容
 * @param script 插槽 脚本
 * @param style 插槽 css
 * @param superName 当前插槽文件父名称
 */
function loadDomForBox (name, slot, script, style, superName) {
  //如果存在父名称则加载父名称
  // 变量存在且不为 null 的代码块
  if (superName !== null && superName !== undefined) {
    distinct(superName)
    for (let dom of window.dom[superName]) {
      loadDomInBox(dom)
    }
    distinct(superName)
  } else {
    //获取当前文档名称
    loadDomInBox(document)
  }

  function loadDomInBox (dom) {
    //查询在父插槽下的关于当前子子插槽[name]的节点
    for (let slotDom of dom.querySelectorAll('slot[name="' + name + '"]')) {
      //设置挂载点
      slotDom.innerHTML = '<div></div>'
      let mount = slotDom.getElementsByTagName('div')[0]
      mount.classList.add('shadowRoot')
      //挂在子dom
      const shadowRoot = mount.attachShadow({ mode: 'open' })
      //连接css
      const styleElement = document.createElement('style')
      styleElement.textContent = style
      shadowRoot.appendChild(styleElement)
      //封装
      const root = document.createElement('div')
      root.innerHTML = slot
      root.id = 'root'
      shadowRoot.appendChild(root)
      //执行 js
      try {
        //注册dom到全局变量
        if (window.dom[name] == null || window.dom[name] === undefined) {
          window.dom[name] = []
        }
        // window.dom[name] = shadowRoot
        window.dom[name].push(shadowRoot)
        //执行js
        new Function(script).call(null)
      } catch (e) {
        console.error('[NanoModules] ' + 'js 执行错误: ' + name + '\n', e)
      }
    }
  }

  /**
   * 去除没有挂载在页面上的节点
   */
  function distinct (superName) {
    let array = []
    for (let dom of window.dom[superName]) {
      if (dom.host.getRootNode() === document) array.push(dom)
    }
    window.dom[superName] = array
  }
}

/**
 * 无隔离渲染dom 与 css
 * 但是可以js的dom是在主页面上，可以被直接访问
 */
//渲染dom
// for (let slotDom of document.querySelectorAll(
//   'slot[name="' + name + '"]')) {
//  slotDom.innerHTML = slot
// }
// //执行js
// new Function(script).call(null)
// //连接css
// let linkElement = document.createElement('link')
// linkElement.rel = 'stylesheet'
// linkElement.href = 'data:text/css,' + encodeURIComponent(style)
// document.head.appendChild(linkElement)

/**
 * 子dom渲染，隔离的css和js，但是js不能直接获取子dom
 */
//子dom渲染，隔离的css和js，但是js不能直接获取子dom
// console.log(document.querySelectorAll(
//   'slot[name="' + name + '"]'))
// for (let slotDom of document.querySelectorAll(
//   'slot[name="' + name + '"]')) {
//   //设置挂载点
//   slotDom.innerHTML = "<div></div>"
//   //挂在子dom
//   const shadowRoot = slotDom.getElementsByTagName("div")[0].attachShadow({ mode: 'open' })
//   //连接css
//   const styleElement = document.createElement('style')
//   styleElement.textContent = style
//   shadowRoot.appendChild(styleElement);
//   //封装
//   const innerElement = document.createElement('div');
//   innerElement.innerHTML =  slot
//   shadowRoot.appendChild(innerElement);
// }

/**
 * 访问子dom
 */
// // 通过id选择器获取包含 Shadow DOM 的元素
// var elementWithShadow = document.querySelector('#element-with-shadow');
//
// // 获取 Shadow Root
// var shadowRoot = elementWithShadow.shadowRoot;
//
// // 在 Shadow DOM 中进行操作
// var shadowParagraph = shadowRoot.querySelector('p');
// console.log(shadowParagraph.textContent);

///////////////////////////////////////////////////////////////////////////////////////////////////////

function loadCurrentRouter () {
  for (let element of document.getElementsByTagName(
    'router')) {
    if (currentRouter.name === '') {
      element.innerHTML = ''
      continue
    }
    if (currentRouter.view === undefined || currentRouter.view === null) {
      // if (routers['/'] !== undefined && currentRouter.view !== null) toRoute(
      //   '/')
      if (routers['/404'] !== undefined && currentRouter.view !== null) toRoute(
        '/404')
    }
    element.innerHTML = '<slot name=\'' + currentRouter.view + '\'' + ' />'
    load(currentRouter.view, () => {
      console.log('[NanoModules] to router: ', currentRouter)
    })
  }
}

const currentRouter = {
  name: '',
  view: null,
  url: null,
}

const routers = {
  '/Test': 'Test',
}

function updateCurrentRouter (event) {
  currentRouter.name = window.location.hash.replace('#', '')
  currentRouter.url = event.newURL
  currentRouter.view = routers[currentRouter.name]
}

function addRouter (name, view) {
  routers[name] = view
}

function toRoute (name) {
  window.location.hash = '#' + name
}