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

eval("/* eslint-disable no-undef */\r\nconst portLists = []\r\nconst idLists = []\r\n\r\n// send message\r\nconst sendMsg = (id, data) => {\r\n  portLists.forEach(port => {\r\n    port.postMessage([id, data])\r\n  })\r\n}\r\n\r\nonconnect = function (e) {\r\n  const [port] = e.ports\r\n  port.addEventListener('message', (e) => {\r\n    if (e.data.id) {\r\n      const index = idLists.indexOf(e.data.id)\r\n      // add port list\r\n      if (index < 0) {\r\n        portLists.push(port)\r\n        idLists.push(e.data.id)\r\n      } else {\r\n        // close prev connect\r\n        portLists[index].close()\r\n        portLists[index] = port\r\n      }\r\n    } else {\r\n      sendMsg(e.data[0], e.data[1])\r\n    }\r\n  })\r\n  port.start()\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy93b3JrZXIvc2hhcmVkLndvcmtlci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVHJhbnNwb25kZXIvLi9zcmMvbGlicy93b3JrZXIvc2hhcmVkLndvcmtlci5qcz8yOTQ4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbmNvbnN0IHBvcnRMaXN0cyA9IFtdXHJcbmNvbnN0IGlkTGlzdHMgPSBbXVxyXG5cclxuLy8gc2VuZCBtZXNzYWdlXHJcbmNvbnN0IHNlbmRNc2cgPSAoaWQsIGRhdGEpID0+IHtcclxuICBwb3J0TGlzdHMuZm9yRWFjaChwb3J0ID0+IHtcclxuICAgIHBvcnQucG9zdE1lc3NhZ2UoW2lkLCBkYXRhXSlcclxuICB9KVxyXG59XHJcblxyXG5vbmNvbm5lY3QgPSBmdW5jdGlvbiAoZSkge1xyXG4gIGNvbnN0IFtwb3J0XSA9IGUucG9ydHNcclxuICBwb3J0LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUuZGF0YS5pZCkge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGlkTGlzdHMuaW5kZXhPZihlLmRhdGEuaWQpXHJcbiAgICAgIC8vIGFkZCBwb3J0IGxpc3RcclxuICAgICAgaWYgKGluZGV4IDwgMCkge1xyXG4gICAgICAgIHBvcnRMaXN0cy5wdXNoKHBvcnQpXHJcbiAgICAgICAgaWRMaXN0cy5wdXNoKGUuZGF0YS5pZClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBjbG9zZSBwcmV2IGNvbm5lY3RcclxuICAgICAgICBwb3J0TGlzdHNbaW5kZXhdLmNsb3NlKClcclxuICAgICAgICBwb3J0TGlzdHNbaW5kZXhdID0gcG9ydFxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZW5kTXNnKGUuZGF0YVswXSwgZS5kYXRhWzFdKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcG9ydC5zdGFydCgpXHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/worker/shared.worker.js\n");

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