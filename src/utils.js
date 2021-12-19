export const STORAGEKEY = 'health_tip_info';

export const RESETMSG = 'config_reset';

export const SUCCESSMSG = 'config_success';


export function setStorage(key, value, callback) {
  chrome.storage.local.set(
    {
      [key]: value,
    },
    callback
  );
}

export function getStorage(key) {
  return new Promise((resolve) => {
    chrome.storage.local.get([key], (result) => {
      if (result[key]) {
        resolve(result[key]);
      } else {
        resolve(null);
      }
    });
  });
}

export function removeStorage(key) {
  chrome.storage.local.remove(key, () => {
    console.log('配置重置成功');
  });
}

export function getSelectedTab() {
  return new Promise((resolve) => {
    chrome.tabs.getSelected(null, (tab) => {
      if (tab) {
        resolve(tab)
      } else {
        resolve(null)
      }
    })
  });
}


export const elePositionMap = {
  'left_bottom':"left:10px;bottom:10px",
  'right_bottom':"right:10px;bottom:10px",
} 