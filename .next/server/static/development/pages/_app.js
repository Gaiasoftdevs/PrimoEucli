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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Shared/GoTop.js":
/*!************************************!*\
  !*** ./components/Shared/GoTop.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const GoTop = props => {
  const [thePosition, setThePosition] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const timeoutRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        setThePosition(true);
      } else {
        setThePosition(false);
      }
    });
  }, []);

  const onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(timeoutRef.current);
    }

    window.scroll(0, window.pageYOffset - props.scrollStepInPx);
  };

  const scrollToTop = () => {
    timeoutRef.current = setInterval(onScrollStep, props.delayInMs);
  };

  const renderGoTopIcon = () => {
    return __jsx("div", {
      className: `go-top ${thePosition ? 'active' : ''}`,
      onClick: scrollToTop
    }, __jsx("i", {
      className: "bx bx-up-arrow-alt"
    }));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, renderGoTopIcon());
};

/* harmony default export */ __webpack_exports__["default"] = (GoTop);

/***/ }),

/***/ "./components/_App/Layout.js":
/*!***********************************!*\
  !*** ./components/_App/Layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shared_GoTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shared/GoTop */ "./components/Shared/GoTop.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = ({
  children
}) => {
  const [loader, setLoader] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    setTimeout(() => setLoader(false), 2000);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Livani - React Next eCommerce Template"), __jsx("meta", {
    name: "description",
    content: "Livani - React Next eCommerce Template. This has been built with React, Next.js, Express.js, and ES6+"
  }), __jsx("meta", {
    name: "og:title",
    property: "og:title",
    content: "Livani - React Next eCommerce Template"
  }), __jsx("meta", {
    name: "twitter:card",
    content: "Livani - React Next eCommerce Template"
  }), __jsx("link", {
    rel: "canonical",
    href: "https://livani-react.envytheme.com/"
  }), __jsx("meta", {
    property: "og:image",
    content: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-2-1589216093113.jpg"
  })), loader ? 'Loading' : children, __jsx(_Shared_GoTop__WEBPACK_IMPORTED_MODULE_2__["default"], {
    scrollStepInPx: "100",
    delayInMs: "10.50"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./firebase/index.js":
/*!***************************!*\
  !*** ./firebase/index.js ***!
  \***************************/
/*! exports provided: auth, firebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "firebase", function() { return firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);


 // Need to update below config

const config = {
  apiKey: "AIzaSyBLvUV6_LzCgzwC8mMdL9qd73w5L72qiJI",
  authDomain: "fidelio-3cd32.firebaseapp.com",
  projectId: "fidelio-3cd32",
  storageBucket: "fidelio-3cd32.appspot.com",
  messagingSenderId: "1094375557869",
  appId: "1:1094375557869:web:e5c767a53f004926145ae4",
  measurementId: "G-TEEVRM7R90"
};

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
}

const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.scss */ "./styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_reducers_cartReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/reducers/cartReducer */ "./store/reducers/cartReducer.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_App_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/_App/Layout */ "./components/_App/Layout.js");
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/actions/cartActions */ "./store/actions/cartActions.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const MyApp = ({
  Component,
  pageProps,
  store
}) => {
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    store.dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_7__["checkUserLogin"])());
    store.dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_7__["addProducts"])());
  });
  return __jsx(_components_App_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], null, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_5__["ToastContainer"], null), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: store
  }, __jsx(Component, pageProps)));
};

MyApp.getInitialProps = async ({
  Component,
  ctx
}) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(_store_reducers_cartReducer__WEBPACK_IMPORTED_MODULE_4__["initStore"])(MyApp));

/***/ }),

/***/ "./store/actions/action-types/cart-actions.js":
/*!****************************************************!*\
  !*** ./store/actions/action-types/cart-actions.js ***!
  \****************************************************/
