module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		7: 0
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0Yqi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = (_ref) => {
  let {
    router,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  const child = react__WEBPACK_IMPORTED_MODULE_2__["Children"].only(children);
  let className = child.props.className || '';

  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, props, react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, {
    className
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_0__["withRouter"])(ActiveLink));

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("sUSu");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "7BLw":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/admin-fd5054194ab22a93b9a3034d635fa66f.jpg";

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "EuFW":
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "UhCr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xWvD");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const withAuth = Component => {
  return class extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
      super(props);
      this.state = {
        status: 'LOADING'
      };
    }

    componentDidMount() {
      _firebase__WEBPACK_IMPORTED_MODULE_2__[/* auth */ "a"].onAuthStateChanged(authUser => {
        // console.log(authUser);
        if (authUser) {
          this.setState({
            status: 'SIGNED_IN'
          });
        } else {
          next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/admin/signin');
        }
      });
    }

    renderContent() {
      const {
        status
      } = this.state;

      if (status == 'LOADING') {
        return __jsx("div", {
          className: "loading"
        }, __jsx("div", {
          className: "d-table"
        }, __jsx("div", {
          className: "d-table-cell"
        }, __jsx("h1", null, "Loading ......"))));
      } else if (status == 'SIGNED_IN') {
        return __jsx(Component, this.props);
      }
    }

    render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.renderContent());
    }

  };
};

/* harmony default export */ __webpack_exports__["a"] = (withAuth);

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "bnmT":
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__("bzos");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__("bzos");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (false) {}

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "ka8R":
/***/ (function(module, exports) {

module.exports = require("react-google-charts");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "qJ3r":
/***/ (function(module, exports) {

module.exports = require("react-apexcharts");

/***/ }),

/***/ "sUSu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./helpers/withAuth.js
var withAuth = __webpack_require__("UhCr");

// EXTERNAL MODULE: ./components/Admin/LeftSidebar.js
var LeftSidebar = __webpack_require__("wW3a");

// EXTERNAL MODULE: ./firebase/index.js
var firebase = __webpack_require__("xWvD");

// EXTERNAL MODULE: external "react-google-charts"
var external_react_google_charts_ = __webpack_require__("ka8R");

// CONCATENATED MODULE: ./components/Admin/LineChart.js
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class LineChart_LineChart extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      data: [["Month", "Sales", "Income"], ["15-Apr-2020", 0, 0]],
      months: new Array(),
      options: {
        title: "Sales By Date",
        curveType: "function",
        legend: {
          position: "bottom"
        }
      }
    });
  }

  componentDidMount() {
    let arr = [];
    this.props.data.map(a => {
      arr.push(a);
    });
    arr.map((b, i) => {
      let t = new Date(1970, 0, 1);
      let time = t.setSeconds(b.createdAt.seconds);
      const ye = new Intl.DateTimeFormat('en', {
        year: 'numeric'
      }).format(time);
      const mo = new Intl.DateTimeFormat('en', {
        month: 'short'
      }).format(time);
      const da = new Intl.DateTimeFormat('en', {
        day: '2-digit'
      }).format(time);
      let date = `${da}-${mo}-${ye}`;
      this.state.months.push(date);
      let data = [this.state.months[i], b.amount, b.amount - b.amount / 2];
      this.state.data.push(data);
      console.log(this.state.months[i]);
      console.log(i);
    });
  }

  render() {
    console.log(this.state.data);

    if (this.state.data) {
      return __jsx("div", {
        className: "chart-box"
      }, __jsx(external_react_google_charts_["Chart"], {
        chartType: "LineChart",
        data: this.state.data,
        options: this.state.options,
        width: "100%",
        height: "500px",
        legendToggle: true
      }));
    }
  }

}

/* harmony default export */ var Admin_LineChart = (LineChart_LineChart);
// CONCATENATED MODULE: ./components/Admin/SalesInfo.js
var SalesInfo_jsx = external_react_default.a.createElement;


