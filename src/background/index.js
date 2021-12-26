
import { setStorage, removeStorage, STORAGEKEY, SUCCESSMSG, RESETMSG, getSelectedTab } from '../utils';

let timer = null;
let currentTab = null;

async function init(data) {
  if (!data.interval || !data.content) return false;
  if (currentTab) {
    currentTab = await getSelectedTab()
  };
  const { url = "", id } = currentTab || {};
  if (url.startsWith("chrome")) return;
  id > 0 && chrome.tabs.executeScript(id, { file: 'dist/content.js' }); // 动态插入content脚本
  id > 0 && chrome.tabs.insertCSS(id, { file: 'src/content/index.css' }); // 动态插入content样式
}

// 清除定时任务
function clearInterTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

// chrome.contextMenus.create({
//   title: "健康提醒",
//   onclick: function () {
//     chrome.tabs.create({
//       index: 3,
//       url: 'https://www.puh3.net.cn/'
//     })
//   }
// });

// chrome.notifications.create(null, {
//   type: 'basic',
//   iconUrl: '../../static/imgs/cross.png',
//   title: '健康提醒',
//   message: '坐太久了，起来划会水吧！'
// });

// 监听tabs的切换
chrome.tabs.onSelectionChanged.addListener(function (tabId) {
  chrome.tabs.query({}, (tabs) => {
    currentTab = tabs.find((tab) => tab.id === tabId);
    // if (currentTab.url.includes('baidu.com')) {
    //   chrome.pageAction.show(currentTab.id);
    // }
  })
});

// 监听popup的提交和重置配置
chrome.runtime.onMessage.addListener(async (request) => {
  const { msgType, data } = request;
  await setStorage(STORAGEKEY, data); // 将配置存入storage
  if (msgType === SUCCESSMSG && data) {
    clearInterTimer();
    init(data);
    timer = setInterval(() => {
      init(data);
    }, data.interval * 1000);
  } else if (msgType === RESETMSG) {
    clearInterTimer();
    removeStorage(STORAGEKEY); // 将配置从storage中移除
  }
});