/*! exports provided: ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, ADD_QUANTITY_WITH_NUMBER, ORDER_FORM, CHECKOUT_CHARGE, RESET_CART, ADD_PRODUCTS, USRER_LOGIN, CHECK_USRER_LOGIN, USRER_LOGOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM", function() { return REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUB_QUANTITY", function() { return SUB_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY", function() { return ADD_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SHIPPING", function() { return ADD_SHIPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY_WITH_NUMBER", function() { return ADD_QUANTITY_WITH_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_FORM", function() { return ORDER_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKOUT_CHARGE", function() { return CHECKOUT_CHARGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_CART", function() { return RESET_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PRODUCTS", function() { return ADD_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USRER_LOGIN", function() { return USRER_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_USRER_LOGIN", function() { return CHECK_USRER_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USRER_LOGOUT", function() { return USRER_LOGOUT; });
//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SUB_QUANTITY = 'SUB_QUANTITY';
const ADD_QUANTITY = 'ADD_QUANTITY';
const ADD_SHIPPING = 'ADD_SHIPPING';
const ADD_QUANTITY_WITH_NUMBER = 'ADD_QUANTITY_WITH_NUMBER';
const ORDER_FORM = 'ORDER_FORM';
const CHECKOUT_CHARGE = 'CHECKOUT_CHARGE';
const RESET_CART = 'RESET_CART';
const ADD_PRODUCTS = 'ADD_PRODUCTS';
const USRER_LOGIN = 'USRER_LOGIN';
const CHECK_USRER_LOGIN = 'CHECK_USRER_LOGIN';
const USRER_LOGOUT = 'USRER_LOGOUT';

/***/ }),

/***/ "./store/actions/cartActions.js":
/*!**************************************!*\
  !*** ./store/actions/cartActions.js ***!
  \**************************************/
/*! exports provided: checkUserLogin, userLogout, userLogin, addProducts, addToCart, removeItem, subtractQuantity, addQuantity, addQuantityWithNumber, resetCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUserLogin", function() { return checkUserLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogout", function() { return userLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogin", function() { return userLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProducts", function() { return addProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtractQuantity", function() { return subtractQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addQuantity", function() { return addQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addQuantityWithNumber", function() { return addQuantityWithNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCart", function() { return resetCart; });
/* harmony import */ var _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types/cart-actions */ "./store/actions/action-types/cart-actions.js");
 //CHECK_USRER_LOGIN

const checkUserLogin = () => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["CHECK_USRER_LOGIN"]
  };
}; // USRER_LOGOUT

const userLogout = () => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["USRER_LOGOUT"]
  };
}; // USRER_LOGIN

const userLogin = () => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["USRER_LOGIN"]
  };
}; //add products

const addProducts = () => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_PRODUCTS"]
  };
}; //add cart action

const addToCart = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_CART"],
    id
  };
}; //remove item action

const removeItem = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_ITEM"],
    id
  };
}; //subtract qt action

const subtractQuantity = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["SUB_QUANTITY"],
    id
  };
}; //add qt action

const addQuantity = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_QUANTITY"],
    id
  };
}; //add qt action with quantity number

const addQuantityWithNumber = (id, qty) => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_QUANTITY_WITH_NUMBER"],
    id,
    qty
  };
}; // Reset cart after form submit

const resetCart = () => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["RESET_CART"]
  };
};

/***/ }),

/***/ "./store/reducers/cartReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/cartReducer.js ***!
  \***************************************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase */ "./firebase/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/action-types/cart-actions */ "./store/actions/action-types/cart-actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const db = _firebase__WEBPACK_IMPORTED_MODULE_3__["firebase"].firestore();
const dbOrderRef = db.collection('products');


const token = '76483461103103918uhkjdkjc';
const initState = {
  products: [],
  addedItems: [],
  total: 0,
  shipping: 0,
  login: false
};

