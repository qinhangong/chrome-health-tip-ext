
import { setStorage, STORAGEKEY, SUCCESSMSG, getSelectedTab } from '../utils';

window.currentTab = null;

chrome.tabs.onSelectionChanged.addListener(function (tabId, selectInfo) {
  chrome.tabs.query({}, (tabs) => {
    const currentTab = tabs.find((tab) => tab.id === tabId);
    window.currentTab = currentTab;
  })
});


async function init(data) {
  if (!data.interval || !data.content) return false;
  if (!window.currentTab) {
    window.currentTab = await getSelectedTab()
  };
  const { url = "", id } = window.currentTab || {};
  if (url.includes("chrome://")) return;
  id && id > 0 && chrome.tabs.executeScript(id, { file: 'dist/content.js' });
  id && id > 0 && chrome.tabs.insertCSS(id, { file: 'src/content/index.css' });
}

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  const { msgType, data } = request;
  await setStorage(STORAGEKEY, data)
  if (msgType === SUCCESSMSG && data) {
    if (window.timer) {
      clearInterval(window.timer);
      window.timer = null;
    }
    init(data);
    window.timer = setInterval(() => {
      init(data);
    }, data.interval);
  }
});