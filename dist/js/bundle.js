/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertation: () => (/* binding */ convertation),
/* harmony export */   getFromLocalStorage: () => (/* binding */ getFromLocalStorage)
/* harmony export */ });
/* harmony import */ var _domElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements.js */ "./src/js/domElements.js");


async function convertation() {
  _domElements_js__WEBPACK_IMPORTED_MODULE_0__.inputUsd.value = "Загрузка...";

  try {
    const response = await fetch(_domElements_js__WEBPACK_IMPORTED_MODULE_0__.dbUrl);

    if (!response.ok) {
      console.log(`Ошибка: ${response.status}`);
      throw new Error(`Ошибка: ${response.status}`);
    }

    const data = await response.json();
    const currencyValue = data.rates.PLN;
    const plnValue = parseFloat(_domElements_js__WEBPACK_IMPORTED_MODULE_0__.inputPln.value);

    localStorage.setItem(
      "exchangeRate",
      JSON.stringify({
        PLN: currencyValue,
        addedDate: data.date,
      })
    );
    if (isNaN(plnValue)) {
      _domElements_js__WEBPACK_IMPORTED_MODULE_0__.inputUsd.value = "Введите корректное число";
    } else {
      _domElements_js__WEBPACK_IMPORTED_MODULE_0__.inputUsd.value = (plnValue / currencyValue).toFixed(2);
    }
  } catch (error) {
    console.error(error);
    _domElements_js__WEBPACK_IMPORTED_MODULE_0__.inputUsd.value = "Ошибка сервера";
  }
}

function getFromLocalStorage(itemKey) {
  const data = JSON.parse(localStorage.getItem(itemKey)),
    plnValue = parseFloat(_domElements_js__WEBPACK_IMPORTED_MODULE_0__.inputPln.value),
    currencyValue = data.PLN;

  if (isNaN(plnValue)) {
    _domElements_js__WEBPACK_IMPORTED_MODULE_0__.inputUsd.value = "Введите корректное число";
  } else {
    _domElements_js__WEBPACK_IMPORTED_MODULE_0__.inputUsd.value = (plnValue / currencyValue).toFixed(2);
  }
}


/***/ }),

/***/ "./src/js/domElements.js":
/*!*******************************!*\
  !*** ./src/js/domElements.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertBtn: () => (/* binding */ convertBtn),
/* harmony export */   dbUrl: () => (/* binding */ dbUrl),
/* harmony export */   inputPln: () => (/* binding */ inputPln),
/* harmony export */   inputUsd: () => (/* binding */ inputUsd)
/* harmony export */ });
const inputPln = document.querySelector("#pln");
const inputUsd = document.querySelector("#usd");
const convertBtn = document.querySelector("#convert");
const dbUrl = "https://api.frankfurter.dev/v1/latest";


/***/ }),

/***/ "./src/js/eventHandlers.js":
/*!*********************************!*\
  !*** ./src/js/eventHandlers.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupEventListeners: () => (/* binding */ setupEventListeners)
/* harmony export */ });
/* harmony import */ var _domElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements.js */ "./src/js/domElements.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ "./src/js/api.js");



const setupEventListeners = () => {
  window.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "Backspace":
        _domElements_js__WEBPACK_IMPORTED_MODULE_0__.inputPln.value = _domElements_js__WEBPACK_IMPORTED_MODULE_0__.inputPln.value.slice(0, -1);
        break;
      case "Enter":
        (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.convertation)();
        break;
      case "Escape":
        _domElements_js__WEBPACK_IMPORTED_MODULE_0__.inputPln.value = "";
        _domElements_js__WEBPACK_IMPORTED_MODULE_0__.inputUsd.value = "";
        break;
      default:
        if (!isNaN(event.key)) {
          event.preventDefault();
          _domElements_js__WEBPACK_IMPORTED_MODULE_0__.inputPln.value += event.key;
        }
        break;
    }
  });

  _domElements_js__WEBPACK_IMPORTED_MODULE_0__.convertBtn.addEventListener("click", () => {
    const today = new Date().toISOString().split("T")[0];
    const storedData = JSON.parse(localStorage.getItem("exchangeRate"));

    if (
      !storedData ||
      !storedData.addedDate ||
      today !== storedData.addedDate
    ) {
      (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.convertation)();
    } else {
      (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)("exchangeRate");
    }
  });
};


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventHandlers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventHandlers.js */ "./src/js/eventHandlers.js");
/* harmony import */ var _domElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domElements.js */ "./src/js/domElements.js");



document.addEventListener("DOMContentLoaded", () => {
  (0,_eventHandlers_js__WEBPACK_IMPORTED_MODULE_0__.setupEventListeners)();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map