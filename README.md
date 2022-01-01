## chrome插件开发

  ### 基本概念
  ```
  一个应用（扩展）其实是压缩在一起的一组文件，包括HTML，CSS，Javascript脚本，图片文件，还有其它任何需要的文件。 应用（扩展）本质上来说就是web页面，它们可以使用所有的浏览器提供的API，从XMLHttpRequest到JSON到HTML5全都有。

  应用（扩展）可以与Web页面交互，或者通过content script或cross-origin XMLHttpRequests与服务器交互。应用（扩展）还可以访问浏览器提供的内部功能，例如标签或书签等。
  ```
  ### 具体需求
    - 健康提醒的插件
    - 可配置提醒内容、时间间隔、提醒位置
    - 可重置取消提醒
  ### 重要目录文件
    - manifest.json  关于插件的一些重要信息
    - src/background 可理解为插件的后台
    - src/pop 插件页面，可以进行插件配置
    - src/content 可以注入到已加载的web页面中与其进行交互

  ### 用到的接口
    - chrome.runtime.sendMessage
    - chrome.runtime.onMessage.addListener

    - chrome.tabs.onSelectionChanged.addListener
    - chrome.tabs.query
    - chrome.tabs.executeScript
    - chrome.tabs.insertCSS

    - chrome.storage.local.get
    - chrome.storage.local.set

## 源码
  - https://github.com/qinhangong/chrome-health-tip-ext

## 文档
  - chrome官方文档无法访问
  - https://open.chrome.360.cn/extension_dev/browserAction.html 360翻译的