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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\nwindow.currentTab = null;\nchrome.tabs.onSelectionChanged.addListener(function (tabId, selectInfo) {\n  chrome.tabs.query({}, tabs => {\n    const currentTab = tabs.find(tab => tab.id === tabId);\n    window.currentTab = currentTab;\n  });\n});\n\nasync function init(data) {\n  if (!data.interval || !data.content) return false;\n\n  if (!window.currentTab) {\n    window.currentTab = await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getSelectedTab)();\n  }\n\n  ;\n  const {\n    url = \"\",\n    id\n  } = window.currentTab || {};\n  if (url.includes(\"chrome://\")) return;\n  id && id > 0 && chrome.tabs.executeScript(id, {\n    file: 'dist/content.js'\n  });\n  id && id > 0 && chrome.tabs.insertCSS(id, {\n    file: 'src/content/index.css'\n  });\n}\n\nchrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {\n  const {\n    msgType,\n    data\n  } = request;\n  await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setStorage)(_utils__WEBPACK_IMPORTED_MODULE_0__.STORAGEKEY, data);\n\n  if (msgType === _utils__WEBPACK_IMPORTED_MODULE_0__.SUCCESSMSG && data) {\n    init(data);\n\n    if (window.timer) {\n      clearInterval(window.timer);\n      window.timer = null;\n    }\n\n    window.timer = setInterval(() => {\n      init(data);\n    }, data.interval);\n  }\n});\n\n//# sourceURL=webpack://chrome-tip-ext/./src/background/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"STORAGEKEY\": () => (/* binding */ STORAGEKEY),\n/* harmony export */   \"SUCCESSMSG\": () => (/* binding */ SUCCESSMSG),\n/* harmony export */   \"setStorage\": () => (/* binding */ setStorage),\n/* harmony export */   \"getStorage\": () => (/* binding */ getStorage),\n/* harmony export */   \"removeStorage\": () => (/* binding */ removeStorage),\n/* harmony export */   \"getSelectedTab\": () => (/* binding */ getSelectedTab),\n/* harmony export */   \"elePositionMap\": () => (/* binding */ elePositionMap)\n/* harmony export */ });\nconst STORAGEKEY = 'health_tip_info';\nconst SUCCESSMSG = 'config_success';\nfunction setStorage(key, value, callback) {\n  chrome.storage.local.set({\n    [key]: value\n  }, callback);\n}\nfunction getStorage(key) {\n  return new Promise(resolve => {\n    chrome.storage.local.get([key], result => {\n      if (result[key]) {\n        resolve(result[key]);\n      } else {\n        resolve(null);\n      }\n    });\n  });\n}\nfunction removeStorage(key) {\n  chrome.storage.local.remove(key, () => {\n    console.log('配置重置成功');\n  });\n}\nfunction getSelectedTab() {\n  return new Promise(resolve => {\n    chrome.tabs.getSelected(null, tab => {\n      if (tab) {\n        resolve(tab);\n      } else {\n        resolve(null);\n      }\n    });\n  });\n}\nconst elePositionMap = {\n  'left_bottom': \"left:10px;bottom:10px\",\n  'right_bottom': \"right:10px;bottom:10px\"\n};\n\n//# sourceURL=webpack://chrome-tip-ext/./src/utils.js?");

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