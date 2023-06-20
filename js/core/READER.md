# NanoModules
NanoModules是一个轻量级的模块化开发框架，旨在提供简单、灵活和易于使用的工具，帮助开发者进行模块化的前端开发。
* "Nano"：表示该框架的轻量和精简性，意味着它是一个小巧的框架
* "Modules"：强调框架支持模块化开发的特性，允许开发者将功能划分为独立的模块，并通过模块之间的依赖关系组织和管理代码。

使用方式:  
* 插件

在index.html 引入  NanoModules.js  
在index.html 添加插件  
```html
<!--
     会去加载 slot/Test2.html 文件到 index.html 文件里面
-->
<slot name="Test2"></slot>
<!-- 因为框架原因 无法使用本页面的dom 所以需要使用子dom-->
<!--dom.插槽名称-->
```
  
**因为代码足够精简所以，框架仅支持最基本的模块化开发**
____

面临的问题：
* 访问的插件通过js会跨域
* Shadow Dom 获取问题