class SalesInfo_SalesInfo extends external_react_["Component"] {
  render() {
    return SalesInfo_jsx("div", {
      className: "row"
    }, SalesInfo_jsx("div", {
      className: "col-lg-3 col-md-6"
    }, SalesInfo_jsx("div", {
      className: "stats-card"
    }, SalesInfo_jsx("div", {
      className: "media align-items-center justify-content-between"
    }, SalesInfo_jsx("div", {
      className: "ml-0"
    }, SalesInfo_jsx("h3", null, "Total Revenue"), SalesInfo_jsx("p", null, "(Last Month)")), SalesInfo_jsx("div", {
      className: "avatar avatar-pink"
    }, SalesInfo_jsx("i", {
      className: "bx bxs-badge-dollar"
    }))), SalesInfo_jsx("h4", {
      className: "growth"
    }, "$20,000", SalesInfo_jsx("span", {
      className: "badge badge_success"
    }, SalesInfo_jsx("i", {
      className: "bx bx-up-arrow-alt"
    }), "Revenue up")))), SalesInfo_jsx("div", {
      className: "col-lg-3 col-md-6"
    }, SalesInfo_jsx("div", {
      className: "stats-card"
    }, SalesInfo_jsx("div", {
      className: "media align-items-center justify-content-between"
    }, SalesInfo_jsx("div", {
      className: "ml-0"
    }, SalesInfo_jsx("h3", null, "Total Order"), SalesInfo_jsx("p", null, "(Last Month)")), SalesInfo_jsx("div", {
      className: "avatar avatar-blue"
    }, SalesInfo_jsx("i", {
      className: "bx bx-cart-alt"
    }))), SalesInfo_jsx("h4", {
      className: "growth"
    }, "69,252", SalesInfo_jsx("span", {
      className: "badge badge_success"
    }, SalesInfo_jsx("i", {
      className: "bx bx-up-arrow-alt"
    }), "Order up")))), SalesInfo_jsx("div", {
      className: "col-lg-3 col-md-6"
    }, SalesInfo_jsx("div", {
      className: "stats-card"
    }, SalesInfo_jsx("div", {
      className: "media align-items-center justify-content-between"
    }, SalesInfo_jsx("div", {
      className: "ml-0"
    }, SalesInfo_jsx("h3", null, "New Customer"), SalesInfo_jsx("p", null, "(Last Week)")), SalesInfo_jsx("div", {
      className: "avatar avatar-purple"
    }, SalesInfo_jsx("i", {
      className: "bx bx-user-circle"
    }))), SalesInfo_jsx("h4", {
      className: "growth"
    }, "10,332", SalesInfo_jsx("span", {
      className: "badge badge_success"
    }, SalesInfo_jsx("i", {
      className: "bx bx-up-arrow-alt"
    }), "Customer up")))), SalesInfo_jsx("div", {
      className: "col-lg-3 col-md-6"
    }, SalesInfo_jsx("div", {
      className: "stats-card"
    }, SalesInfo_jsx("div", {
      className: "media align-items-center justify-content-between"
    }, SalesInfo_jsx("div", {
      className: "ml-0"
    }, SalesInfo_jsx("h3", null, "Total Delivery"), SalesInfo_jsx("p", null, "(Last Month)")), SalesInfo_jsx("div", {
      className: "avatar avatar-gold"
    }, SalesInfo_jsx("i", {
      className: "bx bx-bus"
    }))), SalesInfo_jsx("h4", {
      className: "growth"
    }, "30,232", SalesInfo_jsx("span", {
      className: "badge badge_danger"
    }, SalesInfo_jsx("i", {
      className: "bx bx-down-arrow-alt"
    }), "Delivery down")))));
  }

}

/* harmony default export */ var Admin_SalesInfo = (SalesInfo_SalesInfo);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// CONCATENATED MODULE: ./components/Admin/MonthlyRevenue.js
var MonthlyRevenue_jsx = external_react_default.a.createElement;


const Chart = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "qJ3r", 7)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("qJ3r")],
    modules: ['react-apexcharts']
  }
});

class MonthlyRevenue_MonthlyRevenue extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 70, 75, 80]
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 100, 110, 96]
      }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 55, 45, 60]
      }],
      options: {
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '35%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['transparent']
        },
        colors: ['#6a4ffc', '#2962ff', '#a64edd'],
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          labels: {
            style: {
              colors: '#686c71',
              fontSize: '12px'
            }
          }
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        fill: {
          opacity: 1
        },
        legend: {
          offsetY: 6
        },
        grid: {
          show: true,
          borderColor: '#f6f6f7'
        },
        yaxis: {
          labels: {
            style: {
              color: '#686c71',
              fontSize: '12px'
            }
          },
          axisBorder: {
            show: false,
            color: '#f6f6f7'
          }
        }
      }
    };
  }

  render() {
    return MonthlyRevenue_jsx("div", {
      className: "chart-box"
    }, MonthlyRevenue_jsx("div", {
      className: "header"
    }, MonthlyRevenue_jsx("h3", null, "Monthly Revenue")), MonthlyRevenue_jsx(Chart, {
      options: this.state.options,
      series: this.state.series,
      type: "bar",
      height: 450
    }));
  }

}

