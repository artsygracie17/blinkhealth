webpackHotUpdate("static/development/pages/home.js",{

/***/ "./components/UserCard.js":
/*!********************************!*\
  !*** ./components/UserCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserCard; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-styled-flexboxgrid */ "./node_modules/react-styled-flexboxgrid/dist/styled-flexboxgrid.es.js");
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

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    border-radius: 0.2rem;\n    opacity: 1;\n\n    &:hover {\n        cursor: pointer;\n        opacity: 0.6;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    border-radius: 0.2rem;\n    margin: 1rem;\n    padding: 0rem;\n    position: absolute;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 20rem;\n    height: 20rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* Third Party */




var UserCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var UserCardBody = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var ResultGif = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject3());

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
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(UserCardContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(UserCardBody, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: gif.url,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ResultGif, {
        src: gifUrl,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }))));
    }
  }]);

  return UserCard;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);


UserCard.defaultProps = {};
UserCard.propTypes = {};

/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-styled-flexboxgrid */ "./node_modules/react-styled-flexboxgrid/dist/styled-flexboxgrid.es.js");
/* harmony import */ var _components_Searchbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Searchbar */ "./components/Searchbar.js");
/* harmony import */ var _components_UserCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UserCard */ "./components/UserCard.js");
var _jsxFileName = "/Users/gracieliu-fang/Code/blinkhealth/pages/home.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Third Party */


/* First Party */



var githubToken = "access_token=c1c6964129310b0daa090a19c4dfdeedda2bd7b2";

var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

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
        console.log('users: ', users);
      });
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
          handleSearchbarSubmit = this.handleSearchbarSubmit;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        center: "xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Searchbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        searchTerm: searchTerm,
        onChange: handleSearchTermChange,
        onSubmit: handleSearchbarSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, users.map(function (user) {
        console.log(user);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UserCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        });
      })));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/home")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=home.js.8c2de49a9fdd680039a1.hot-update.js.map