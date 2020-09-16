/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([47,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(3);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Header = /** @class */ (function () {
    function Header(headerElement) {
        this.headerElement = headerElement;
        this.initFields();
        this.addHandlers();
    }
    Header.prototype.initFields = function () {
        var burgerButton = this.headerElement.querySelector('.header__burger-button');
        this.burgerButton = burgerButton;
    };
    Header.prototype.onBurgerButtonClick = function () {
        this.headerElement.classList.toggle('header_opened');
    };
    Header.prototype.addHandlers = function () {
        this.burgerButton.addEventListener('click', this.onBurgerButtonClick.bind(this));
    };
    return Header;
}());
document.addEventListener('DOMContentLoaded', function () {
    var headerElements = document.querySelectorAll('.header');
    headerElements.forEach(function (headerElement) {
        // eslint-disable-next-line no-unused-vars
        var header = new Header(headerElement);
    });
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./blocks/footer/img/facebook-logo.svg": 7,
	"./blocks/footer/img/instagram-logo.svg": 8,
	"./blocks/footer/img/toxin-logo.svg": 9,
	"./blocks/footer/img/twitter-logo.svg": 10,
	"./blocks/header/img/toxin-logo.svg": 11,
	"./blocks/room-comments/img/murad-saraphanov.png": 12,
	"./blocks/room-comments/img/patrisiya-steklishkova.png": 13,
	"./blocks/star-rating/img/star-filled.svg": 14,
	"./blocks/star-rating/img/star-stroked.svg": 15,
	"./layouts/ui-kit/img/ui-logo.svg": 16,
	"./pages/cards/img/room666.png": 17,
	"./pages/cards/img/room678.png": 18,
	"./pages/cards/img/room840.png": 19,
	"./pages/cards/img/room856.png": 20,
	"./pages/cards/img/room888.png": 21,
	"./pages/cards/img/room980.png": 22,
	"./pages/form-elements/img/comfort.svg": 23,
	"./pages/form-elements/img/good.svg": 24,
	"./pages/form-elements/img/murad-saraphanov.png": 25,
	"./pages/index/img/index-bg.jpg": 26,
	"./pages/room-details/img/comfort.svg": 27,
	"./pages/room-details/img/cosiness.svg": 28,
	"./pages/room-details/img/good.svg": 29,
	"./pages/room-details/img/preview-room888-1.jpg": 30,
	"./pages/room-details/img/preview-room888-2.jpg": 31,
	"./pages/room-details/img/preview-room888-3.jpg": 32,
	"./pages/search-room/img/room350.png": 33,
	"./pages/search-room/img/room352.png": 34,
	"./pages/search-room/img/room444.png": 35,
	"./pages/search-room/img/room450.png": 36,
	"./pages/search-room/img/room666.png": 37,
	"./pages/search-room/img/room678.png": 38,
	"./pages/search-room/img/room740.png": 39,
	"./pages/search-room/img/room840.png": 40,
	"./pages/search-room/img/room856.png": 41,
	"./pages/search-room/img/room888.png": 42,
	"./pages/search-room/img/room980.png": 43,
	"./pages/search-room/img/room982.png": 44,
	"./pages/user-registration/img/authentication-bg.jpg": 45,
	"./pages/user-sign-in/img/authentication-bg.jpg": 46
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/facebook-logo.svg");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/instagram-logo.svg");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/toxin-logo.svg");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/twitter-logo.svg");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/toxin-logo.svg");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/murad-saraphanov.png");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/patrisiya-steklishkova.png");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/star-filled.svg");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/star-stroked.svg");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/ui-logo.svg");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room666.png");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room678.png");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room840.png");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room856.png");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room888.png");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room980.png");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/comfort.svg");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/good.svg");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/murad-saraphanov.png");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/index-bg.jpg");

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/comfort.svg");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/cosiness.svg");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/good.svg");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/preview-room888-1.jpg");

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/preview-room888-2.jpg");

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/preview-room888-3.jpg");

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room350.png");

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room352.png");

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room444.png");

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room450.png");

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room666.png");

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room678.png");

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room740.png");

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room840.png");

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room856.png");

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room888.png");

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room980.png");

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room982.png");

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/authentication-bg.jpg");

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/authentication-bg.jpg");

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/scss/style.scss
var style = __webpack_require__(1);

// CONCATENATED MODULE: ./src/blocks/dropdown/ts/Dropdown/Dropdown.ts
var Dropdown = /** @class */ (function () {
    function Dropdown(_a) {
        var openClass = _a.openClass, closeClass = _a.closeClass, dropdownElement = _a.dropdownElement;
        this.openClass = openClass;
        this.closeClass = closeClass;
        this.dropdownElement = dropdownElement;
        this.initDropdown();
    }
    Dropdown.prototype.initDropdown = function () {
        var dropdownExpandButtons = this.dropdownElement.querySelectorAll('.expand-button');
        this.dropdownExpandButtons = dropdownExpandButtons;
        this.addDropdownHandlers();
    };
    Dropdown.prototype.addDropdownHandlers = function () {
        var _this = this;
        this.dropdownExpandButtons.forEach(function (expandButton) {
            expandButton.addEventListener('click', _this.toggleOpened.bind(_this));
        });
        document.addEventListener('click', this.onDocumentClick.bind(this));
    };
    Dropdown.prototype.onDocumentClick = function (_a) {
        var target = _a.target;
        var isDropdownElementContainsTarget = this.dropdownElement
            .contains(target);
        if (!isDropdownElementContainsTarget
            && this.dropdownElement.classList.contains(this.openClass)) {
            this.toggleOpened();
        }
    };
    Dropdown.prototype.toggleExpandButtons = function () {
        this.dropdownExpandButtons.forEach(function (dropdownExpandButton) { return dropdownExpandButton
            .classList.toggle('expand-button_opened'); });
    };
    Dropdown.prototype.toggleOpened = function () {
        this.toggleExpandButtons();
        if (this.dropdownElement.classList.contains(this.openClass)) {
            this.dropdownElement.classList.remove(this.openClass);
            this.dropdownElement.classList.add(this.closeClass);
        }
        else if (this.dropdownElement.classList.contains(this.closeClass)) {
            this.dropdownElement.classList.remove(this.closeClass);
            this.dropdownElement.classList.add(this.openClass);
        }
    };
    return Dropdown;
}());
/* harmony default export */ var Dropdown_Dropdown = (Dropdown);

// CONCATENATED MODULE: ./src/blocks/calendar/ts/CalendarModel/CalendarModel.ts
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var CalendarModel = /** @class */ (function () {
    function CalendarModel(selectedDates) {
        this.initFields(selectedDates);
    }
    CalendarModel.prototype.initFields = function (selectedDates) {
        this.date = new Date();
        this.dateState = {
            day: this.date.getDate(),
            month: this.date.getMonth(),
            year: this.date.getFullYear(),
        };
        this.userDateState = __assign({}, this.dateState);
        this.selectedDates = selectedDates;
        this.dateProps = {
            maxMonth: 11,
            minMonth: 0,
        };
    };
    CalendarModel.prototype.getUserDateState = function () {
        return this.userDateState;
    };
    CalendarModel.prototype.getDateProps = function () {
        return this.dateProps;
    };
    CalendarModel.prototype.incrementUserDateState = function () {
        this.userDateState.month += 1;
        var maxMonth = this.dateProps.maxMonth;
        if (this.userDateState.month > maxMonth) {
            this.userDateState.month = 0;
            this.userDateState.year += 1;
        }
    };
    CalendarModel.prototype.decrementUserDateState = function () {
        this.userDateState.month -= 1;
        var minMonth = this.dateProps.minMonth;
        if (this.userDateState.month < minMonth) {
            this.userDateState.month = 11;
            this.userDateState.year -= 1;
        }
    };
    CalendarModel.prototype.resetSelectedDates = function () {
        this.selectedDates = {
            from: undefined,
            to: undefined,
        };
    };
    // eslint-disable-next-line class-methods-use-this
    CalendarModel.prototype.setTdData = function (tdData) {
        var element = tdData.element, date = tdData.date;
        element.dataset.date = date;
    };
    // eslint-disable-next-line class-methods-use-this
    CalendarModel.prototype.getTdData = function (td) {
        var data = td.dataset.date;
        return data;
    };
    CalendarModel.prototype.isCurrentDay = function (td) {
        var tdData = this.getTdData(td);
        var dateData = this.dateState.day + "." + (this.dateState.month + 1) + "." + this.dateState.year;
        if (dateData === tdData)
            return true;
        return false;
    };
    // eslint-disable-next-line class-methods-use-this
    CalendarModel.prototype.parseData = function (data) {
        var dataToParse = data.split('.').map(function (val) { return parseInt(val, 10); });
        return {
            day: dataToParse[0],
            month: dataToParse[1],
            year: dataToParse[2],
        };
    };
    CalendarModel.prototype.isFirstDateMoreThanSecondDate = function (firstData, secondData) {
        var firstDate = this.parseData(firstData);
        var secondDate = this.parseData(secondData);
        var flag = false;
        if (firstDate.year > secondDate.year) {
            flag = true;
        }
        else if ((firstDate.year === secondDate.year)
            && (firstDate.month > secondDate.month)) {
            flag = true;
        }
        else if ((firstDate.year === secondDate.year)
            && (firstDate.month === secondDate.month)
            && (firstDate.day > secondDate.day)) {
            flag = true;
        }
        return flag;
    };
    CalendarModel.prototype.selectDate = function (data) {
        if (this.selectedDates.from === undefined && this.selectedDates.to === undefined) {
            this.selectedDates.from = data;
        }
        else if (this.selectedDates.from !== undefined && this.selectedDates.to === undefined) {
            var dateFromData = this.selectedDates.from;
            var dateToData = data;
            if (dateFromData !== dateToData) {
                var isFirstDateMoreThanSecondDate = this.isFirstDateMoreThanSecondDate(dateFromData, dateToData);
                if (isFirstDateMoreThanSecondDate) {
                    var temp = this.selectedDates.from;
                    this.selectedDates.from = data;
                    this.selectedDates.to = temp;
                }
                else {
                    this.selectedDates.to = data;
                }
            }
        }
        else if (this.selectedDates.from !== undefined && this.selectedDates.to !== undefined) {
            this.selectedDates.from = data;
            this.selectedDates.to = undefined;
        }
    };
    CalendarModel.prototype.getSelectedDates = function () {
        return this.selectedDates;
    };
    return CalendarModel;
}());
/* harmony default export */ var CalendarModel_CalendarModel = (CalendarModel);

// CONCATENATED MODULE: ./src/blocks/calendar/ts/helpers/helpers.ts
var createTr = function () {
    var tr = document.createElement('tr');
    tr.classList.add('calendar__tr');
    return tr;
};
var createTd = function (dayNumberInMonth, isThisMonthDay) {
    if (isThisMonthDay === void 0) { isThisMonthDay = true; }
    var td = document.createElement('td');
    var classModifier = isThisMonthDay ? '' : 'calendar__td_other-month';
    td.textContent = dayNumberInMonth.toString();
    td.classList.add('calendar__td');
    if (classModifier !== '')
        td.classList.add(classModifier);
    return td;
};
var createHeadingTr = function () {
    var WEEK_DAYS_NAMES = [
        'Пн',
        'Вт',
        'Ср',
        'Чт',
        'Пт',
        'Сб',
        'Вс',
    ];
    var tr = createTr();
    tr.classList.add('calendar__tr_heading');
    WEEK_DAYS_NAMES.forEach(function (name) {
        var th = document.createElement('th');
        th.classList.add('calendar__th');
        th.textContent = name;
        tr.append(th);
    });
    return tr;
};
var getMonthName = function (monthNumber) {
    var MONTH_NAMES = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ];
    return MONTH_NAMES[monthNumber - 1];
};
var getWeekDayNumber = function (dayNumber) { return (dayNumber === 0 ? 6 : dayNumber - 1); };


// CONCATENATED MODULE: ./src/ts/EventEmitter/EventEmitter.ts
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this.events = {};
    }
    EventEmitter.prototype.on = function (eventName, callback) {
        if (this.events[eventName] === undefined)
            this.events[eventName] = [];
        this.events[eventName].push(callback);
    };
    EventEmitter.prototype.emit = function (eventName, arg) {
        var events = this.events[eventName];
        events.forEach(function (callbalck) {
            callbalck(arg);
        });
    };
    return EventEmitter;
}());
/* harmony default export */ var EventEmitter_EventEmitter = (EventEmitter);