/* harmony default export */ var Admin_MonthlyRevenue = (MonthlyRevenue_MonthlyRevenue);
// CONCATENATED MODULE: ./components/Admin/ProductTrendsByMonth.js
var ProductTrendsByMonth_jsx = external_react_default.a.createElement;


const ProductTrendsByMonth_Chart = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "qJ3r", 7)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("qJ3r")],
    modules: ['react-apexcharts']
  }
});

class ProductTrendsByMonth_ProductTrendsByMonth extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 100, 150, 180]
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
      }
    };
  }

  render() {
    return ProductTrendsByMonth_jsx("div", {
      className: "chart-box"
    }, ProductTrendsByMonth_jsx("div", {
      className: "header"
    }, ProductTrendsByMonth_jsx("h3", null, "Product Trends By Month")), ProductTrendsByMonth_jsx(ProductTrendsByMonth_Chart, {
      options: this.state.options,
      series: this.state.series,
      type: "line",
      height: 450
    }));
  }

}

/* harmony default export */ var Admin_ProductTrendsByMonth = (ProductTrendsByMonth_ProductTrendsByMonth);
// CONCATENATED MODULE: ./pages/admin/dashboard.js
var dashboard_jsx = external_react_default.a.createElement;

function dashboard_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // import RecentOrders from '../../components/Admin/RecentOrders';

class dashboard_Dashboard extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    dashboard_defineProperty(this, "state", {
      ordersData: [],
      loading: true
    });
  }

  componentDidMount() {
    const db = firebase["b" /* firebase */].firestore();
    const dbOrderRef = db.collection('orders');
    let orderArray = [];
    dbOrderRef.get().then(res => {
      res.forEach(doc => {
        let orderObj = doc.data();
        orderObj.id = doc.id;
        orderArray.push(orderObj);
      });
      this.setState({
        ordersData: orderArray
      });
      this.loading = false;
    }).catch(err => {
      console.log('error', err);
    });
  }

  render() {
    const chart = this.state.ordersData.length ? dashboard_jsx(Admin_LineChart, {
      data: this.state.ordersData
    }) : null;
    return dashboard_jsx(external_react_default.a.Fragment, null, dashboard_jsx(LeftSidebar["a" /* default */], null), dashboard_jsx("div", {
      className: "admin-main-content d-flex flex-column"
    }, dashboard_jsx("div", {
      className: "page-header"
    }, dashboard_jsx("h2", null, "Dashboard")), dashboard_jsx(Admin_SalesInfo, null), dashboard_jsx(Admin_MonthlyRevenue, null), dashboard_jsx(Admin_ProductTrendsByMonth, null), chart, dashboard_jsx("div", {
      className: "flex-grow-1"
    })));
  }

}

/* harmony default export */ var dashboard = __webpack_exports__["default"] = (Object(withAuth["a" /* default */])(dashboard_Dashboard));

/***/ }),

