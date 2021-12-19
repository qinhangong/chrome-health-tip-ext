import { getStorage, STORAGEKEY, elePositionMap } from '../utils';
// import "./index.less";


function removeElement() {
  const ele = document.getElementById('chrome_health_tip_container');
  if (ele) document.body.removeChild(ele);
}

function createInnerHtml(content) {
  return `<div class="del_btn" onclick="(${removeElement})()">X</div>
    <div class="content_area">${content}</div>`
}

async function appendElement() {
  const data = await getStorage(STORAGEKEY);
  const exitEle = document.getElementById('chrome_health_tip_container');
  if (exitEle) removeElement();
  const ele = document.createElement('div');
  ele.id = 'chrome_health_tip_container';
  ele.style = elePositionMap[data.position];
  ele.innerHTML = createInnerHtml(data.content);
  document.body.appendChild(ele);
}


appendElement()