const cartReducer = (state = initState, action) => {
  // User Logout
  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["USRER_LOGOUT"]) {
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('_livani_token_');
    return _objectSpread(_objectSpread({}, state), {}, {
      login: false
    });
  } // Check if user login


  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["CHECK_USRER_LOGIN"]) {
    const getToken = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('_livani_token_');

    if (getToken == token) {
      return _objectSpread(_objectSpread({}, state), {}, {
        login: true
      });
    } else {
      return _objectSpread(_objectSpread({}, state), {}, {
        login: false
      });
    }
  } // User Login


  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["USRER_LOGIN"]) {
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set('_livani_token_', token);
    const getToken = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('_livani_token_'); // console.log('token', getToken)

    if (getToken == token) {
      return _objectSpread(_objectSpread({}, state), {}, {
        login: true
      });
    } else {
      return _objectSpread(_objectSpread({}, state), {}, {
        login: false
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["ADD_PRODUCTS"]) {
    let productsArray = [];
    dbOrderRef.get().then(res => {
      res.forEach(doc => {
        let productsObj = doc.data();
        productsObj.id = doc.id;
        productsArray.push(productsObj);
      });
    }); // console.log('www', productsArray)

    return _objectSpread(_objectSpread({}, state), {}, {
      products: productsArray
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["ADD_TO_CART"]) {
    let addedItem = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += 1;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.newPrice
      });
    } else {
      addedItem.quantity = 1; //calculating the total

      let newTotal = state.total + addedItem.newPrice;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["ADD_QUANTITY_WITH_NUMBER"]) {
    let addedItem = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += action.qty;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.newPrice * action.qty
      });
    } else {
      addedItem.quantity = action.qty; //calculating the total

      let newTotal = state.total + addedItem.newPrice * action.qty;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["REMOVE_ITEM"]) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id); //calculating the total

    let newTotal = state.total - itemToRemove.newPrice * itemToRemove.quantity;
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: new_items,
      total: newTotal
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["ADD_QUANTITY"]) {
    let addedItem = state.products.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.newPrice;
    return _objectSpread(_objectSpread({}, state), {}, {
      total: newTotal
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["SUB_QUANTITY"]) {
    let addedItem = state.products.find(item => item.id === action.id); //if the qt == 0 then it should be removed

    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.newPrice;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: new_items,
        total: newTotal
      });
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.newPrice;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["ADD_SHIPPING"]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping += 30
    });
  }

  if (action.type === 'SUB_SHIPPING') {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping -= 30
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["RESET_CART"]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: [],
      total: 0,
      shipping: 0
    });
  } else {
    return state;
  }
};

const initStore = (initialState = initState) => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(cartReducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a)));
};

