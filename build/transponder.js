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

/***/ "./src/libs/constants.js":
/*!*******************************!*\
  !*** ./src/libs/constants.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EVENT_NAMES": () => (/* binding */ EVENT_NAMES),
/* harmony export */   "COMM_IDS": () => (/* binding */ COMM_IDS)
/* harmony export */ });
const EVENT_NAMES = ['open', 'error', 'message'];
const COMM_IDS = [];

/***/ }),

/***/ "./src/libs/worker/index-worker.js":
/*!*****************************************!*\
  !*** ./src/libs/worker/index-worker.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkerCommunicator": () => (/* binding */ WorkerCommunicator)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/libs/constants.js");
/* harmony import */ var worker_loader_sharedWorker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! worker-loader!./sharedWorker.js */ "./node_modules/worker-loader/dist/cjs.js!./src/libs/worker/sharedWorker.js");

// eslint-disable-next-line import/no-webpack-loader-syntax


let _options = {};

class WorkerCommunicator {
  constructor(options = { isolated: true }) {
    options.communicatorId = Math.random();
    _options = options;
    if (!WorkerCommunicator.instance) {
      this.initWorker();
      WorkerCommunicator.instance = this;
    }
    return WorkerCommunicator.instance;
  }

  initWorker() {
    // eslint-disable-next-line no-undef
    if (SharedWorker) {
      // eslint-disable-next-line no-undef
      this.worker = new worker_loader_sharedWorker_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    } else {
      throw new Error('"SharedWorker" is not supported in this environment!');
    }
    return this;
  }

  send(data) {
    if (this.worker) {
      this.worker.postMessage({
        _communicatorId: _options.communicatorId,
        data
      });
    }
    return this;
  }

  on(eventName, callback = () => {}) {
    if (~_constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_NAMES.indexOf(eventName)) {
      if (this.worker) {
        if (_options.isolated) {
          this.worker.addEventListener(eventName, function (...args) {
            const context = this;
            const event = args[0];
            if (event) {
              const { _communicatorId } = event.data;
              if (_communicatorId === _options.communicatorId) {
                callback.apply(context, args);
              }
            }
          });
        } else {
          this.worker.addEventListener(eventName, callback);
        }
      }
    } else {
      console.warn(`eventName: ${eventName} is not available here, use one of ${_constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_NAMES} instead.`);
    }
    return this;
  }

  destory() {
    if (this.worker) {
      this.worker.terminate();
    }
  }
}

/***/ }),

/***/ "./node_modules/worker-loader/dist/cjs.js!./src/libs/worker/sharedWorker.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/worker-loader/dist/cjs.js!./src/libs/worker/sharedWorker.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Worker_fn)
/* harmony export */ });
function Worker_fn() {
  return new Worker(__webpack_require__.p + "transponder.worker.js");
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libs_worker_index_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/worker/index-worker */ "./src/libs/worker/index-worker.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_libs_worker_index_worker__WEBPACK_IMPORTED_MODULE_0__.WorkerCommunicator);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=transponder.js.map