// CONCATENATED MODULE: ./src/blocks/calendar/ts/CalendarView/CalendarView.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CalendarView_CalendarView = /** @class */ (function (_super) {
    __extends(CalendarView, _super);
    function CalendarView(calendarWidget) {
        var _this = _super.call(this) || this;
        _this.calendarWidget = calendarWidget;
        _this.initButtonElements();
        _this.addHandlers();
        return _this;
    }
    CalendarView.prototype.initButtonElements = function () {
        this.nextMonthButton = this.calendarWidget.querySelector('.calendar__button.calendar__button_next');
        this.prevMonthButton = this.calendarWidget.querySelector('.calendar__button.calendar__button_prev');
    };
    CalendarView.prototype.onNextMonthButtonClick = function () {
        this.emit('render-next-month', null);
    };
    CalendarView.prototype.onPrevMonthButtonClick = function () {
        this.emit('render-prev-month', null);
    };
    CalendarView.prototype.onCalendarTableClick = function (clickE) {
        var td = clickE.target;
        if (td instanceof HTMLElement && td.classList.contains('calendar__td')) {
            this.emit('select-date', td);
        }
    };
    CalendarView.prototype.addHandlers = function () {
        var calendarTable = this.calendarWidget.querySelector('.calendar__table');
        if (calendarTable) {
            calendarTable.addEventListener('click', this.onCalendarTableClick.bind(this));
        }
        if (this.nextMonthButton && this.prevMonthButton) {
            this.nextMonthButton.addEventListener('click', this.onNextMonthButtonClick.bind(this));
            this.prevMonthButton.addEventListener('click', this.onPrevMonthButtonClick.bind(this));
        }
    };
    CalendarView.prototype.getSelectedElementsIndex = function (selectedElementFirst, selectedElementLast) {
        var tds = Array.from(this.calendarWidget.querySelectorAll('.calendar__td'));
        var getIndex = function (element) { return tds.findIndex(function (td) { return td === element; }); };
        var selectedElementFirstIndex = selectedElementFirst
            ? getIndex(selectedElementFirst) : 0;
        var selectedElementLastIndex = selectedElementLast
            ? getIndex(selectedElementLast) : tds.length - 1;
        return {
            from: selectedElementFirstIndex,
            to: selectedElementLastIndex,
        };
    };
    // eslint-disable-next-line class-methods-use-this
    CalendarView.prototype.setCurrentDayClass = function (td) {
        td.classList.add('calendar__td_current-day');
    };
    // eslint-disable-next-line class-methods-use-this
    CalendarView.prototype.setSelectedClass = function (td, modifierPostfix) {
        td.classList.add('calendar__td', 'calendar__td_selected', "calendar__td_selected-" + modifierPostfix);
    };
    CalendarView.prototype.removeSelectedDates = function () {
        var selectedDates = this.calendarWidget.querySelectorAll('.calendar__td_selected');
        selectedDates.forEach(function (selectedDate) {
            selectedDate.classList.remove('calendar__td_selected', 'calendar__td_selected-first', 'calendar__td_selected-last');
        });
    };
    CalendarView.prototype.renderInterval = function (indexFrom, indexTo) {
        var indexFromValue = indexFrom;
        var indexToValue = indexTo;
        var tds = this.calendarWidget.querySelectorAll('.calendar__td');
        if (tds[indexFromValue].classList.contains('calendar__td_selected-first'))
            indexFromValue += 1;
        if (!(tds[indexToValue].classList.contains('calendar__td_selected-last')))
            indexToValue += 1;
        for (var i = indexFromValue; i < indexToValue; i += 1) {
            tds[i].classList.add('calendar__td_interval');
        }
    };
    CalendarView.prototype.removeInterval = function () {
        var intervalTds = this.calendarWidget.querySelectorAll('.calendar__td_interval');
        intervalTds.forEach(function (td) { return td.classList.remove('calendar__td_interval'); });
    };
    CalendarView.prototype.getTdByData = function (data) {
        var td = this.calendarWidget.querySelector(".calendar__td[data-date=\"" + data + "\"]");
        return td;
    };
    CalendarView.prototype.renderMonth = function (year, month) {
        var calendarTitle = this.calendarWidget.querySelector('.calendar__month');
        var calendarTable = this.calendarWidget.querySelector('.calendar__table');
        if (calendarTable && calendarTitle) {
            calendarTable.innerHTML = '';
            var date = new Date(year, month);
            calendarTitle.textContent = getMonthName(date.getMonth() + 1) + " " + date.getFullYear();
            calendarTable.append(createHeadingTr());
            var tr = void 0;
            var td = void 0;
            // Render days from prev month
            var firstMonthDay = getWeekDayNumber(date.getDay());
            if (firstMonthDay !== 0) {
                tr = createTr();
                var prevDate = new Date(date.getFullYear(), date.getMonth(), 0);
                var prevMonthLastNum = prevDate.getDate();
                for (var i = firstMonthDay; i > 0; i -= 1) {
                    prevDate.setDate(prevMonthLastNum - i + 1);
                    td = createTd(prevDate.getDate(), false);
                    var tdData = {
                        element: td,
                        date: prevDate.getDate() + "." + (prevDate.getMonth() + 1) + "." + prevDate.getFullYear(),
                    };
                    this.emit('set-data', tdData);
                    tr.append(td);
                }
                calendarTable.append(tr);
            }
            // Render current month days
            var monthFlag = date.getMonth();
            while (date.getMonth() === monthFlag) {
                var currentMonthDayNum = date.getDate();
                // if ponedel`nik, create new tr
                if (getWeekDayNumber(date.getDay()) === 0) {
                    tr = createTr();
                    calendarTable.append(tr);
                }
                // Zapolnyau table
                td = createTd(currentMonthDayNum);
                var tdData = {
                    element: td,
                    date: date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear(),
                };
                this.emit('set-data', tdData);
                // @ts-expect-error
                tr.append(td);
                // @ts-expect-error
                calendarTable.append(tr);
                this.emit('check-current-day', td);
                date.setDate(currentMonthDayNum + 1);
            }
            var DAYS_IN_WEEK = 7;
            var lastMonthDayNumberInWeek = getWeekDayNumber(date.getDay());
            if (lastMonthDayNumberInWeek !== 0) {
                for (var i = lastMonthDayNumberInWeek; i < DAYS_IN_WEEK; i += 1) {
                    var dayNumberInNextMonth = date.getDate();
                    td = createTd(dayNumberInNextMonth, false);
                    var tdData = {
                        element: td,
                        date: date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear(),
                    };
                    this.emit('set-data', tdData);
                    // @ts-expect-error
                    tr.append(td);
                    date.setDate(dayNumberInNextMonth + 1);
                }
                // @ts-expect-error
                calendarTable.append(tr);
            }
        }
    };
    return CalendarView;
}(EventEmitter_EventEmitter));
/* harmony default export */ var ts_CalendarView_CalendarView = (CalendarView_CalendarView);

// CONCATENATED MODULE: ./src/blocks/calendar/ts/CalendarPresenter/CalendarPresenter.ts
var CalendarPresenter = /** @class */ (function () {
    function CalendarPresenter(calendarModel, calendarView) {
        this.calendarModel = calendarModel;
        this.calendarView = calendarView;
        this.addViewHandlers();
    }
    CalendarPresenter.prototype.setData = function (tdData) {
        this.calendarModel.setTdData(tdData);
    };
    CalendarPresenter.prototype.checkCurrentDay = function (td) {
        var isDayCurrentDay = this.calendarModel.isCurrentDay(td);
        if (isDayCurrentDay)
            this.calendarView.setCurrentDayClass(td);
    };
    CalendarPresenter.prototype.selectDate = function (td) {
        this.calendarView.removeInterval();
        this.calendarView.removeSelectedDates();
        var data = this.calendarModel.getTdData(td);
        this.calendarModel.selectDate(data);
        var selectedDates = this.calendarModel.getSelectedDates();
        this.renderSelectedDatesAndInterval(selectedDates);
    };
    CalendarPresenter.prototype.addViewHandlers = function () {
        this.calendarView.on('set-data', this.setData.bind(this));
        this.calendarView.on('check-current-day', this.checkCurrentDay.bind(this));
        this.calendarView.on('select-date', this.selectDate.bind(this));
        this.calendarView.on('render-next-month', this.renderNextMonth.bind(this));
        this.calendarView.on('render-prev-month', this.renderPrevMonth.bind(this));
    };
    CalendarPresenter.prototype.renderSelectedDatesAndInterval = function (selectedDates) {
        var selectedTdFrom;
        var selectedTdTo;
        if (selectedDates.from) {
            selectedTdFrom = this.calendarView.getTdByData(selectedDates.from);
            if (selectedTdFrom)
                this.calendarView.setSelectedClass(selectedTdFrom, 'first');
        }
        if (selectedDates.to) {
            selectedTdTo = this.calendarView.getTdByData(selectedDates.to);
            if (selectedTdTo)
                this.calendarView.setSelectedClass(selectedTdTo, 'last');
        }
        if (selectedDates.from && selectedDates.to) {
            var selectedDateFrom = this.calendarModel.parseData(selectedDates.from);
            var selectedDateTo = this.calendarModel.parseData(selectedDates.to);
            var userDate = this.calendarModel.getUserDateState();
            var _a = this.calendarModel.getDateProps(), minMonth = _a.minMonth, maxMonth = _a.maxMonth;
            var isMaxUserMonthNum = userDate.month === maxMonth;
            var isMinUserMonthNum = userDate.month === minMonth;
            var isThisMonthInInterval = selectedDateFrom.month <= userDate.month + 1
                && userDate.month + 1 <= selectedDateTo.month;
            var isThisYearInInterval = selectedDateFrom.year <= userDate.year
                && userDate.year <= selectedDateTo.year;
            var isDatesCrossYears = ((selectedDateTo.year === selectedDateFrom.year + 1)
                && (userDate.year === selectedDateFrom.year)
                && isMaxUserMonthNum)
                || ((selectedDateFrom.year === selectedDateTo.year - 1)
                    && (userDate.year === selectedDateTo.year)
                    && isMinUserMonthNum);
            if (isDatesCrossYears || (isThisMonthInInterval && isThisYearInInterval)) {
                var _b = this.calendarView.getSelectedElementsIndex(
                // @ts-expect-error
                selectedTdFrom, 
                // @ts-expect-error
                selectedTdTo), from = _b.from, to = _b.to;
                this.calendarView.renderInterval(from, to);
            }
        }
    };
    CalendarPresenter.prototype.renderNextMonth = function () {
        this.calendarModel.incrementUserDateState();
        var _a = this.calendarModel.getUserDateState(), year = _a.year, month = _a.month;
        this.calendarView.renderMonth(year, month);
        var selectedDates = this.calendarModel.getSelectedDates();
        this.renderSelectedDatesAndInterval(selectedDates);
    };
    CalendarPresenter.prototype.renderPrevMonth = function () {
        this.calendarModel.decrementUserDateState();
        var _a = this.calendarModel.getUserDateState(), year = _a.year, month = _a.month;
        this.calendarView.renderMonth(year, month);
        var selectedDates = this.calendarModel.getSelectedDates();
        this.renderSelectedDatesAndInterval(selectedDates);
    };
    CalendarPresenter.prototype.resetSelectedDates = function () {
        this.calendarView.removeSelectedDates();
        this.calendarView.removeInterval();
        this.calendarModel.resetSelectedDates();
    };
    CalendarPresenter.prototype.init = function () {
        var _a = this.calendarModel.getUserDateState(), year = _a.year, month = _a.month;
        this.calendarView.renderMonth(year, month);
        var selectedDates = this.calendarModel.getSelectedDates();
        this.renderSelectedDatesAndInterval(selectedDates);
    };
    return CalendarPresenter;
}());
/* harmony default export */ var CalendarPresenter_CalendarPresenter = (CalendarPresenter);

// CONCATENATED MODULE: ./src/blocks/calendar/ts/Calendar.ts



var Calendar_Calendar = /** @class */ (function () {
    function Calendar(calendarWidget, selectedDates) {
        if (selectedDates === void 0) { selectedDates = {
            from: undefined,
            to: undefined,
        }; }
        this.initCalendarApp(calendarWidget, selectedDates);
    }
    Calendar.prototype.initCalendarApp = function (calendarWidget, selectedDates) {
        this.calendarModel = new CalendarModel_CalendarModel(selectedDates);
        this.calendarView = new ts_CalendarView_CalendarView(calendarWidget);
        this.calendarPresenter = new CalendarPresenter_CalendarPresenter(this.calendarModel, this.calendarView);
        this.calendarPresenter.init();
    };
    Calendar.prototype.getSelectedDates = function () {
        return this.calendarModel.getSelectedDates();
    };
    Calendar.prototype.resetSelectedDates = function () {
        this.calendarPresenter.resetSelectedDates();
    };
    return Calendar;
}());
/* harmony default export */ var ts_Calendar = (Calendar_Calendar);

