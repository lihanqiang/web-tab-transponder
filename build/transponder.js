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

eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable no-var */\r\nvar thisId\r\nvar storageKey\r\nvar msgCallback\r\n\r\n// utils\r\nfunction setLocal (key, val) {\r\n  window.localStorage.setItem(key, JSON.stringify(val))\r\n}\r\n\r\nfunction getpagetype () {\r\n  var pagetype = 'page'\r\n  if (window.frames && window.parent && window.frames.length !== window.parent.frames.length) {\r\n    pagetype = 'iframe'\r\n  }\r\n  return pagetype\r\n}\r\n\r\nfunction getPageData () {\r\n  if (window.location) {\r\n    var href = window.location.href\r\n    var pathname = window.location.pathname\r\n    var hostname = window.location.hostname\r\n    var port = window.location.port\r\n    var protocol = window.location.protocol\r\n    var hash = window.location.hash\r\n    var search = window.location.search\r\n    return { href: href, pathname: pathname, hostname: hostname, port: port, protocol: protocol, hash: hash, search: search, pagetype: getpagetype() }\r\n  } else {\r\n    return {}\r\n  }\r\n}\r\n\r\n// StorageTransponder class\r\nfunction StorageTransponder (id) {\r\n  if (typeof id !== 'string' || !id) {\r\n    throw new Error('the param \"id\" is required, which is a string, but not \"\"!')\r\n  }\r\n  thisId = id\r\n  this.destoryed = false\r\n  // localStorage key do not delete!\r\n  storageKey = '__&&transponderKeydoNotDelete&&__'\r\n  if (typeof localStorage !== 'object') {\r\n    throw new Error('\"localStorage\" is not supported in this environment!')\r\n  }\r\n}\r\n\r\nStorageTransponder.prototype.send = function (transferData, toId) {\r\n  if (this.destoryed) {\r\n    throw new Error('the instance \"' + thisId + '\" has been destoryed!')\r\n  }\r\n  var pageData = getPageData()\r\n  pageData.id = thisId\r\n  if (toId !== undefined) {\r\n    var idList = toId instanceof Array ? toId : [toId]\r\n    for (var i = 0; i < idList.length; i++) {\r\n      var transferId = idList[i]\r\n      if (typeof transferId === 'string' && transferId) {\r\n        setLocal(storageKey, {\r\n          random: Math.random(),\r\n          transferId: transferId,\r\n          data: transferData,\r\n          from: pageData\r\n        })\r\n      } else {\r\n        throw new Error('param \"toId\" is Array<string> or just a string, but not a \"\"!')\r\n      }\r\n    }\r\n  } else {\r\n    setLocal(storageKey, {\r\n      random: Math.random(),\r\n      transferId: undefined,\r\n      data: transferData,\r\n      from: pageData\r\n    })\r\n  }\r\n  return this\r\n}\r\n\r\nStorageTransponder.prototype.messageListener = function (e) {\r\n  if (!this.destoryed) {\r\n    var key = e.key\r\n    var newValue = e.newValue\r\n    var parsedData = JSON.parse(newValue)\r\n    if (key === storageKey && newValue && parsedData && parsedData.random) {\r\n      var transferId = parsedData.transferId\r\n      var data = parsedData.data\r\n      var from = parsedData.from\r\n      var buildArgs = { data: data, from: from }\r\n      // filter data except self\r\n      var fromId = from.id\r\n      if (transferId) {\r\n        fromId !== thisId && transferId === thisId && msgCallback.call(this, buildArgs)\r\n      } else {\r\n        fromId !== thisId && msgCallback.call(this, buildArgs)\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nStorageTransponder.prototype.onMessage = function (callback) {\r\n  msgCallback = callback || function () {}\r\n  window.addEventListener('storage', this.messageListener)\r\n  return this\r\n}\r\n\r\nStorageTransponder.prototype.destory = function () {\r\n  window.removeEventListener('storage', this.messageListener)\r\n  this.destoryed = true\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (StorageTransponder);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBZSxrQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UcmFuc3BvbmRlci8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXZhciAqL1xyXG52YXIgdGhpc0lkXHJcbnZhciBzdG9yYWdlS2V5XHJcbnZhciBtc2dDYWxsYmFja1xyXG5cclxuLy8gdXRpbHNcclxuZnVuY3Rpb24gc2V0TG9jYWwgKGtleSwgdmFsKSB7XHJcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsKSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0cGFnZXR5cGUgKCkge1xyXG4gIHZhciBwYWdldHlwZSA9ICdwYWdlJ1xyXG4gIGlmICh3aW5kb3cuZnJhbWVzICYmIHdpbmRvdy5wYXJlbnQgJiYgd2luZG93LmZyYW1lcy5sZW5ndGggIT09IHdpbmRvdy5wYXJlbnQuZnJhbWVzLmxlbmd0aCkge1xyXG4gICAgcGFnZXR5cGUgPSAnaWZyYW1lJ1xyXG4gIH1cclxuICByZXR1cm4gcGFnZXR5cGVcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGFnZURhdGEgKCkge1xyXG4gIGlmICh3aW5kb3cubG9jYXRpb24pIHtcclxuICAgIHZhciBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWZcclxuICAgIHZhciBwYXRobmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxyXG4gICAgdmFyIGhvc3RuYW1lID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lXHJcbiAgICB2YXIgcG9ydCA9IHdpbmRvdy5sb2NhdGlvbi5wb3J0XHJcbiAgICB2YXIgcHJvdG9jb2wgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2xcclxuICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2hcclxuICAgIHZhciBzZWFyY2ggPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoXHJcbiAgICByZXR1cm4geyBocmVmOiBocmVmLCBwYXRobmFtZTogcGF0aG5hbWUsIGhvc3RuYW1lOiBob3N0bmFtZSwgcG9ydDogcG9ydCwgcHJvdG9jb2w6IHByb3RvY29sLCBoYXNoOiBoYXNoLCBzZWFyY2g6IHNlYXJjaCwgcGFnZXR5cGU6IGdldHBhZ2V0eXBlKCkgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ge31cclxuICB9XHJcbn1cclxuXHJcbi8vIFN0b3JhZ2VUcmFuc3BvbmRlciBjbGFzc1xyXG5mdW5jdGlvbiBTdG9yYWdlVHJhbnNwb25kZXIgKGlkKSB7XHJcbiAgaWYgKHR5cGVvZiBpZCAhPT0gJ3N0cmluZycgfHwgIWlkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3RoZSBwYXJhbSBcImlkXCIgaXMgcmVxdWlyZWQsIHdoaWNoIGlzIGEgc3RyaW5nLCBidXQgbm90IFwiXCIhJylcclxuICB9XHJcbiAgdGhpc0lkID0gaWRcclxuICB0aGlzLmRlc3RvcnllZCA9IGZhbHNlXHJcbiAgLy8gbG9jYWxTdG9yYWdlIGtleSBkbyBub3QgZGVsZXRlIVxyXG4gIHN0b3JhZ2VLZXkgPSAnX18mJnRyYW5zcG9uZGVyS2V5ZG9Ob3REZWxldGUmJl9fJ1xyXG4gIGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAnb2JqZWN0Jykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdcImxvY2FsU3RvcmFnZVwiIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBlbnZpcm9ubWVudCEnKVxyXG4gIH1cclxufVxyXG5cclxuU3RvcmFnZVRyYW5zcG9uZGVyLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHRyYW5zZmVyRGF0YSwgdG9JZCkge1xyXG4gIGlmICh0aGlzLmRlc3RvcnllZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd0aGUgaW5zdGFuY2UgXCInICsgdGhpc0lkICsgJ1wiIGhhcyBiZWVuIGRlc3RvcnllZCEnKVxyXG4gIH1cclxuICB2YXIgcGFnZURhdGEgPSBnZXRQYWdlRGF0YSgpXHJcbiAgcGFnZURhdGEuaWQgPSB0aGlzSWRcclxuICBpZiAodG9JZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICB2YXIgaWRMaXN0ID0gdG9JZCBpbnN0YW5jZW9mIEFycmF5ID8gdG9JZCA6IFt0b0lkXVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpZExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIHRyYW5zZmVySWQgPSBpZExpc3RbaV1cclxuICAgICAgaWYgKHR5cGVvZiB0cmFuc2ZlcklkID09PSAnc3RyaW5nJyAmJiB0cmFuc2ZlcklkKSB7XHJcbiAgICAgICAgc2V0TG9jYWwoc3RvcmFnZUtleSwge1xyXG4gICAgICAgICAgcmFuZG9tOiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgdHJhbnNmZXJJZDogdHJhbnNmZXJJZCxcclxuICAgICAgICAgIGRhdGE6IHRyYW5zZmVyRGF0YSxcclxuICAgICAgICAgIGZyb206IHBhZ2VEYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3BhcmFtIFwidG9JZFwiIGlzIEFycmF5PHN0cmluZz4gb3IganVzdCBhIHN0cmluZywgYnV0IG5vdCBhIFwiXCIhJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBzZXRMb2NhbChzdG9yYWdlS2V5LCB7XHJcbiAgICAgIHJhbmRvbTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgdHJhbnNmZXJJZDogdW5kZWZpbmVkLFxyXG4gICAgICBkYXRhOiB0cmFuc2ZlckRhdGEsXHJcbiAgICAgIGZyb206IHBhZ2VEYXRhXHJcbiAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gdGhpc1xyXG59XHJcblxyXG5TdG9yYWdlVHJhbnNwb25kZXIucHJvdG90eXBlLm1lc3NhZ2VMaXN0ZW5lciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgaWYgKCF0aGlzLmRlc3RvcnllZCkge1xyXG4gICAgdmFyIGtleSA9IGUua2V5XHJcbiAgICB2YXIgbmV3VmFsdWUgPSBlLm5ld1ZhbHVlXHJcbiAgICB2YXIgcGFyc2VkRGF0YSA9IEpTT04ucGFyc2UobmV3VmFsdWUpXHJcbiAgICBpZiAoa2V5ID09PSBzdG9yYWdlS2V5ICYmIG5ld1ZhbHVlICYmIHBhcnNlZERhdGEgJiYgcGFyc2VkRGF0YS5yYW5kb20pIHtcclxuICAgICAgdmFyIHRyYW5zZmVySWQgPSBwYXJzZWREYXRhLnRyYW5zZmVySWRcclxuICAgICAgdmFyIGRhdGEgPSBwYXJzZWREYXRhLmRhdGFcclxuICAgICAgdmFyIGZyb20gPSBwYXJzZWREYXRhLmZyb21cclxuICAgICAgdmFyIGJ1aWxkQXJncyA9IHsgZGF0YTogZGF0YSwgZnJvbTogZnJvbSB9XHJcbiAgICAgIC8vIGZpbHRlciBkYXRhIGV4Y2VwdCBzZWxmXHJcbiAgICAgIHZhciBmcm9tSWQgPSBmcm9tLmlkXHJcbiAgICAgIGlmICh0cmFuc2ZlcklkKSB7XHJcbiAgICAgICAgZnJvbUlkICE9PSB0aGlzSWQgJiYgdHJhbnNmZXJJZCA9PT0gdGhpc0lkICYmIG1zZ0NhbGxiYWNrLmNhbGwodGhpcywgYnVpbGRBcmdzKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZyb21JZCAhPT0gdGhpc0lkICYmIG1zZ0NhbGxiYWNrLmNhbGwodGhpcywgYnVpbGRBcmdzKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5TdG9yYWdlVHJhbnNwb25kZXIucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gIG1zZ0NhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge31cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIHRoaXMubWVzc2FnZUxpc3RlbmVyKVxyXG4gIHJldHVybiB0aGlzXHJcbn1cclxuXHJcblN0b3JhZ2VUcmFuc3BvbmRlci5wcm90b3R5cGUuZGVzdG9yeSA9IGZ1bmN0aW9uICgpIHtcclxuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIHRoaXMubWVzc2FnZUxpc3RlbmVyKVxyXG4gIHRoaXMuZGVzdG9yeWVkID0gdHJ1ZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlVHJhbnNwb25kZXJcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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