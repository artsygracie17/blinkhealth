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
  var data = _taggedTemplateLiteral(["\n    color: black;\n    font-size: 1.5rem;\n    padding: 1rem;\n    text-decoration: none;\n\n    &:hover {\n        cursor: pointer;\n        text-decoration: underline;\n    }\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    border-radius: 0.2rem 0.2rem 0rem 0rem;\n    opacity: 1;\n    width: 100%;\n    height: 12rem;\n\n    &:hover {\n        cursor: pointer;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: 12rem;\n    height: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 14rem;\n    margin: 2rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* Third Party */



var UserCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var UserCardBody = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var UserImg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject3());
var Username = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a(_templateObject4());

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
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(UserCardBody, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(UserImg, {
        src: avatarUrl,
        onClick: cardClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Username, {
        href: userUrl,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
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

/***/ })

})
//# sourceMappingURL=home.js.2f57aea025def5f6d501.hot-update.js.map