/***/ }),

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaGFyZWQvR29Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9fQXBwL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvYWN0aW9uLXR5cGVzL2NhcnQtYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL2NhcnRBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL2NhcnRSZWR1Y2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiR29Ub3AiLCJwcm9wcyIsInRoZVBvc2l0aW9uIiwic2V0VGhlUG9zaXRpb24iLCJSZWFjdCIsInVzZVN0YXRlIiwidGltZW91dFJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsInNjcm9sbFkiLCJvblNjcm9sbFN0ZXAiLCJwYWdlWU9mZnNldCIsImNsZWFySW50ZXJ2YWwiLCJjdXJyZW50Iiwic2Nyb2xsIiwic2Nyb2xsU3RlcEluUHgiLCJzY3JvbGxUb1RvcCIsInNldEludGVydmFsIiwiZGVsYXlJbk1zIiwicmVuZGVyR29Ub3BJY29uIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJsb2FkZXIiLCJzZXRMb2FkZXIiLCJzZXRUaW1lb3V0IiwiY29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJhdXRoIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsImRpc3BhdGNoIiwiY2hlY2tVc2VyTG9naW4iLCJhZGRQcm9kdWN0cyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsIndpdGhSZWR1eCIsImluaXRTdG9yZSIsIkFERF9UT19DQVJUIiwiUkVNT1ZFX0lURU0iLCJTVUJfUVVBTlRJVFkiLCJBRERfUVVBTlRJVFkiLCJBRERfU0hJUFBJTkciLCJBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIiLCJPUkRFUl9GT1JNIiwiQ0hFQ0tPVVRfQ0hBUkdFIiwiUkVTRVRfQ0FSVCIsIkFERF9QUk9EVUNUUyIsIlVTUkVSX0xPR0lOIiwiQ0hFQ0tfVVNSRVJfTE9HSU4iLCJVU1JFUl9MT0dPVVQiLCJ0eXBlIiwidXNlckxvZ291dCIsInVzZXJMb2dpbiIsImFkZFRvQ2FydCIsImlkIiwicmVtb3ZlSXRlbSIsInN1YnRyYWN0UXVhbnRpdHkiLCJhZGRRdWFudGl0eSIsImFkZFF1YW50aXR5V2l0aE51bWJlciIsInF0eSIsInJlc2V0Q2FydCIsImRiIiwiZmlyZXN0b3JlIiwiZGJPcmRlclJlZiIsImNvbGxlY3Rpb24iLCJ0b2tlbiIsImluaXRTdGF0ZSIsInByb2R1Y3RzIiwiYWRkZWRJdGVtcyIsInRvdGFsIiwic2hpcHBpbmciLCJsb2dpbiIsImNhcnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb29raWUiLCJyZW1vdmUiLCJnZXRUb2tlbiIsImdldCIsInNldCIsInByb2R1Y3RzQXJyYXkiLCJ0aGVuIiwicmVzIiwiZm9yRWFjaCIsImRvYyIsInByb2R1Y3RzT2JqIiwiZGF0YSIsInB1c2giLCJhZGRlZEl0ZW0iLCJmaW5kIiwiaXRlbSIsImV4aXN0ZWRfaXRlbSIsInF1YW50aXR5IiwibmV3UHJpY2UiLCJuZXdUb3RhbCIsIml0ZW1Ub1JlbW92ZSIsIm5ld19pdGVtcyIsImZpbHRlciIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FB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QUFHSUMsV0FBSyxFQUFFLENBSFg7QUFJSUMsY0FBUSxFQUFFO0FBSmQ7QUFNSCxHQVBELE1BU0s7QUFDRCxXQUFPRyxLQUFQO0FBQ0g7QUFDSixDQWhNRDs7QUFrTU8sTUFBTXJDLFNBQVMsR0FBRyxDQUFDOEQsWUFBWSxHQUFHaEMsU0FBaEIsS0FBOEI7QUFDbkQsU0FBT2lDLHlEQUFXLENBQ2QzQixXQURjLEVBRWQwQixZQUZjLEVBR2RFLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDQyxrREFBRCxDQUFoQixDQUhMLENBQWxCO0FBS0gsQ0FOTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbE9QLHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgR29Ub3AgPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnN0IFt0aGVQb3NpdGlvbiwgc2V0VGhlUG9zaXRpb25dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHRpbWVvdXRSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDE3MCkge1xuICAgICAgICAgICAgICAgIHNldFRoZVBvc2l0aW9uKHRydWUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRoZVBvc2l0aW9uKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgW10pXG4gICAgXG4gICAgY29uc3Qgb25TY3JvbGxTdGVwID0gKCkgPT4ge1xuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID09PSAwKXtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZW91dFJlZi5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIHdpbmRvdy5wYWdlWU9mZnNldCAtIHByb3BzLnNjcm9sbFN0ZXBJblB4KTtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcbiAgICAgICAgdGltZW91dFJlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwob25TY3JvbGxTdGVwLCBwcm9wcy5kZWxheUluTXMpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckdvVG9wSWNvbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZ28tdG9wICR7dGhlUG9zaXRpb24gPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9e3Njcm9sbFRvVG9wfT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieC11cC1hcnJvdy1hbHRcIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHtyZW5kZXJHb1RvcEljb24oKX1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdvVG9wOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgR29Ub3AgZnJvbSAnLi4vU2hhcmVkL0dvVG9wJztcblxuY29uc3QgTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldExvYWRlcihmYWxzZSksIDIwMDApO1xuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+TGl2YW5pIC0gUmVhY3QgTmV4dCBlQ29tbWVyY2UgVGVtcGxhdGU8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJMaXZhbmkgLSBSZWFjdCBOZXh0IGVDb21tZXJjZSBUZW1wbGF0ZS4gVGhpcyBoYXMgYmVlbiBidWlsdCB3aXRoIFJlYWN0LCBOZXh0LmpzLCBFeHByZXNzLmpzLCBhbmQgRVM2K1wiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJMaXZhbmkgLSBSZWFjdCBOZXh0IGVDb21tZXJjZSBUZW1wbGF0ZVwiPjwvbWV0YT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cIkxpdmFuaSAtIFJlYWN0IE5leHQgZUNvbW1lcmNlIFRlbXBsYXRlXCI+PC9tZXRhPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL2xpdmFuaS1yZWFjdC5lbnZ5dGhlbWUuY29tL1wiPjwvbGluaz5cbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vY2QxOS0yLTE1ODkyMTYwOTMxMTMuanBnXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIHtsb2FkZXIgPyAnTG9hZGluZycgOiBjaGlsZHJlbn1cbiAgICAgICAgICAgIDxHb1RvcCBzY3JvbGxTdGVwSW5QeD1cIjEwMFwiIGRlbGF5SW5Ncz1cIjEwLjUwXCIgLz5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuXG4vLyBOZWVkIHRvIHVwZGF0ZSBiZWxvdyBjb25maWdcbmNvbnN0IGNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5Qkx2VVY2X0x6Q2d6d0M4bU1kTDlxZDczdzVMNzJxaUpJXCIsXG4gICAgYXV0aERvbWFpbjogXCJmaWRlbGlvLTNjZDMyLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJmaWRlbGlvLTNjZDMyXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJmaWRlbGlvLTNjZDMyLmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMTA5NDM3NTU1Nzg2OVwiLFxuICAgIGFwcElkOiBcIjE6MTA5NDM3NTU1Nzg2OTp3ZWI6ZTVjNzY3YTUzZjAwNDkyNjE0NWFlNFwiLFxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy1URUVWUk03UjkwXCJcbn07XG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XG4gICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xufVxuY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcbmV4cG9ydCB7XG4gICAgYXV0aCxcbiAgICBmaXJlYmFzZVxufTsiLCJpbXBvcnQgJy4uL3N0eWxlcy5zY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB7IGluaXRTdG9yZSB9IGZyb20gJy4uL3N0b3JlL3JlZHVjZXJzL2NhcnRSZWR1Y2VyJztcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL19BcHAvTGF5b3V0JztcbmltcG9ydCB7IGNoZWNrVXNlckxvZ2luLCBhZGRQcm9kdWN0cyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvY2FydEFjdGlvbnMnO1xuXG5jb25zdCBNeUFwcCA9ICh7Q29tcG9uZW50LCBwYWdlUHJvcHMsIHN0b3JlfSkgPT4ge1xuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKGNoZWNrVXNlckxvZ2luKCkpXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKGFkZFByb2R1Y3RzKCkpXG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn1cblxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgQ29tcG9uZW50LCBjdHggfSkgPT4ge1xuICAgIGxldCBwYWdlUHJvcHMgPSB7fTtcbiAgICBpZihDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKXtcbiAgICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXG4gICAgfVxuICAgIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChpbml0U3RvcmUpKE15QXBwKSIsIi8vVHlwZXMgc2hvdWxkIGJlIGluIGNvbnN0IHRvIGF2b2lkIHR5cG9zIGFuZCBkdXBsaWNhdGlvbiBzaW5jZSBpdCdzIGEgc3RyaW5nIGFuZCBjb3VsZCBiZSBlYXNpbHkgbWlzcyBzcGVsbGVkXG5leHBvcnQgY29uc3QgQUREX1RPX0NBUlQgPSAnQUREX1RPX0NBUlQnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9JVEVNID0gJ1JFTU9WRV9JVEVNJztcbmV4cG9ydCBjb25zdCBTVUJfUVVBTlRJVFkgPSAnU1VCX1FVQU5USVRZJztcbmV4cG9ydCBjb25zdCBBRERfUVVBTlRJVFkgPSAnQUREX1FVQU5USVRZJztcbmV4cG9ydCBjb25zdCBBRERfU0hJUFBJTkcgPSAnQUREX1NISVBQSU5HJztcbmV4cG9ydCBjb25zdCBBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIgPSAnQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSJztcbmV4cG9ydCBjb25zdCBPUkRFUl9GT1JNID0gJ09SREVSX0ZPUk0nO1xuZXhwb3J0IGNvbnN0IENIRUNLT1VUX0NIQVJHRSA9ICdDSEVDS09VVF9DSEFSR0UnO1xuZXhwb3J0IGNvbnN0IFJFU0VUX0NBUlQgPSAnUkVTRVRfQ0FSVCc7XG5leHBvcnQgY29uc3QgQUREX1BST0RVQ1RTID0gJ0FERF9QUk9EVUNUUyc7XG5leHBvcnQgY29uc3QgVVNSRVJfTE9HSU4gPSAnVVNSRVJfTE9HSU4nO1xuZXhwb3J0IGNvbnN0IENIRUNLX1VTUkVSX0xPR0lOID0gJ0NIRUNLX1VTUkVSX0xPR0lOJztcbmV4cG9ydCBjb25zdCBVU1JFUl9MT0dPVVQgPSAnVVNSRVJfTE9HT1VUJzsiLCJpbXBvcnQgeyBcbiAgICBBRERfVE9fQ0FSVCxcbiAgICBSRU1PVkVfSVRFTSxcbiAgICBTVUJfUVVBTlRJVFksXG4gICAgQUREX1FVQU5USVRZLFxuICAgIEFERF9RVUFOVElUWV9XSVRIX05VTUJFUixcbiAgICBSRVNFVF9DQVJULFxuICAgIEFERF9QUk9EVUNUUyxcbiAgICBVU1JFUl9MT0dJTixcbiAgICBDSEVDS19VU1JFUl9MT0dJTixcbiAgICBVU1JFUl9MT0dPVVRcbn0gZnJvbSAnLi9hY3Rpb24tdHlwZXMvY2FydC1hY3Rpb25zJ1xuXG4vL0NIRUNLX1VTUkVSX0xPR0lOXG5leHBvcnQgY29uc3QgY2hlY2tVc2VyTG9naW4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogQ0hFQ0tfVVNSRVJfTE9HSU5cbiAgICB9XG59XG5cbi8vIFVTUkVSX0xPR09VVFxuZXhwb3J0IGNvbnN0IHVzZXJMb2dvdXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogVVNSRVJfTE9HT1VUXG4gICAgfVxufVxuXG4vLyBVU1JFUl9MT0dJTlxuZXhwb3J0IGNvbnN0IHVzZXJMb2dpbiA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBVU1JFUl9MT0dJTlxuICAgIH1cbn1cblxuLy9hZGQgcHJvZHVjdHNcbmV4cG9ydCBjb25zdCBhZGRQcm9kdWN0cyA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBBRERfUFJPRFVDVFNcbiAgICB9XG59XG4vL2FkZCBjYXJ0IGFjdGlvblxuZXhwb3J0IGNvbnN0IGFkZFRvQ2FydCA9IChpZCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IEFERF9UT19DQVJULFxuICAgICAgICBpZFxuICAgIH1cbn1cbi8vcmVtb3ZlIGl0ZW0gYWN0aW9uXG5leHBvcnQgY29uc3QgcmVtb3ZlSXRlbSA9IChpZCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFJFTU9WRV9JVEVNLFxuICAgICAgICBpZFxuICAgIH1cbn1cbi8vc3VidHJhY3QgcXQgYWN0aW9uXG5leHBvcnQgY29uc3Qgc3VidHJhY3RRdWFudGl0eSA9IChpZCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFNVQl9RVUFOVElUWSxcbiAgICAgICAgaWRcbiAgICB9XG59XG4vL2FkZCBxdCBhY3Rpb25cbmV4cG9ydCBjb25zdCBhZGRRdWFudGl0eSA9IChpZCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IEFERF9RVUFOVElUWSxcbiAgICAgICAgaWRcbiAgICB9XG59XG5cbi8vYWRkIHF0IGFjdGlvbiB3aXRoIHF1YW50aXR5IG51bWJlclxuZXhwb3J0IGNvbnN0IGFkZFF1YW50aXR5V2l0aE51bWJlciA9IChpZCwgcXR5KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSLFxuICAgICAgICBpZCxcbiAgICAgICAgcXR5XG4gICAgfVxufVxuXG4vLyBSZXNldCBjYXJ0IGFmdGVyIGZvcm0gc3VibWl0XG5leHBvcnQgY29uc3QgcmVzZXRDYXJ0ID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFJFU0VUX0NBUlRcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xuaW1wb3J0IHsgZmlyZWJhc2UgfSBmcm9tICcuLi8uLi9maXJlYmFzZSc7XG5jb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xuY29uc3QgZGJPcmRlclJlZiA9IGRiLmNvbGxlY3Rpb24oJ3Byb2R1Y3RzJyk7XG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmltcG9ydCB7IFxuICAgIEFERF9UT19DQVJULFxuICAgIFJFTU9WRV9JVEVNLFxuICAgIFNVQl9RVUFOVElUWSxcbiAgICBBRERfUVVBTlRJVFksIFxuICAgIEFERF9TSElQUElORyxcbiAgICBBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIsXG4gICAgUkVTRVRfQ0FSVCxcbiAgICBBRERfUFJPRFVDVFMsXG4gICAgVVNSRVJfTE9HSU4sXG4gICAgQ0hFQ0tfVVNSRVJfTE9HSU4sXG4gICAgVVNSRVJfTE9HT1VUXG59IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uLXR5cGVzL2NhcnQtYWN0aW9ucydcblxuY29uc3QgdG9rZW4gPSAnNzY0ODM0NjExMDMxMDM5MTh1aGtqZGtqYyc7XG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcbiAgICBwcm9kdWN0czogW10sXG4gICAgYWRkZWRJdGVtczpbXSxcbiAgICB0b3RhbDogMCxcbiAgICBzaGlwcGluZzogMCxcbiAgICBsb2dpbjogZmFsc2Vcbn1cblxuY29uc3QgY2FydFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikgPT4ge1xuXG4gICAgLy8gVXNlciBMb2dvdXRcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IFVTUkVSX0xPR09VVCl7XG4gICAgICAgIGNvb2tpZS5yZW1vdmUoJ19saXZhbmlfdG9rZW5fJylcbiAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBsb2dpbjogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHVzZXIgbG9naW5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IENIRUNLX1VTUkVSX0xPR0lOKXtcbiAgICAgICAgY29uc3QgZ2V0VG9rZW4gPSBjb29raWUuZ2V0KCdfbGl2YW5pX3Rva2VuXycpXG5cbiAgICAgICAgaWYgKGdldFRva2VuID09IHRva2VuKXtcbiAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBsb2dpbjogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGxvZ2luOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVXNlciBMb2dpblxuICAgIGlmKGFjdGlvbi50eXBlID09PSBVU1JFUl9MT0dJTil7XG4gICAgICAgIGNvb2tpZS5zZXQoJ19saXZhbmlfdG9rZW5fJywgdG9rZW4pO1xuXG4gICAgICAgIGNvbnN0IGdldFRva2VuID0gY29va2llLmdldCgnX2xpdmFuaV90b2tlbl8nKVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0b2tlbicsIGdldFRva2VuKVxuXG4gICAgICAgIGlmIChnZXRUb2tlbiA9PSB0b2tlbil7XG4gICAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbG9naW46IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBsb2dpbjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gQUREX1BST0RVQ1RTKXtcbiAgICAgICAgbGV0IHByb2R1Y3RzQXJyYXkgPSBbXTtcbiAgICAgICAgZGJPcmRlclJlZi5nZXQoKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgcmVzLmZvckVhY2goZG9jID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcHJvZHVjdHNPYmogPSBkb2MuZGF0YSgpO1xuICAgICAgICAgICAgICAgIHByb2R1Y3RzT2JqLmlkID0gZG9jLmlkO1xuICAgICAgICAgICAgICAgIHByb2R1Y3RzQXJyYXkucHVzaChwcm9kdWN0c09iailcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnd3d3JywgcHJvZHVjdHNBcnJheSlcbiAgICAgICAgXG4gICAgICAgIHJldHVybntcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzQXJyYXlcbiAgICAgICAgfVxuICAgIH1cbiAgIFxuICAgIGlmKGFjdGlvbi50eXBlID09PSBBRERfVE9fQ0FSVCl7XG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICAvL2NoZWNrIGlmIHRoZSBhY3Rpb24gaWQgZXhpc3RzIGluIHRoZSBhZGRlZEl0ZW1zXG4gICAgICAgIGxldCBleGlzdGVkX2l0ZW09IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtPT4gYWN0aW9uLmlkID09PSBpdGVtLmlkKVxuICAgICAgICBpZihleGlzdGVkX2l0ZW0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSAxIFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2UgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgPSAxO1xuICAgICAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zLCBhZGRlZEl0ZW1dLFxuICAgICAgICAgICAgICAgIHRvdGFsIDogbmV3VG90YWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IEFERF9RVUFOVElUWV9XSVRIX05VTUJFUil7XG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICAvL2NoZWNrIGlmIHRoZSBhY3Rpb24gaWQgZXhpc3RzIGluIHRoZSBhZGRlZEl0ZW1zXG4gICAgICAgIGxldCBleGlzdGVkX2l0ZW09IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtPT4gYWN0aW9uLmlkID09PSBpdGVtLmlkKVxuICAgICAgICBpZihleGlzdGVkX2l0ZW0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSBhY3Rpb24ucXR5XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZSAqIGFjdGlvbi5xdHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSA9IGFjdGlvbi5xdHk7XG4gICAgICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2UgKiBhY3Rpb24ucXR5XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogWy4uLnN0YXRlLmFkZGVkSXRlbXMsIGFkZGVkSXRlbV0sXG4gICAgICAgICAgICAgICAgdG90YWwgOiBuZXdUb3RhbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gUkVNT1ZFX0lURU0pe1xuICAgICAgICBsZXQgaXRlbVRvUmVtb3ZlPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbT0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcbiAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXMuZmlsdGVyKGl0ZW09PiBhY3Rpb24uaWQgIT09IGl0ZW0uaWQpXG4gICAgICAgIFxuICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxuICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIChpdGVtVG9SZW1vdmUubmV3UHJpY2UgKiBpdGVtVG9SZW1vdmUucXVhbnRpdHkgKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBhZGRlZEl0ZW1zOiBuZXdfaXRlbXMsXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGFjdGlvbi50eXBlID09PSBBRERfUVVBTlRJVFkpe1xuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gMSBcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2VcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gU1VCX1FVQU5USVRZKXsgIFxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKSBcbiAgICAgICAgLy9pZiB0aGUgcXQgPT0gMCB0aGVuIGl0IHNob3VsZCBiZSByZW1vdmVkXG4gICAgICAgIGlmKGFkZGVkSXRlbS5xdWFudGl0eSA9PT0gMSl7XG4gICAgICAgICAgICBsZXQgbmV3X2l0ZW1zID0gc3RhdGUuYWRkZWRJdGVtcy5maWx0ZXIoaXRlbT0+aXRlbS5pZCAhPT0gYWN0aW9uLmlkKVxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSBhZGRlZEl0ZW0ubmV3UHJpY2VcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxuICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5IC09IDFcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gYWRkZWRJdGVtLm5ld1ByaWNlXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGlmKGFjdGlvbi50eXBlID09PSBBRERfU0hJUFBJTkcpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcgKz0gMzBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGFjdGlvbi50eXBlID09PSAnU1VCX1NISVBQSU5HJyl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZyAtPSAzMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IFJFU0VUX0NBUlQpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBhZGRlZEl0ZW1zOiBbXSxcbiAgICAgICAgICAgIHRvdGFsOiAwLFxuICAgICAgICAgICAgc2hpcHBpbmc6IDBcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgaW5pdFN0b3JlID0gKGluaXRpYWxTdGF0ZSA9IGluaXRTdGF0ZSkgPT4ge1xuICAgIHJldHVybiBjcmVhdGVTdG9yZShcbiAgICAgICAgY2FydFJlZHVjZXIsXG4gICAgICAgIGluaXRpYWxTdGF0ZSxcbiAgICAgICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUodGh1bmspKVxuICAgIClcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9maXJlc3RvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=