// temp.js是一个临时记录的文件，无实际作用

const permissions = [
  "storage",
  "tabs",
  "*://*/",
  "contextMenus",
  "notifications"
]


chrome.contextMenus.create({
  title: "健康提醒",
  onclick: function () {
    chrome.tabs.create({
      index: 3,
      url: 'https://www.puh3.net.cn/'
    })
  }
});

chrome.notifications.create(null, {
  type: 'basic',
  iconUrl: '../../static/imgs/cross.png',
  title: '健康提醒',
  message: '坐太久了，起来划会水吧！'
});



const content_scripts = [
  {
    "matches": [
      "<all_urls>"
    ],
    "css": ["src/content/index.css"],
    "js": ["src/content/index.js"],
    "run_at": "document_end"
  }
]




























































// content.js和background.js通信
// chrome.runtime.sendMessage({ msgType: 'fadf' });
// chrome.extension.sendMessage({data:'121'});
// background通过chrome.tabs.sendMessage(tabId,"1111");往content发消息
// content通过chrome.runtime.onMessage.addListener();往接受从background发出发消息

