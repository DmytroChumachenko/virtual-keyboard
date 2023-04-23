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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_renderPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/renderPage.js */ \"./src/renderPage.js\");\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", _src_renderPage_js__WEBPACK_IMPORTED_MODULE_0__.RENDERPAGE)\n\n//# sourceURL=webpack://rss-virtual-keyboard/./index.js?");

/***/ }),

/***/ "./src/createElement.js":
/*!******************************!*\
  !*** ./src/createElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CREATEEL\": () => (/* binding */ CREATEEL)\n/* harmony export */ });\nconst CREATEEL = (options) => {\r\n  // const {tag, classes}\r\n  const ELEMENT = document.createElement(options.tag);\r\n  if (Array.isArray(options.classes)) {\r\n    options.classes.forEach(className => {\r\n      ELEMENT.classList.add(className)\r\n    });\r\n  } else {\r\n    ELEMENT.classList.add(options.classes);\r\n  }\r\n  if(options.id){ELEMENT.id = options.id}\r\n  if (options.attributes) {\r\n    for (const KEY in options.attributes) {\r\n      if (Object.prototype.hasOwnProperty.call(options.attributes, KEY)) {\r\n        ELEMENT.setAttribute(KEY, options.attributes[KEY]);\r\n      }\r\n    }\r\n  }\r\n  if (options.textContent) {\r\n    ELEMENT.textContent = options.textContent\r\n  }\r\n  if (options.innerHTML) {\r\n    ELEMENT.innerHTML = options.innerHTML\r\n  }\r\n  return ELEMENT;\r\n\r\n}\r\n\r\n// const myElement = createElement({\r\n//   tag: 'div',\r\n//   classes: ['my-class'],\r\n//   attributes: {\r\n//     'data-attribute': 'my-value',\r\n//     'aria-label': 'My label'\r\n//   },\r\n//   textContent: 'Hello, world!',\r\n//   html: '<p>This is some HTML content</p>'\r\n// });\n\n//# sourceURL=webpack://rss-virtual-keyboard/./src/createElement.js?");

/***/ }),

/***/ "./src/renderPage.js":
/*!***************************!*\
  !*** ./src/renderPage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RENDERPAGE\": () => (/* binding */ RENDERPAGE)\n/* harmony export */ });\n/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./symbols.js */ \"./src/symbols.js\");\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement.js */ \"./src/createElement.js\");\n\r\n\r\n\r\nconst RENDERPAGE = () => {\r\n  const BODY = document.querySelector('body');\r\n\r\n  const CENTRALIZER = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__.CREATEEL)({\r\n    tag: 'div',\r\n    classes: 'centralizer'\r\n  });\r\n  BODY.prepend(CENTRALIZER);\r\n\r\n  const TITLE = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__.CREATEEL)({\r\n    tag: 'p',\r\n    classes: 'title',\r\n    textContent: 'RSS virtual keyboard'\r\n  })\r\n  \r\n  const TEXTAREA = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__.CREATEEL)({\r\n    tag: 'textarea',\r\n    classes: ['body--textarea', 'textarea'],\r\n    id: 'textarea',\r\n    attributes: {\r\n      rows: '5',\r\n      cols: '50',\r\n      spellcheck: 'false'\r\n    }\r\n  })\r\n\r\n  const BODYKEYBOARD = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__.CREATEEL)({\r\n    tag: 'div',\r\n    classes: ['body--keyboard', 'keyboard'],\r\n    id: 'keyboard'\r\n  })\r\n  CENTRALIZER.append(TITLE, TEXTAREA, BODYKEYBOARD);\r\n}\n\n//# sourceURL=webpack://rss-virtual-keyboard/./src/renderPage.js?");

/***/ }),

