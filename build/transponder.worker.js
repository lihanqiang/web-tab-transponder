/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/libs/worker/shared.worker.js":
/*!******************************************!*\
  !*** ./src/libs/worker/shared.worker.js ***!
  \******************************************/
/***/ (() => {

eval("/* eslint-disable no-undef */\r\nconst portLists = []\r\n\r\n// send message\r\nconst sendMsg = (id, data) => {\r\n  portLists.forEach(port => {\r\n    port.postMessage([id, data])\r\n  })\r\n}\r\n\r\nonconnect = function (e) {\r\n  const [port] = e.ports\r\n  port.addEventListener('message', (e) => {\r\n    if (e.data.id) {\r\n      // add port list\r\n      portLists.push(port)\r\n      idLists.push(e.data.id)\r\n    } else {\r\n      sendMsg(e.data[0], e.data[1])\r\n    }\r\n  })\r\n  port.start()\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy93b3JrZXIvc2hhcmVkLndvcmtlci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVHJhbnNwb25kZXIvLi9zcmMvbGlicy93b3JrZXIvc2hhcmVkLndvcmtlci5qcz8yOTQ4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbmNvbnN0IHBvcnRMaXN0cyA9IFtdXHJcblxyXG4vLyBzZW5kIG1lc3NhZ2VcclxuY29uc3Qgc2VuZE1zZyA9IChpZCwgZGF0YSkgPT4ge1xyXG4gIHBvcnRMaXN0cy5mb3JFYWNoKHBvcnQgPT4ge1xyXG4gICAgcG9ydC5wb3N0TWVzc2FnZShbaWQsIGRhdGFdKVxyXG4gIH0pXHJcbn1cclxuXHJcbm9uY29ubmVjdCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgY29uc3QgW3BvcnRdID0gZS5wb3J0c1xyXG4gIHBvcnQuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChlKSA9PiB7XHJcbiAgICBpZiAoZS5kYXRhLmlkKSB7XHJcbiAgICAgIC8vIGFkZCBwb3J0IGxpc3RcclxuICAgICAgcG9ydExpc3RzLnB1c2gocG9ydClcclxuICAgICAgaWRMaXN0cy5wdXNoKGUuZGF0YS5pZClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNlbmRNc2coZS5kYXRhWzBdLCBlLmRhdGFbMV0pXHJcbiAgICB9XHJcbiAgfSlcclxuICBwb3J0LnN0YXJ0KClcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/worker/shared.worker.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/worker/shared.worker.js"]();
/******/ 	
/******/ })()
;