/***/ "uf77":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./utils/ActiveLink.js
var ActiveLink = __webpack_require__("0Yqi");

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: ./firebase/index.js
var firebase = __webpack_require__("xWvD");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./components/Admin/Modals/AddProductModal.js
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class AddProductModal_AddProductModal extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      modal: false,
      imageUrl: '',
      imageHoverUrl: '',
      progress: 0,
      title: '',
      type: 'T-Shirt',
      description: '',
      offer: true,
      oldPrice: 0,
      newPrice: 0,
      discount: true,
      discountOff: 0,
      onSale: true,
      newProduct: true,
      previewImage: null,
      previewImageHover: null
    });

    _defineProperty(this, "baseState", this.state);

    _defineProperty(this, "resetForm", () => {
      this.setState(this.baseState);
    });

    _defineProperty(this, "closeModal", () => {
      this.props.onClick(this.state.modal);
    });

    _defineProperty(this, "handleChange", e => {
      if (e.target.files[0]) {
        let image = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(image);

        reader.onload = () => {
          // console.log(reader.result);
          this.setState({
            previewImage: reader.result
          });
        };

        this.handleUpload(image);
      }
    });

    _defineProperty(this, "handleUpload", image => {
      const data = new FormData();

      if (image) {
        data.append('productImage', image, image.name);
        external_axios_default.a.post('/api/upload', data, {
          headers: {
            'accept': 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`
          }
        }).then(response => {
          if (200 === response.status) {
            // If file size is larger than expected.
            if (response.data.error) {
              if ('LIMIT_FILE_SIZE' === response.data.error.code) {
                alert('Max size: 2MB');
              } else {
                console.log(response.data); // If not the given file type

                alert(response.data.error);
              }
            } else {
              // Success
              let fileName = response.data;
              this.setState({
                imageUrl: fileName.location
              });
              console.log('fileName', fileName.location); // alert( 'File Uploaded', '#3089cf' );
            }
          }
        }).catch(error => {
          // If another error
          alert(error, 'red');
        });
      } else {
        // if file not selected throw error
        alert('Please upload file');
      }
    });

    _defineProperty(this, "handleChangeHover", e => {
      if (e.target.files[0]) {
        let imageHover = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(imageHover);

        reader.onload = () => {
          // console.log(reader.result);
          this.setState({
            previewImageHover: reader.result
          });
        };

        this.handleUploadHover(imageHover);
      }
    });

    _defineProperty(this, "handleUploadHover", imageHover => {
      const data = new FormData();

      if (imageHover) {
        data.append('productImageHover', imageHover, imageHover.name);
        external_axios_default.a.post('/api/upload-hover', data, {
          headers: {
            'accept': 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`
          }
        }).then(response => {
          if (200 === response.status) {
            // If file size is larger than expected.
            if (response.data.error) {
              if ('LIMIT_FILE_SIZE' === response.data.error.code) {
                alert('Max size: 2MB');
              } else {
                console.log(response.data); // If not the given file type
                // alert( response.data.error, 'red' );
              }
            } else {
              // Success
              let fileName = response.data;
              this.setState({
                imageHoverUrl: fileName.location
              }); // console.log( 'fileName', fileName.location );
              // alert( 'File Uploaded', '#3089cf' );
            }
          }
        }).catch(error => {
          // If another error
          alert(error);
        });
      } else {
        // if file not selected throw error
        alert('Please upload file');
      }
    });

    _defineProperty(this, "addProduct", e => {
      e.preventDefault(); // console.log(this.state.imageUrl)

      let {
        imageUrl,
        imageHoverUrl,
        title,
        type,
        description,
        offer,
        oldPrice,
        newPrice,
        discount,
        discountOff,
        onSale,
        newProduct
      } = this.state;
      const product = {
        imageUrl: imageUrl,
        imageHoverUrl: imageHoverUrl,
        title: title,
        type: type,
        description: description,
        offer: Boolean(offer),
        oldPrice: Number(oldPrice),
        newPrice: Number(newPrice),
        discount: Boolean(discount),
        discountOff: Number(discountOff),
        onSale: Boolean(onSale),
        newProduct: Boolean(newProduct)
      };

      if (title != '' || imageUrl != '' || imageHoverUrl != '') {
        const db = firebase["b" /* firebase */].firestore();
        const dbOrderRef = db.collection('products');
        dbOrderRef.add(product).then(() => {
          // this.props.resetCart();
          external_react_toastify_["toast"].success('Product has been created successfully.', {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          }); // setTimeout(() => {Router.push('/')},3000);  

          this.closeModal();
          this.resetForm();
        });
      } else {
        external_react_toastify_["toast"].error('Fillup the form', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
    });
  }

  render() {
    let {
      previewImage,
      previewImageHover
    } = this.state;
    return __jsx(external_react_default.a.Fragment, null, __jsx("div", {
      className: `admin-product-modal ${this.props.active}`
    }, __jsx("div", {
      className: "modal-innter-content"
    }, __jsx("button", {
      type: "button",
      className: "close",
      onClick: this.closeModal
    }, __jsx("span", {
      "aria-hidden": "true"
    }, __jsx("i", {
      className: "bx bx-x"
    }))), __jsx("div", {
      className: "modal-body"
    }, __jsx("h3", null, "Add Product"), __jsx("form", {
      onSubmit: this.addProduct
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Upload your Product image here"), __jsx("div", {
      className: "upload-img"
    }, __jsx("span", null, __jsx("i", {
      className: "bx bxs-image-add"
    }), "Click here or drop files to upload"), __jsx("input", {
      type: "file",
      className: "form-control-file",
      name: "productImage",
      accept: "image/*",
      onChange: this.handleChange
    })), previewImage ? __jsx("div", {
      className: "uploaded-img"
    }, __jsx("img", {
      src: previewImage,
      alt: "Image",
      className: "img-thumbnail"
    })) : null), __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Upload your Product hover image here"), __jsx("div", {
      className: "upload-img"
    }, __jsx("span", null, __jsx("i", {
      className: "bx bxs-image-add"
    }), "Click here or drop files to upload"), __jsx("input", {
      type: "file",
      className: "form-control-file",
      name: "productImageHover",
      onChange: this.handleChangeHover
    })), previewImageHover ? __jsx("div", {
      className: "uploaded-img"
    }, __jsx("img", {
      src: previewImageHover,
      alt: "Image",
      className: "img-thumbnail"
    })) : null), __jsx("h4", {
      className: "title"
    }, "Add your Product description and necessary information from here"), __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Name"), __jsx("input", {
      type: "text",
      className: "form-control",
      value: this.state.title,
      onChange: e => this.setState({
        title: e.target.value
      })
    })), __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Description"), __jsx("textarea", {
      className: "form-control",
      value: this.state.description,
      onChange: e => this.setState({
        description: e.target.value
      }),
      rows: "3"
    })), __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Price"), __jsx("input", {
      type: "number",
      className: "form-control",
      value: this.state.newPrice,
      onChange: e => this.setState({
        newPrice: e.target.value
      })
    })), __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Offer?"), __jsx("select", {
      className: "form-control",
      onChange: e => this.setState({
        offer: e.target.value
      })
    }, __jsx("option", {
      value: "true"
    }, "Yes"), __jsx("option", {
      value: "false"
    }, "No"))), __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Old Price"), __jsx("input", {
      type: "number",
      className: "form-control",
      value: this.state.oldPrice,
      onChange: e => this.setState({
        oldPrice: e.target.value
      })
    })), __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "New Product?"), __jsx("select", {
      className: "form-control",
      onChange: e => this.setState({
        newProduct: e.target.value
      })
    }, __jsx("option", {
      value: "true"
    }, "Yes"), __jsx("option", {
      value: "false"
    }, "No"))), __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "On Sale?"), __jsx("select", {
      className: "form-control",
      onChange: e => this.setState({
        onSale: e.target.value
      })
    }, __jsx("option", {
      value: "true"
    }, "Yes"), __jsx("option", {
      value: "false"
    }, "No"))), __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Discount?"), __jsx("select", {
      className: "form-control",
      onChange: e => this.setState({
        discount: e.target.value
      })
    }, __jsx("option", {
      value: "true"
    }, "Yes"), __jsx("option", {
      value: "false"
    }, "No"))), __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Discount In Percent (1 or 10 ...)"), __jsx("input", {
      type: "number",
      className: "form-control",
      value: this.state.discountOff,
      onChange: e => this.setState({
        discountOff: e.target.value
      })
    })), __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Product Type"), __jsx("select", {
      className: "form-control",
      onChange: e => this.setState({
        type: e.target.value
      })
    }, __jsx("option", {
      value: "T-Shirt"
    }, "T-Shirt"), __jsx("option", {
      value: "Bags"
    }, "Bags"), __jsx("option", {
      value: "Shoes"
    }, "Shoes"), __jsx("option", {
      value: "Women Clothes"
    }, "Women Clothes"), __jsx("option", {
      value: "medical"
    }, "Medical Equipment"), __jsx("option", {
      value: "grocery"
    }, "Grocery"), __jsx("option", {
      value: "electronics"
    }, "Electronics"), __jsx("option", {
      value: "furniture"
    }, "Furniture"), __jsx("option", {
      value: "jewelry"
    }, "Jewelry"))), __jsx("div", {
      className: "modal-btn"
    }, __jsx("div", {
      className: "btn optional-btn float-left",
      onClick: this.closeModal
    }, "Cancel"), __jsx("button", {
      className: "btn default-btn float-right"
    }, "Create Product")))))));
  }

}

