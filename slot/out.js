function getSlotAll () {
  return {404:"<slot>\n"+
"<div style=\"display: flex;align-items: center; flex-direction: column; margin-top: 200px\">\n"+
"<p style=\"font-size: 80px\">您访问的页面不存在</p>\n"+
"</div>\n"+
"</slot>\n" 
,bar:"<slot>\n"+
"<div class=\"layui-carousel\" id=\"ID-carousel-demo-image\" width=\"123px\">\n"+
"<div carousel-item>\n"+
"<div><img src=\"./img/2.jpg\" class=\"bar-img\"></div>\n"+
"<div><img src=\"./img/1.jpg\" class=\"bar-img\"></div>\n"+
"<!--<div><img src=\"./img/3.jpg\" class=\"bar-img\"></div>-->\n"+
"</div>\n"+
"</div>\n"+
"</slot>\n"+
"<script>\n"+
"layui.use(function () {\n"+
"var carousel = layui.carousel\n"+
"// 渲染 - 图片轮播\n"+
"carousel.render({\n"+
"elem: \'#ID-carousel-demo-image\',\n"+
"width: \'100vh\',\n"+
"height: \'97px\',\n"+
"interval: 3000,\n"+
"})\n"+
"})\n"+
"</script>\n"+
"<style>\n"+
".bar-img{\n"+
"width: 100%;\n"+
"/*height: 100%;*/\n"+
"}\n"+
"#ID-carousel-demo-image{\n"+
"width: 100% !important;\n"+
"}\n"+
"</style>\n" 
,hot:"<slot>\n"+
"<div class=\"sc-hot-flex\" id=\"hot-root\">\n"+
"<div class=\"layui-panel\"\n"+
"style=\"width: 80vw;height: 80px;display: flex;align-items: center;margin-top: 10px;justify-content: center;\">\n"+
"<img src=\"./img/icon_popular.png\" height=\"60%\" style=\"margin-left: 10px\">\n"+
"<h2 style=\"margin-left: 20px\">热门榜</h2>\n"+
"</div>\n"+
"<div id=\"hot-router-show\" class=\"layui-panel \"\n"+
"style=\"color: #9f9f9f;font-size:35px;margin-top: 10px;z-index: 0;border: none;width: 79vw\">\n"+
"</div>\n"+
"<div class=\"layui-card dingdan order-sim hot-pan hot-flex none\"\n"+
"style=\"z-index: 1;position: relative;margin-top: 10px\">\n"+
"<div>\n"+
"<img src=\"\" class=\"hot-img\">\n"+
"</div>\n"+
"<div style=\"margin-left: 20px;\">\n"+
"<h1 class=\"hot-title\"></h1>\n"+
"<p class=\"hot-content\"></p>\n"+
"<div class=\"hot-flex\" style=\"align-items: center; margin-top: 20px\">\n"+
"<p>RMB: </p>\n"+
"<p style=\"color: red;font-size: large;\" class=\"hot-rmb\"></p>\n"+
"</div>\n"+
"<div style=\"position: absolute; top: 10px; left: 10px; transform: translate(-50%, -50%);\">\n"+
"<p class=\"hot-rank\"\n"+
"style=\"border-radius: 50%; border: 2px solid #1e9fff; background-color: #1e9fff; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;\"></p>\n"+
"</div>\n"+
"</div>\n"+
"</div>\n"+
"<!--<div id=\"hotB\" style=\"display: flex;justify-content: center;\"></div>-->\n"+
"</div>\n"+
"</slot>\n"+
"<script>\n"+
"layui.use(function () {\n"+
"let laypage = layui.laypage\n"+
"laypage.render({\n"+
"elem: \'hotB\',\n"+
"count: 100, // 数据总数\n"+
"})\n"+
"})\n"+
"function addhotask (data) {\n"+
"//  parseDom 解析一个字符串为dom\n"+
"let order = parseDom(document.getElementsByClassName(\'order-sim\')[0].outerHTML)\n"+
".getElementsByClassName(\'order-sim\')[0]\n"+
"// 为要添加的商品添加索引\n"+
"let index = (document.getElementsByClassName(\'order-sim\').length + 1)\n"+
"//订单设置class\n"+
"order.classList.remove(\'none\')\n"+
"order.classList.add(\'hot-for\')\n"+
"order.id = (\'hot-for-\' + index)\n"+
"//设置商品具体内容\n"+
"order.getElementsByClassName(\'hot-img\')[0].src = data.getImgPath()\n"+
"order.getElementsByClassName(\'hot-title\')[0].innerText = data.title\n"+
"order.getElementsByClassName(\'hot-rmb\')[0].innerText = data.rmb + \'$\'\n"+
"order.getElementsByClassName(\'hot-content\')[0].innerText = data.content\n"+
"order.getElementsByClassName(\'hot-rank\')[0].innerText = index - 1\n"+
"if (index - 1 === 1) {\n"+
"order.getElementsByClassName(\'hot-rank\')[0].style.backgroundColor = \'#f8b92b\'\n"+
"order.getElementsByClassName(\'hot-rank\')[0].style.borderColor = \'#f8b92b\'\n"+
"} else if (index - 1 === 2) {\n"+
"order.getElementsByClassName(\'hot-rank\')[0].style.backgroundColor = \'#ec6d35\'\n"+
"order.getElementsByClassName(\'hot-rank\')[0].style.borderColor = \'#ec6d35\'\n"+
"} else if (index - 1 === 3) {\n"+
"order.getElementsByClassName(\'hot-rank\')[0].style.backgroundColor = \'#f52797\'\n"+
"order.getElementsByClassName(\'hot-rank\')[0].style.borderColor = \'#f52797\'\n"+
"}\n"+
"//渲染dom\n"+
"document.getElementById(\'hot-root\').appendChild(order)\n"+
"//添加单机事件\n"+
"document.getElementById(\'hot-for-\' + index).onclick = function () {\n"+
"for (let element of document.getElementsByClassName(\'hot-for\')) element.classList.add(\'none\')\n"+
"toHotRouterForShow(\n"+
"\'rand\',\n"+
"data.title,\n"+
"data.content,\n"+
"data.getImgPath(),\n"+
"data.rmb,\n"+
")\n"+
"}\n"+
"}\n"+
"function toHotRouterForShow (name, title, content, imgPath, rmb) {\n"+
"smName = name\n"+
"if (rmb === null || rmb === undefined) {\n"+
"rmb = (Math.random() * (100 + 9) - 9).toFixed(2)\n"+
"}\n"+
"sm.rand = {\n"+
"title: title,\n"+
"content: content,\n"+
"imgPathDev: imgPath,\n"+
"imgPath: imgPath,\n"+
"getImgPath: function () {return imgPath},\n"+
"rmb: rmb,\n"+
"stock: (Math.random() * 100).toFixed(0),\n"+
"}\n"+
"document.getElementById(\'hot-router-show\').innerHTML =\n"+
"\'<button class=\"btn btn-primary\" onclick=\"hotBack()\" style=\"font-size: large;\"><返回</button>\'+\n"+
"\'<slot name = \"smSt\" style=\"font-size: large\">\'\n"+
"load(\'smSt\', () => {})\n"+
"}\n"+
"for (let key in basketballData) {\n"+
"addhotask(basketballData[key])\n"+
"}\n"+
"function hotBack(){\n"+
"for (let element of document.getElementsByClassName(\'hot-for\')) element.classList.remove(\'none\')\n"+
"document.getElementById(\'hot-router-show\').innerHTML = \"\"\n"+
"}\n"+
"</script>\n"+
"<style>\n"+
".sc-hot-flex {\n"+
"display: flex;\n"+
"flex-direction: column;\n"+
"flex-wrap: nowrap;\n"+
"align-items: center;\n"+
"justify-content: space-evenly;\n"+
"}\n"+
".sc-hot-flex > * {\n"+
"/*border: rgb(245,245,245) solid 2px;*/\n"+
"border: rgb(211, 210, 210) solid 1px;\n"+
"}\n"+
".dingdan {\n"+
"width: 80vw;\n"+
"/*height: 20vh;*/\n"+
"min-height: 150px;\n"+
"/*height: 98vh;*/\n"+
"margin-top: 20px;\n"+
"margin-bottom: 10px;\n"+
"}\n"+
".hot-flex {\n"+
"display: flex;\n"+
"}\n"+
".hot-pan {\n"+
"cursor: pointer; /*鼠标变小手*/\n"+
"margin: 5px;\n"+
"/*width: 500px;*/\n"+
"height: 200px;\n"+
"/*box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1);*/\n"+
"}\n"+
".hot-pan:hover {\n"+
"box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n"+
"}\n"+
".hot-img {\n"+
"margin-right: 10px;\n"+
"/*width: 50px;*/\n"+
"height: 200px;\n"+
"}\n"+
"</style>\n" 
,login:"<slot>\n"+
"<div id=\"login-panel-super\">\n"+
"<div class=\"layui-panel\" id=\"login-panel\">\n"+
"<div class=\"layui-input-group\">\n"+
"<div class=\"layui-input-split layui-input-prefix\"\n"+
"\">\n"+
"账号\n"+
"</div>\n"+
"<input type=\"text\" placeholder=\"请输入用户名或账号\" class=\"layui-input\" id=\"login-user\">\n"+
"</div>\n"+
"<div class=\"layui-input-group\">\n"+
"<div class=\"layui-input-split layui-input-prefix\">\n"+
"密码\n"+
"</div>\n"+
"<input type=\"password\" lay-affix=\"eye\" placeholder=\"请输入密码\" class=\"layui-input\" id=\"login-password\">\n"+
"</div>\n"+
"<div class=\"login-button-group\">\n"+
"<button type=\"button\" onclick=\"login()\" class=\"layui-btn\">登录</button>\n"+
"<button type=\"button\" onclick=\"localStorage.removeItem(\'userName\');location.reload();\" class=\"layui-btn\" style=\"margin-right: 33px\">注销</button>\n"+
"</div>\n"+
"</div>\n"+
"</slot>\n"+
"<script>\n"+
"</script>\n"+
"<style>\n"+
".login-button-group {\n"+
"padding: 10px;\n"+
"display: flex;\n"+
"flex-direction: row-reverse;\n"+
"width: 100%;\n"+
"height: 100%;\n"+
"}\n"+
".layui-input-group {\n"+
"width: 100%;\n"+
"margin-bottom: 10px;\n"+
"}\n"+
"#login-panel {\n"+
"display: flex;\n"+
"flex-direction: column;\n"+
"align-items: center;\n"+
"width: 500px;\n"+
"height: 300px;\n"+
"padding: 50px 30px;\n"+
"}\n"+
"#login-panel-super {\n"+
"display: flex;\n"+
"height: 100%;\n"+
"flex-direction: column;\n"+
"justify-content: center;\n"+
"align-items: center;\n"+
"}\n"+
"</style>\n" 
,order:"<slot>\n"+
"<div class=\"sc-flex\" id=\"order-root\">\n"+
"<div class=\"layui-panel\" style=\"width: 80vw;height: 80px;display: flex;align-items: center;margin-top: 10px\">\n"+
"<h2 style=\"margin-left: 20px\">我的订单</h2>\n"+
"<div style=\"right: 20px;position: absolute\">\n"+
"<button class=\"layui-btn layui-btn-primary layui-btn-disabled\" onclick=\"\">清空</button>\n"+
"</div>\n"+
"</div>\n"+
"<div class=\"\"\n"+
"style=\"color: #9f9f9f;font-size:35px;margin-top: 200px;position: absolute;z-index: 0;border: none\">\n"+
"<p>空空如也QAQ</p>\n"+
"</div>\n"+
"<div class=\"layui-card dingdan order-sim none\" style=\"z-index: 2\">\n"+
"<div class=\"layui-card-header order-sim-header flex\">\n"+
"<div>\n"+
"<p style=\"color: rgb(170,170,185);\" class=\"order-date\">订购时间: 2022.02.02 02:03:02.222</p>\n"+
"</div>\n"+
"<div style=\"margin-left: 200px\">\n"+
"<p style=\"color: rgb(170,170,185);\" class=\"order-id\">订单ID: 8848</p>\n"+
"</div>\n"+
"</div>\n"+
"<div class=\"layui-card-body order-sim-body flex\"\n"+
"style=\"justify-content: space-between;    align-items: center;\">\n"+
"<div>\n"+
"<img class=\"sc-img\" src=\"img/222/q5.jpg\">\n"+
"</div>\n"+
"<h3 class=\"sc-title\">标题</h3>\n"+
"<div class=\"sc-title\"\n"+
"style=\"width: 80px;display: flex;flex-direction: column;align-items: flex-start;justify-content: center;font-size: small\">\n"+
"<p>已完成</p>\n"+
"<p style=\"border-top: #9f9f9f solid 1px\"><a href=\"javascript:\" class=\"sdxq\">订单详情</a></p>\n"+
"</div>\n"+
"<div>\n"+
"<p class=\"user-name\">zimo</p>\n"+
"</div>\n"+
"<div style=\"min-width: 100px;max-width: 150px;width: 120px\">\n"+
"<b class=\"sc-rmb\">$金钱x购买数量</b>\n"+
"<br>\n"+
"<b class=\"sc-count\" style=\"color: red\">总金额: 123</b>\n"+
"</div>\n"+
"<button class=\"layui-btn layui-btn-danger sc-button-buy\">已支付</button>\n"+
"</div>\n"+
"</div>\n"+
"</div>\n"+
"</slot>\n"+
"<script>\n"+
"function addOrder (data) {\n"+
"//  parseDom 解析一个字符串为dom\n"+
"let order = parseDom(document.getElementsByClassName(\'order-sim\')[0].outerHTML)\n"+
".getElementsByClassName(\'order-sim\')[0]\n"+
"// 为要添加的订单添加索引\n"+
"let index = (document.getElementsByClassName(\'sc-for\').length + 1)\n"+
"//订单设置class\n"+
"order.classList.remove(\'none\')\n"+
"order.classList.add(\'sc-for\')\n"+
"order.id = (\'sc-for-\' + index)\n"+
"//设置订单具体内容\n"+
"order.getElementsByClassName(\'sc-img\')[0].src = data.detail.getImgPath()\n"+
"order.getElementsByClassName(\'sc-title\')[0].innerText = data.detail.title\n"+
"order.getElementsByClassName(\'order-id\')[0].innerText = \'订单ID: \' + data.id\n"+
"// order.getElementsByClassName(\'user-name\')[0].innerText = \'收货人: \' + window.user.name\n"+
"order.getElementsByClassName(\'user-name\')[0].innerText = window.user.name\n"+
"order.getElementsByClassName(\'order-date\')[0].innerText = \'订购时间: \' + getCurrentDateTime()\n"+
"order.getElementsByClassName(\'sc-rmb\')[0].innerText = \'$\' + data.detail.rmb + \' x \' + data.number\n"+
"order.getElementsByClassName(\'sc-count\')[0].innerText = \'总金额: \' + (data.detail.rmb * data.number).toFixed(2)\n"+
"order.getElementsByClassName(\'sc-button-buy\')[0].id = (\'sc-button-buy-\' + index)\n"+
"//渲染dom\n"+
"// document.getElementById(\'order-root\').innerHTML += order.outerHTML\n"+
"document.getElementById(\'order-root\').appendChild(order)\n"+
"}\n"+
"for (let smCKey in smResultCount) {\n"+
"console.log(\'我的订单订单: \' + smCKey)\n"+
"addOrder(smResultCount[smCKey])\n"+
"}\n"+
"</script>\n"+
"<style>\n"+
".sc-flex {\n"+
"display: flex;\n"+
"flex-direction: column;\n"+
"flex-wrap: nowrap;\n"+
"align-items: center;\n"+
"justify-content: space-evenly;\n"+
"}\n"+
".sc-flex > * {\n"+
"/*border: rgb(245,245,245) solid 2px;*/\n"+
"border: rgb(211, 210, 210) solid 1px;\n"+
"}\n"+
".dingdan {\n"+
"width: 80vw;\n"+
"/*height: 20vh;*/\n"+
"min-height: 150px;\n"+
"margin-top: 20px;\n"+
"margin-bottom: 10px;\n"+
"}\n"+
".sc-img {\n"+
"width: 80px;\n"+
"height: 80px;\n"+
"margin-right: 20px;\n"+
"}\n"+
".sc-title {\n"+
"max-height: 80px;\n"+
"height: 30px;\n"+
"/*max-width: 500px;*/\n"+
"max-width: 400px;\n"+
"/*width: 300px;*/\n"+
"min-width: 200px;\n"+
"/*border: #1e9fff solid 1px;*/\n"+
"border-right: #9f9f9f solid 1px;\n"+
"word-break: break-all;\n"+
"word-wrap: break-word;\n"+
"text-overflow: ellipsis;\n"+
"margin-right: 15px;\n"+
"}\n"+
".sdxq:hover {\n"+
"color: red;\n"+
"}\n"+
"</style>\n" 
,rank:"<slot>\n"+
"<div class=\"sc-rank-flex\" id=\"rank-root\">\n"+
"<div class=\"layui-panel\"\n"+
"style=\"width: 80vw;height: 80px;display: flex;align-items: center;margin-top: 10px;justify-content: center;\">\n"+
"<img src=\"./img/icon_rank.png\" height=\"60%\" style=\"margin-left: 10px\">\n"+
"<h2 style=\"margin-left: 20px\">排行榜</h2>\n"+
"</div>\n"+
"<div id=\"rank-router-show\" class=\"layui-panel \"\n"+
"style=\"color: #9f9f9f;font-size:35px;margin-top: 10px;z-index: 0;border: none;width: 79vw\">\n"+
"</div>\n"+
"<div class=\"layui-card dingdan order-sim rank-pan rank-flex none\"\n"+
"style=\"z-index: 1;position: relative;margin-top: 10px\">\n"+
"<div>\n"+
"<img src=\"\" class=\"rank-img\">\n"+
"</div>\n"+
"<div style=\"margin-left: 20px;\">\n"+
"<h1 class=\"rank-title\"></h1>\n"+
"<p class=\"rank-content\"></p>\n"+
"<div class=\"rank-flex\" style=\"align-items: center; margin-top: 20px\">\n"+
"<p>RMB: </p>\n"+
"<p style=\"color: red;font-size: large;\" class=\"rank-rmb\"></p>\n"+
"</div>\n"+
"<div style=\"position: absolute; top: 10px; left: 10px; transform: translate(-50%, -50%);\">\n"+
"<p class=\"rank-rank\"\n"+
"style=\"border-radius: 50%; border: 2px solid #1e9fff; background-color: #1e9fff; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;\"></p>\n"+
"</div>\n"+
"</div>\n"+
"</div>\n"+
"<!--<div id=\"rankB\" style=\"display: flex;justify-content: center;\"></div>-->\n"+
"</div>\n"+
"</slot>\n"+
"<script>\n"+
"layui.use(function () {\n"+
"let laypage = layui.laypage\n"+
"laypage.render({\n"+
"elem: \'rankB\',\n"+
"count: 100, // 数据总数\n"+
"})\n"+
"})\n"+
"function addrankask (data) {\n"+
"//  parseDom 解析一个字符串为dom\n"+
"let order = parseDom(document.getElementsByClassName(\'order-sim\')[0].outerHTML)\n"+
".getElementsByClassName(\'order-sim\')[0]\n"+
"// 为要添加的商品添加索引\n"+
"let index = (document.getElementsByClassName(\'order-sim\').length + 1)\n"+
"//订单设置class\n"+
"order.classList.remove(\'none\')\n"+
"order.classList.add(\'rank-for\')\n"+
"order.id = (\'rank-for-\' + index)\n"+
"//设置商品具体内容\n"+
"order.getElementsByClassName(\'rank-img\')[0].src = data.getImgPath()\n"+
"order.getElementsByClassName(\'rank-title\')[0].innerText = data.title\n"+
"order.getElementsByClassName(\'rank-rmb\')[0].innerText = data.rmb + \'$\'\n"+
"order.getElementsByClassName(\'rank-content\')[0].innerText = data.content\n"+
"order.getElementsByClassName(\'rank-rank\')[0].innerText = index - 1\n"+
"if (index - 1 === 1) {\n"+
"order.getElementsByClassName(\'rank-rank\')[0].style.backgroundColor = \'#f8b92b\'\n"+
"order.getElementsByClassName(\'rank-rank\')[0].style.borderColor = \'#f8b92b\'\n"+
"} else if (index - 1 === 2) {\n"+
"order.getElementsByClassName(\'rank-rank\')[0].style.backgroundColor = \'#ec6d35\'\n"+
"order.getElementsByClassName(\'rank-rank\')[0].style.borderColor = \'#ec6d35\'\n"+
"} else if (index - 1 === 3) {\n"+
"order.getElementsByClassName(\'rank-rank\')[0].style.backgroundColor = \'#f52797\'\n"+
"order.getElementsByClassName(\'rank-rank\')[0].style.borderColor = \'#f52797\'\n"+
"}\n"+
"//渲染dom\n"+
"document.getElementById(\'rank-root\').appendChild(order)\n"+
"//添加单机事件\n"+
"document.getElementById(\'rank-for-\' + index).onclick = function () {\n"+
"for (let element of document.getElementsByClassName(\'rank-for\')) element.classList.add(\'none\')\n"+
"torankRouterForShow(\n"+
"\'rand\',\n"+
"data.title,\n"+
"data.content,\n"+
"data.getImgPath(),\n"+
"data.rmb,\n"+
")\n"+
"}\n"+
"}\n"+
"function torankRouterForShow (name, title, content, imgPath, rmb) {\n"+
"smName = name\n"+
"if (rmb === null || rmb === undefined) {\n"+
"rmb = (Math.random() * (100 + 9) - 9).toFixed(2)\n"+
"}\n"+
"sm.rand = {\n"+
"title: title,\n"+
"content: content,\n"+
"imgPathDev: imgPath,\n"+
"imgPath: imgPath,\n"+
"getImgPath: function () {return imgPath},\n"+
"rmb: rmb,\n"+
"stock: (Math.random() * 100).toFixed(0),\n"+
"}\n"+
"document.getElementById(\'rank-router-show\').innerHTML =\n"+
"\'<button class=\"btn btn-primary\" onclick=\"rankBack()\" style=\"font-size: large;\"><返回</button>\'+\n"+
"\'<slot name = \"smSt\" style=\"font-size: large\">\'\n"+
"load(\'smSt\', () => {})\n"+
"}\n"+
"// 遍历并乱序输出\n"+
"const keys = Object.keys(basketballData);\n"+
"const shuffledKeys = shuffleArray(keys);\n"+
"shuffledKeys.forEach(key => {\n"+
"addrankask(basketballData[key]);\n"+
"});\n"+
"function rankBack(){\n"+
"for (let element of document.getElementsByClassName(\'rank-for\')) element.classList.remove(\'none\')\n"+
"document.getElementById(\'rank-router-show\').innerHTML = \"\"\n"+
"}\n"+
"</script>\n"+
"<style>\n"+
".sc-rank-flex {\n"+
"display: flex;\n"+
"flex-direction: column;\n"+
"flex-wrap: nowrap;\n"+
"align-items: center;\n"+
"justify-content: space-evenly;\n"+
"}\n"+
".sc-rank-flex > * {\n"+
"/*border: rgb(245,245,245) solid 2px;*/\n"+
"border: rgb(211, 210, 210) solid 1px;\n"+
"}\n"+
".dingdan {\n"+
"width: 80vw;\n"+
"/*height: 20vh;*/\n"+
"min-height: 150px;\n"+
"/*height: 98vh;*/\n"+
"margin-top: 20px;\n"+
"margin-bottom: 10px;\n"+
"}\n"+
".rank-flex {\n"+
"display: flex;\n"+
"}\n"+
".rank-pan {\n"+
"cursor: pointer; /*鼠标变小手*/\n"+
"margin: 5px;\n"+
"/*width: 500px;*/\n"+
"height: 200px;\n"+
"/*box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1);*/\n"+
"}\n"+
".rank-pan:hover {\n"+
"box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n"+
"}\n"+
".rank-img {\n"+
"margin-right: 10px;\n"+
"/*width: 50px;*/\n"+
"height: 200px;\n"+
"}\n"+
"</style>\n" 
,register:"<slot>\n"+
"<div id=\"register-root\">\n"+
"<div class=\"reg-panel\">\n"+
"<form class=\"layui-form\">\n"+
"<div class=\"layui-form-item\">\n"+
"<div class=\"layui-inline\">\n"+
"<label class=\"layui-form-label\">用户名</label>\n"+
"<div class=\"layui-input-inline layui-input-wrap\">\n"+
"<input type=\"tel\" name=\"phone\" lay-verify=\"required|phone\"  placeholder=\"请输入用户名\" autocomplete=\"off\" lay-affix=\"clear\" class=\"layui-input rg-input demo-phone\">\n"+
"</div>\n"+
"</div>\n"+
"</div>\n"+
"<div class=\"layui-form-item\">\n"+
"<div class=\"layui-inline\">\n"+
"<label class=\"layui-form-label\">密码</label>\n"+
"<div class=\"layui-input-inline layui-input-wrap\">\n"+
"<input type=\"tel\" name=\"phone\" lay-verify=\"required|phone\" autocomplete=\"off\"\n"+
"placeholder=\"请填写密码\" lay-affix=\"clear\" class=\"layui-input demo-phone rg-input\">\n"+
"</div>\n"+
"</div>\n"+
"</div>\n"+
"<div class=\"layui-form-item\">\n"+
"<div class=\"layui-inline\">\n"+
"<label class=\"layui-form-label\">验证手机号</label>\n"+
"<div class=\"layui-input-inline layui-input-wrap\">\n"+
"<input type=\"tel\" name=\"phone\" lay-verify=\"required|phone\" autocomplete=\"off\"\n"+
"placeholder=\"请填写手机号\" lay-affix=\"clear\" class=\"layui-input demo-phone rg-input\">\n"+
"</div>\n"+
"<div class=\"layui-form-mid\" style=\"padding: 0!important;\">\n"+
"<button type=\"button\" class=\"layui-btn layui-btn-primary\" lay-on=\"get-vercode\" onclick=\"layer.msg(\'验证码已发送\')\">获取验证码\n"+
"</button>\n"+
"</div>\n"+
"</div>\n"+
"</div>\n"+
"<div class=\"layui-form-item\">\n"+
"<label class=\"layui-form-label\">验证码</label>\n"+
"<div class=\"layui-input-inline layui-input-wrap\">\n"+
"<input type=\"text\" name=\"vercode\" lay-verify=\"required\" placeholder=\"请输入验证码\" autocomplete=\"off\" lay-affix=\"clear\"\n"+
"class=\"layui-input rg-input\">\n"+
"</div>\n"+
"</div>\n"+
"<div class=\"layui-form-item\">\n"+
"<div class=\"layui-inline\">\n"+
"<label class=\"layui-form-label\">验证邮箱</label>\n"+
"<div class=\"layui-input-inline\">\n"+
"<input type=\"text\" placeholder=\"请输入邮箱\" name=\"email\" lay-verify=\"email\" autocomplete=\"off\" class=\"layui-input rg-input\">\n"+
"</div>\n"+
"</div>\n"+
"</div>\n"+
"<div class=\"layui-form-item\">\n"+
"<div class=\"layui-input-block\">\n"+
"<button type=\"submit\" class=\"layui-btn\" onclick=\"toRoute(\'/index\')\">立即提交</button>\n"+
"<button type=\"reset\" class=\"layui-btn layui-btn-primary\">重置</button>\n"+
"</div>\n"+
"</div>\n"+
"</form>\n"+
"</div>\n"+
"</div>\n"+
"</slot>\n"+
"<script>\n"+
"</script>\n"+
"<style>\n"+
".reg-panel {\n"+
"display: flex;\n"+
"width: 50vw;\n"+
"padding: 20px;\n"+
"margin-bottom: 200px;\n"+
"background-color: rgba(77, 57, 57, 0.4);\n"+
"flex-direction: row;\n"+
"flex-wrap: nowrap;\n"+
"align-items: center;\n"+
"justify-content: center;\n"+
"color: #e0dddd;\n"+
"}\n"+
"#register-root {\n"+
"position: fixed;\n"+
"width: 100vw;\n"+
"height: 100vh;\n"+
"/*background-color: #a49f9f;*/\n"+
"background: url(\"./img/login-bg.jpg\")  no-repeat center center ;\n"+
"top: 0;\n"+
"overflow-x: auto;\n"+
"display: flex;\n"+
"align-items: center;\n"+
"justify-content: center;\n"+
"flex-direction: column;\n"+
"}\n"+
".rg-input{\n"+
"background-color: transparent;\n"+
"border-top: none;\n"+
"border-right: none;\n"+
"border-left: none;\n"+
"color: #e0dddd;\n"+
"}\n"+
"</style>\n" 
,ShoppingCart:"<slot>\n"+
"<div class=\"sc-flex\" id=\"order-root\">\n"+
"<div class=\"layui-panel\" style=\"width: 80vw;height: 80px;display: flex;align-items: center;margin-top: 10px\">\n"+
"<h2 style=\"margin-left: 20px\">购物车</h2>\n"+
"<div style=\"right: 20px;position: absolute\">\n"+
"<button class=\"layui-btn layui-btn-primary\" onclick=\"clearScFor()\">清空</button>\n"+
"<button class=\"layui-btn layui-btn-danger\" onclick=\"clearScFor()\">购买所有</button>\n"+
"</div>\n"+
"</div>\n"+
"<div class=\"\"\n"+
"style=\"color: #9f9f9f;font-size:35px;margin-top: 200px;position: absolute;z-index: 0;border: none\">\n"+
"<p>空空如也QAQ</p>\n"+
"</div>\n"+
"<div class=\"layui-card dingdan order-sim none\" style=\"z-index: 2\">\n"+
"<div class=\"layui-card-header order-sim-header flex\">\n"+
"<div>\n"+
"<p style=\"color: rgb(170,170,185);\" class=\"order-date\">订购时间: 2022.02.02 02:03:02.222</p>\n"+
"</div>\n"+
"<div style=\"margin-left: 200px\">\n"+
"<p style=\"color: rgb(170,170,185);\" class=\"order-id\">订单ID: 8848</p>\n"+
"</div>\n"+
"</div>\n"+
"<div class=\"layui-card-body order-sim-body flex\"\n"+
"style=\"justify-content: space-between;    align-items: center;\">\n"+
"<div>\n"+
"<img class=\"sc-img\" src=\"img/222/q5.jpg\">\n"+
"</div>\n"+
"<h3 class=\"sc-title\">标题</h3>\n"+
"<div style=\"min-width: 100px;max-width: 150px;width: 120px\">\n"+
"<b class=\"sc-rmb\">$金钱x购买数量</b>\n"+
"<br>\n"+
"<b class=\"sc-count\" style=\"color: red\">总金额: 123</b>\n"+
"</div>\n"+
"<button class=\"layui-btn layui-btn-danger sc-button-buy\">立即购买</button>\n"+
"</div>\n"+
"</div>\n"+
"</div>\n"+
"</slot>\n"+
"<script>\n"+
"function clearScFor () {\n"+
"let elements = document.getElementsByClassName(\'sc-for\')\n"+
"// 从后向前遍历集合，逐个删除元素\n"+
"for (let i = elements.length - 1; i >= 0; i--) {\n"+
"const element = elements[i]\n"+
"const id = element.getElementsByClassName(\'order-id\')[0].innerText\n"+
"// element.parentNode.removeChild(element);\n"+
"for (let smCountKey in smCount) {\n"+
"if (smCount[smCountKey].id === parseInt(id)) {\n"+
"smResultCount[smCountKey] = smCount[smCountKey]\n"+
"}\n"+
"}\n"+
"element.remove()\n"+
"smCount = {}\n"+
"}\n"+
"}\n"+
"function addOrder (data) {\n"+
"//  parseDom 解析一个字符串为dom\n"+
"let order = parseDom(document.getElementsByClassName(\'order-sim\')[0].outerHTML)\n"+
".getElementsByClassName(\'order-sim\')[0]\n"+
"// 为要添加的订单添加索引\n"+
"let index = (document.getElementsByClassName(\'sc-for\').length + 1)\n"+
"//订单设置class\n"+
"order.classList.remove(\'none\')\n"+
"order.classList.add(\'sc-for\')\n"+
"order.id = (\'sc-for-\' + index)\n"+
"//设置订单具体内容\n"+
"order.getElementsByClassName(\'sc-img\')[0].src = data.detail.getImgPath()\n"+
"order.getElementsByClassName(\'sc-title\')[0].innerText = data.detail.title\n"+
"order.getElementsByClassName(\'order-id\')[0].innerText = \'订单ID: \' + data.id\n"+
"order.getElementsByClassName(\'order-date\')[0].innerText = \'订购时间: \' + getCurrentDateTime()\n"+
"order.getElementsByClassName(\'sc-rmb\')[0].innerText = \'$\' + data.detail.rmb + \' x \' + data.number\n"+
"order.getElementsByClassName(\'sc-count\')[0].innerText = \'总金额: \' + (data.detail.rmb * data.number).toFixed(2)\n"+
"order.getElementsByClassName(\'sc-button-buy\')[0].id = (\'sc-button-buy-\' + index)\n"+
"//渲染dom\n"+
"// document.getElementById(\'order-root\').innerHTML += order.outerHTML\n"+
"document.getElementById(\'order-root\').appendChild(order)\n"+
"//添加单机事件\n"+
"document.getElementById(\'sc-button-buy-\' + index).onclick = function () {\n"+
"if (window.user.name === null || window.user.name === undefined) {\n"+
"layer.msg(\'请登录！\')\n"+
"return\n"+
"}\n"+
"const element = document.getElementById(\'sc-for-\' + index)\n"+
"const id = element.getElementsByClassName(\'order-id\')[0].innerText\n"+
"for (let smCountKey in smCount) {\n"+
"if (smCount[smCountKey].id === parseInt(id.substring(id.indexOf(\': \')+2))) {\n"+
"smResultCount[smCountKey] = smCount[smCountKey]\n"+
"delete smCount[smCountKey]\n"+
"}\n"+
"}\n"+
"element.remove()\n"+
"}\n"+
"}\n"+
"for (let smCKey in smCount) {\n"+
"console.log(\'购物车添加订单: \' + smCKey)\n"+
"addOrder(smCount[smCKey])\n"+
"}\n"+
"</script>\n"+
"<style>\n"+
".sc-flex {\n"+
"display: flex;\n"+
"flex-direction: column;\n"+
"flex-wrap: nowrap;\n"+
"align-items: center;\n"+
"justify-content: space-evenly;\n"+
"}\n"+
".sc-flex > * {\n"+
"/*border: rgb(245,245,245) solid 2px;*/\n"+
"border: rgb(211, 210, 210) solid 1px;\n"+
"}\n"+
".dingdan {\n"+
"width: 80vw;\n"+
"/*height: 20vh;*/\n"+
"min-height: 150px;\n"+
"margin-top: 20px;\n"+
"margin-bottom: 10px;\n"+
"}\n"+
".sc-img {\n"+
"width: 80px;\n"+
"height: 80px;\n"+
"margin-right: 20px;\n"+
"}\n"+
".sc-title {\n"+
"max-height: 80px;\n"+
"height: 30px;\n"+
"max-width: 500px;\n"+
"width: 500px;\n"+
"/*border: #1e9fff solid 1px;*/\n"+
"border-right: #9f9f9f solid 1px;\n"+
"word-break: break-all;\n"+
"word-wrap: break-word;\n"+
"text-overflow: ellipsis;\n"+
"margin-right: 15px;\n"+
"}\n"+
"</style>\n" 
,show:"<slot>\n"+
"<div id=\"menu-content\">\n"+
"<div class=\"layui-panel\" style=\"width: 260px; margin: 16px;\">\n"+
"<ul class=\"layui-menu\" id=\"demo-menu\">\n"+
"<li lay-options=\"{id: \'smIndex\'}\">\n"+
"<div class=\"layui-menu-body-title\"><a href=\"javascript:;\">主页</a></div>\n"+
"</li>\n"+
"<li lay-options=\"{id: \'smBasketball\'}\">\n"+
"<div class=\"layui-menu-body-title\"><a href=\"javascript:;\">篮球</a></div>\n"+
"</li>\n"+
"<li lay-options=\"{id: \'smRompers\'}\">\n"+
"<div class=\"layui-menu-body-title\"><a href=\"javascript:;\">背带裤</a></div>\n"+
"</li>\n"+
"<li class=\"layui-menu-item-parent\" lay-options=\"{type: \'parent\'}\">\n"+
"<div class=\"layui-menu-body-title\">\n"+
"分类\n"+
"<i class=\"layui-icon layui-icon-right\"></i>\n"+
"</div>\n"+
"<div class=\"layui-panel layui-menu-body-panel\">\n"+
"<ul>\n"+
"<li class=\"layui-menu-item-parent\" lay-options=\"{type: \'parent\'}\">\n"+
"<div class=\"layui-menu-body-title\">\n"+
"服装\n"+
"<i class=\"layui-icon layui-icon-right\"></i>\n"+
"</div>\n"+
"<div class=\"layui-panel layui-menu-body-panel\">\n"+
"<ul>\n"+
"<li lay-options=\"{id: \'404\'}\">\n"+
"<div class=\"layui-menu-body-title\">女装</div>\n"+
"</li>\n"+
"<li lay-options=\"{id: \'404\'}\">\n"+
"<div class=\"layui-menu-body-title\">男装</div>\n"+
"</li>\n"+
"<li lay-options=\"{id: \'404\'}\">\n"+
"<div class=\"layui-menu-body-title\">童装</div>\n"+
"</li>\n"+
"<li lay-options=\"{id: \'404\'}\">\n"+
"<div class=\"layui-menu-body-title\">坤装</div>\n"+
"</li>\n"+
"<li lay-options=\"{id: \'404\'}\">\n"+
"<div class=\"layui-menu-body-title\" style=\"font-size: small;color: #9f9f9f\">更多...</div>\n"+
"</li>\n"+
"</ul>\n"+
"</div>\n"+
"</li>\n"+
"<!--子-->\n"+
"<li class=\"layui-menu-item-parent\" lay-options=\"{type: \'parent\'}\">\n"+
"<div class=\"layui-menu-body-title\">\n"+
"电子产品\n"+
"<i class=\"layui-icon layui-icon-right\"></i>\n"+
"</div>\n"+
"<div class=\"layui-panel layui-menu-body-panel\">\n"+
"<ul>\n"+
"<li lay-options=\"{id: \'404\'}\">\n"+
"<div class=\"layui-menu-body-title\">手机</div>\n"+
"</li>\n"+
"<li lay-options=\"{id: \'404\'}\">\n"+
"<div class=\"layui-menu-body-title\">耳机</div>\n"+
"</li>\n"+
"<li lay-options=\"{id: \'404\'}\">\n"+
"<div class=\"layui-menu-body-title\">笔记本</div>\n"+
"</li>\n"+
"<li lay-options=\"{id: \'404\'}\">\n"+
"<div class=\"layui-menu-body-title\" style=\"font-size: small;color: #9f9f9f\">更多...</div>\n"+
"</li>\n"+
"</ul>\n"+
"</div>\n"+
"</li>\n"+
"<!--子-->\n"+
"<li class=\"layui-menu-item-parent\" lay-options=\"{type: \'parent\'}\">\n"+
"<div class=\"layui-menu-body-title\">\n"+
"鞋/时尚女鞋\n"+
"<i class=\"layui-icon layui-icon-right\"></i>\n"+
"</div>\n"+
"<div class=\"layui-panel layui-menu-body-panel\">\n"+
"<ul>\n"+
"<li lay-options=\"{id: \'404\'}\">\n"+
"<div class=\"layui-menu-body-title\">雪地靴</div>\n"+
"</li>\n"+
"<li lay-options=\"{id: \'404\'}\">\n"+
"<div class=\"layui-menu-body-title\">松糕鞋</div>\n"+
"</li>\n"+
"<li lay-options=\"{id: \'404\'}\">\n"+
"<div class=\"layui-menu-body-title\">马丁靴</div>\n"+
"</li>\n"+
"<li lay-options=\"{id: \'404\'}\">\n"+
"<div class=\"layui-menu-body-title\">帆布鞋</div>\n"+
"</li>\n"+
"<li lay-options=\"{id: \'404\'}\">\n"+
"<div class=\"layui-menu-body-title\">雨靴</div>\n"+
"</li>\n"+
"<li lay-options=\"{id: \'404\'}\">\n"+
"<div class=\"layui-menu-body-title\" style=\"font-size: small;color: #9f9f9f\">更多...</div>\n"+
"</li>\n"+
"</ul>\n"+
"</div>\n"+
"</li>\n"+
"<!--  子 END  -->\n"+
"</ul>\n"+
"</div>\n"+
"</li>\n"+
"<li lay-options=\"{id: \'404\'}\">\n"+
"<div class=\"layui-menu-body-title\" style=\"font-size: medium;color: #7a7a78\">更多...</div>\n"+
"</li>\n"+
"</ul>\n"+
"</div>\n"+
"<div class=\"layui-panel\" id=\"router-show\">\n"+
"<slot name=\"smIndex\"></slot>\n"+
"</div>\n"+
"<!--<div class=\"layui-panel\" style=\"position: fixed; width: 50px;height: 50px;right: 80px;bottom: 150px\">-->\n"+
"<!--    <div>顶部</div>-->\n"+
"<!--</div>-->\n"+
"</div>\n"+
"</slot>\n"+
"<script>\n"+
"layui.use(function () {\n"+
"let dropdown = layui.dropdown\n"+
"let layer = layui.layer\n"+
"let util = layui.util\n"+
"// 菜单点击事件\n"+
"dropdown.on(\'click(demo-menu)\', function (options) {\n"+
"// 显示 - 仅用于演示\n"+
"if (options.id === \'404\') {\n"+
"console.log(this, options)\n"+
"layer.msg(util.escape(JSON.stringify(options)))\n"+
"}\n"+
"console.log(options.id)\n"+
"document.getElementById(\'router-show\').innerHTML = \'<slot name = \\'\' + options.id + \'\\'\' + \'>\'\n"+
"load(options.id, () => {})\n"+
"})\n"+
"})\n"+
"function toRouterForShow (name, title, content, imgPath, rmb) {\n"+
"smName = name\n"+
"if (rmb === null || rmb === undefined) {\n"+
"rmb = (Math.random() * (100 + 9) - 9).toFixed(2)\n"+
"}\n"+
"sm.rand = {\n"+
"title: title,\n"+
"content: content,\n"+
"imgPathDev: imgPath,\n"+
"imgPath: imgPath,\n"+
"getImgPath: function () {return imgPath},\n"+
"rmb: rmb,\n"+
"stock: (Math.random() * 100).toFixed(0),\n"+
"}\n"+
"document.getElementById(\'router-show\').innerHTML = \'<slot name = \"smSt\">\'\n"+
"load(\'smSt\', () => {})\n"+
"}\n"+
"</script>\n"+
"<style>\n"+
"#menu-content {\n"+
"display: flex;\n"+
"}\n"+
"#router-show {\n"+
"margin: 20px;\n"+
"width: 100%;\n"+
"/*height: 73vh;*/\n"+
"min-height: 73vh;\n"+
"overflow-x: auto;\n"+
"}\n"+
"</style>\n" 
,smBasketball:"<slot>\n"+
"<main class=\"sm-flex-root\" id=\"sm-flex-root\">\n"+
"<div class=\"smb-pan smb-flex layui-panel none\">\n"+
"<div>\n"+
"<img src=\"\" class=\"smb-img\">\n"+
"</div>\n"+
"<div>\n"+
"<h1 class=\"smb-title\"></h1>\n"+
"<p class=\"smb-content\"></p>\n"+
"<div class=\"smb-flex\" style=\"align-items: center; margin-top: 20px\">\n"+
"<p>RMB: </p>\n"+
"<p style=\"color: red;font-size: large;\" class=\"smb-rmb\"></p>\n"+
"</div>\n"+
"</div>\n"+
"</div>\n"+
"</main>\n"+
"<div id=\"smBB\" style=\"display: flex;justify-content: center;\"></div>\n"+
"</slot>\n"+
"<script>\n"+
"layui.use(function () {\n"+
"let laypage = layui.laypage\n"+
"laypage.render({\n"+
"elem: \'smBB\',\n"+
"count: 100, // 数据总数\n"+
"})\n"+
"})\n"+
"function addSmBask (data) {\n"+
"//  parseDom 解析一个字符串为dom\n"+
"let order = parseDom(document.getElementsByClassName(\'smb-pan\')[0].outerHTML)\n"+
".getElementsByClassName(\'smb-pan\')[0]\n"+
"// 为要添加的商品添加索引\n"+
"let index = (document.getElementsByClassName(\'smb-pan\').length + 1)\n"+
"//订单设置class\n"+
"order.classList.remove(\'none\')\n"+
"order.classList.add(\'smb-for\')\n"+
"order.id = (\'smb-for-\' + index)\n"+
"//设置商品具体内容\n"+
"order.getElementsByClassName(\'smb-img\')[0].src = data.getImgPath()\n"+
"order.getElementsByClassName(\'smb-title\')[0].innerText = data.title\n"+
"order.getElementsByClassName(\'smb-rmb\')[0].innerText = data.rmb + \'$\'\n"+
"order.getElementsByClassName(\'smb-content\')[0].innerText = data.content\n"+
"//渲染dom\n"+
"// document.getElementById(\'order-root\').innerHTML += order.outerHTML\n"+
"document.getElementById(\'sm-flex-root\').appendChild(order)\n"+
"//添加单机事件\n"+
"document.getElementById(\'smb-for-\' + index).onclick = function () {\n"+
"toRouterForShow(\n"+
"\'rand\',\n"+
"data.title,\n"+
"data.content,\n"+
"data.getImgPath(),\n"+
"data.rmb,\n"+
")\n"+
"}\n"+
"}\n"+
"// for (let key in basketballData) {\n"+
"//   addSmBask(basketballData[key])\n"+
"// }\n"+
"// 遍历并乱序输出\n"+
"shuffleArray(Object.keys(basketballData)).forEach(key => {\n"+
"addSmBask(basketballData[key]);\n"+
"});\n"+
"</script>\n"+
"<style>\n"+
".sm-flex-root {\n"+
"display: flex;\n"+
"flex-wrap: wrap;\n"+
"flex-direction: row;\n"+
"align-items: center;\n"+
"justify-content: space-between;\n"+
"padding-left: 50px;\n"+
"padding-top: 20px;\n"+
"padding-right: 60px;\n"+
"}\n"+
".smb-flex {\n"+
"display: flex;\n"+
"}\n"+
".smb-pan {\n"+
"cursor: pointer; /*鼠标变小手*/\n"+
"margin: 5px;\n"+
"width: 500px;\n"+
"height: 200px;\n"+
"/*box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1);*/\n"+
"}\n"+
".smb-pan:hover {\n"+
"box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n"+
"}\n"+
".smb-img {\n"+
"margin-right: 10px;\n"+
"/*width: 50px;*/\n"+
"height: 200px;\n"+
"}\n"+
"</style>\n" 
,smIndex:"<slot>\n"+
"<div class=\"layui-panel\" style=\"margin-bottom: 10px;background-color:rgb(234,232,235);\">\n"+
"<div style=\"width: 98%;margin-top: 10px\">\n"+
"<div class=\"layui-form-item\" style=\"width: 75%;margin: 0 auto;\">\n"+
"<div class=\"layui-input-group\">\n"+
"<label style=\"border: red solid 2px\">\n"+
"<input type=\"text\" placeholder=\"搜索宝贝\"  class=\"layui-input\" id=\"sm-search-index\">\n"+
"</label>\n"+
"<div class=\"layui-input-split layui-input-suffix\" onclick=\"search()\"\n"+
"style=\"cursor: pointer;background-color:red;width: 80px;border: red solid 4px\">\n"+
"<i class=\"layui-icon layui-icon-search\" style=\"color: #f6f6f6;font-size: large\"></i>\n"+
"</div>\n"+
"</div>\n"+
"</div>\n"+
"</div>\n"+
"</div>\n"+
"<div id=\"results\">\n"+
"</div>\n"+
"<div class=\"sm-Index-content\" style=\"height: 500px;\" id=\"sm-Index-content\">\n"+
"<div class=\"layui-carousel\" id=\"ID2\">\n"+
"<div carousel-item>\n"+
"<div><a href=\"javascript:\" onclick=\"toRouterForShow(\'q3\')\">\n"+
"<img src=\"./img/222/2bdda2c9b31be65f.jpg\">\n"+
"</a>\n"+
"</div>\n"+
"<div><a href=\"javascript:\" onclick=\"toRouterForShow(\'q4\')\"> <img\n"+
"src=\"./img/222/498058bbc3a3d4b0.jpg.avif\"></a></div>\n"+
"<div><a href=\"javascript:\" onclick=\"toRouterForShow(\'q4\')\"><img src=\"./img/222/q.jpg\"></a></div>\n"+
"</div>\n"+
"</div>\n"+
"<div style=\"height: 500px;\">\n"+
"<a href=\"javascript:\" onclick=\"toRouterForShow(\'q1\')\">\n"+
"<img src=\"./img/222/q%20(1).jpg\" class=\"smIndexRoot-img\" style=\"height: 240px\">\n"+
"</a>\n"+
"<a href=\"javascript:\" onclick=\"toRouterForShow(\'q2\')\">\n"+
"<img src=\"./img/222/q%20(2).jpg\" class=\"smIndexRoot-img\" style=\"height: 220px\">\n"+
"</a>\n"+
"</div>\n"+
"<div style=\"border: #9f9f9f solid 1px;height: 460px\">\n"+
"<a href=\"javascript:\"><img src=\"./img/222/1.jpg\" style=\"height: 460px\"></a>\n"+
"</div>\n"+
"</div>\n"+
"<hr class=\"layui-border-cyan\">\n"+
"<div>\n"+
"<div style=\"display: flex;flex-direction: row;align-items: center;justify-content: center;\">\n"+
"<span style=\"font-size: 30px;margin-right: 10px\">\n"+
"猜你喜欢\n"+
"</span>\n"+
"<img class=\"rh-logo\" src=\"./img/cinixihuan.png\" title=\"\" style=\"\">\n"+
"</div>\n"+
"<slot name=\"smBasketball\"></slot>\n"+
"</div>\n"+
"</slot>\n"+
"<script>\n"+
"layui.use(function () {\n"+
"let carousel = layui.carousel\n"+
"// 渲染 - 图片轮播\n"+
"carousel.render({\n"+
"elem: \'#ID2\',\n"+
"width: \'720px\',\n"+
"height: \'94%\',\n"+
"interval: 3000,\n"+
"})\n"+
"})\n"+
"document.getElementById(\"sm-search-index\").onkeydown = function (event) {\n"+
"let e = event || window.event;\n"+
"if (e && e.keyCode === 13) { //回车键的键值为13\n"+
"search()\n"+
"}\n"+
"};\n"+
"function search(){\n"+
"let smIndexContent = document.getElementById(\'sm-Index-content\')\n"+
"let resultsDom = document.getElementById(\'results\')\n"+
"let keys = document.getElementById(\'sm-search-index\').value\n"+
"results = searchItems(keys)\n"+
"if (results.length <=0){\n"+
"layer.msg(\'共查找到 \'+results.length+\' 条\')\n"+
"return\n"+
"}\n"+
"if (keys === undefined || keys === null || keys.length <=0){\n"+
"if (!smIndexContent.classList.contains(\"none\")) {\n"+
"layer.msg(\'搜索框不能为空\')\n"+
"}else {\n"+
"smIndexContent.classList.remove(\"none\")\n"+
"resultsDom.innerHTML = \'\'\n"+
"}\n"+
"return\n"+
"}\n"+
"layer.msg(\'共查找到 \'+results.length+\' 条\')\n"+
"console.log(results)\n"+
"smIndexContent.classList.add(\'none\')\n"+
"resultsDom.innerHTML=\'<slot name=\"smResults\"></slot>\'\n"+
"load(\'smResults\',()=>{})\n"+
"}\n"+
"</script>\n"+
"<style>\n"+
".sm-Index-content {\n"+
"width: 94%;\n"+
"height: 94%;\n"+
"display: flex;\n"+
"padding: 10px;\n"+
"}\n"+
".smIndexRoot-img {\n"+
"margin-left: 10px;\n"+
"margin-right: 10px;\n"+
"margin-bottom: 8px;\n"+
"width: 250px;\n"+
"}\n"+
"#ID2 {\n"+
"/*padding: 10px;*/\n"+
"/*margin: 10px;*/\n"+
"}\n"+
"</style>\n" 
,smResults:"<slot>\n"+
"<main class=\"sm-flex-root\" id=\"sm-results\">\n"+
"<div class=\"result-pan result-flex layui-panel none\">\n"+
"<div>\n"+
"<img src=\"\" class=\"result-img\">\n"+
"</div>\n"+
"<div>\n"+
"<h1 class=\"result-title\"></h1>\n"+
"<p class=\"result-content\"></p>\n"+
"<div class=\"result-flex\" style=\"align-items: center; margin-top: 20px\">\n"+
"<p>RMB: </p>\n"+
"<p style=\"color: red;font-size: large;\" class=\"result-rmb\"></p>\n"+
"</div>\n"+
"</div>\n"+
"</div>\n"+
"</main>\n"+
"</slot>\n"+
"<script>\n"+
"function addResultsTask (data) {\n"+
"//  parseDom 解析一个字符串为dom\n"+
"let order = parseDom(document.getElementsByClassName(\'result-pan\')[0].outerHTML)\n"+
".getElementsByClassName(\'result-pan\')[0]\n"+
"// 为要添加的商品添加索引\n"+
"let index = (document.getElementsByClassName(\'result-pan\').length + 1)\n"+
"//订单设置class\n"+
"order.classList.remove(\'none\')\n"+
"order.classList.add(\'result-for\')\n"+
"order.id = (\'result-for-\' + index)\n"+
"//设置商品具体内容\n"+
"order.getElementsByClassName(\'result-img\')[0].src = data.getImgPath()\n"+
"order.getElementsByClassName(\'result-title\')[0].innerText = data.title\n"+
"order.getElementsByClassName(\'result-rmb\')[0].innerText = data.rmb + \'$\'\n"+
"order.getElementsByClassName(\'result-content\')[0].innerText = data.content\n"+
"//渲染dom\n"+
"document.getElementById(\'sm-results\').appendChild(order)\n"+
"//添加单机事件\n"+
"document.getElementById(\'result-for-\' + index).onclick = function () {\n"+
"toRouterForShow(\n"+
"\'rand\',\n"+
"data.title,\n"+
"data.content,\n"+
"data.getImgPath(),\n"+
"data.rmb,\n"+
")\n"+
"}\n"+
"}\n"+
"// 遍历并乱序输出\n"+
"shuffleArray(Object.keys(results)).forEach(key => {\n"+
"addResultsTask(results[key]);\n"+
"});\n"+
"</script>\n"+
"<style>\n"+
".sm-flex-root {\n"+
"display: flex;\n"+
"flex-wrap: wrap;\n"+
"flex-direction: row;\n"+
"align-items: center;\n"+
"justify-content: space-between;\n"+
"padding-left: 50px;\n"+
"padding-top: 20px;\n"+
"padding-right: 60px;\n"+
"}\n"+
".result-flex {\n"+
"display: flex;\n"+
"}\n"+
".result-pan {\n"+
"cursor: pointer; /*鼠标变小手*/\n"+
"margin: 5px;\n"+
"width: 500px;\n"+
"height: 200px;\n"+
"/*box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1);*/\n"+
"}\n"+
".result-pan:hover {\n"+
"box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n"+
"}\n"+
".result-img {\n"+
"margin-right: 10px;\n"+
"/*width: 50px;*/\n"+
"height: 200px;\n"+
"}\n"+
"</style>\n" 
,smRompers:"<slot>\n"+
"<main class=\"sm-flex-root\" id=\"sm-rompers\">\n"+
"<div class=\"result-pan result-flex layui-panel none\">\n"+
"<div>\n"+
"<img src=\"\" class=\"result-img\">\n"+
"</div>\n"+
"<div>\n"+
"<h1 class=\"result-title\"></h1>\n"+
"<p class=\"result-content\"></p>\n"+
"<div class=\"result-flex\" style=\"align-items: center; margin-top: 20px\">\n"+
"<p>RMB: </p>\n"+
"<p style=\"color: red;font-size: large;\" class=\"result-rmb\"></p>\n"+
"</div>\n"+
"</div>\n"+
"</div>\n"+
"</main>\n"+
"</slot>\n"+
"<script>\n"+
"function addRompersTask (data) {\n"+
"//  parseDom 解析一个字符串为dom\n"+
"let order = parseDom(document.getElementsByClassName(\'result-pan\')[0].outerHTML)\n"+
".getElementsByClassName(\'result-pan\')[0]\n"+
"// 为要添加的商品添加索引\n"+
"let index = (document.getElementsByClassName(\'result-pan\').length + 1)\n"+
"//订单设置class\n"+
"order.classList.remove(\'none\')\n"+
"order.classList.add(\'result-for\')\n"+
"order.id = (\'result-for-\' + index)\n"+
"//设置商品具体内容\n"+
"order.getElementsByClassName(\'result-img\')[0].src = data.getImgPath()\n"+
"order.getElementsByClassName(\'result-title\')[0].innerText = data.title\n"+
"order.getElementsByClassName(\'result-rmb\')[0].innerText = data.rmb + \'$\'\n"+
"order.getElementsByClassName(\'result-content\')[0].innerText = data.content\n"+
"//渲染dom\n"+
"document.getElementById(\'sm-rompers\').appendChild(order)\n"+
"//添加单机事件\n"+
"document.getElementById(\'result-for-\' + index).onclick = function () {\n"+
"toRouterForShow(\n"+
"\'rand\',\n"+
"data.title,\n"+
"data.content,\n"+
"data.getImgPath(),\n"+
"data.rmb,\n"+
")\n"+
"}\n"+
"}\n"+
"// 遍历并乱序输出\n"+
"shuffleArray(Object.keys(rompersData)).forEach(key => {\n"+
"addRompersTask(rompersData[key]);\n"+
"});\n"+
"</script>\n"+
"<style>\n"+
".sm-flex-root {\n"+
"display: flex;\n"+
"flex-wrap: wrap;\n"+
"flex-direction: row;\n"+
"align-items: center;\n"+
"justify-content: space-between;\n"+
"padding-left: 50px;\n"+
"padding-top: 20px;\n"+
"padding-right: 60px;\n"+
"}\n"+
".result-flex {\n"+
"display: flex;\n"+
"}\n"+
".result-pan {\n"+
"cursor: pointer; /*鼠标变小手*/\n"+
"margin: 5px;\n"+
"width: 500px;\n"+
"height: 200px;\n"+
"/*box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1);*/\n"+
"}\n"+
".result-pan:hover {\n"+
"box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n"+
"}\n"+
".result-img {\n"+
"margin-right: 10px;\n"+
"/*width: 50px;*/\n"+
"height: 200px;\n"+
"}\n"+
"</style>\n" 
,smSt:"<slot>\n"+
"<div id=\"smst-root\" class=\"smst-flex\">\n"+
"<div id=\"smst-main-img-super\">\n"+
"<img id=\"smst-main-img\"/>\n"+
"</div>\n"+
"<div>\n"+
"<div>\n"+
"<h1 id=\"smst-h1\"></h1>\n"+
"<p id=\"smst-content\"></p>\n"+
"<p id=\"smst-stock\" class=\"smst-font-white-small\" style=\"font-size: 16px\"></p>\n"+
"<br>\n"+
"<br>\n"+
"<div class=\"smst-flex\" id=\"smst-font-super\">\n"+
"<div> 金&nbsp;额&nbsp;:&nbsp;&nbsp;</div>\n"+
"<p id=\"smst-rmb\" class=\"smst-font-white-small\"></p>\n"+
"</div>\n"+
"<div id=\"ID-rate-demo-text\"></div>\n"+
"</div>\n"+
"<br>\n"+
"<br>\n"+
"<br>\n"+
"<div class=\"smst-flex\">\n"+
"<button type=\"button\" class=\"layui-btn layui-btn-danger\" onclick=\"addGC()\">加入购物车</button>\n"+
"<input id=\"smst-gwc\" type=\"text\" name=\"\" placeholder=\"\" class=\"layui-input\" value=\"0\"\n"+
"style=\"width: 50px;margin-left: 10px\">\n"+
"<!--<button type=\"button\" class=\"layui-btn layui-btn-primary\">原始按钮</button>-->\n"+
"<button type=\"button\" class=\"layui-btn layui-btn-primary\" onclick=\"reduceGC()\"\n"+
"style=\"margin-left: 2px;width: 10px;padding-left: 10px\">-\n"+
"</button>\n"+
"</div>\n"+
"<button type=\"button\" class=\"layui-btn layui-btn-primary\" id=\"smst-black\" onclick=\"black()\"\n"+
"style=\"margin-left: 10px;margin-top: 150px\">\n"+
"返回主页\n"+
"</button>\n"+
"</div>\n"+
"</div>\n"+
"</slot>\n"+
"<script>\n"+
"function clearCacheSmStCount(){\n"+
"smStCount = 0;\n"+
"}\n"+
"clearCacheSmStCount()\n"+
"function black () {\n"+
"toRoute(\"/index\")\n"+
"document.getElementById(\'router-show\').innerHTML = \'<slot name = \"smIndex\">\'\n"+
"load(\'smIndex\', () => {})\n"+
"}\n"+
"document.getElementById(\'smst-gwc\').oninput = function () {\n"+
"if (smStCount < 0) {\n"+
"smStCount = 0\n"+
"document.getElementById(\'smst-gwc\').value = smStCount\n"+
"layer.msg(\'你要给商家送礼物？\')\n"+
"return\n"+
"}\n"+
"if (document.getElementById(\'smst-gwc\').value > smDetail.stock) {\n"+
"layer.msg(\'地主家也无余粮了\')\n"+
"smStCount = smDetail.stock\n"+
"document.getElementById(\'smst-gwc\').value = smStCount\n"+
"} else {\n"+
"smStCount = document.getElementById(\'smst-gwc\').value\n"+
"}\n"+
"// smCount[smName] = {\n"+
"//   number: smStCount,\n"+
"//   id:smCount[smName].hashCode(),\n"+
"//   detail: smDetail,\n"+
"// }\n"+
"saveSmCount()\n"+
"}\n"+
"function saveSmCount () {\n"+
"smCount[smName] = {\n"+
"number: smStCount,\n"+
"id: smName.hashCode(),\n"+
"detail: smDetail,\n"+
"}\n"+
"}\n"+
"function addGC () {\n"+
"if (smStCount >= smDetail.stock) {\n"+
"layer.msg(\'地主家也无余量了\')\n"+
"return\n"+
"}\n"+
"smStCount++\n"+
"// smCount[smName] = {\n"+
"//   number: smStCount,\n"+
"//   id:smCount[smName].hashCode(),\n"+
"//   detail: smDetail,\n"+
"// }\n"+
"saveSmCount()\n"+
"document.getElementById(\'smst-gwc\').value = smCount[smName].number\n"+
"}\n"+
"function reduceGC () {\n"+
"if (smStCount <= 0) {\n"+
"layer.msg(\'你要给商家送礼物？\')\n"+
"return\n"+
"}\n"+
"smStCount--\n"+
"// smCount[smName] = {\n"+
"//   number: smStCount,\n"+
"//   id:smCount[smName].hashCode(),\n"+
"//   detail: smDetail,\n"+
"// }\n"+
"saveSmCount()\n"+
"document.getElementById(\'smst-gwc\').value = smCount[smName].number\n"+
"}\n"+
"layui.use(function () {\n"+
"let rate = layui.rate\n"+
"// 渲染\n"+
"rate.render({\n"+
"elem: \'#ID-rate-demo-text\',\n"+
"value: Math.random() * (5 - 0.5) + 0.5, // 初始值\n"+
"text: true,// 开启文本\n"+
"readonly: true,\n"+
"})\n"+
"})\n"+
"document.getElementById(\'smst-main-img\').src = sm[smName].getImgPath()\n"+
"document.getElementById(\'smst-h1\').innerText = sm[smName].title\n"+
"document.getElementById(\'smst-content\').innerText = sm[smName].content\n"+
"document.getElementById(\'smst-stock\').innerText = \'库存: \' + sm[smName].stock\n"+
"document.getElementById(\'smst-rmb\').innerText = sm[smName].rmb + \'$\'\n"+
"smDetail = sm[smName]\n"+
"if (smName === \'rand\') {\n"+
"smName = \'rand:\' + sm[smName].title + \'[\' + (sm[smName].title + sm[smName].content).hashCode() + \']\'\n"+
"}\n"+
"</script>\n"+
"<style>\n"+
".smst-flex {\n"+
"display: flex;\n"+
"}\n"+
"#smst-font-super {\n"+
"display: flex;\n"+
"align-items: center;\n"+
"color: red;\n"+
"}\n"+
"#smst-root {\n"+
"padding: 10px;\n"+
"}\n"+
"#smst-main-img-super {\n"+
"margin-right: 10px;\n"+
"width: 50%;\n"+
"height: 80%;\n"+
"}\n"+
"#smst-main-img {\n"+
"width: 100%;\n"+
"height: 100%;\n"+
"}\n"+
".smst-font-white-small {\n"+
"font-size: 33px;\n"+
"color: red;\n"+
"}\n"+
"</style>\n" 
,Test:"<slot>\n"+
"<h2 id=\"abc\">Hello, Test!</h2>\n"+
"<!--<slot name=\"Test2\"></slot>-->\n"+
"<a href=\"#/Test\">Index</a>\n"+
"</slot>\n"+
"<script>\n"+
"document.getElementById(\'abc\').innerText = \'Hello Test to JS\'\n"+
"</script>\n"+
"<style>\n"+
"#abc {\n"+
"color: red;\n"+
"}\n"+
"</style>\n" 
,Test2:"<slot>\n"+
"<h2 id=\"abc\">Hello, Test2!</h2>\n"+
"</slot>\n"+
"<script>\n"+
"console.log(1)\n"+
"dom.Test2[0].getElementById(\'abc\').innerHTML = \'Hello, Test2 for js\'\n"+
"// console.log(dom.Test2.length)\n"+
"for (let test2Key in dom.Test2) {\n"+
"dom.Test2[test2Key].getElementById(\'abc\').innerHTML = \'Hello, Test2 for js\'\n"+
"}\n"+
"</script>\n"+
"<style>\n"+
"#abc {\n"+
"color: green;\n"+
"}\n"+
"</style>\n" 
,Test3:"<slot>\n"+
"</slot>\n"+
"<script>\n"+
"</script>\n"+
"<style>\n"+
"</style>\n" 
,Test4:"<!--\n"+
"~ Copyright (c) 2023.  zimo\n"+
"~ This project is licensed under the GNU Affero General Public License, version 3 (GNU AGPLv3).\n"+
"~ Copyright Owner: zimo\n"+
"~\n"+
"~  License terms and conditions can be found at the following link:\n"+
"~ https://www.gnu.org/licenses/agpl-3.0.html\n"+
"~\n"+
"~ Unless required by applicable law or agreed to in writing, this project is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n"+
"~\n"+
"~\n"+
"-->\n"+
"<!DOCTYPE html>\n"+
"<html lang=\"en\">\n"+
"<head>\n"+
"<meta charset=\"UTF-8\">\n"+
"<title>Title</title>\n"+
"<style>\n"+
".aa{\n"+
"display: flex;\n"+
"flex-direction: column;\n"+
"flex-wrap: nowrap;\n"+
"/**\n"+
"设置垂直居中\n"+
"*/\n"+
"justify-content: center;\n"+
"/*设置水平居中*/\n"+
"align-items: center;\n"+
"}\n"+
"</style>\n"+
"</head>\n"+
"<body>\n"+
"<div class=\"aa\">\n"+
"<div>\n"+
"1\n"+
"</div>\n"+
"<div>\n"+
"2\n"+
"</div>\n"+
"<div>\n"+
"3\n"+
"</div>\n"+
"<div>\n"+
"4\n"+
"</div>\n"+
"</div>\n"+
"</body>\n"+
"</html>\n" 
}
}