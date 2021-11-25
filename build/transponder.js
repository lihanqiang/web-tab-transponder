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
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _libs_worker_index_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/worker/index-worker */ \"./src/libs/worker/index-worker.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_libs_worker_index_worker__WEBPACK_IMPORTED_MODULE_0__.WorkerCommunicator);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxpRUFBZUEseUVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UcmFuc3BvbmRlci8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdvcmtlckNvbW11bmljYXRvciB9IGZyb20gJy4vbGlicy93b3JrZXIvaW5kZXgtd29ya2VyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya2VyQ29tbXVuaWNhdG9yXHJcbiJdLCJuYW1lcyI6WyJXb3JrZXJDb21tdW5pY2F0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/libs/constants.js":
/*!*******************************!*\
  !*** ./src/libs/constants.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EVENT_NAMES\": () => (/* binding */ EVENT_NAMES),\n/* harmony export */   \"COMM_IDS\": () => (/* binding */ COMM_IDS)\n/* harmony export */ });\nconst EVENT_NAMES = ['open', 'error', 'message'];\nconst COMM_IDS = [];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9jb25zdGFudHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxNQUFNQSxjQUFjLENBQ3pCLE1BRHlCLEVBRXpCLE9BRnlCLEVBR3pCLFNBSHlCLENBQXBCO0FBS0EsTUFBTUMsV0FBVyxFQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL1RyYW5zcG9uZGVyLy4vc3JjL2xpYnMvY29uc3RhbnRzLmpzP2U1NzIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEVWRU5UX05BTUVTID0gW1xyXG4gICdvcGVuJyxcclxuICAnZXJyb3InLFxyXG4gICdtZXNzYWdlJ1xyXG5dXHJcbmV4cG9ydCBjb25zdCBDT01NX0lEUyA9IFtdXHJcbiJdLCJuYW1lcyI6WyJFVkVOVF9OQU1FUyIsIkNPTU1fSURTIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/constants.js\n");

/***/ }),