/* harmony default export */ var Modals_AddProductModal = (AddProductModal_AddProductModal);
// CONCATENATED MODULE: ./components/Admin/TopNavbar.js
var TopNavbar_jsx = external_react_default.a.createElement;

function TopNavbar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class TopNavbar_TopNavbar extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    TopNavbar_defineProperty(this, "_isMounted", false);

    TopNavbar_defineProperty(this, "state", {
      display: false,
      layoutCls: true,
      collapsed: true
    });

    TopNavbar_defineProperty(this, "handleLogout", () => {
      firebase["a" /* auth */].signOut().then(() => {
        setTimeout(function () {
          external_react_toastify_["toast"].success('You are signed out successfully!', {
            position: "bottom-left",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
        }, 1500);
      }).catch(function (error) {
        alert('OOps something went wrong check your console'); // console.log(error);
      });
    });

    TopNavbar_defineProperty(this, "toggleNavbar", () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    });

    TopNavbar_defineProperty(this, "toggleAddProductModal", () => {
      this.setState({
        AddProductModal: !this.state.AddProductModal
      });
    });

    TopNavbar_defineProperty(this, "onToggleClass", () => {
      this.setState({
        layoutCls: !this.state.layoutCls
      });
      this.props.onChangeClass(this.state.layoutCls);
    });
  }

  render() {
    const {
      collapsed
    } = this.state;
    const classNameOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    return TopNavbar_jsx(external_react_default.a.Fragment, null, TopNavbar_jsx("div", {
      className: "Toastify__toast-container Toastify__toast-container--bottom-center"
    }, TopNavbar_jsx("div", {
      className: "Toastify__toast Toastify__toast--warning"
    }, TopNavbar_jsx("div", {
      role: "alert",
      className: "Toastify__toast-body"
    }, TopNavbar_jsx("i", {
      className: "bx bx-info-circle"
    }), " Some functions may not work because of storefront vulnerability!"), TopNavbar_jsx("div", {
      className: "Toastify__progress-bar Toastify__progress-bar--controlled Toastify__progress-bar--warning",
      style: {
        animationDuration: "50000ms",
        animationPlayState: "paused",
        opacity: "1",
        transform: "scaleX(0)"
      }
    }))), TopNavbar_jsx("nav", {
      className: "navbar navbar-expand admin-top-navbar"
    }, TopNavbar_jsx(ActiveLink["a" /* default */], {
      href: "/admin/dashboard"
    }, TopNavbar_jsx("a", {
      className: "navbar-brand"
    }, TopNavbar_jsx("h1", null, "Salvadors Hotel"))), TopNavbar_jsx("div", {
      className: "burger-menu x",
      onClick: this.onToggleClass
    }, TopNavbar_jsx("span", {
      className: "top-bar"
    }), TopNavbar_jsx("span", {
      className: "middle-bar"
    }), TopNavbar_jsx("span", {
      className: "bottom-bar"
    })), TopNavbar_jsx("div", {
      className: classNameOne,
      id: "navbarSupportedContent"
    }, TopNavbar_jsx("ul", {
      className: "navbar-nav ml-auto"
    }, TopNavbar_jsx("li", {
      className: "nav-item add-products"
    }, TopNavbar_jsx(ActiveLink["a" /* default */], {
      href: "#",
      activeClassName: "active"
    }, TopNavbar_jsx("a", {
      className: "nav-link",
      onClick: e => {
        e.preventDefault();
        this.toggleAddProductModal();
      }
    }, "Add Hotels"))), TopNavbar_jsx("li", {
      className: "nav-item notification"
    }, TopNavbar_jsx(ActiveLink["a" /* default */], {
      href: "#"
    }, TopNavbar_jsx("a", {
      className: "nav-link"
    }, TopNavbar_jsx("div", {
      className: "count-info"
    }, TopNavbar_jsx("i", {
      className: "bx bx-bell"
    }), TopNavbar_jsx("span", {
      className: "circle"
    }, TopNavbar_jsx("span", {
      className: "ripple"
    }), TopNavbar_jsx("span", {
      className: "ripple"
    }), TopNavbar_jsx("span", {
      className: "ripple"
    }))))), TopNavbar_jsx("ul", {
      className: "dropdown-menu"
    }, TopNavbar_jsx("li", {
      className: "nav-item"
    }, TopNavbar_jsx(ActiveLink["a" /* default */], {
      href: "#",
      activeClassName: "active"
    }, TopNavbar_jsx("a", {
      className: "nav-link"
    }, TopNavbar_jsx("span", {
      className: "status"
    }, "Delivery Successful"), TopNavbar_jsx("span", {
      className: "time"
    }, "- 3m ago"), TopNavbar_jsx("p", null, "Order #8985 had been placed")))), TopNavbar_jsx("li", {
      className: "nav-item"
    }, TopNavbar_jsx(ActiveLink["a" /* default */], {
      href: "#",
      activeClassName: "active"
    }, TopNavbar_jsx("a", {
      className: "nav-link"
    }, TopNavbar_jsx("span", {
      className: "status"
    }, "Delivery Successful"), TopNavbar_jsx("span", {
      className: "time"
    }, "- 5m ago"), TopNavbar_jsx("p", null, "Order #8986 had been placed")))), TopNavbar_jsx("li", {
      className: "nav-item"
    }, TopNavbar_jsx(ActiveLink["a" /* default */], {
      href: "#",
      activeClassName: "active"
    }, TopNavbar_jsx("a", {
      className: "nav-link"
    }, TopNavbar_jsx("span", {
      className: "feeds"
    }, "More Feeds")))))), TopNavbar_jsx("li", {
      className: "nav-item profile"
    }, TopNavbar_jsx(ActiveLink["a" /* default */], {
      href: "#"
    }, TopNavbar_jsx("a", {
      className: "nav-link"
    }, TopNavbar_jsx("img", {
      src: __webpack_require__("7BLw"),
      alt: "Image"
    }))), TopNavbar_jsx("ul", {
      className: "dropdown-menu"
    }, TopNavbar_jsx("li", {
      className: "nav-item"
    }, TopNavbar_jsx(ActiveLink["a" /* default */], {
      href: "#",
      activeClassName: "active"
    }, TopNavbar_jsx("a", {
      className: "nav-link"
    }, "Settings"))), TopNavbar_jsx("li", {
      className: "nav-item"
    }, TopNavbar_jsx(ActiveLink["a" /* default */], {
      href: "#",
      activeClassName: "active"
    }, TopNavbar_jsx("a", {
      onClick: e => {
        e.preventDefault();
        this.handleLogout();
      },
      className: "nav-link"
    }, "Sign out")))))))), TopNavbar_jsx(Modals_AddProductModal, {
      onClick: this.toggleAddProductModal,
      active: this.state.AddProductModal ? 'active' : ''
    }));
  }

}

