/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Transponder"] = factory();
	else
		root["Transponder"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable no-eval */\r\n/* eslint-disable no-var */\r\n/* eslint-disable no-extend-native */\r\nvar thisId\r\nvar storageKey\r\nvar msgCallback\r\n\r\n// utils\r\nfunction setLocal (key, val) {\r\n  window.localStorage.setItem(key, JSON.stringify(val))\r\n}\r\n\r\nfunction getpagetype () {\r\n  var pagetype = 'page'\r\n  if (window.frames && window.parent && window.frames.length !== window.parent.frames.length) {\r\n    pagetype = 'iframe'\r\n  }\r\n  return pagetype\r\n}\r\n\r\nfunction getPageData () {\r\n  if (window.location) {\r\n    var href = window.location.href\r\n    var pathname = window.location.pathname\r\n    var hostname = window.location.hostname\r\n    var port = window.location.port\r\n    var protocol = window.location.protocol\r\n    var hash = window.location.hash\r\n    var search = window.location.search\r\n    return { href: href, pathname: pathname, hostname: hostname, port: port, protocol: protocol, hash: hash, search: search, pagetype: getpagetype() }\r\n  } else {\r\n    return {}\r\n  }\r\n}\r\n\r\n// StorageTransponder class\r\nfunction StorageTransponder (id) {\r\n  if (typeof id !== 'string' || !id) {\r\n    throw new Error('the param \"id\" is required, which is a string, but not \"\"!')\r\n  }\r\n  thisId = id\r\n  this.destoryed = false\r\n  // localStorage key do not delete!\r\n  storageKey = '__&&transponderKeydoNotDelete&&__'\r\n  if (typeof localStorage !== 'object') {\r\n    throw new Error('\"localStorage\" is not supported in this environment!')\r\n  }\r\n}\r\n\r\nStorageTransponder.prototype.send = function (transferData, toId) {\r\n  if (this.destoryed) {\r\n    throw new Error('this instance has been destoryed!')\r\n  }\r\n  var pageData = getPageData()\r\n  if (toId !== undefined) {\r\n    var idList = toId instanceof Array ? toId : [toId]\r\n    for (var i = 0; i < idList.length; i++) {\r\n      var transferId = idList[i]\r\n      if (typeof transferId === 'string' && transferId) {\r\n        pageData.id = thisId\r\n        setLocal(storageKey, {\r\n          random: Math.random(),\r\n          transferId: transferId,\r\n          data: transferData,\r\n          from: pageData\r\n        })\r\n      } else {\r\n        throw new Error('param \"toId\" is Array<string> or just a string, but not a \"\"!')\r\n      }\r\n    }\r\n  } else {\r\n    setLocal(storageKey, {\r\n      random: Math.random(),\r\n      transferId: undefined,\r\n      data: transferData,\r\n      from: pageData\r\n    })\r\n  }\r\n  return this\r\n}\r\n\r\nStorageTransponder.prototype.messageListener = function (e) {\r\n  var key = e.key\r\n  var newValue = e.newValue\r\n  var parsedData = JSON.parse(newValue)\r\n  if (key === storageKey && parsedData && parsedData.random) {\r\n    var transferId = parsedData.transferId\r\n    var data = parsedData.data\r\n    var from = parsedData.from\r\n    var buildArgs = { data: data, from: from }\r\n    // filter data except self\r\n    var fromId = from.id\r\n    if (transferId) {\r\n      fromId !== thisId && transferId === thisId && msgCallback.call(this, buildArgs)\r\n    } else {\r\n      fromId !== thisId && msgCallback.call(this, buildArgs)\r\n    }\r\n  }\r\n}\r\n\r\nStorageTransponder.prototype.onMessage = function (callback) {\r\n  msgCallback = callback || function () {}\r\n  window.addEventListener('storage', this.messageListener)\r\n  return this\r\n}\r\n\r\nStorageTransponder.prototype.destory = function () {\r\n  window.addEventListener('storage', this.messageListener)\r\n  this.destoryed = true\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (StorageTransponder);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBZSxrQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UcmFuc3BvbmRlci8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWV2YWwgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdmFyICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLWV4dGVuZC1uYXRpdmUgKi9cclxudmFyIHRoaXNJZFxyXG52YXIgc3RvcmFnZUtleVxyXG52YXIgbXNnQ2FsbGJhY2tcclxuXHJcbi8vIHV0aWxzXHJcbmZ1bmN0aW9uIHNldExvY2FsIChrZXksIHZhbCkge1xyXG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbCkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldHBhZ2V0eXBlICgpIHtcclxuICB2YXIgcGFnZXR5cGUgPSAncGFnZSdcclxuICBpZiAod2luZG93LmZyYW1lcyAmJiB3aW5kb3cucGFyZW50ICYmIHdpbmRvdy5mcmFtZXMubGVuZ3RoICE9PSB3aW5kb3cucGFyZW50LmZyYW1lcy5sZW5ndGgpIHtcclxuICAgIHBhZ2V0eXBlID0gJ2lmcmFtZSdcclxuICB9XHJcbiAgcmV0dXJuIHBhZ2V0eXBlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBhZ2VEYXRhICgpIHtcclxuICBpZiAod2luZG93LmxvY2F0aW9uKSB7XHJcbiAgICB2YXIgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXHJcbiAgICB2YXIgcGF0aG5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcclxuICAgIHZhciBob3N0bmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZVxyXG4gICAgdmFyIHBvcnQgPSB3aW5kb3cubG9jYXRpb24ucG9ydFxyXG4gICAgdmFyIHByb3RvY29sID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sXHJcbiAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoXHJcbiAgICB2YXIgc2VhcmNoID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaFxyXG4gICAgcmV0dXJuIHsgaHJlZjogaHJlZiwgcGF0aG5hbWU6IHBhdGhuYW1lLCBob3N0bmFtZTogaG9zdG5hbWUsIHBvcnQ6IHBvcnQsIHByb3RvY29sOiBwcm90b2NvbCwgaGFzaDogaGFzaCwgc2VhcmNoOiBzZWFyY2gsIHBhZ2V0eXBlOiBnZXRwYWdldHlwZSgpIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHt9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTdG9yYWdlVHJhbnNwb25kZXIgY2xhc3NcclxuZnVuY3Rpb24gU3RvcmFnZVRyYW5zcG9uZGVyIChpZCkge1xyXG4gIGlmICh0eXBlb2YgaWQgIT09ICdzdHJpbmcnIHx8ICFpZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd0aGUgcGFyYW0gXCJpZFwiIGlzIHJlcXVpcmVkLCB3aGljaCBpcyBhIHN0cmluZywgYnV0IG5vdCBcIlwiIScpXHJcbiAgfVxyXG4gIHRoaXNJZCA9IGlkXHJcbiAgdGhpcy5kZXN0b3J5ZWQgPSBmYWxzZVxyXG4gIC8vIGxvY2FsU3RvcmFnZSBrZXkgZG8gbm90IGRlbGV0ZSFcclxuICBzdG9yYWdlS2V5ID0gJ19fJiZ0cmFuc3BvbmRlcktleWRvTm90RGVsZXRlJiZfXydcclxuICBpZiAodHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ29iamVjdCcpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignXCJsb2NhbFN0b3JhZ2VcIiBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgZW52aXJvbm1lbnQhJylcclxuICB9XHJcbn1cclxuXHJcblN0b3JhZ2VUcmFuc3BvbmRlci5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uICh0cmFuc2ZlckRhdGEsIHRvSWQpIHtcclxuICBpZiAodGhpcy5kZXN0b3J5ZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcigndGhpcyBpbnN0YW5jZSBoYXMgYmVlbiBkZXN0b3J5ZWQhJylcclxuICB9XHJcbiAgdmFyIHBhZ2VEYXRhID0gZ2V0UGFnZURhdGEoKVxyXG4gIGlmICh0b0lkICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHZhciBpZExpc3QgPSB0b0lkIGluc3RhbmNlb2YgQXJyYXkgPyB0b0lkIDogW3RvSWRdXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlkTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgdHJhbnNmZXJJZCA9IGlkTGlzdFtpXVxyXG4gICAgICBpZiAodHlwZW9mIHRyYW5zZmVySWQgPT09ICdzdHJpbmcnICYmIHRyYW5zZmVySWQpIHtcclxuICAgICAgICBwYWdlRGF0YS5pZCA9IHRoaXNJZFxyXG4gICAgICAgIHNldExvY2FsKHN0b3JhZ2VLZXksIHtcclxuICAgICAgICAgIHJhbmRvbTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgIHRyYW5zZmVySWQ6IHRyYW5zZmVySWQsXHJcbiAgICAgICAgICBkYXRhOiB0cmFuc2ZlckRhdGEsXHJcbiAgICAgICAgICBmcm9tOiBwYWdlRGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwYXJhbSBcInRvSWRcIiBpcyBBcnJheTxzdHJpbmc+IG9yIGp1c3QgYSBzdHJpbmcsIGJ1dCBub3QgYSBcIlwiIScpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgc2V0TG9jYWwoc3RvcmFnZUtleSwge1xyXG4gICAgICByYW5kb206IE1hdGgucmFuZG9tKCksXHJcbiAgICAgIHRyYW5zZmVySWQ6IHVuZGVmaW5lZCxcclxuICAgICAgZGF0YTogdHJhbnNmZXJEYXRhLFxyXG4gICAgICBmcm9tOiBwYWdlRGF0YVxyXG4gICAgfSlcclxuICB9XHJcbiAgcmV0dXJuIHRoaXNcclxufVxyXG5cclxuU3RvcmFnZVRyYW5zcG9uZGVyLnByb3RvdHlwZS5tZXNzYWdlTGlzdGVuZXIgPSBmdW5jdGlvbiAoZSkge1xyXG4gIHZhciBrZXkgPSBlLmtleVxyXG4gIHZhciBuZXdWYWx1ZSA9IGUubmV3VmFsdWVcclxuICB2YXIgcGFyc2VkRGF0YSA9IEpTT04ucGFyc2UobmV3VmFsdWUpXHJcbiAgaWYgKGtleSA9PT0gc3RvcmFnZUtleSAmJiBwYXJzZWREYXRhICYmIHBhcnNlZERhdGEucmFuZG9tKSB7XHJcbiAgICB2YXIgdHJhbnNmZXJJZCA9IHBhcnNlZERhdGEudHJhbnNmZXJJZFxyXG4gICAgdmFyIGRhdGEgPSBwYXJzZWREYXRhLmRhdGFcclxuICAgIHZhciBmcm9tID0gcGFyc2VkRGF0YS5mcm9tXHJcbiAgICB2YXIgYnVpbGRBcmdzID0geyBkYXRhOiBkYXRhLCBmcm9tOiBmcm9tIH1cclxuICAgIC8vIGZpbHRlciBkYXRhIGV4Y2VwdCBzZWxmXHJcbiAgICB2YXIgZnJvbUlkID0gZnJvbS5pZFxyXG4gICAgaWYgKHRyYW5zZmVySWQpIHtcclxuICAgICAgZnJvbUlkICE9PSB0aGlzSWQgJiYgdHJhbnNmZXJJZCA9PT0gdGhpc0lkICYmIG1zZ0NhbGxiYWNrLmNhbGwodGhpcywgYnVpbGRBcmdzKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZnJvbUlkICE9PSB0aGlzSWQgJiYgbXNnQ2FsbGJhY2suY2FsbCh0aGlzLCBidWlsZEFyZ3MpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5TdG9yYWdlVHJhbnNwb25kZXIucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gIG1zZ0NhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge31cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIHRoaXMubWVzc2FnZUxpc3RlbmVyKVxyXG4gIHJldHVybiB0aGlzXHJcbn1cclxuXHJcblN0b3JhZ2VUcmFuc3BvbmRlci5wcm90b3R5cGUuZGVzdG9yeSA9IGZ1bmN0aW9uICgpIHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIHRoaXMubWVzc2FnZUxpc3RlbmVyKVxyXG4gIHRoaXMuZGVzdG9yeWVkID0gdHJ1ZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlVHJhbnNwb25kZXJcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});