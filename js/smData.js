let smName = ''
let sm = {
  q2: {
    title: '【诶要你干嘛】 保和耳机',
    content: ' 旗舰全功能5代【5月原版降噪版】 秒连接+入耳检测+任意名字等',
    imgPathDev: './../img/222/q%20(2).jpg',
    imgPath: './img/222/q%20(2).jpg',
    getImgPath: () => {
      if (jsonSlot) {
        return sm.q2.imgPath
      } else {
        return sm.q2.imgPathDev
      }
    },
    rmb: 23,
    stock: 225,
  },
  q1: {
    title: '【EIYAONIGANMA】 礼红酒 ',
    content: '昂富庄园（AOFOFAZENDA）凯威法国进口红酒珍藏干红葡萄酒14度单瓶送礼红酒 原酒进口 单瓶750ml*1瓶',
    imgPathDev: './../img/222/q%20(1).jpg',
    imgPath: './img/222/q%20(1).jpg',
    getImgPath: () => {
      if (jsonSlot) {
        return sm.q1.imgPath
      } else {
        return sm.q1.imgPathDev
      }
    },
    rmb: 999,
    stock: 225,
  },
  q3: {
    title: '【蒙娜丽坤微笑】 ',
    content: '矢向ikun爱坤鸡音盒蒙娜丽坤的微笑只因盒蔡徐坤周边手办小黑子恶搞 ',
    imgPathDev: './../img/222/2bdda2c9b31be65f.jpg',
    imgPath: './img/222/2bdda2c9b31be65f.jpg',
    getImgPath: () => {
      if (jsonSlot) {
        return sm.q3.imgPath
      } else {
        return sm.q3.imgPathDev
      }
    },
    rmb: 9.9,
    stock: 225,
  },
  q4: {
    title: '【打篮球小黑子钥】  ',
    content: '蔡徐坤鸡你太美只因你太美坤坤钥匙扣玩偶汽车摆件 鸡你太美(带盒装)',
    imgPathDev: './../img/222/498058bbc3a3d4b0.jpg.avif',
    imgPath: './img/222/498058bbc3a3d4b0.jpg.avif',
    getImgPath: () => {
      if (jsonSlot) {
        return sm.q4.imgPath
      } else {
        return sm.q4.imgPathDev
      }
    },
    rmb: 8.8,
    stock: 225,
  },
  rand: {
    title: 'title',
    content: 'content',
    imgPathDev: './../img/222/498058bbc3a3d4b0.jpg.avif',
    imgPath: './img/222/498058bbc3a3d4b0.jpg.avif',
    getImgPath: () => {
      if (jsonSlot) {
        return sm.q4.imgPath
      } else {
        return sm.q4.imgPathDev
      }
    },
    stock: (Math.random() * (100 + 2) - 2).toFixed(1),
    rmb: Math.random() * (100 + 9.9) - 9.9,
  },
}

let smCount = {
  test: {
    number: 86,
    id: 3556498,
    detail: {
      title: '测试物品',
      content: '蔡徐坤鸡你太美只因你太美坤坤钥匙扣玩偶汽车摆件 鸡你太美(带盒装)',
      imgPathDev: './../img/222/498058bbc3a3d4b0.jpg.avif',
      imgPath: './img/222/498058bbc3a3d4b0.jpg.avif',
      getImgPath: () => {
        if (jsonSlot) {
          return sm.q4.imgPath
        } else {
          return sm.q4.imgPathDev
        }
      },
      rmb: 8.8,
      stock: 225,
    },
  },
}
let smResultCount = {
  test: {
    number: 86,
    id: 3556498,
    detail: {
      title: '测试物品',
      content: '蔡徐坤鸡你太美只因你太美坤坤钥匙扣玩偶汽车摆件 鸡你太美(带盒装)',
      imgPathDev: './../img/222/498058bbc3a3d4b0.jpg.avif',
      imgPath: './img/222/498058bbc3a3d4b0.jpg.avif',
      getImgPath: () => {
        if (jsonSlot) {
          return sm.q4.imgPath
        } else {
          return sm.q4.imgPathDev
        }
      },
      rmb: 8.8,
      stock: 225,
    },
  },
}

let smCountIdMap = {}
let smStCount = 0
let smDetail = sm[smName]