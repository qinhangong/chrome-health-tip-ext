/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/background/index.js":
/*!*********************************!*\
  !*** ./src/background/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\nlet timer = null;\nlet currentTab = null;\n\nasync function init(data) {\n  if (!data.interval || !data.content) return false;\n\n  if (currentTab) {\n    currentTab = await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getSelectedTab)();\n  }\n\n  ;\n  const {\n    url = \"\",\n    id\n  } = currentTab || {};\n  if (url.startsWith(\"chrome\")) return;\n  id > 0 && chrome.tabs.executeScript(id, {\n    file: 'dist/content.js'\n  }); // 动态插入content脚本\n\n  id > 0 && chrome.tabs.insertCSS(id, {\n    file: 'src/content/index.css'\n  }); // 动态插入content样式\n} // 清除定时任务\n\n\nfunction clearInterTimer() {\n  if (timer) {\n    clearInterval(timer);\n    timer = null;\n  }\n} // 监听tabs的切换\n\n\nchrome.tabs.onSelectionChanged.addListener(function (tabId) {\n  chrome.tabs.query({}, tabs => {\n    currentTab = tabs.find(tab => tab.id === tabId);\n  });\n}); // 监听popup的提交和重置配置\n\nchrome.runtime.onMessage.addListener(async request => {\n  const {\n    msgType,\n    data\n  } = request;\n  await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setStorage)(_utils__WEBPACK_IMPORTED_MODULE_0__.STORAGEKEY, data); // 将配置存入storage\n\n  clearInterTimer();\n\n  if (msgType === _utils__WEBPACK_IMPORTED_MODULE_0__.SUBMITMSG && data) {\n    init(data);\n    timer = setInterval(() => {\n      init(data);\n    }, data.interval * 1000);\n  } else if (msgType === _utils__WEBPACK_IMPORTED_MODULE_0__.RESETMSG) {\n    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.removeStorage)(_utils__WEBPACK_IMPORTED_MODULE_0__.STORAGEKEY); // 将配置从storage中移除\n  }\n});\n\n//# sourceURL=webpack://chrome-tip-ext/./src/background/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"STORAGEKEY\": () => (/* binding */ STORAGEKEY),\n/* harmony export */   \"RESETMSG\": () => (/* binding */ RESETMSG),\n/* harmony export */   \"SUBMITMSG\": () => (/* binding */ SUBMITMSG),\n/* harmony export */   \"setStorage\": () => (/* binding */ setStorage),\n/* harmony export */   \"getStorage\": () => (/* binding */ getStorage),\n/* harmony export */   \"removeStorage\": () => (/* binding */ removeStorage),\n/* harmony export */   \"getSelectedTab\": () => (/* binding */ getSelectedTab),\n/* harmony export */   \"elePositionMap\": () => (/* binding */ elePositionMap)\n/* harmony export */ });\nconst STORAGEKEY = 'health_tip_info';\nconst RESETMSG = 'config_reset';\nconst SUBMITMSG = 'config_success';\nfunction setStorage(key, value, callback) {\n  chrome.storage.local.set({\n    [key]: value\n  }, callback);\n}\nfunction getStorage(key) {\n  return new Promise(resolve => {\n    chrome.storage.local.get([key], result => {\n      if (result[key]) {\n        resolve(result[key]);\n      } else {\n        resolve(null);\n      }\n    });\n  });\n}\nfunction removeStorage(key) {\n  chrome.storage.local.remove(key, () => {\n    console.log('配置重置成功');\n  });\n}\nfunction getSelectedTab() {\n  return new Promise(resolve => {\n    chrome.tabs.getSelected(null, tab => {\n      if (tab) {\n        resolve(tab);\n      } else {\n        resolve(null);\n      }\n    });\n  });\n}\nconst elePositionMap = {\n  'left_bottom': \"left:10px;bottom:10px\",\n  'right_bottom': \"right:10px;bottom:10px\"\n};\n\n//# sourceURL=webpack://chrome-tip-ext/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/background/index.js");
/******/ 	
/******/ })()
;