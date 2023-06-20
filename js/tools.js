function searchItems (keyword) {
  keyword = keyword.toLowerCase() // 将关键词转换为小写，方便大小写不敏感的比较

  // 使用 filter() 方法筛选符合条件的项
  return Object.keys(basketballData).filter(function (key) {
    let item = basketballData[key]
    let title = item.title.toLowerCase()
    let content = item.content.toLowerCase()

    // 使用 indexOf() 方法检查关键词是否存在于 title 或 content 中
    return title.indexOf(keyword) !== -1 || content.indexOf(keyword) !== -1
  }).map(function (key) {
    return basketballData[key] // 返回符合搜索条件的对象
  })
}

// Fisher-Yates 算法用于乱序数组
function shuffleArray (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

function getCurrentDateTime () {
  const currentDate = new Date()

  // 获取年、月、日
  const year = currentDate.getFullYear()
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
  const day = currentDate.getDate().toString().padStart(2, '0')

  // 获取时、分、秒
  const hours = currentDate.getHours().toString().padStart(2, '0')
  const minutes = currentDate.getMinutes().toString().padStart(2, '0')
  const seconds = currentDate.getSeconds().toString().padStart(2, '0')
  const milliseconds = currentDate.getMilliseconds().toString().padStart(3, '0')

  // 格式化日期时间
  return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds + '.' + milliseconds
}


const updateWords = () => {
  let self = ''
  let date = new Date()

  if (date.getHours() >= 0 && date.getHours() < 12) {
    self = '上午好'
  } else if (date.getHours() >= 12 && date.getHours() < 18) {
    self = '下午好'
  } else {
    self = '晚上好'
  }

  if (window.user.name === undefined || window.user.name === null) {
    document.getElementById('time-hi').innerHTML = self + '，请登录'
  } else {
    document.getElementById('time-hi').innerText = 'Hi，' + window.user.name + ' ' + self
  }
}

function login () {
  loginForms()
  window.user = {
    name: document.getElementById('login-user').value,
    password: document.getElementById('login-password').value,
  }

  localStorage.setItem('userName', window.user.name)
  localStorage.setItem('password', window.user.name)
  updateWords()
}



String.prototype.hashCode = function () {
  let hash = 0, i, chr
  if (this.length === 0) return hash
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i)
    hash = ((hash << 5) - hash) + chr
    hash |= 0 // Convert to 32bit integer
  }
  return hash
}