// CONCATENATED MODULE: ./src/blocks/dropdown-calendar/ts/MONTH_NAMES.ts
var MONTH_NAMES = [
    'янв',
    'фев',
    'мар',
    'апр',
    'май',
    'июн',
    'июл',
    'авг',
    'сен',
    'окт',
    'ноя',
    'дек',
];
/* harmony default export */ var ts_MONTH_NAMES = (MONTH_NAMES);

// CONCATENATED MODULE: ./src/blocks/dropdown-calendar/ts/DropdownCalendar/DropdownCalendar.ts
var DropdownCalendar_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var DropdownCalendar_DropdownCalendar = /** @class */ (function (_super) {
    DropdownCalendar_extends(DropdownCalendar, _super);
    function DropdownCalendar(dropdownCalendarElement) {
        var _this = _super.call(this, {
            dropdownElement: dropdownCalendarElement,
            openClass: 'dropdown-calendar_opened',
            closeClass: 'dropdown-calendar_closed',
        }) || this;
        _this.initFields = function () {
            var inputsElements = _this.dropdownCalendarElement.querySelectorAll('.dates-input__input');
            var inputs = Array
                .from(inputsElements)
                .map(function (inputElement) { return inputElement; });
            var calendarContainer = _this.dropdownCalendarElement.querySelector('.dropdown-calendar__calendar');
            var applyButton = calendarContainer.querySelector('.button_apply');
            var resetButton = calendarContainer.querySelector('.button_reset');
            var selectedDates;
            var dataSelectedDates = _this.dropdownCalendarElement.dataset.selectedDates;
            if (dataSelectedDates) {
                selectedDates = JSON.parse(dataSelectedDates);
            }
            _this.inputs = inputs;
            _this.calendar = new ts_Calendar(calendarContainer, selectedDates);
            _this.applyButton = applyButton;
            _this.resetButton = resetButton;
            if (selectedDates) {
                var from = selectedDates.from, to = selectedDates.to;
                if (from && to) {
                    _this.setInputsValue(from, to);
                }
            }
        };
        _this.parseDate = function (date) {
            var correctDate = date
                .split('.')
                .map(function (datePiece) { return (datePiece.length === 1
                ? "0" + datePiece : datePiece); });
            var dateOptions = {
                day: correctDate[0],
                month: {
                    number: correctDate[1],
                    name: ts_MONTH_NAMES[+correctDate[1] - 1],
                },
                year: correctDate[2],
            };
            return dateOptions;
        };
        _this.setInputsValue = function () {
            var dates = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                dates[_i] = arguments[_i];
            }
            var _a = dates.map(function (date) { return _this.parseDate(date); }), dateFrom = _a[0], dateTo = _a[1];
            var length = _this.inputs.length;
            if (length === 1) {
                _this.inputs[0].value = dateFrom.day + " " + dateFrom.month.name + " - " + dateTo.day + " " + dateTo.month.name;
            }
            else if (length === 2) {
                _this.inputs[0].value = dateFrom.day + "." + dateFrom.month.number + "." + dateFrom.year;
                _this.inputs[1].value = dateTo.day + "." + dateTo.month.number + "." + dateTo.year;
            }
        };
        _this.dropdownCalendarElement = dropdownCalendarElement;
        _this.initFields();
        _this.addHandlers();
        return _this;
    }
    DropdownCalendar.prototype.addHandlers = function () {
        this.applyButton.addEventListener('click', this.onApplyButtonClick.bind(this));
        this.resetButton.addEventListener('click', this.onResetButtonClick.bind(this));
    };
    DropdownCalendar.prototype.onApplyButtonClick = function () {
        var selectedDates = this.calendar.getSelectedDates();
        if (selectedDates.from && selectedDates.to) {
            this.toggleOpened();
            this.setInputsValue(selectedDates.from, selectedDates.to);
        }
    };
    DropdownCalendar.prototype.onResetButtonClick = function () {
        this.inputs.forEach(function (input) { input.value = ''; });
        this.calendar.resetSelectedDates();
    };
    return DropdownCalendar;
}(Dropdown_Dropdown));
/* harmony default export */ var ts_DropdownCalendar_DropdownCalendar = (DropdownCalendar_DropdownCalendar);

// CONCATENATED MODULE: ./src/blocks/dropdown-goods/ts/GOODS_NAME_FORMS.ts
var GOODS_PROPS = {
    goods: [
        {
            nameForms: [['спальня', 'спальни', 'спален']],
            count: 0,
        },
        {
            nameForms: [['кровать', 'кровати', 'кроватей']],
            count: 0,
        },
        {
            nameForms: [
                ['ванная', 'ванные', 'ванных'],
                ['комната', 'комнаты', 'комнат'],
            ],
            count: 0,
        },
    ],
    guests: [
        {
            nameForms: [['взрослый', 'взрослых', 'взрослых']],
            count: 0,
        },
        {
            nameForms: [['ребенок', 'ребенка', 'детей']],
            count: 0,
        },
        {
            nameForms: [['младенец', 'младенца', 'младенцев']],
            count: 0,
        },
    ],
};
/* harmony default export */ var GOODS_NAME_FORMS = (GOODS_PROPS);

// CONCATENATED MODULE: ./src/blocks/goods/ts/GoodsModel/GoodsModel.ts
var GoodsModel = /** @class */ (function () {
    function GoodsModel(goodsProps, type) {
        this.goods = [];
        this.goodsProps = goodsProps;
        this.type = type;
        this.setGoods(this.goodsProps);
    }
    GoodsModel.prototype.getNameForm = function (nameForms, count) {
        var _this = this;
        var name = nameForms
            .map(function (forms) { return _this.wordDeclension(forms, count); })
            .reduce(function (accum, val) { return accum + " " + val; });
        return name;
    };
    GoodsModel.prototype.setGoods = function (goodsProps) {
        var _this = this;
        goodsProps.forEach(function (goodProp, index) {
            var nameForms = goodProp.nameForms, count = goodProp.count;
            var name = _this.getNameForm(nameForms, count);
            _this.goods[index] = {
                name: name,
                count: count,
            };
        });
    };
    GoodsModel.prototype.resetGoodsCount = function () {
        this.goodsProps.forEach(function (goodProps) { goodProps.count = 0; });
        this.setGoods(this.goodsProps);
    };
    GoodsModel.prototype.getType = function () {
        return this.type;
    };
    // eslint-disable-next-line class-methods-use-this
    GoodsModel.prototype.wordDeclension = function (goodForms, count) {
        var n = Math.abs(count) % 100;
        var n1 = n % 10;
        var decWord = goodForms[2];
        if (n > 10 && n < 20)
            decWord = goodForms[2];
        else if (n1 > 1 && n1 < 5)
            decWord = goodForms[1];
        else if (n1 === 1)
            decWord = goodForms[0];
        return decWord;
    };
    GoodsModel.prototype.increaseGood = function (index) {
        this.goodsProps[index].count += 1;
        var _a = this.goodsProps[index], nameForms = _a.nameForms, count = _a.count;
        var name = this.getNameForm(nameForms, count);
        this.goods[index] = {
            name: name,
            count: count,
        };
    };
    GoodsModel.prototype.decreaseGood = function (index) {
        var newCount = this.goodsProps[index].count - 1;
        if (newCount < 0)
            newCount = 0;
        this.goodsProps[index].count = newCount;
        var _a = this.goodsProps[index], nameForms = _a.nameForms, count = _a.count;
        var name = this.getNameForm(nameForms, count);
        this.goods[index] = {
            name: name,
            count: count,
        };
    };
    GoodsModel.prototype.getGoodByIndex = function (index) {
        return this.goods[index];
    };
    GoodsModel.prototype.getGoods = function () {
        return this.goods;
    };
    return GoodsModel;
}());
/* harmony default export */ var GoodsModel_GoodsModel = (GoodsModel);

// CONCATENATED MODULE: ./src/blocks/goods/ts/GoodsView/GoodsView.ts
var GoodsView_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var GoodsView = /** @class */ (function (_super) {
    GoodsView_extends(GoodsView, _super);
    function GoodsView(goodsWidget, inputElement, toggleOpenedCallback) {
        var _this = _super.call(this) || this;
        _this.goodsWidget = goodsWidget;
        _this.inputElement = inputElement;
        _this.toggleOpenedCallback = toggleOpenedCallback;
        _this.initControlButtons();
        _this.addControlsHandlers();
        return _this;
    }
    GoodsView.prototype.getGoodIndex = function (goodItemArg) {
        var goodsItems = Array.from(this.goodsWidget.querySelectorAll('.goods__good'));
        var index = goodsItems.findIndex(function (goodItem) { return goodItem === goodItemArg; });
        return index;
    };
    GoodsView.prototype.onPlusButtonClick = function (clickE) {
        var goodItem = clickE.target.parentElement;
        if (goodItem === null)
            return;
        var goodIndex = this.getGoodIndex(goodItem);
        this.emit('increase-good', goodIndex);
        this.emit('set-input-value', null);
    };
    GoodsView.prototype.onMinusButtonClick = function (clickE) {
        var goodItem = clickE.target.parentElement;
        if (goodItem === null)
            return;
        var goodIndex = this.getGoodIndex(goodItem);
        this.emit('decrease-good', goodIndex);
        this.emit('set-input-value', null);
    };
    GoodsView.prototype.addControlsHandlers = function () {
        if (this.applyButton || this.resetButton) {
            if (this.applyButton)
                this.applyButton.addEventListener('click', this.onApplyButtonClick.bind(this));
            if (this.resetButton)
                this.resetButton.addEventListener('click', this.onResetButtonClick.bind(this));
        }
    };
    GoodsView.prototype.onResetButtonClick = function () {
        this.inputElement.value = '';
        this.emit('reset-goods-count', null);
    };
    GoodsView.prototype.onApplyButtonClick = function () {
        var value = this.inputElement.value;
        if (value !== '')
            this.toggleOpenedCallback();
    };
    GoodsView.prototype.initControlButtons = function () {
        this.applyButton = this.goodsWidget.querySelector('.button_apply');
        this.resetButton = this.goodsWidget.querySelector('.button_reset');
    };
    GoodsView.prototype.setInputValue = function (value) {
        this.inputElement.value = value;
    };
    GoodsView.prototype.setGoodProps = function (index, name, count) {
        var goodsItems = this.goodsWidget.querySelectorAll('.goods__good');
        var goodsItemNameElement = goodsItems[index].querySelector('.goods__good-name');
        var goodsItemCountElement = goodsItems[index].querySelector('.goods__good-count');
        if (goodsItemCountElement && goodsItemNameElement) {
            goodsItemNameElement.textContent = name;
            goodsItemCountElement.textContent = count.toString();
        }
    };
    GoodsView.prototype.disableMinusButton = function (index) {
        var goodsItems = this.goodsWidget.querySelectorAll('.goods__good');
        var goodsItemMinusButton = goodsItems[index].querySelector('.goods__good-button_minus');
        goodsItemMinusButton.disabled = true;
    };
    GoodsView.prototype.enableMinusButton = function (index) {
        var goodsItems = this.goodsWidget.querySelectorAll('.goods__good');
        var goodsItemMinusButton = goodsItems[index].querySelector('.goods__good-button_minus');
        goodsItemMinusButton.disabled = false;
    };
    GoodsView.prototype.render = function (goodsArray) {
        var _this = this;
        var fragment = document.createDocumentFragment();
        goodsArray.forEach(function (_a) {
            var name = _a.name, count = _a.count;
            var li = document.createElement('li');
            var plusButton = document.createElement('button');
            var minusButton = document.createElement('button');
            var nameElement = document.createElement('span');
            var countElement = document.createElement('span');
            li.classList.add('goods__good');
            plusButton.classList.add('goods__good-button', 'goods__good-button_plus');
            minusButton.classList.add('goods__good-button', 'goods__good-button_minus');
            nameElement.classList.add('goods__good-name');
            countElement.classList.add('goods__good-count');
            plusButton.type = 'button';
            minusButton.type = 'button';
            plusButton.addEventListener('click', _this.onPlusButtonClick.bind(_this));
            minusButton.addEventListener('click', _this.onMinusButtonClick.bind(_this));
            plusButton.textContent = '+';
            minusButton.textContent = '-';
            nameElement.textContent = name;
            countElement.textContent = count.toString();
            li.append(nameElement, minusButton, countElement, plusButton);
            fragment.append(li);
        });
        var goodsList = this.goodsWidget.querySelector('.goods__list');
        goodsList.innerHTML = '';
        goodsList.append(fragment);
    };
    return GoodsView;
}(EventEmitter_EventEmitter));
/* harmony default export */ var GoodsView_GoodsView = (GoodsView);

// CONCATENATED MODULE: ./src/blocks/goods/ts/GoodsPresenter/GoodsPresenter.ts
var GoodsPresenter = /** @class */ (function () {
    function GoodsPresenter(goodsModel, goodsView) {
        this.goodsModel = goodsModel;
        this.goodsView = goodsView;
        this.addViewHandlers();
        this.init();
    }
    GoodsPresenter.prototype.decreaseGood = function (index) {
        this.goodsModel.decreaseGood(index);
        var _a = this.goodsModel.getGoodByIndex(index), name = _a.name, count = _a.count;
        if (count === 0)
            this.goodsView.disableMinusButton(index);
        this.goodsView.setGoodProps(index, name, count);
    };
    GoodsPresenter.prototype.increaseGood = function (index) {
        this.goodsModel.increaseGood(index);
        var _a = this.goodsModel.getGoodByIndex(index), name = _a.name, count = _a.count;
        if (count > 0)
            this.goodsView.enableMinusButton(index);
        this.goodsView.setGoodProps(index, name, count);
    };
    GoodsPresenter.prototype.getMessage = function () {
        var type = this.goodsModel.getType();
        var goods = this.goodsModel.getGoods();
        var message = '';
        if (type === 'goods') {
            message = goods
                .filter(function (_a) {
                var count = _a.count;
                return count > 0;
            })
                .map(function (_a) {
                var count = _a.count, name = _a.name;
                return count + " " + name;
            })
                .join(', ');
        }
        else if (type === 'guests') {
            var ADULT_MAX_INDEX = 1;
            var ADULT_NAME_FORMS = ['гость', 'гостя', 'гостей'];
            var adultCount = goods
                .slice(0, ADULT_MAX_INDEX + 1)
                .filter(function (_a) {
                var count = _a.count;
                return count > 0;
            })
                .map(function (_a) {
                var count = _a.count;
                return count;
            })
                .reduce(function (accum, current) { return accum + current; }, 0);
            var adultMessage = adultCount > 0
                ? adultCount + " " + this.goodsModel.wordDeclension(ADULT_NAME_FORMS, adultCount)
                : '';
            var babieMessage = goods
                .slice(ADULT_MAX_INDEX + 1)
                .filter(function (_a) {
                var count = _a.count;
                return count > 0;
            })
                .map(function (good) { return good.count + " " + good.name; })
                .join('');
            message = "" + adultMessage + (adultMessage !== '' && babieMessage !== '' ? ', ' : '') + babieMessage;
        }
        return message;
    };
    GoodsPresenter.prototype.setInputValue = function () {
        var message = this.getMessage();
        this.goodsView.setInputValue(message);
    };
    GoodsPresenter.prototype.resetGoodsCount = function () {
        this.goodsModel.resetGoodsCount();
        this.init();
    };
    GoodsPresenter.prototype.addViewHandlers = function () {
        this.goodsView.on('decrease-good', this.decreaseGood.bind(this));
        this.goodsView.on('increase-good', this.increaseGood.bind(this));
        this.goodsView.on('set-input-value', this.setInputValue.bind(this));
        this.goodsView.on('reset-goods-count', this.resetGoodsCount.bind(this));
    };
    GoodsPresenter.prototype.init = function () {
        var _this = this;
        var goods = this.goodsModel.getGoods();
        this.goodsView.render(goods);
        goods.forEach(function (_a, index) {
            var count = _a.count;
            if (count === 0)
                _this.goodsView.disableMinusButton(index);
        });
        this.setInputValue();
    };
    return GoodsPresenter;
}());
/* harmony default export */ var GoodsPresenter_GoodsPresenter = (GoodsPresenter);

// CONCATENATED MODULE: ./src/blocks/goods-input/ts/GoodsInput/GoodsInput.ts
var GoodsInput = /** @class */ (function () {
    function GoodsInput(inputElement) {
        this.inputElement = inputElement;
    }
    GoodsInput.prototype.toggleHightlight = function () {
        if (this.inputElement.classList.contains('goods-input__input_hightlight')) {
            this.inputElement.classList.remove('goods-input__input_hightlight');
        }
        else {
            this.inputElement.classList.add('goods-input__input_hightlight');
        }
    };
    return GoodsInput;
}());
/* harmony default export */ var GoodsInput_GoodsInput = (GoodsInput);

// CONCATENATED MODULE: ./src/blocks/dropdown-goods/ts/DropdownGoods/DropdownGoods.ts
var DropdownGoods_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var DropdownGoods_DropdownGoods = /** @class */ (function (_super) {
    DropdownGoods_extends(DropdownGoods, _super);
    function DropdownGoods(dropdownGoodsElement) {
        var _this = _super.call(this, {
            dropdownElement: dropdownGoodsElement,
            openClass: 'dropdown-goods_opened',
            closeClass: 'dropdown-goods_closed',
        }) || this;
        _this.getGoodsType = function (goodsElement) {
            var classArray = Array.from(goodsElement.classList);
            var classModIndex = classArray
                .findIndex(function (className) { return className.startsWith('goods_'); });
            var type = classArray[classModIndex].split('_')[1];
            return type;
        };
        _this.dropdownGoodsElement = dropdownGoodsElement;
        _this.init();
        return _this;
    }
    DropdownGoods.prototype.toggleOpened = function () {
        _super.prototype.toggleOpened.call(this);
        this.goodsInput.toggleHightlight();
    };
    DropdownGoods.prototype.init = function () {
        var goodsElement = this.dropdownGoodsElement.querySelector('.goods');
        var inputElement = this.dropdownGoodsElement.querySelector('.goods-input__input');
        var goodsType = this.getGoodsType(goodsElement);
        var goodsProps = JSON.parse(JSON.stringify(GOODS_NAME_FORMS[goodsType]));
        var dataGoodsCount = this.dropdownGoodsElement.dataset.goodsCount;
        if (dataGoodsCount) {
            var goodsCount_1 = JSON.parse(dataGoodsCount);
            goodsProps.forEach(function (goodProps, index) { goodProps.count = goodsCount_1[index]; });
        }
        this.goodsInput = new GoodsInput_GoodsInput(inputElement);
        var goodsModel = new GoodsModel_GoodsModel(goodsProps, goodsType);
        var goodsView = new GoodsView_GoodsView(this.dropdownGoodsElement, inputElement, this.toggleOpened.bind(this));
        // eslint-disable-next-line no-unused-vars
        var goodsPresenter = new GoodsPresenter_GoodsPresenter(goodsModel, goodsView);
    };
    return DropdownGoods;
}(Dropdown_Dropdown));
/* harmony default export */ var ts_DropdownGoods_DropdownGoods = (DropdownGoods_DropdownGoods);

// CONCATENATED MODULE: ./src/blocks/number-search/ts/NumberSearch/NumberSearch.ts


var NumberSearch_NumberSearch = /** @class */ (function () {
    function NumberSearch(numberSearchElement) {
        this.numberSearchElement = numberSearchElement;
        this.initFields();
    }
    NumberSearch.prototype.initFields = function () {
        var dropdownCalendarElement = this.numberSearchElement.querySelector('.dropdown-calendar');
        var dropdownGoodsElement = this.numberSearchElement.querySelector('.dropdown-goods');
        this.dropdownCalendar = new ts_DropdownCalendar_DropdownCalendar(dropdownCalendarElement);
        this.dropdownGoods = new ts_DropdownGoods_DropdownGoods(dropdownGoodsElement);
    };
    return NumberSearch;
}());
/* harmony default export */ var ts_NumberSearch_NumberSearch = (NumberSearch_NumberSearch);

// CONCATENATED MODULE: ./src/pages/index/ts/Index/Index.ts

var Index_Index = /** @class */ (function () {
    function Index(indexPage) {
        this.indexPage = indexPage;
        this.initFields();
    }
    Index.prototype.initFields = function () {
        var numberSearchElement = this.indexPage.querySelector('.number-search');
        this.numberSearch = new ts_NumberSearch_NumberSearch(numberSearchElement);
    };
    return Index;
}());
document.addEventListener('DOMContentLoaded', function () {
    var indexPageElement = document.querySelector('.index');
    if (indexPageElement instanceof HTMLElement) {
        // eslint-disable-next-line no-unused-vars
        var index = new Index_Index(indexPageElement);
    }
});

// CONCATENATED MODULE: ./src/blocks/about-room/ts/AboutRoom/AboutRoom.ts


var AboutRoom_AboutRoom = /** @class */ (function () {
    function AboutRoom(aboutRoomElement) {
        this.aboutRoomElement = aboutRoomElement;
        this.initFields();
    }
    AboutRoom.prototype.initFields = function () {
        var dropdownCalendarElement = this.aboutRoomElement.querySelector('.dropdown-calendar');
        var dropdownGoodsElement = this.aboutRoomElement.querySelector('.dropdown-goods');
        this.dropdownGoods = new ts_DropdownGoods_DropdownGoods(dropdownGoodsElement);
        this.dropdownCalendar = new ts_DropdownCalendar_DropdownCalendar(dropdownCalendarElement);
    };
    return AboutRoom;
}());
/* harmony default export */ var ts_AboutRoom_AboutRoom = (AboutRoom_AboutRoom);

// CONCATENATED MODULE: ./src/blocks/like-button/ts/LikeButtonModel/LikeButtonModel.ts
var LikeButtonModel = /** @class */ (function () {
    function LikeButtonModel(state) {
        this.state = state;
    }
    LikeButtonModel.prototype.setState = function (state) {
        this.state = state;
    };
    LikeButtonModel.prototype.getLikesCount = function () {
        return this.state.likeCount;
    };
    LikeButtonModel.prototype.getIsLikedState = function () {
        return this.state.isLiked;
    };
    return LikeButtonModel;
}());
/* harmony default export */ var LikeButtonModel_LikeButtonModel = (LikeButtonModel);

// CONCATENATED MODULE: ./src/blocks/like-button/ts/LikeButtonView/LikeButtonView.ts
var LikeButtonView_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LikeButtonView = /** @class */ (function (_super) {
    LikeButtonView_extends(LikeButtonView, _super);
    function LikeButtonView(likeButtonElement) {
        var _this = _super.call(this) || this;
        _this.likeButtonElement = likeButtonElement;
        _this.addLikeButtonHandler();
        return _this;
    }
    LikeButtonView.prototype.addLikeButtonHandler = function () {
        this.likeButtonElement.addEventListener('click', this.onLikeButtonClick.bind(this));
    };
    LikeButtonView.prototype.onLikeButtonClick = function () {
        this.emit('change-like-state', undefined);
    };
    LikeButtonView.prototype.setLikesCount = function (likesCount) {
        var likesCountElement = this.likeButtonElement.querySelector('.like-button__count');
        if (likesCountElement)
            likesCountElement.textContent = likesCount.toString();
    };
    LikeButtonView.prototype.setLikedState = function () {
        if (!(this.likeButtonElement.classList.contains('like-button_liked'))) {
            this.likeButtonElement.classList.add('like-button_liked');
        }
    };
    LikeButtonView.prototype.setUnlikedState = function () {
        if (this.likeButtonElement.classList.contains('like-button_liked')) {
            this.likeButtonElement.classList.remove('like-button_liked');
        }
    };
    return LikeButtonView;
}(EventEmitter_EventEmitter));
/* harmony default export */ var LikeButtonView_LikeButtonView = (LikeButtonView);

// CONCATENATED MODULE: ./src/blocks/like-button/ts/LikeButtonPresenter/LikeButtonPresenter.ts
var LikeButtonPresenter = /** @class */ (function () {
    function LikeButtonPresenter(likeButtonModel, likeButtonView) {
        this.likeButtonModel = likeButtonModel;
        this.likeButtonView = likeButtonView;
        this.addViewHandler();
    }
    LikeButtonPresenter.prototype.addViewHandler = function () {
        this.likeButtonView.on('change-like-state', this.changeLikeState.bind(this));
    };
    LikeButtonPresenter.prototype.changeLikeState = function () {
        var likeCount = this.likeButtonModel.getLikesCount();
        var isLiked = this.likeButtonModel.getIsLikedState();
        if (isLiked) {
            likeCount -= 1;
            this.likeButtonView.setUnlikedState();
            this.likeButtonView.setLikesCount(likeCount);
        }
        else {
            likeCount += 1;
            this.likeButtonView.setLikedState();
            this.likeButtonView.setLikesCount(likeCount);
        }
        this.likeButtonModel.setState({ isLiked: !isLiked, likeCount: likeCount });
    };
    return LikeButtonPresenter;
}());
/* harmony default export */ var LikeButtonPresenter_LikeButtonPresenter = (LikeButtonPresenter);

// CONCATENATED MODULE: ./src/blocks/like-button/ts/LikeButton.ts



var LikeButton_LikeButton = /** @class */ (function () {
    function LikeButton(likeButtonElement) {
        this.init(likeButtonElement);
    }
    LikeButton.prototype.init = function (likeButtonElement) {
        var likesCountElement = likeButtonElement.querySelector('.like-button__count');
        var isLiked = likeButtonElement.classList.contains('like-button_liked');
        if (likesCountElement) {
            var likesCount = likesCountElement.textContent
                ? parseInt(likesCountElement.textContent, 10) : 0;
            this.likeButtonModel = new LikeButtonModel_LikeButtonModel({
                likeCount: likesCount,
                isLiked: isLiked,
            });
            this.likeButtonView = new LikeButtonView_LikeButtonView(likeButtonElement);
            this.likeButtonPresenter = new LikeButtonPresenter_LikeButtonPresenter(this.likeButtonModel, this.likeButtonView);
        }
    };
    return LikeButton;
}());
/* harmony default export */ var ts_LikeButton = (LikeButton_LikeButton);

// CONCATENATED MODULE: ./src/blocks/doughnut/ts/Doughnut/DEFAULT_GRADIENTS_PROPS.ts
var DEFAULT_GRADIENT_NAMES = ['secondary', 'quaternary', 'tertiary', 'primary'];
var DEFAULT_GRADIENTS_PROPS = [
    {
        ID: DEFAULT_GRADIENT_NAMES[0],
        START_COLOR: '#6FCF97',
        STOP_COLOR: '#66D2EA',
    },
    {
        ID: DEFAULT_GRADIENT_NAMES[1],
        START_COLOR: '#FFE39C',
        STOP_COLOR: '#FFBA9C',
    },
    {
        ID: DEFAULT_GRADIENT_NAMES[2],
        START_COLOR: '#BC9CFF',
        STOP_COLOR: '#8BA4F9',
    },
    {
        ID: DEFAULT_GRADIENT_NAMES[3],
        START_COLOR: '#919191',
        STOP_COLOR: '#3D4975',
    },
];
/* harmony default export */ var Doughnut_DEFAULT_GRADIENTS_PROPS = (DEFAULT_GRADIENTS_PROPS);

// CONCATENATED MODULE: ./src/blocks/doughnut/ts/Doughnut/DoughnutModel/DoughnutModel.ts

var DoughnutModel_DoughnutModel = /** @class */ (function () {
    function DoughnutModel(doughnutProps) {
        this.doughnutProps = doughnutProps;
        this.initFields();
    }
    DoughnutModel.prototype.initFields = function () {
        this.setDoughnutDefaults();
        this.setCircleProps();
        this.setColorThemes();
    };
    DoughnutModel.prototype.setDoughnutDefaults = function () {
        var STROKE_WIDTH = 4;
        var SIZE = 120;
        var RADIUS = (SIZE - (STROKE_WIDTH * 2)) / 2;
        var CX = (SIZE + STROKE_WIDTH) / 2;
        var CY = (SIZE + STROKE_WIDTH) / 2;
        var CIRCLE_WIDTH = 2 * Math.PI * RADIUS;
        var GAP = 2;
        this.doughnutDefaults = {
            SIZE: SIZE,
            RADIUS: RADIUS,
            CX: CX,
            CY: CY,
            CIRCLE_WIDTH: CIRCLE_WIDTH,
            GAP: GAP,
        };
    };
    DoughnutModel.prototype.getDoughnutPieceWidths = function (totalValue) {
        var CIRCLE_WIDTH = this.doughnutDefaults.CIRCLE_WIDTH;
        var values = this.doughnutProps.map(function (_a) {
            var value = _a.value;
            return value;
        });
        var doughnutPieceWidths = values
            .map(function (val) {
            var value = (val / totalValue);
            var width = (CIRCLE_WIDTH * value);
            return width;
        });
        return doughnutPieceWidths;
    };
    DoughnutModel.prototype.getDoughnutPieceOffsets = function (doughnutPieceWidths) {
        var doughnutPieceOffsets = [];
        var GAP = this.doughnutDefaults.GAP;
        doughnutPieceWidths.forEach(function (width, index) {
            var offset = 0;
            if (index !== 0) {
                offset = doughnutPieceOffsets[index - 1] - doughnutPieceWidths[index - 1];
            }
            doughnutPieceOffsets.push(offset - GAP);
        });
        return doughnutPieceOffsets;
    };
    DoughnutModel.prototype.setCircleProps = function () {
        this.circlesProps = [];
        var values = this.doughnutProps.map(function (_a) {
            var value = _a.value;
            return value;
        });
        var totalValue = values.reduce(function (accum, current) { return accum + current; }, 0);
        var doughnutPieceWidths = this.getDoughnutPieceWidths(totalValue);
        var doughnutPieceOffsets = this.getDoughnutPieceOffsets(doughnutPieceWidths);
        var length = values.length;
        var CIRCLE_WIDTH = this.doughnutDefaults.CIRCLE_WIDTH;
        for (var i = 0; i < length; i += 1) {
            var doughnutPieceWidth = doughnutPieceWidths[i];
            var doughnutPieceOffset = doughnutPieceOffsets[i];
            this.circlesProps.push({
                strokeDasharray: doughnutPieceWidth + " " + CIRCLE_WIDTH,
                strokeDashoffset: "" + doughnutPieceOffset,
            });
        }
    };
    DoughnutModel.prototype.setColorThemes = function () {
        this.colorThemes = [];
        var createSvgGradient = function (startColor, stopColor, id) { return "\n      <linearGradient id=\"" + id + "\" x1=\"60\" y1=\"1\" x2=\"60\" y2=\"121\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"" + startColor + "\"/>\n        <stop offset=\"1\" stop-color=\"" + stopColor + "\"/>\n      </linearGradient>\n    "; };
        var createCssGradient = function (startColor, stopColor) { return "\n      linear-gradient(180deg, " + startColor + " 0%, " + stopColor + " 100%)\n    "; };
        var getRandomColor = function () {
            var MAX_HEX = 255;
            var getRandomHex = function () { return Math.round(Math.random() * MAX_HEX); };
            var randomColor = "rgb(" + getRandomHex() + "," + getRandomHex() + "," + getRandomHex() + ")";
            return randomColor;
        };
        var values = this.doughnutProps.map(function (_a) {
            var value = _a.value;
            return value;
        });
        var valuesLength = values.length;
        for (var i = 0; i < valuesLength; i += 1) {
            var length_1 = Doughnut_DEFAULT_GRADIENTS_PROPS.length;
            var isDefaultGradientPropsLengthLessThanCurrentIndex = length_1 < i + 1;
            var id = void 0;
            var svgGradient = void 0;
            var cssGradient = void 0;
            var color = void 0;
            if (isDefaultGradientPropsLengthLessThanCurrentIndex) {
                var startColor = getRandomColor();
                var stopColor = getRandomColor();
                id = i.toString();
                svgGradient = createSvgGradient(startColor, stopColor, id);
                cssGradient = createCssGradient(startColor, stopColor);
                color = startColor;
            }
            else {
                var _a = Doughnut_DEFAULT_GRADIENTS_PROPS[i], ID = _a.ID, START_COLOR = _a.START_COLOR, STOP_COLOR = _a.STOP_COLOR;
                id = ID;
                color = STOP_COLOR;
                svgGradient = createSvgGradient(START_COLOR, STOP_COLOR, ID);
                cssGradient = createCssGradient(START_COLOR, STOP_COLOR);
            }
            this.colorThemes.push({
                id: id,
                svgGradient: svgGradient,
                cssGradient: cssGradient,
                color: color,
            });
        }
    };
    DoughnutModel.prototype.getColorThemes = function () {
        return this.colorThemes;
    };
    DoughnutModel.prototype.getCirclesProps = function () {
        return this.circlesProps;
    };
    DoughnutModel.prototype.getDoughnutDefaults = function () {
        return this.doughnutDefaults;
    };
    DoughnutModel.prototype.getValues = function () {
        var values = this.doughnutProps.map(function (_a) {
            var value = _a.value;
            return value;
        });
        return values;
    };
    DoughnutModel.prototype.getNames = function () {
        var names = this.doughnutProps.map(function (_a) {
            var name = _a.name;
            return name;
        });
        return names;
    };
    return DoughnutModel;
}());
/* harmony default export */ var Doughnut_DoughnutModel_DoughnutModel = (DoughnutModel_DoughnutModel);

// CONCATENATED MODULE: ./src/blocks/doughnut/ts/Doughnut/DoughnutView/DoughnutView.ts
var DoughnutView_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DoughnutView = /** @class */ (function (_super) {
    DoughnutView_extends(DoughnutView, _super);
    function DoughnutView(doughnutElement) {
        var _this = _super.call(this) || this;
        _this.getDoughnutPiece = function (radius, cx, cy, gradientId, strokeDasharray, strokeDashoffset) {
            var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.classList.add('doughnut__circle');
            circle.style.fill = 'none';
            circle.setAttribute('r', "" + radius);
            circle.setAttribute('cx', "" + cx);
            circle.setAttribute('cy', "" + cy);
            circle.style.stroke = "url(#" + gradientId + ")";
            circle.style.strokeDasharray = strokeDasharray;
            circle.style.strokeDashoffset = strokeDashoffset;
            return circle;
        };
        _this.doughnutElement = doughnutElement;
        _this.initFields();
        return _this;
    }
    DoughnutView.prototype.initFields = function () {
        this.initDoughnutContentElement();
        this.initDoughnutAboutElements();
    };
    DoughnutView.prototype.addHandlers = function () {
        this.addCirclesHandlers();
    };
    DoughnutView.prototype.initDoughnutContentElement = function () {
        this.doughnutContentElement = document.createElement('div');
        this.doughnutContentElement.classList.add('doughnut__content');
        this.doughnutElement.append(this.doughnutContentElement);
    };
    DoughnutView.prototype.initDoughnutAboutElements = function () {
        var aboutElement = document.createElement('div');
        var aboutCountElement = document.createElement('span');
        var aboutTextElement = document.createElement('span');
        aboutElement.classList.add('doughnut__about');
        aboutCountElement.classList.add('doughnut__about-count');
        aboutTextElement.classList.add('doughnut__about-text');
        aboutCountElement.textContent = '0';
        aboutTextElement.textContent = 'Голосов';
        aboutElement.append(aboutCountElement, aboutTextElement);
        this.doughnutAboutElement = aboutElement;
        this.doughnutAboutCountElement = aboutCountElement;
    };
    DoughnutView.prototype.onCircleMouseEnter = function (_a) {
        var target = _a.target;
        var circle = target;
        var circleIndex = this.circles.findIndex(function (c) { return c === circle; });
        if (circleIndex !== -1) {
            this.highlightCircleByIndex(circleIndex);
            this.emit('set-about-props-by-index', circleIndex);
        }
    };
    DoughnutView.prototype.addCirclesHandlers = function () {
        var _this = this;
        this.circles.forEach(function (circle) {
            circle.addEventListener('mouseenter', _this.onCircleMouseEnter.bind(_this));
        });
    };
    DoughnutView.prototype.highlightCircleByIndex = function (index) {
        var HOVER_CLASS = 'doughnut__circle_hovered';
        this.circles.forEach(function (circle) { return circle.classList.remove(HOVER_CLASS); });
        this.circles[index].classList.add(HOVER_CLASS);
    };
    DoughnutView.prototype.setAboutProps = function (color, value) {
        this.doughnutAboutElement.style.color = color;
        this.doughnutAboutCountElement.textContent = value;
    };
    DoughnutView.prototype.renderList = function (names, cssGradients) {
        var fragment = document.createDocumentFragment();
        var uList = document.createElement('ul');
        uList.classList.add('doughnut__legend-list');
        names.forEach(function (name, index) {
            var lItem = document.createElement('li');
            var lItemFeature = document.createElement('div');
            var lItemText = document.createElement('span');
            lItem.classList.add('doughnut__legend-item');
            lItemFeature.classList.add('doughnut__legend-feature');
            lItemText.classList.add('doughnut__legend-text');
            lItemText.textContent = name;
            lItemFeature.style.backgroundImage = cssGradients[index];
            lItem.append(lItemFeature, lItemText);
            uList.append(lItem);
        });
        fragment.append(uList);
        this.doughnutContentElement.append(fragment);
    };
    DoughnutView.prototype.highlightDefaultCircle = function () {
        var DEFAULT_CIRCLE_INDEX = 2;
        this.highlightCircleByIndex(DEFAULT_CIRCLE_INDEX);
        this.emit('set-about-props-by-index', DEFAULT_CIRCLE_INDEX);
    };
    DoughnutView.prototype.renderDoughnut = function (doughnutDefaults, circlesProps, svgGradients, svgGradientsIds) {
        var _this = this;
        this.circles = [];
        var CX = doughnutDefaults.CX, CY = doughnutDefaults.CY, RADIUS = doughnutDefaults.RADIUS, SIZE = doughnutDefaults.SIZE;
        var svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgElement.classList.add('doughnut__svg');
        svgElement.innerHTML = svgGradients;
        svgElement.setAttribute('viewBox', "0 0 " + (SIZE + 4) + " " + (SIZE + 4));
        svgElement.style.width = SIZE + 4 + "px";
        svgElement.style.height = SIZE + 4 + "px";
        var fragment = document.createDocumentFragment();
        circlesProps.forEach(function (_a, index) {
            var strokeDasharray = _a.strokeDasharray, strokeDashoffset = _a.strokeDashoffset;
            var circle = _this.getDoughnutPiece(RADIUS, CX, CY, svgGradientsIds[index], strokeDasharray, strokeDashoffset);
            _this.circles.push(circle);
            fragment.append(circle);
        });
        svgElement.append(fragment);
        var doughnutDiagramWrapper = document.createElement('div');
        doughnutDiagramWrapper.classList.add('doughnut__diagram-wrapper');
        doughnutDiagramWrapper.append(svgElement, this.doughnutAboutElement);
        this.doughnutContentElement.append(doughnutDiagramWrapper);
        this.addHandlers();
        this.highlightDefaultCircle();
    };
    return DoughnutView;
}(EventEmitter_EventEmitter));
/* harmony default export */ var DoughnutView_DoughnutView = (DoughnutView);

// CONCATENATED MODULE: ./src/blocks/doughnut/ts/Doughnut/DoughnutPresenter/DoughnutPresenter.ts
var DoughnutPresenter = /** @class */ (function () {
    function DoughnutPresenter(doughnutModel, doughnutView) {
        this.doughnutModel = doughnutModel;
        this.doughnutView = doughnutView;
        this.init();
    }
    DoughnutPresenter.prototype.init = function () {
        this.addViewHandlers();
        this.renderDoughnut();
    };
    DoughnutPresenter.prototype.addViewHandlers = function () {
        this.doughnutView.on('set-about-props-by-index', this.setAboutPropsByIndex.bind(this));
    };
    DoughnutPresenter.prototype.setAboutPropsByIndex = function (index) {
        var color = this.doughnutModel.getColorThemes()[index].color;
        var value = this.doughnutModel.getValues()[index].toString();
        this.doughnutView.setAboutProps(color, value);
    };
    DoughnutPresenter.prototype.renderDoughnut = function () {
        var circlesProps = this.doughnutModel.getCirclesProps();
        var doughtnutDefaults = this.doughnutModel.getDoughnutDefaults();
        var colorThemes = this.doughnutModel.getColorThemes();
        var names = this.doughnutModel.getNames();
        var cssGradients = colorThemes.map(function (_a) {
            var cssGradient = _a.cssGradient;
            return cssGradient;
        });
        var svgGradients = colorThemes
            .map(function (_a) {
            var svgGradient = _a.svgGradient;
            return svgGradient;
        })
            .join('');
        var svgGradientsIds = colorThemes
            .map(function (_a) {
            var id = _a.id;
            return id;
        });
        this.doughnutView
            .renderDoughnut(doughtnutDefaults, circlesProps, svgGradients, svgGradientsIds);
        this.doughnutView
            .renderList(names, cssGradients);
    };
    return DoughnutPresenter;
}());
/* harmony default export */ var DoughnutPresenter_DoughnutPresenter = (DoughnutPresenter);

// CONCATENATED MODULE: ./src/blocks/doughnut/ts/Doughnut/Doughnut.ts



var Doughnut_Doughnut = /** @class */ (function () {
    function Doughnut(doughnutElement) {
        this.initDoughnut = function (doughnutElement) {
            var dataDoughnutProps = doughnutElement.dataset.doughnutProps;
            var doughnutProps = [];
            if (dataDoughnutProps) {
                doughnutProps.push.apply(doughnutProps, JSON.parse(dataDoughnutProps));
            }
            var doughnutModel = new Doughnut_DoughnutModel_DoughnutModel(doughnutProps);
            var doughnutView = new DoughnutView_DoughnutView(doughnutElement);
            // eslint-disable-next-line no-unused-vars
            var doughnutPresenter = new DoughnutPresenter_DoughnutPresenter(doughnutModel, doughnutView);
        };
        this.initDoughnut(doughnutElement);
    }
    return Doughnut;
}());
/* harmony default export */ var ts_Doughnut_Doughnut = (Doughnut_Doughnut);

// CONCATENATED MODULE: ./src/pages/room-details/ts/RoomDetails/RoomDetails.ts



var RoomDetails_RoomDetails = /** @class */ (function () {
    function RoomDetails(roomDetailsElement) {
        this.roomDetailsElement = roomDetailsElement;
        this.likeButtons = [];
        this.initFields();
    }
    RoomDetails.prototype.initFields = function () {
        var _this = this;
        var likeButtonElements = this.roomDetailsElement.querySelectorAll('.like-button');
        var doughnutElement = this.roomDetailsElement.querySelector('.doughnut');
        var aboutRoomElement = this.roomDetailsElement.querySelector('.about-room');
        this.aboutRoom = new ts_AboutRoom_AboutRoom(aboutRoomElement);
        this.doughnut = new ts_Doughnut_Doughnut(doughnutElement);
        likeButtonElements.forEach(function (likeButtonElement) {
            _this.likeButtons.push(new ts_LikeButton(likeButtonElement));
        });
    };
    return RoomDetails;
}());
document.addEventListener('DOMContentLoaded', function () {
    var roomDetailsElement = document.querySelector('.room-details');
    if (roomDetailsElement instanceof HTMLElement) {
        // eslint-disable-next-line no-unused-vars
        var roomDetails = new RoomDetails_RoomDetails(roomDetailsElement);
    }
});

// CONCATENATED MODULE: ./src/blocks/range-slider/ts/RangeSliderModel/RangeSliderModel.ts
var RangeSliderModel = /** @class */ (function () {
    function RangeSliderModel(currentValue, valuesRange) {
        this.currentValue = currentValue;
        this.postfix = '₽';
        this.valuesRange = valuesRange;
    }
    RangeSliderModel.prototype.getValuesRange = function () {
        return this.valuesRange;
    };
    RangeSliderModel.prototype.getCurrentValue = function () {
        return this.currentValue;
    };
    RangeSliderModel.prototype.setCurrentValue = function (currentValue) {
        this.currentValue = currentValue;
    };
    RangeSliderModel.prototype.getPostfix = function () {
        return this.postfix;
    };
    return RangeSliderModel;
}());
/* harmony default export */ var RangeSliderModel_RangeSliderModel = (RangeSliderModel);

// CONCATENATED MODULE: ./src/blocks/range-slider/ts/RangeSliderView/RangeSliderView.ts
var RangeSliderView_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RangeSliderView = /** @class */ (function (_super) {
    RangeSliderView_extends(RangeSliderView, _super);
    function RangeSliderView(rangeSliderElement) {
        var _this = _super.call(this) || this;
        _this.getThumbModifier = function (thumb) {
            var classArray = Array.from(thumb.classList);
            var classModIndex = classArray
                .findIndex(function (className) { return className.startsWith('range-slider__thumb_'); });
            var modifier = classArray[classModIndex].split('range-slider__thumb_')[1];
            return modifier;
        };
        _this.rangeSliderElement = rangeSliderElement;
        _this.initFields();
        _this.addHandlers();
        return _this;
    }
    RangeSliderView.prototype.initFields = function () {
        this.priceElement = this.rangeSliderElement.querySelector('.range-slider__price');
        this.line = this.rangeSliderElement.querySelector('.range-slider__line');
        this.rangeLine = this.line.querySelector('.range-slider__range-line');
        this.thumbFrom = this.line.querySelector('.range-slider__thumb_from');
        this.thumbTo = this.line.querySelector('.range-slider__thumb_to');
    };
    RangeSliderView.prototype.addHandlers = function () {
        var _this = this;
        var thumbs = [this.thumbFrom, this.thumbTo];
        thumbs.forEach(function (thumb) {
            thumb.addEventListener('mousedown', _this.onThumbMouseDown.bind(_this));
        });
    };
    RangeSliderView.prototype.onThumbMouseDown = function (downE) {
        var _this = this;
        var thumb = downE.currentTarget;
        var modifier = this.getThumbModifier(thumb);
        var zIndex = parseInt(getComputedStyle(thumb).getPropertyValue('z-index'), 10);
        var _a = this.rangeSliderElement.getBoundingClientRect(), left = _a.left, width = _a.width;
        var maxStartCoord = left + width;
        var minStartCoord = left;
        var sliderWidth = this.getSliderLineWidth();
        thumb.style.zIndex = (zIndex + 1).toString();
        var startCoord = downE.clientX;
        var onMouseMove = function (moveE) {
            var shift = startCoord - moveE.clientX;
            var newCoord = thumb.offsetLeft - shift;
            startCoord = moveE.clientX;
            if (startCoord > maxStartCoord)
                startCoord = maxStartCoord;
            else if (startCoord < minStartCoord)
                startCoord = minStartCoord;
            if (newCoord > sliderWidth)
                newCoord = sliderWidth;
            else if (newCoord < 0)
                newCoord = 0;
            thumb.style.left = newCoord + "px";
            _this.resizeRangeLine();
            _this.emit('change-current-value', { coord: newCoord, modifier: modifier });
        };
        var bindedOnMouseMove = onMouseMove.bind(this);
        var onMouseUp = function () {
            thumb.style.zIndex = zIndex.toString();
            document.removeEventListener('mousemove', bindedOnMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };
        document.addEventListener('mousemove', bindedOnMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };
    RangeSliderView.prototype.setPriceElementValues = function (currentValue, prefix) {
        var regExp = /\d{1,3}(?=(\d{3})+(?!\d))/g;
        var charToReplace = '$& ';
        var to = currentValue.to, from = currentValue.from;
        var toString = to.toString().replace(regExp, charToReplace);
        var fromString = from.toString().replace(regExp, charToReplace);
        this.priceElement.textContent = "" + fromString + prefix + " - " + toString + prefix;
    };
    RangeSliderView.prototype.setThumbCoord = function (modifier, coord) {
        var thumb = this.thumbFrom;
        if (modifier === 'to') {
            thumb = this.thumbTo;
        }
        thumb.style.left = coord + "px";
    };
    RangeSliderView.prototype.getSliderLineWidth = function () {
        var sliderLineWidth = this.line.getBoundingClientRect().width;
        var thumbWidth = this.thumbFrom.getBoundingClientRect().width;
        return sliderLineWidth - thumbWidth;
    };
    RangeSliderView.prototype.resizeRangeLine = function () {
        var thumbs = [this.thumbFrom, this.thumbTo];
        var thumbsCoords = thumbs
            .map(function (thumb) { return thumb.offsetLeft; })
            .sort(function (coordA, coordB) { return coordB - coordA; });
        var thumbGap = this.thumbFrom.getBoundingClientRect().width / 2;
        var rangeLineWidth = thumbsCoords.reduce(function (accum, curr) { return accum - curr; });
        var rangeLineStartCoord = thumbsCoords[thumbsCoords.length - 1];
        this.rangeLine.style.width = rangeLineWidth + "px";
        this.rangeLine.style.left = rangeLineStartCoord + thumbGap + "px";
    };
    return RangeSliderView;
}(EventEmitter_EventEmitter));
/* harmony default export */ var RangeSliderView_RangeSliderView = (RangeSliderView);

// CONCATENATED MODULE: ./src/blocks/range-slider/ts/RangeSliderPresenter/RangeSliderPresenter.ts
var RangeSliderPresenter = /** @class */ (function () {
    function RangeSliderPresenter(rangeSliderView, rangeSliderModel) {
        this.rangeSliderView = rangeSliderView;
        this.rangeSliderModel = rangeSliderModel;
        this.addViewHandler();
    }
    RangeSliderPresenter.prototype.addViewHandler = function () {
        this.rangeSliderView.on('change-current-value', this.changeCurrentValue.bind(this));
    };
    RangeSliderPresenter.prototype.parseCoordToValue = function (coord) {
        var width = this.rangeSliderView.getSliderLineWidth();
        var valuesRange = this.rangeSliderModel.getValuesRange();
        var value = ((valuesRange.max - valuesRange.min) * (coord / width)) + valuesRange.min;
        return Math.floor(value);
    };
    RangeSliderPresenter.prototype.parseValueToCoord = function (value) {
        var width = this.rangeSliderView.getSliderLineWidth();
        var valuesRange = this.rangeSliderModel.getValuesRange();
        var coord = width * (value / (valuesRange.max - valuesRange.min));
        return coord;
    };
    RangeSliderPresenter.prototype.setPriceValue = function () {
        var postfix = this.rangeSliderModel.getPostfix();
        var currentValue = this.rangeSliderModel.getCurrentValue();
        this.rangeSliderView.setPriceElementValues(currentValue, postfix);
    };
    RangeSliderPresenter.prototype.changeCurrentValue = function (thumbOptions) {
        var modifier = thumbOptions.modifier, coord = thumbOptions.coord;
        var currentValue = this.rangeSliderModel.getCurrentValue();
        var value = this.parseCoordToValue(coord);
        currentValue[modifier] = value;
        this.rangeSliderModel.setCurrentValue(currentValue);
        this.setPriceValue();
    };
    RangeSliderPresenter.prototype.init = function () {
        var _this = this;
        var currentValue = this.rangeSliderModel.getCurrentValue();
        var currentValueKeys = Object.keys(currentValue);
        currentValueKeys.forEach(function (key) {
            var coord = _this.parseValueToCoord(currentValue[key]);
            _this.rangeSliderView.setThumbCoord(key, coord);
        });
        this.rangeSliderView.resizeRangeLine();
        this.setPriceValue();
    };
    return RangeSliderPresenter;
}());
/* harmony default export */ var RangeSliderPresenter_RangeSliderPresenter = (RangeSliderPresenter);

// CONCATENATED MODULE: ./src/blocks/range-slider/ts/RangeSlider.ts



var RangeSlider_RangeSlider = /** @class */ (function () {
    function RangeSlider(rangeSliderElement) {
        this.rangeSliderElement = rangeSliderElement;
        this.init();
    }
    RangeSlider.prototype.init = function () {
        var valuesRange = {
            min: 0,
            max: 15000,
        };
        var currentValue = {
            from: 5000,
            to: 10000,
        };
        var dataValuesRange = this.rangeSliderElement.dataset.valuesRange;
        var dataCurrentValue = this.rangeSliderElement.dataset.currentValue;
        if (dataValuesRange && dataCurrentValue) {
            valuesRange = JSON.parse(dataValuesRange);
            currentValue = JSON.parse(dataCurrentValue);
        }
        var rangeSliderModel = new RangeSliderModel_RangeSliderModel(currentValue, valuesRange);
        var rangeSliderView = new RangeSliderView_RangeSliderView(this.rangeSliderElement);
        var rangeSliderPresenter = new RangeSliderPresenter_RangeSliderPresenter(rangeSliderView, rangeSliderModel);
        rangeSliderPresenter.init();
    };
    return RangeSlider;
}());
/* harmony default export */ var ts_RangeSlider = (RangeSlider_RangeSlider);

// CONCATENATED MODULE: ./src/blocks/checkboxes/ts/Checkboxes/Checkboxes.ts
var Checkboxes_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Checkboxes = /** @class */ (function (_super) {
    Checkboxes_extends(Checkboxes, _super);
    function Checkboxes(checkboxesElement) {
        var _this = _super.call(this, {
            dropdownElement: checkboxesElement,
            openClass: 'checkboxes_opened',
            closeClass: 'checkboxes_closed',
        }) || this;
        _this.checkboxesElement = checkboxesElement;
        return _this;
    }
    return Checkboxes;
}(Dropdown_Dropdown));
/* harmony default export */ var Checkboxes_Checkboxes = (Checkboxes);

// CONCATENATED MODULE: ./src/blocks/room/ts/Room/RoomModel/RoomModel.ts
var RoomModel = /** @class */ (function () {
    function RoomModel() {
        var photoUrls = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            photoUrls[_i] = arguments[_i];
        }
        this.photoUrls = photoUrls;
        this.setCurrentPhotoProps(0);
    }
    RoomModel.prototype.setCurrentPhotoProps = function (photoIndex) {
        var index = photoIndex;
        var maxIndex = this.photoUrls.length - 1;
        if (index > maxIndex)
            index = maxIndex;
        else if (index < 0)
            index = 0;
        this.currentPhotoProps = {
            url: this.photoUrls[index],
            index: index,
        };
    };
    RoomModel.prototype.getNextPhotoProps = function () {
        var index = this.currentPhotoProps.index;
        this.setCurrentPhotoProps(index + 1);
        return this.currentPhotoProps;
    };
    RoomModel.prototype.getPrevPhotoProps = function () {
        var index = this.currentPhotoProps.index;
        this.setCurrentPhotoProps(index - 1);
        return this.currentPhotoProps;
    };
    RoomModel.prototype.getPhotoUrlByIndex = function (index) {
        var url = this.photoUrls[index];
        return url;
    };
    return RoomModel;
}());
/* harmony default export */ var RoomModel_RoomModel = (RoomModel);

// CONCATENATED MODULE: ./src/blocks/room/ts/Room/RoomView/RoomView.ts
var RoomView_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RoomView = /** @class */ (function (_super) {
    RoomView_extends(RoomView, _super);
    function RoomView(roomElement) {
        var _this = _super.call(this) || this;
        _this.onButtonClick = function (_a) {
            var target = _a.target;
            var button = target;
            if (button.classList.contains('room__preview-button_prev')) {
                _this.emit('render-prev-photo', null);
            }
            else if (button.classList.contains('room__preview-button_next')) {
                _this.emit('render-next-photo', null);
            }
        };
        _this.roomElement = roomElement;
        _this.initButtons();
        _this.initRoomImgElement();
        _this.initRoomPreviewDots();
        return _this;
    }
    RoomView.prototype.initButtons = function () {
        var _this = this;
        this.prevButton = this.roomElement.querySelector('.room__preview-button_prev');
        this.nextButton = this.roomElement.querySelector('.room__preview-button_next');
        [this.prevButton, this.nextButton].forEach(function (button) { button.addEventListener('click', _this.onButtonClick.bind(_this)); });
    };
    RoomView.prototype.initRoomImgElement = function () {
        this.roomImgElement = this.roomElement.querySelector('.room__preview-img');
    };
    RoomView.prototype.initRoomPreviewDots = function () {
        var _this = this;
        this.roomPreviewDots = this.roomElement.querySelectorAll('.room__preview-item');
        this.roomPreviewDots.forEach(function (dot) { dot.addEventListener('click', _this.onDotClick.bind(_this)); });
    };
    RoomView.prototype.onDotClick = function (_a) {
        var target = _a.target;
        var dot = target;
        var dotIndex = Array.from(this.roomPreviewDots).findIndex(function (d) { return dot === d; });
        this.emit('render-photo-by-index', dotIndex);
    };
    RoomView.prototype.hightlightPreviewDot = function (photoIndex) {
        this.roomPreviewDots.forEach(function (dot, index) {
            var isDotIndexEqualPhotoIndex = index === photoIndex;
            var isDotContainHighLightClass = dot.classList.contains('room__preview-item_current');
            if (!isDotIndexEqualPhotoIndex && isDotContainHighLightClass) {
                dot.classList.remove('room__preview-item_current');
            }
            else if (isDotIndexEqualPhotoIndex && !isDotContainHighLightClass) {
                dot.classList.add('room__preview-item_current');
            }
        });
    };
    RoomView.prototype.setPhotoProps = function (photoProps) {
        var url = photoProps.url, index = photoProps.index;
        this.roomImgElement.src = url;
        this.hightlightPreviewDot(index);
    };
    return RoomView;
}(EventEmitter_EventEmitter));
/* harmony default export */ var RoomView_RoomView = (RoomView);

// CONCATENATED MODULE: ./src/blocks/room/ts/Room/RoomPresenter/RoomPresenter.ts
var RoomPresenter = /** @class */ (function () {
    function RoomPresenter(roomModel, roomView) {
        this.roomModel = roomModel;
        this.roomView = roomView;
        this.addRoomViewHandlers();
    }
    RoomPresenter.prototype.addRoomViewHandlers = function () {
        this.roomView.on('render-next-photo', this.renderNextPhoto.bind(this));
        this.roomView.on('render-prev-photo', this.renderPrevPhoto.bind(this));
        this.roomView.on('render-photo-by-index', this.renderPhotoByIndex.bind(this));
    };
    RoomPresenter.prototype.renderNextPhoto = function () {
        var nextPhotoProps = this.roomModel.getNextPhotoProps();
        this.roomView.setPhotoProps(nextPhotoProps);
    };
    RoomPresenter.prototype.renderPrevPhoto = function () {
        var prevPhotoProps = this.roomModel.getPrevPhotoProps();
        this.roomView.setPhotoProps(prevPhotoProps);
    };
    RoomPresenter.prototype.renderPhotoByIndex = function (index) {
        var url = this.roomModel.getPhotoUrlByIndex(index);
        this.roomView.setPhotoProps({ index: index, url: url });
    };
    return RoomPresenter;
}());
/* harmony default export */ var RoomPresenter_RoomPresenter = (RoomPresenter);

// CONCATENATED MODULE: ./src/blocks/room/ts/Room/Room.ts
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};



var Room_Room = /** @class */ (function () {
    function Room(roomElement) {
        var _this = this;
        var photoUrls = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            photoUrls[_i - 1] = arguments[_i];
        }
        this.init = function () {
            var photoUrls = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                photoUrls[_i] = arguments[_i];
            }
            var roomModel = new (RoomModel_RoomModel.bind.apply(RoomModel_RoomModel, __spreadArrays([void 0], photoUrls)))();
            var roomView = new RoomView_RoomView(_this.roomElement);
            // eslint-disable-next-line no-unused-vars
            var roomPresenter = new RoomPresenter_RoomPresenter(roomModel, roomView);
        };
        this.roomElement = roomElement;
        this.init.apply(this, photoUrls);
    }
    return Room;
}());
/* harmony default export */ var ts_Room_Room = (Room_Room);

// CONCATENATED MODULE: ./src/pages/search-room/ts/SearchRoom/IMG_URLS.ts
var IMG_URLS = [
    [
        './img/room888.png',
        './img/room666.png',
        './img/room888.png',
        './img/room980.png',
    ],
    [
        './img/room840.png',
        './img/room980.png',
        './img/room856.png',
        './img/room678.png',
    ],
    [
        './img/room980.png',
        './img/room666.png',
        './img/room888.png',
        './img/room980.png',
    ],
    [
        './img/room856.png',
        './img/room666.png',
        './img/room888.png',
        './img/room980.png',
    ],
    [
        './img/room740.png',
        './img/room982.png',
        './img/room678.png',
        './img/room450.png',
    ],
    [
        './img/room982.png',
        './img/room666.png',
        './img/room888.png',
        './img/room980.png',
    ],
    [
        './img/room678.png',
        './img/room666.png',
        './img/room888.png',
        './img/room980.png',
    ],
    [
        './img/room450.png',
        './img/room666.png',
        './img/room888.png',
        './img/room980.png',
    ],
    [
        './img/room350.png',
        './img/room666.png',
        './img/room888.png',
        './img/room980.png',
    ],
    [
        './img/room666.png',
        './img/room666.png',
        './img/room888.png',
        './img/room980.png',
    ],
    [
        './img/room444.png',
        './img/room352.png',
        './img/room888.png',
        './img/room980.png',
    ],
    [
        './img/room352.png',
        './img/room666.png',
        './img/room888.png',
        './img/room980.png',
    ],
];
/* harmony default export */ var SearchRoom_IMG_URLS = (IMG_URLS);

// CONCATENATED MODULE: ./src/pages/search-room/ts/SearchRoom/SearchRoom.ts
var SearchRoom_spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};






var SearchRoom_SearchRoom = /** @class */ (function () {
    function SearchRoom(searchRoomElement) {
        this.searchRoomElement = searchRoomElement;
        this.checkboxes = [];
        this.rooms = [];
        this.initFields();
    }
    SearchRoom.prototype.initFields = function () {
        var _this = this;
        var dropdownGoodsGoodsElement = this.searchRoomElement
            .querySelector('.search-room__filter-dropdown-goods_goods .dropdown-goods');
        var dropdownGoodsGuestsElement = this.searchRoomElement
            .querySelector('.search-room__filter-dropdown-goods_guests .dropdown-goods');
        var dropdownCalendarElement = this.searchRoomElement
            .querySelector('.dropdown-calendar');
        var rangeSliderElement = this.searchRoomElement
            .querySelector('.range-slider');
        var checkboxesElements = this.searchRoomElement
            .querySelectorAll('.checkboxes');
        var roomElements = this.searchRoomElement.querySelectorAll('.room');
        this.rangeSlider = new ts_RangeSlider(rangeSliderElement);
        this.dropdownCalendar = new ts_DropdownCalendar_DropdownCalendar(dropdownCalendarElement);
        this.dropdownGoodsGuests = new ts_DropdownGoods_DropdownGoods(dropdownGoodsGuestsElement);
        this.dropdownGoodsGoods = new ts_DropdownGoods_DropdownGoods(dropdownGoodsGoodsElement);
        checkboxesElements.forEach(function (checkboxesElement) {
            _this.checkboxes.push(new Checkboxes_Checkboxes(checkboxesElement));
        });
        roomElements.forEach(function (roomElement, index) {
            _this.rooms.push(new (ts_Room_Room.bind.apply(ts_Room_Room, SearchRoom_spreadArrays([void 0, roomElement], SearchRoom_IMG_URLS[index])))());
        });
    };
    return SearchRoom;
}());
document.addEventListener('DOMContentLoaded', function () {
    var searchRoomElement = document.querySelector('.search-room');
    if (searchRoomElement instanceof HTMLElement) {
        // eslint-disable-next-line no-unused-vars
        var searchRoom = new SearchRoom_SearchRoom(searchRoomElement);
    }
});

// EXTERNAL MODULE: ./node_modules/inputmask/index.js
var inputmask = __webpack_require__(0);
var inputmask_default = /*#__PURE__*/__webpack_require__.n(inputmask);

// CONCATENATED MODULE: ./src/blocks/input/ts/Input/Input.ts

inputmask_default.a.extendDefinitions({
    c: {
        validator: '[А-Яа-яЁё]',
    },
});
var Input_Input = /** @class */ (function () {
    function Input(inputElement) {
        this.inputElement = inputElement;
        this.init();
    }
    Input.prototype.maskInput = function () {
        var isInputHasInputMaskAttributes = Object.keys(this.inputElement.dataset).some(function (key) { return key.startsWith('inputmask'); });
        if (isInputHasInputMaskAttributes) {
            var mask = new inputmask_default.a({
                showMaskOnHover: false,
            });
            mask.mask(this.inputElement);
        }
    };
    Input.prototype.init = function () {
        this.maskInput();
    };
    return Input;
}());
/* harmony default export */ var ts_Input_Input = (Input_Input);

// CONCATENATED MODULE: ./src/blocks/registration/ts/Registration/Registration.ts

var Registration_Registration = /** @class */ (function () {
    function Registration(registrationElement) {
        this.registrationElement = registrationElement;
        this.inputs = [];
        this.initFields();
    }
    Registration.prototype.initFields = function () {
        var _this = this;
        var inputElements = this.registrationElement.querySelectorAll('.input');
        inputElements.forEach(function (inputElement) {
            _this.inputs.push(new ts_Input_Input(inputElement));
        });
    };
    return Registration;
}());
/* harmony default export */ var ts_Registration_Registration = (Registration_Registration);

// CONCATENATED MODULE: ./src/pages/user-registration/ts/UserRegistration/UserRegistration.ts

var UserRegistration_UserRegistration = /** @class */ (function () {
    function UserRegistration(userRegistration) {
        this.userRegistration = userRegistration;
        this.initFields();
    }
    UserRegistration.prototype.initFields = function () {
        var registrationElement = document.querySelector('.registration');
        this.registration = new ts_Registration_Registration(registrationElement);
    };
    return UserRegistration;
}());
document.addEventListener('DOMContentLoaded', function () {
    var userRegistrationElement = document.querySelector('.user-registration');
    if (userRegistrationElement instanceof HTMLElement) {
        // eslint-disable-next-line no-unused-vars
        var userRegistration = new UserRegistration_UserRegistration(userRegistrationElement);
    }
});

// CONCATENATED MODULE: ./src/blocks/sign-in/ts/SignIn/SignIn.ts

var SignIn_SignIn = /** @class */ (function () {
    function SignIn(signInElement) {
        this.signInElement = signInElement;
        this.inputs = [];
        this.initFields();
    }
    SignIn.prototype.initFields = function () {
        var _this = this;
        var inputElements = this.signInElement.querySelectorAll('.input');
        inputElements.forEach(function (inputElement) {
            _this.inputs.push(new ts_Input_Input(inputElement));
        });
    };
    return SignIn;
}());
/* harmony default export */ var ts_SignIn_SignIn = (SignIn_SignIn);

// CONCATENATED MODULE: ./src/pages/user-sign-in/ts/UserSignIn/UserSignIn.ts

var UserSignIn_UserSignIn = /** @class */ (function () {
    function UserSignIn(userSignIn) {
        this.userSignIn = userSignIn;
        this.initFields();
    }
    UserSignIn.prototype.initFields = function () {
        var signInElement = document.querySelector('.sign-in');
        this.signIn = new ts_SignIn_SignIn(signInElement);
    };
    return UserSignIn;
}());
document.addEventListener('DOMContentLoaded', function () {
    var userSignInElement = document.querySelector('.user-sign-in');
    if (userSignInElement instanceof HTMLElement) {
        // eslint-disable-next-line no-unused-vars
        var userSignIn = new UserSignIn_UserSignIn(userSignInElement);
    }
});

// CONCATENATED MODULE: ./src/pages/cards/ts/Cards/IMG_URLS.ts
var IMG_URLS_IMG_URLS = [
    [
        './img/room888.png',
        './img/room666.png',
        './img/room888.png',
        './img/room980.png',
    ],
    [
        './img/room840.png',
        './img/room980.png',
        './img/room856.png',
        './img/room678.png',
    ],
];
/* harmony default export */ var Cards_IMG_URLS = (IMG_URLS_IMG_URLS);

// CONCATENATED MODULE: ./src/pages/cards/ts/Cards/Cards.ts
var Cards_spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};






var Cards_Cards = /** @class */ (function () {
    function Cards(cardsElement) {
        this.cardsElement = cardsElement;
        this.rooms = [];
        this.initFields();
    }
    Cards.prototype.initFields = function () {
        var _this = this;
        var signInElement = this.cardsElement.querySelector('.sign-in');
        var aboutRoomElement = this.cardsElement.querySelector('.about-room');
        var numberSearchElement = this.cardsElement.querySelector('.number-search');
        var registrationElement = this.cardsElement.querySelector('.registration');
        var roomElements = this.cardsElement.querySelectorAll('.room');
        roomElements.forEach(function (roomElement, index) {
            _this.rooms.push(new (ts_Room_Room.bind.apply(ts_Room_Room, Cards_spreadArrays([void 0, roomElement], Cards_IMG_URLS[index])))());
        });
        this.numberSearch = new ts_NumberSearch_NumberSearch(numberSearchElement);
        this.aboutRoom = new ts_AboutRoom_AboutRoom(aboutRoomElement);
        this.registration = new ts_Registration_Registration(registrationElement);
        this.signIn = new ts_SignIn_SignIn(signInElement);
    };
    return Cards;
}());
document.addEventListener('DOMContentLoaded', function () {
    var cardsElement = document.querySelector('.cards');
    if (cardsElement instanceof HTMLElement) {
        // eslint-disable-next-line no-unused-vars
        var cards = new Cards_Cards(cardsElement);
    }
});

// CONCATENATED MODULE: ./src/blocks/subscription-form/ts/SubscriptionForm/SubscriptionForm.ts

var SubscriptionForm_SubscriptionForm = /** @class */ (function () {
    function SubscriptionForm(subscriptionsFormElement) {
        this.subscriptionsFormElement = subscriptionsFormElement;
        this.initFields();
    }
    SubscriptionForm.prototype.initFields = function () {
        this.initInputMask();
    };
    SubscriptionForm.prototype.initInputMask = function () {
        var emailInput = this.subscriptionsFormElement.querySelector('.subscription-form__input');
        if (emailInput instanceof HTMLInputElement) {
            this.inputMask = new inputmask_default.a({ showMaskOnHover: false, mask: '*{4,20}@*{4,20}.*{2,7}' });
            this.inputMask.mask(emailInput);
        }
    };
    return SubscriptionForm;
}());
/* harmony default export */ var ts_SubscriptionForm_SubscriptionForm = (SubscriptionForm_SubscriptionForm);

// CONCATENATED MODULE: ./src/pages/form-elements/ts/FormElements/FormElements.ts







var FormElements_FormElements = /** @class */ (function () {
    function FormElements(formElementsElement) {
        this.formElementsElement = formElementsElement;
        this.initFields();
    }
    FormElements.prototype.initFields = function () {
        var _this = this;
        this.inputs = [];
        this.dropdownsGoods = [];
        this.dropdownsGuests = [];
        this.dropdownsCalendar = [];
        this.likeButtons = [];
        this.checkboxes = [];
        var inputElements = this.formElementsElement.querySelectorAll('.input');
        var dropdownsGoodsElements = this.formElementsElement
            .querySelectorAll('.form-elements__dropdown-goods_goods > .dropdown-goods');
        var dropdownsGuestsElements = this.formElementsElement
            .querySelectorAll('.form-elements__dropdown-goods_guests > .dropdown-goods');
        var dropdownsCalendarsElements = this.formElementsElement.querySelectorAll('.dropdown-calendar');
        var checkboxesElements = this.formElementsElement.querySelectorAll('.checkboxes');
        var likeButtonsElements = this.formElementsElement.querySelectorAll('.like-button');
        var rangeSliderElement = this.formElementsElement.querySelector('.range-slider');
        var subscriptionFormElement = this.formElementsElement.querySelector('.subscription-form');
        this.subscriptionForm = new ts_SubscriptionForm_SubscriptionForm(subscriptionFormElement);
        inputElements.forEach(function (inputElement) {
            _this.inputs.push(new ts_Input_Input(inputElement));
        });
        dropdownsGoodsElements.forEach(function (dropdownGoodsElement) {
            _this.dropdownsGoods.push(new ts_DropdownGoods_DropdownGoods(dropdownGoodsElement));
        });
        dropdownsGuestsElements.forEach(function (dropdownGuestsElement) {
            _this.dropdownsGuests
                .push(new ts_DropdownGoods_DropdownGoods(dropdownGuestsElement));
        });
        dropdownsCalendarsElements.forEach(function (dropdownCalendarElement) {
            _this.dropdownsCalendar.push(new ts_DropdownCalendar_DropdownCalendar(dropdownCalendarElement));
        });
        checkboxesElements.forEach(function (checkboxesElement) {
            _this.checkboxes.push(new Checkboxes_Checkboxes(checkboxesElement));
        });
        likeButtonsElements.forEach(function (likeButtonElement) {
            _this.likeButtons.push(new ts_LikeButton(likeButtonElement));
        });
        this.rangeSlider = new ts_RangeSlider(rangeSliderElement);
    };
    return FormElements;
}());
document.addEventListener('DOMContentLoaded', function () {
    var formElementsElement = document.querySelector('.form-elements');
    if (formElementsElement instanceof HTMLElement) {
        // eslint-disable-next-line no-unused-vars
        var formElements = new FormElements_FormElements(formElementsElement);
    }
});

// EXTERNAL MODULE: ./src/blocks/header/ts/Header/Header.ts
var Header = __webpack_require__(5);

// CONCATENATED MODULE: ./src/blocks/footer/ts/Footer/Footer.ts

var Footer_Footer = /** @class */ (function () {
    function Footer(footerElement) {
        this.footerElement = footerElement;
        this.init();
    }
    Footer.prototype.initSubscriptionForm = function () {
        var subscriptionFormElement = this.footerElement.querySelector('.subscription-form');
        if (subscriptionFormElement instanceof HTMLElement) {
            this.subsctiptionForm = new ts_SubscriptionForm_SubscriptionForm(subscriptionFormElement);
        }
    };
    Footer.prototype.init = function () {
        this.initSubscriptionForm();
    };
    return Footer;
}());
/* harmony default export */ var ts_Footer_Footer = (Footer_Footer);
document.addEventListener('DOMContentLoaded', function () {
    var footerElements = document.querySelectorAll('.footer');
    footerElements.forEach(function (footerElement) {
        // eslint-disable-next-line no-unused-vars
        var footer = new Footer_Footer(footerElement);
    });
});

// CONCATENATED MODULE: ./src/ts/app.ts










// CONCATENATED MODULE: ./src/index.ts


var importAll = function (r) {
    var keys = r.keys();
    keys.map(r);
};
importAll(__webpack_require__(6));


/***/ })
/******/ ]);