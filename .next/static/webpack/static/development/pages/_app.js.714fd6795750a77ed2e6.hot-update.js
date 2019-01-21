webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./redux/modules/store.js":
/*!********************************!*\
  !*** ./redux/modules/store.js ***!
  \********************************/
/*! exports provided: initialState, updateSearchTerm, populateUsers, populateCurrentUser, reducer, makeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSearchTerm", function() { return updateSearchTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "populateUsers", function() { return populateUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "populateCurrentUser", function() { return populateCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStore", function() { return makeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* Action Types */

var UPDATE_SEARCHTERM = 'home: update search term';
var POPULATE_USERS = 'home: populate users';
var POPULATE_CURRENT_USER = 'user: populate current user';
var initialState = {
  searchTerm: '',
  users: [],
  currentUser: {},
  repos: []
};
function updateSearchTerm(searchTerm) {
  return {
    type: UPDATE_SEARCHTERM,
    payload: searchTerm
  };
}
function populateUsers(users) {
  return {
    type: POPULATE_USERS,
    payload: users
  };
}
function populateCurrentUser(user) {
  return {
    type: POPULATE_CURRENT_USER,
    payload: user
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

    case POPULATE_USERS:
      return _objectSpread({}, state, {
        users: action.payload
      });

    case POPULATE_CURRENT_USER:
      return _objectSpread({}, state, {
        currentUser: action.payload
      });

    default:
      return state;
  }
};
var makeStore = function makeStore(initialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState);
};

/***/ })

})
//# sourceMappingURL=_app.js.714fd6795750a77ed2e6.hot-update.js.map