/***/ "./src/libs/worker/index-worker.js":
/*!*****************************************!*\
  !*** ./src/libs/worker/index-worker.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WorkerCommunicator\": () => (/* binding */ WorkerCommunicator)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/libs/constants.js\");\n/* harmony import */ var worker_loader_sharedWorker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! worker-loader!./sharedWorker.js */ \"./node_modules/worker-loader/dist/cjs.js!./src/libs/worker/sharedWorker.js\");\n\n// eslint-disable-next-line import/no-webpack-loader-syntax\n\n\nlet _options = {};\n\nclass WorkerCommunicator {\n  constructor(options = { isolated: true }) {\n    options.communicatorId = Math.random();\n    _options = options;\n    if (!WorkerCommunicator.instance) {\n      this.initWorker();\n      WorkerCommunicator.instance = this;\n    }\n    return WorkerCommunicator.instance;\n  }\n\n  initWorker() {\n    // eslint-disable-next-line no-undef\n    if (SharedWorker) {\n      // eslint-disable-next-line no-undef\n      this.worker = new worker_loader_sharedWorker_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    } else {\n      throw new Error('\"SharedWorker\" is not supported in this environment!');\n    }\n    return this;\n  }\n\n  send(data) {\n    if (this.worker) {\n      this.worker.postMessage({\n        _communicatorId: _options.communicatorId,\n        data\n      });\n    }\n    return this;\n  }\n\n  on(eventName, callback = () => {}) {\n    if (~_constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_NAMES.indexOf(eventName)) {\n      if (this.worker) {\n        if (_options.isolated) {\n          this.worker.addEventListener(eventName, function (...args) {\n            const context = this;\n            const event = args[0];\n            if (event) {\n              const { _communicatorId } = event.data;\n              if (_communicatorId === _options.communicatorId) {\n                callback.apply(context, args);\n              }\n            }\n          });\n        } else {\n          this.worker.addEventListener(eventName, callback);\n        }\n      }\n    } else {\n      console.warn(`eventName: ${eventName} is not available here, use one of ${_constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_NAMES} instead.`);\n    }\n    return this;\n  }\n\n  destory() {\n    if (this.worker) {\n      this.worker.terminate();\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy93b3JrZXIvaW5kZXgtd29ya2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJRSxXQUFXLEVBQWY7O0FBRU8sTUFBTUMsa0JBQU4sQ0FBeUI7QUFDOUJDLGNBQWFDLFVBQVUsRUFBRUMsVUFBVSxJQUFaLEVBQXZCLEVBQTJDO0FBQ3pDRCxZQUFRRSxjQUFSLEdBQXlCQyxLQUFLQyxNQUFMLEVBQXpCO0FBQ0FQLGVBQVdHLE9BQVg7QUFDQSxRQUFJLENBQUNGLG1CQUFtQk8sUUFBeEIsRUFBa0M7QUFDaEMsV0FBS0MsVUFBTDtBQUNBUix5QkFBbUJPLFFBQW5CLEdBQThCLElBQTlCO0FBQ0Q7QUFDRCxXQUFPUCxtQkFBbUJPLFFBQTFCO0FBQ0Q7O0FBRURDLGVBQWM7QUFDWjtBQUNBLFFBQUlDLFlBQUosRUFBa0I7QUFDaEI7QUFDQSxXQUFLQyxNQUFMLEdBQWMsSUFBSVoscUVBQUosRUFBZDtBQUNELEtBSEQsTUFHTztBQUNMLFlBQU0sSUFBSWEsS0FBSixDQUFVLHNEQUFWLENBQU47QUFDRDtBQUNELFdBQU8sSUFBUDtBQUNEOztBQUVEQyxPQUFNQyxJQUFOLEVBQVk7QUFDVixRQUFJLEtBQUtILE1BQVQsRUFBaUI7QUFDZixXQUFLQSxNQUFMLENBQVlJLFdBQVosQ0FBd0I7QUFDdEJDLHlCQUFpQmhCLFNBQVNLLGNBREo7QUFFdEJTO0FBRnNCLE9BQXhCO0FBSUQ7QUFDRCxXQUFPLElBQVA7QUFDRDs7QUFFREcsS0FBSUMsU0FBSixFQUFlQyxXQUFXLE1BQU0sQ0FBRSxDQUFsQyxFQUFvQztBQUNsQyxRQUFJLENBQUNyQiwyREFBQSxDQUFvQm9CLFNBQXBCLENBQUwsRUFBcUM7QUFDbkMsVUFBSSxLQUFLUCxNQUFULEVBQWlCO0FBQ2YsWUFBSVgsU0FBU0ksUUFBYixFQUF1QjtBQUNyQixlQUFLTyxNQUFMLENBQVlVLGdCQUFaLENBQTZCSCxTQUE3QixFQUF3QyxVQUFVLEdBQUdJLElBQWIsRUFBbUI7QUFDekQsa0JBQU1DLFVBQVUsSUFBaEI7QUFDQSxrQkFBTUMsUUFBUUYsS0FBSyxDQUFMLENBQWQ7QUFDQSxnQkFBSUUsS0FBSixFQUFXO0FBQ1Qsb0JBQU0sRUFBRVIsZUFBRixLQUFzQlEsTUFBTVYsSUFBbEM7QUFDQSxrQkFBSUUsb0JBQW9CaEIsU0FBU0ssY0FBakMsRUFBaUQ7QUFDL0NjLHlCQUFTTSxLQUFULENBQWVGLE9BQWYsRUFBd0JELElBQXhCO0FBQ0Q7QUFDRjtBQUNGLFdBVEQ7QUFVRCxTQVhELE1BV087QUFDTCxlQUFLWCxNQUFMLENBQVlVLGdCQUFaLENBQTZCSCxTQUE3QixFQUF3Q0MsUUFBeEM7QUFDRDtBQUNGO0FBQ0YsS0FqQkQsTUFpQk87QUFDTE8sY0FBUUMsSUFBUixDQUFjLGNBQWFULFNBQVUsc0NBQXFDcEIsbURBQVksV0FBdEY7QUFDRDtBQUNELFdBQU8sSUFBUDtBQUNEOztBQUVEOEIsWUFBVztBQUNULFFBQUksS0FBS2pCLE1BQVQsRUFBaUI7QUFDZixXQUFLQSxNQUFMLENBQVlrQixTQUFaO0FBQ0Q7QUFDRjtBQTVENkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UcmFuc3BvbmRlci8uL3NyYy9saWJzL3dvcmtlci9pbmRleC13b3JrZXIuanM/M2E1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFVkVOVF9OQU1FUyB9IGZyb20gJy4uL2NvbnN0YW50cydcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby13ZWJwYWNrLWxvYWRlci1zeW50YXhcclxuaW1wb3J0IFNoYXJlZHdvcmtlciBmcm9tICd3b3JrZXItbG9hZGVyIS4vc2hhcmVkV29ya2VyLmpzJ1xyXG5cclxubGV0IF9vcHRpb25zID0ge31cclxuXHJcbmV4cG9ydCBjbGFzcyBXb3JrZXJDb21tdW5pY2F0b3Ige1xyXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zID0geyBpc29sYXRlZDogdHJ1ZSB9KSB7XHJcbiAgICBvcHRpb25zLmNvbW11bmljYXRvcklkID0gTWF0aC5yYW5kb20oKVxyXG4gICAgX29wdGlvbnMgPSBvcHRpb25zXHJcbiAgICBpZiAoIVdvcmtlckNvbW11bmljYXRvci5pbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLmluaXRXb3JrZXIoKVxyXG4gICAgICBXb3JrZXJDb21tdW5pY2F0b3IuaW5zdGFuY2UgPSB0aGlzXHJcbiAgICB9XHJcbiAgICByZXR1cm4gV29ya2VyQ29tbXVuaWNhdG9yLmluc3RhbmNlXHJcbiAgfVxyXG5cclxuICBpbml0V29ya2VyICgpIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxyXG4gICAgaWYgKFNoYXJlZFdvcmtlcikge1xyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcclxuICAgICAgdGhpcy53b3JrZXIgPSBuZXcgU2hhcmVkd29ya2VyKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignXCJTaGFyZWRXb3JrZXJcIiBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgZW52aXJvbm1lbnQhJylcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG5cclxuICBzZW5kIChkYXRhKSB7XHJcbiAgICBpZiAodGhpcy53b3JrZXIpIHtcclxuICAgICAgdGhpcy53b3JrZXIucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgIF9jb21tdW5pY2F0b3JJZDogX29wdGlvbnMuY29tbXVuaWNhdG9ySWQsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcblxyXG4gIG9uIChldmVudE5hbWUsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcclxuICAgIGlmICh+RVZFTlRfTkFNRVMuaW5kZXhPZihldmVudE5hbWUpKSB7XHJcbiAgICAgIGlmICh0aGlzLndvcmtlcikge1xyXG4gICAgICAgIGlmIChfb3B0aW9ucy5pc29sYXRlZCkge1xyXG4gICAgICAgICAgdGhpcy53b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZ1bmN0aW9uICguLi5hcmdzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzXHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gYXJnc1swXVxyXG4gICAgICAgICAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICBjb25zdCB7IF9jb21tdW5pY2F0b3JJZCB9ID0gZXZlbnQuZGF0YVxyXG4gICAgICAgICAgICAgIGlmIChfY29tbXVuaWNhdG9ySWQgPT09IF9vcHRpb25zLmNvbW11bmljYXRvcklkKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShjb250ZXh0LCBhcmdzKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy53b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKGBldmVudE5hbWU6ICR7ZXZlbnROYW1lfSBpcyBub3QgYXZhaWxhYmxlIGhlcmUsIHVzZSBvbmUgb2YgJHtFVkVOVF9OQU1FU30gaW5zdGVhZC5gKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcblxyXG4gIGRlc3RvcnkgKCkge1xyXG4gICAgaWYgKHRoaXMud29ya2VyKSB7XHJcbiAgICAgIHRoaXMud29ya2VyLnRlcm1pbmF0ZSgpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJFVkVOVF9OQU1FUyIsIlNoYXJlZHdvcmtlciIsIl9vcHRpb25zIiwiV29ya2VyQ29tbXVuaWNhdG9yIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwiaXNvbGF0ZWQiLCJjb21tdW5pY2F0b3JJZCIsIk1hdGgiLCJyYW5kb20iLCJpbnN0YW5jZSIsImluaXRXb3JrZXIiLCJTaGFyZWRXb3JrZXIiLCJ3b3JrZXIiLCJFcnJvciIsInNlbmQiLCJkYXRhIiwicG9zdE1lc3NhZ2UiLCJfY29tbXVuaWNhdG9ySWQiLCJvbiIsImV2ZW50TmFtZSIsImNhbGxiYWNrIiwiaW5kZXhPZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcmdzIiwiY29udGV4dCIsImV2ZW50IiwiYXBwbHkiLCJjb25zb2xlIiwid2FybiIsImRlc3RvcnkiLCJ0ZXJtaW5hdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/worker/index-worker.js\n");

/***/ }),

/***/ "./node_modules/worker-loader/dist/cjs.js!./src/libs/worker/sharedWorker.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/worker-loader/dist/cjs.js!./src/libs/worker/sharedWorker.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Worker_fn)\n/* harmony export */ });\nfunction Worker_fn() {\n  return new Worker(__webpack_require__.p + \"transponder.worker.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd29ya2VyLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NyYy9saWJzL3dvcmtlci9zaGFyZWRXb3JrZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlO0FBQ2Ysb0JBQW9CLHFCQUF1QjtBQUMzQyIsInNvdXJjZXMiOlsid2VicGFjazovL1RyYW5zcG9uZGVyLy4vc3JjL2xpYnMvd29ya2VyL3NoYXJlZFdvcmtlci5qcz84ZDg2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtlcl9mbigpIHtcbiAgcmV0dXJuIG5ldyBXb3JrZXIoX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInRyYW5zcG9uZGVyLndvcmtlci5qc1wiKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/worker-loader/dist/cjs.js!./src/libs/worker/sharedWorker.js\n");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});