/* harmony default export */ var Admin_TopNavbar = __webpack_exports__["a"] = (TopNavbar_TopNavbar);

/***/ }),

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "wW3a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0Yqi");
/* harmony import */ var _TopNavbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uf77");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class LeftSidebar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      layoutCls: false
    });

    _defineProperty(this, "handleLayoutCls", e => {
      this.setState({
        layoutCls: e
      });
    });
  }

  render() {
    let {
      layoutCls
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_TopNavbar__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
      onChangeClass: this.handleLayoutCls
    }), __jsx("nav", {
      className: `admin-sidebar ${layoutCls ? 'active' : null}`
    }, __jsx("ul", null, __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/admin/dashboard",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, __jsx("i", {
      className: "bx bx-home-alt"
    }), "Dashboard"))), __jsx("li", {
      className: "nav-item",
      title: "Coming Soon"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/admin/products",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, __jsx("i", {
      className: "bx bx-cart"
    }), "Products"))), __jsx("li", {
      className: "nav-item",
      title: "Coming Soon"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/admin/orders",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, __jsx("i", {
      className: "bx bx-file-blank"
    }), "Orders"))), __jsx("li", {
      className: "nav-item",
      title: "Coming Soon"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/admin/customers",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, __jsx("i", {
      className: "bx bx-user-circle"
    }), "Customers"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/",
      activeClassName: "active"
    }, __jsx("a", {
      target: "_blank",
      className: "nav-link"
    }, __jsx("i", {
      className: "bx bx-link"
    }), "Storefront!"))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (LeftSidebar);

/***/ }),

/***/ "xWvD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auth; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wVQA");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "b", function() { return firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("EuFW");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bnmT");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);


 // Need to update below config

const config = {
  apiKey: "AIzaSyDQDPsbDv5uCMe5Dj-sl_iakmtoRkfKNS0",
  authDomain: "salvadors-hotel.firebaseapp.com",
  projectId: "salvadors-hotel",
  storageBucket: "salvadors-hotel.appspot.com",
  messagingSenderId: "204879550163",
  appId: "1:204879550163:web:68855cb5f9323e88f8a626",
  measurementId: "G-5G3WYX3424"
};

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
}

const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();


/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });