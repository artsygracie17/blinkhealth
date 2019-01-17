module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/RepoCard.js":
/*!********************************!*\
  !*** ./components/RepoCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RepoCard; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/gracieliu-fang/Code/blinkhealth/components/RepoCard.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    color: gray;\n    padding: 1rem;\n    text-decoration: none;\n\n    &:hover {\n        cursor: pointer;\n        text-decoration: underline;\n    }\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    border-radius: 0.2rem 0.2rem 0rem 0rem;\n    opacity: 1;\n    width: 100%;\n    height: 10rem;\n\n    &:hover {\n        cursor: pointer;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    border: 1px solid lightgray;\n    border-radius: 0.2rem;\n    padding: 0rem;\n    width: 100%;\n    height: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 12rem;\n    margin: 2rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* Third Party */



var RepoCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var RepoCardBody = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());
var RepoImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img(_templateObject3());
var Reponame = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a(_templateObject4());

var RepoCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RepoCard, _React$Component);

  function RepoCard() {
    _classCallCheck(this, RepoCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(RepoCard).apply(this, arguments));
  }

  _createClass(RepoCard, [{
    key: "render",
    value: function render() {
      var repo = this.props.repo;
      var avatarUrl = repo.avatar_url;
      var reponame = repo.login;
      var repoUrl = repo.html_url;
      var repoRequestUrl = Repo.repos_url;
      console.log('Repo: ', Repo);
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RepoCardContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RepoCardBody, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RepoImg, {
        src: avatarUrl,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Reponame, {
        href: repoUrl,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, reponame)));
    }
  }]);

  return RepoCard;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);


RepoCard.defaultProps = {
  repo: {}
};
RepoCard.propTypes = {
  repo: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
};

/***/ }),

/***/ "./components/Searchbar.js":
/*!*********************************!*\
  !*** ./components/Searchbar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Searchbar; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/gracieliu-fang/Code/blinkhealth/components/Searchbar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  appearance: none;\n  background-color: white;\n  border: 1px solid white;\n  border-radius: 0.2rem 0 0 0.2rem;\n  box-sizing: border-box;\n  color: black;\n  display: inline-flex;\n  flex-grow: 1;\n  font-family: inherit;\n  font-size: 1.25rem;\n  font-weight: 400;\n  height: 3rem;\n  line-height: 2rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 0.5rem;\n  padding-top: 0.5rem;\n  width: 100%;\n  &:focus {\n    background-color: white;\n    outline: 0;\n    transition: box-shadow 0.5s, border-color 0.25s ease-in-out;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  border-radius: 0.2rem;\n  box-shadow: 0 0 5px lightgray;\n  display: flex;\n  margin-bottom: 3rem;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* Third Party */



/* First Party */

var InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.attrs({
  type: 'text'
})(_templateObject2());

var Searchbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Searchbar, _React$Component);

  _createClass(Searchbar, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.searchTerm !== nextProps.searchTerm) {
        return {
          searchTerm: nextProps.searchTerm
        };
      }

      return null;
    }
  }]);

  function Searchbar(props) {
    var _this;

    _classCallCheck(this, Searchbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Searchbar).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (event) {
      _this.props.onChange(event);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (event) {
      event.preventDefault();

      _this.props.onSubmit(_this.state.searchTerm);
    });

    _this.state = {
      searchTerm: props.searchTerm
    };
    return _this;
  }

  _createClass(Searchbar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
        key: 'unique',
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InputWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SearchInput, {
        autoFocus: true,
        value: this.state.searchTerm,
        placeholder: "Search for users",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      })));
    }
  }]);

  return Searchbar;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);


Searchbar.defaultProps = {
  searchTerm: '',
  onChange: function onChange() {},
  onSubmit: function onSubmit() {}
};
Searchbar.propTypes = {
  searchTerm: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};

/***/ }),

/***/ "./components/UserCard.js":
/*!********************************!*\
  !*** ./components/UserCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserCard; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/gracieliu-fang/Code/blinkhealth/components/UserCard.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    color: gray;\n    padding: 1rem;\n    text-decoration: none;\n\n    &:hover {\n        cursor: pointer;\n        text-decoration: underline;\n    }\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    border-radius: 0.2rem 0.2rem 0rem 0rem;\n    opacity: 1;\n    width: 100%;\n    height: 10rem;\n\n    &:hover {\n        cursor: pointer;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    border: 1px solid lightgray;\n    border-radius: 0.2rem;\n    padding: 0rem;\n    width: 100%;\n    height: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 12rem;\n    margin: 2rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* Third Party */



var UserCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var UserCardBody = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());
var UserImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img(_templateObject3());
var Username = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a(_templateObject4());

var UserCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UserCard, _React$Component);

  function UserCard() {
    _classCallCheck(this, UserCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserCard).apply(this, arguments));
  }

  _createClass(UserCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          user = _this$props.user,
          cardClick = _this$props.cardClick;
      var avatarUrl = user.avatar_url;
      var username = user.login;
      var userUrl = user.html_url;
      var repoRequestUrl = user.repos_url;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(UserCardContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(UserCardBody, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(UserImg, {
        src: avatarUrl,
        onClick: cardClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Username, {
        href: userUrl,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, username)));
    }
  }]);

  return UserCard;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);


UserCard.defaultProps = {
  user: {},
  cardClick: function cardClick() {}
};
UserCard.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  cardClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};

/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-styled-flexboxgrid */ "react-styled-flexboxgrid");
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Searchbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Searchbar */ "./components/Searchbar.js");
/* harmony import */ var _components_UserCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UserCard */ "./components/UserCard.js");
/* harmony import */ var _components_RepoCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/RepoCard */ "./components/RepoCard.js");
/* harmony import */ var _redux_modules_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/modules/store */ "./redux/modules/store.js");
var _jsxFileName = "/Users/gracieliu-fang/Code/blinkhealth/pages/home.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding: 0rem 1.5rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding: 2rem 0rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* Third Party */






/* First Party */





var githubToken = "access_token=c1c6964129310b0daa090a19c4dfdeedda2bd7b2";
var PaddedRow = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__["Row"])(_templateObject());
var PaddedCol = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__["Col"])(_templateObject2());

var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  _createClass(Home, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          pathname = _ref.pathname,
          query = _ref.query;
      return {
        pathname: pathname
      };
    }
  }]);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSearchTermChange", function (event) {
      _this.setState({
        searchTerm: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSearchbarSubmit", function (searchTerm) {
      console.log('in handlesubmit: ', searchTerm);
      var urlRequest = "https://api.github.com/search/users?q=".concat(searchTerm);
      fetch(urlRequest).then(function (res) {
        return res.json();
      }).then(function (results) {
        var users = results.items;

        _this.setState({
          users: users
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleUserCardClick", function (user) {
      console.log('in handleUserCardClick: ', user);

      _this.setState({
        currentUser: user
      });

      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("".concat(_this.props.pathname, "/").concat(user.login)); // push router to /username
      // make api request to repo url
    });

    _this.state = {
      searchTerm: '',
      users: [],
      currentUser: {}
    };
    return _this;
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          searchTerm = _this$state.searchTerm,
          users = _this$state.users;
      var handleSearchTermChange = this.handleSearchTermChange,
          handleSearchbarSubmit = this.handleSearchbarSubmit,
          handleUserCardClick = this.handleUserCardClick,
          props = this.props;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PaddedRow, {
        center: "xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: 12,
        sm: 8,
        md: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Searchbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        searchTerm: searchTerm,
        onChange: handleSearchTermChange,
        onSubmit: handleSearchbarSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, users && users.map(function (user, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PaddedCol, {
          xs: 6,
          sm: 4,
          md: 3,
          lg: 2,
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UserCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
          user: user,
          cardClick: function cardClick() {
            return handleUserCardClick(user);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }));
      })));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // export const mapStateToProps = ({ store }) => {
//     return {...store}
// }
// export const mapDispatchToProps = (dispatch) => {
//     return {
//         updateSearchTerm: bindActionCreators(updateSearchTerm, dispatch)
//     }
// }
// export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(Home)




/***/ }),

/***/ "./redux/modules/store.js":
/*!********************************!*\
  !*** ./redux/modules/store.js ***!
  \********************************/
/*! exports provided: initialState, updateSearchTerm, makeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSearchTerm", function() { return updateSearchTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStore", function() { return makeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* Action Types */

var UPDATE_SEARCHTERM = 'home: update search term';
var initialState = {
  searchTerm: '',
  users: [],
  currentUser: {}
};
function updateSearchTerm(searchTerm) {
  return {
    type: UPDATE_SEARCHTERM,
    payload: searchTerm
  };
}

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case UPDATE_SEARCHTERM:
      return _objectSpread({}, state, {
        searchTerm: action.payload
      });

    default:
      return state;
  }
};

var makeStore = function makeStore(initialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState);
};

/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/home.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/home.js */"./pages/home.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-styled-flexboxgrid":
/*!*******************************************!*\
  !*** external "react-styled-flexboxgrid" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-styled-flexboxgrid");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=home.js.map