/***/ "./src/symbols.js":
/*!************************!*\
  !*** ./src/symbols.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SYMBOLS\": () => (/* binding */ SYMBOLS)\n/* harmony export */ });\nconst SYMBOLS = {\r\n  rows: [\r\n    [\r\n      {\r\n        keyWord: 'Backquote',\r\n        ukr: {\r\n          caseDown: \"'\",\r\n          caseUp: '₴',\r\n          caps: \"'\",\r\n          shiftCaps: '₴',\r\n        },\r\n        eng: {\r\n          caseDown: '`',\r\n          caseUp: '~',\r\n          caps: '`',\r\n          shiftCaps: '~',\r\n        }\r\n      },\r\n      {\r\n        keyWord: 'Digit1',\r\n        ukr: {\r\n          caseDown: '1',\r\n          caseUp: '!',\r\n          caps: '1',\r\n          shiftCaps: '!',\r\n        },\r\n        eng: {\r\n          caseDown: '1',\r\n          caseUp: '!',\r\n          caps: '1',\r\n          shiftCaps: '!',\r\n        }\r\n      },\r\n      {\r\n        keyWord: 'Digit2',\r\n        ukr: {\r\n          caseDown: '2',\r\n          caseUp: '\"',\r\n          caps: '2',\r\n          shiftCaps: '\"',\r\n        },\r\n        eng: {\r\n          caseDown: '2',\r\n          caseUp: '@',\r\n          caps: '2',\r\n          shiftCaps: '@',\r\n        }\r\n      },\r\n      {\r\n        keyWord: 'Digit3',\r\n        ukr: {\r\n          caseDown: '3',\r\n          caseUp: '№',\r\n          caps: '3',\r\n          shiftCaps: '№',\r\n        },\r\n        eng: {\r\n          caseDown: '3',\r\n          caseUp: '#',\r\n          caps: '3',\r\n          shiftCaps: '#',\r\n        }\r\n      },\r\n      {\r\n        keyWord: 'Digit4',\r\n        ukr: {\r\n          caseDown: '4',\r\n          caseUp: ';',\r\n          caps: '4',\r\n          shiftCaps: ';',\r\n        },\r\n        eng: {\r\n          caseDown: '4',\r\n          caseUp: '$',\r\n          caps: '4',\r\n          shiftCaps: '$',\r\n        }\r\n      },\r\n      {\r\n        keyWord: 'Digit5',\r\n        ukr: {\r\n          caseDown: '5',\r\n          caseUp: '%',\r\n          caps: '5',\r\n          shiftCaps: '%',\r\n        },\r\n        eng: {\r\n          caseDown: '5',\r\n          caseUp: '%',\r\n          caps: '5',\r\n          shiftCaps: '%',\r\n        }\r\n      },\r\n      {\r\n        keyWord: 'Digit6',\r\n        ukr: {\r\n          caseDown: '6',\r\n          caseUp: ':',\r\n          caps: '6',\r\n          shiftCaps: ':',\r\n        },\r\n        eng: {\r\n          caseDown: '6',\r\n          caseUp: '^',\r\n          caps: '6',\r\n          shiftCaps: '^',\r\n        }\r\n      },\r\n      {\r\n        keyWord: 'Digit7',\r\n        ukr: {\r\n          caseDown: '7',\r\n          caseUp: '?',\r\n          caps: '7',\r\n          shiftCaps: '?',\r\n        },\r\n        eng: {\r\n          caseDown: '7',\r\n          caseUp: '&',\r\n          caps: '7',\r\n          shiftCaps: '&',\r\n        }\r\n      },\r\n      {\r\n        keyWord: 'Digit8',\r\n        ukr: {\r\n          caseDown: '8',\r\n          caseUp: '*',\r\n          caps: '8',\r\n          shiftCaps: '*',\r\n        },\r\n        eng: {\r\n          caseDown: '8',\r\n          caseUp: '*',\r\n          caps: '8',\r\n          shiftCaps: '*',\r\n        }\r\n      },\r\n      {\r\n        keyWord: 'Digit9',\r\n        ukr: {\r\n          caseDown: '9',\r\n          caseUp: '(',\r\n          caps: '9',\r\n          shiftCaps: '(',\r\n        },\r\n        eng: {\r\n          caseDown: '9',\r\n          caseUp: '(',\r\n          caps: '9',\r\n          shiftCaps: '(',\r\n        }\r\n      },\r\n      {\r\n        keyWord: 'Digit0',\r\n        ukr: {\r\n          caseDown: '0',\r\n          caseUp: ')',\r\n          caps: '0',\r\n          shiftCaps: ')',\r\n        },\r\n        eng: {\r\n          caseDown: '0',\r\n          caseUp: ')',\r\n          caps: '0',\r\n          shiftCaps: ')',\r\n        }\r\n      },\r\n      {\r\n        keyWord: 'Minus',\r\n        ukr: {\r\n          caseDown: '-',\r\n          caseUp: '_',\r\n          caps: '-',\r\n          shiftCaps: '_',\r\n        },\r\n        eng: {\r\n          caseDown: '-',\r\n          caseUp: '_',\r\n          caps: '-',\r\n          shiftCaps: '_',\r\n        }\r\n      },\r\n      {\r\n        keyWord: 'Equal',\r\n        ukr: {\r\n          caseDown: '=',\r\n          caseUp: '+',\r\n          caps: '=',\r\n          shiftCaps: '+',\r\n        },\r\n        eng: {\r\n          caseDown: '=',\r\n          caseUp: '+',\r\n          caps: '=',\r\n          shiftCaps: '+',\r\n        }\r\n      },\r\n      {\r\n        keyWord: 'Backspace',\r\n        ukr: {\r\n          caseDown: 'Backspace',\r\n          caseUp: 'Backspace',\r\n          caps: 'Backspace',\r\n          shiftCaps: 'Backspace',\r\n        },\r\n        eng: {\r\n          caseDown: 'Backspace',\r\n          caseUp: 'Backspace',\r\n          caps: 'Backspace',\r\n          shiftCaps: 'Backspace',\r\n        }\r\n      }\r\n    ]\r\n  ]\r\n}\n\n//# sourceURL=webpack://rss-virtual-keyboard/./src/symbols.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;