webpackHotUpdate("static/development/pages/home.js",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: mapStateToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-styled-flexboxgrid */ "./node_modules/react-styled-flexboxgrid/dist/styled-flexboxgrid.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/lib/index.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Searchbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Searchbar */ "./components/Searchbar.js");
/* harmony import */ var _components_UserCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/UserCard */ "./components/UserCard.js");
/* harmony import */ var _components_RepoCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/RepoCard */ "./components/RepoCard.js");
/* harmony import */ var _redux_modules_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/modules/store */ "./redux/modules/store.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_app */ "./pages/_app.js");
var _jsxFileName = "/Users/gracieliu-fang/Code/blinkhealth/pages/home.js";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
var PaddedRow = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__["Row"])(_templateObject());
var PaddedCol = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__["Col"])(_templateObject2());

var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

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

      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push({
        pathname: '/user',
        query: {
          name: user.login
        }
      }); // make api request to repo url
    });

    return _this;
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      // const { 
      //     searchTerm,
      //     users
      // } = this.state
      var handleSearchTermChange = this.handleSearchTermChange,
          handleSearchbarSubmit = this.handleSearchbarSubmit,
          handleUserCardClick = this.handleUserCardClick,
          props = this.props;
      var searchTerm = props.searchTerm,
          users = props.users,
          store = props.store;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
        store: _redux_modules_store__WEBPACK_IMPORTED_MODULE_10__["makeStore"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PaddedRow, {
        center: "xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: 12,
        sm: 8,
        md: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Searchbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        searchTerm: searchTerm,
        onChange: handleSearchTermChange,
        onSubmit: handleSearchbarSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
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
            lineNumber: 106
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UserCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
          user: user,
          cardClick: function cardClick() {
            return handleUserCardClick(user);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }));
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          pathname = _ref.pathname,
          query = _ref.query;

      var _store$getState = store.getState(),
          searchTerm = _store$getState.makeStore.searchTerm;

      return {
        pathname: pathname,
        store: store
      };
    } // constructor(props) {
    //     super(props)
    //     this.state = {
    //         searchTerm: '',
    //         users: [],
    //         currentUser: {}
    //     }
    // }

  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(_ref2) {
  var store = _ref2.store;
  return _objectSpread({}, store);
}; // export const mapDispatchToProps = (dispatch) => {
//     return {
//         updateSearchTerm: bindActionCreators(updateSearchTerm, dispatch)
//     }
// }
// export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(Home)

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(_redux_modules_store__WEBPACK_IMPORTED_MODULE_10__["makeStore"])(Home));
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
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=home.js.658f12baa084ed6b0dd2.hot-update.js.map