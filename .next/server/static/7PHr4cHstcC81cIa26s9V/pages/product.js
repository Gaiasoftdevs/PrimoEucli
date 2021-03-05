module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		23: 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+hxB":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img3-3c15080eb6266b41690b3596ade60cad.jpg";

/***/ }),

/***/ "/M8r":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAkCAYAAAAZ4GNvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0Q0RjFBNUNBNjA3MTFFOUFEQjI4NzlGOUJBRTE0MjciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0Q0RjFBNUJBNjA3MTFFOUFEQjI4NzlGOUJBRTE0MjciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWViNWRhYzgtNGM1OS1hMjQ0LTlkYTctY2Q0MDIzYTNlMjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlS+zs8AAAs1SURBVHjaxFkJcBRlFv665z4ymSRMLnIhAVk5IgnngoUcrgWlq2uhe6N41KKgha6FCC67K57AoqKUKKi1qxaysFIqFJCEawNBMBggLARykTBJJsckk7l7eqZ7X3dm2HZMSFRwu3jVTXfP/3/fe9977/87DL7/wQziHRHX8WB+wG8YhSnviwOcrxkp5nu8z9jtLVlpaalrurqCt2g0bFtCgqaW5/m6QCBQ7/V6G9rb2x2nTp3qeOSRR3rofUEBWLyWpJjvCnz//oPGGTNu+ej0mfa7lq8ogTVRj1GjbMjNsSI728JnZJi609JMjiSrvoMI2cPhcB3HcZeJmL2lpaV569ZtrRs2vB68FqS+K3iWgKzyB4RVDzy0E7t2XYAlQQ+Gnmi1KphMWlitethsJiKSiLxcK24YZkVubpJ/aJbZlTrE1KNSoZMIXSJi9TRWU4+rp66uvvHywoULHK2tLUKUVDyZvsgNGrwMvLvbPVenN3z8/OpDljfePIa0VDNYlkEkIkZNQEQQIQq9czEMK5Mym3tJZaYnICc3EfnDk5GfnxLJzrEEM9LMPotF6xYEoY1I1UukgsFgndPpqn788cXn9u8v5aOAhXgizGDlUlvbkJObm/O5vdk79pnl+3C+ugMedxBBToAoijIJlYol6/2JFA26DYGISCa900tMeiyCcoWipoMt1YQ8ktxwIjRy5BAMH5YcSU83h5OSjLzf734rLS3lRfpFJGrfiAwzGODr1q3XLVq0+B2VSvt7CRTLCujo8KP6QifOnm3Dmao21Dd0wen0o6srgHBYAioQAQZqFZmalYnFCMmxJxbkbfldnu+9ZliKlIaB3qDBpo33wTakPTR+fGEmvR4m46PnKwTUg/H8ww8vekit1syXJu41FpmZZtTUdKKxyYVXXrqNZKHDwYMN6O4J4vQpB86d64Czu5dMZ6cfoVCIwAEada+UJEJqtZoM0OtpEkaKDoO2Ng/GjBmKCRPS8NyK56U4Gsg4BR4+dqEeSOfNzY7JOp3uGRrYEHsgSYPnI3h3SwUcDi/cniC2b6+CSq2iZDVjytRsvPjCbJSXX0b1xU643RyqzjgoOt1wEDinM4BgMEwRlBJdDZ1OLRMKBEIguWDNyz/HsfLPcanRvj8KHgrdRwbyvCyXsrKjKUlJKS8Qh6wrD5he8J/uvIAGArP0ianY9M5X0BMIjovgrY3H8eSTU7Hx7RM4cqQRPRSJX9w9Gm++MQ9eLw97ixsXiNDXJ1twgWRXf6kb7e0+dLuIEIFftmwOVScOK1ducYXDwlaaUqeQDRs1pj/Py8CXLHlcU1BQuJRh1DOVD7VawG53Y8OGY2BJxwcOXcJts28gj3rx0cen8edVM3H0aCP2H6iX5fR1pQM+Pw8jldHa+m58+OEpjBmdhr+smgWvj6PI+dBABCpPtZK8gli8aCI2bVpL0TB+UVq6q0YKdNTYwRQY6QVVV5f77gAn+oNhUQzyohgIiCIXpGu6seSJ3SJUq8QHH94p1tV3ie9urhALxm8US0rqxJZWj5hse0Wc87O/iyEuIkoHeVB8772T4thxb4oq7Spx2fJiMf4gGYp+f1g8duyoOG3a9JopU6b8lnBMI7uZbARZBpk1KiPJ6VIKfdvrDQ1NeQazaQ3vKDb4Kx4F37qXSpybylsEX59x4eDhZrz68u3427q52LnzPNa/Vo7X1s/FnDk3wGLRYezYVJyrbpfLKQHH8hXFKCmthdGoQUFBBpYsniRPFgiAtE/ZyEGuRuGwj7y+hU9MTPj8yy+/bFPU9G+VyXjZyMDXrl2vs2VkrIkEmkYEqp5GpLsKXOMWqMwjwaXdjhHWWdi7cxay8nKw94ATX+y5jNdfuxPlxy7LcsrPT4ZAgG+bnQ9/IAyKgExm/vwxWPrUHqz+6yxkZyXKoBmFCKTrzz77AvX1dRUnT1YcjAKOab2vOv/NFeIHH/zDcM898x/T6vhXfRWPMaGmj8HqSORihP5F5KFYDZW25LEQrbPBGafDlFEInSUXTz9zHCUltTAbBfzkRgtG3zQEu/fWoL3ViwmTs+TymUfddfs/f0VeVlHp/B94DY3Z2mrHggX3u+jeCwcOHDhDt/1kPjJv9ByIlkw+RkIJnnX1+P6gMxhWczVvJPu/ehIM4WaoE1Jm9vYz6S2BJ8+Ksh80VAfUiWPBJk2HMWMmajpGQjTkgQubsGbtQdw1L4sikIdf/uYTuWzuL1mIqVOyZbnEgEtnHY3z7LMrcfp05Y49e/a8FwXqVwCXrqXFXKi/Usno9YalajWTHLGMgnbkQkQ6jyDiqSHM1P00UhprJDay96GRumgYfGcVxDZJWu9geHohWH0RPOwUvPXSFKRkjpJnGZY/DBMn5snAJX3HgEsNT2pQx4+fwN69e5pCIe7TqGdDUS9z0WteCTpeNlLiqhyOztWU+A8m24bYqGeAc/0HQccRStjPiEgpxBCNIeGXSFwJWG+/FykiYrj3vxq9DvrEEQgbxpC8ZsCtIiLZN0NvJARhWYXyGkcquwI54L775ovUwdfs2LHjoEIuPoXXOYXXr4BXKXZDVB6dFd3dXUdbW5p5MOpMi22U2Zw+Abqhc6GyzSOv2iAG2yEEO+TZpZYeK1gMoyJSZNT2BSLCedsR7jkLgUhb+WKIrkPgPB0UNQuFeIg8o5Z8sHnzZvL88fLDhw9vpVVlICqPYFQ6MamE44HHb+UkCWmljpaZmWkpKirKvfXWmfMmTJx4502jx49ITjKpJNeG/E7w7aXgmrYh3PlvGtZN+EXIvZ6J7yPSsjLSu0SWpmS1RC4BrLUIQyatQ11HKhYumO/W6/UrS0tLL/ThdWWSfgu8Ko6A3Mk8Hg9z8eLFQHHxvnPF+/aVtDQ31vh9fr1OZ0o0W9N1RtvNjC7v19CmzyOqVgici6ag3BI4ebUoazpGhM4MK0VFWlXSej/og86QDO2Nj2Llc6+CZcLbSkpKyiKRiNLjSq/zfWxQroBXRoCNI8MQkXBFRcVlSY92e9Mpn9cToPAmGHR6kyllmMqYMRu6nAfAWG6kkennIR9Enraukd78kpa5V4YjfTNqA2wztmD3YTe2f7LlIu1336ftYU8fwLn+5BIPPn5jwvSxkotUV1d37N69q6KysvKo0+ls83m9tLxRW8yJSTqTrQDGnHvBps6m3MiBJDGRIiKGAlJWyoEQaLeVNPJ+eFMW408r/shpVMz7R8vLz0WBKoEHox5Xeh39gWf6+eYSUYKPWWtrq6esrOx8SUlxmbOrs7a7yxkIhXiz0Wi2JCTnQp82Heqhd5O2J1BlTSYeXoi+DqhMmUicvhVvb96G05Unyqqqqv7l9/sD/Xidv5rX+/I2o1h2xlZzaoVpFImtUdodd9wxorCwaNLkSZOmjxk3bmxmVhbUNJrUz4Ld5xFxlCLBlocaTyEe+N29nUaD4XnqpOejgGOd1B+10GDAq67ypUuIs4hiGxZW6FE2SnAnlbuzJK0TF6qrqzrbOxiNRpNhsaSozZY06G2T0ebPwLKnlgged88OityhqIeVXucGStLBfPpg4iw+GqqBopGenpFQVFSY/dOp0+aMKyiYYbfbU7fv2BH2enp2E9EPXC6XT7EMUC4BuLi96vf+6MRcRVLsYEhETbmhiEUupPC4f6Ca3tcx0AY8/quVsvrEwIejZz56DsURUSsIMIpCEFJUFq6/9cv1/NDKKpvbVSSlVrwTA69cgIUUy4DrCv5qkmLi8kKlAK70vKAgwMcVgEEB/6HgB5Pgyvxg45pfJM6EqzWk6wl+oGjEwCsPIQ6w8F0/c19r8H2RQB9/hBjwC/D/E/yP8uef/wowAGq6uGuXtYeLAAAAAElFTkSuQmCC"

/***/ }),

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

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("uhzS");


/***/ }),

/***/ "2byq":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-hover3-9e84e1a41f6234bb25644f06ee04583a.jpg";

/***/ }),

/***/ "30GX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ['react-owl-carousel3']
  }
});
const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  navText: ["<i class='flaticon-left'></i>", "<i class='flaticon-right-arrow'></i>"],
  responsive: {
    0: {
      items: 2
    },
    576: {
      items: 3
    },
    768: {
      items: 4
    },
    1200: {
      items: 6
    }
  }
};

class InstagramFeed extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_isMounted", false);

    _defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this._isMounted = true;
    this.setState({
      display: true
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return __jsx("div", {
      className: "instagram-area"
    }, __jsx("div", {
      className: "container-fluid"
    }, __jsx("div", {
      className: "instagram-title"
    }, __jsx("a", {
      href: "#",
      target: "_blank"
    }, __jsx("i", {
      className: "bx bxl-instagram"
    }), " Follow us on @Salvadors Hotel")), this.state.display ? __jsx(OwlCarousel, _extends({
      className: "instagram-slides owl-carousel owl-theme"
    }, options), __jsx("div", {
      className: "single-instagram-post"
    }, __jsx("img", {
      src: __webpack_require__("bruv"),
      alt: "image"
    }), __jsx("i", {
      className: "bx bxl-instagram"
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank",
      className: "link-btn"
    }))), __jsx("div", {
      className: "single-instagram-post"
    }, __jsx("img", {
      src: __webpack_require__("R1pG"),
      alt: "image"
    }), __jsx("i", {
      className: "bx bxl-instagram"
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank",
      className: "link-btn"
    }))), __jsx("div", {
      className: "single-instagram-post"
    }, __jsx("img", {
      src: __webpack_require__("sSV7"),
      alt: "image"
    }), __jsx("i", {
      className: "bx bxl-instagram"
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank",
      className: "link-btn"
    }))), __jsx("div", {
      className: "single-instagram-post"
    }, __jsx("img", {
      src: __webpack_require__("PV8R"),
      alt: "image"
    }), __jsx("i", {
      className: "bx bxl-instagram"
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank",
      className: "link-btn"
    }))), __jsx("div", {
      className: "single-instagram-post"
    }, __jsx("img", {
      src: __webpack_require__("bpez"),
      alt: "image"
    }), __jsx("i", {
      className: "bx bxl-instagram"
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank",
      className: "link-btn"
    }))), __jsx("div", {
      className: "single-instagram-post"
    }, __jsx("img", {
      src: __webpack_require__("PvAP"),
      alt: "image"
    }), __jsx("i", {
      className: "bx bxl-instagram"
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank",
      className: "link-btn"
    }))), __jsx("div", {
      className: "single-instagram-post"
    }, __jsx("img", {
      src: __webpack_require__("8I5c"),
      alt: "image"
    }), __jsx("i", {
      className: "bx bxl-instagram"
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank",
      className: "link-btn"
    }))), __jsx("div", {
      className: "single-instagram-post"
    }, __jsx("img", {
      src: __webpack_require__("I/+h"),
      alt: "image"
    }), __jsx("i", {
      className: "bx bxl-instagram"
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank",
      className: "link-btn"
    }))), __jsx("div", {
      className: "single-instagram-post"
    }, __jsx("img", {
      src: __webpack_require__("sjPB"),
      alt: "image"
    }), __jsx("i", {
      className: "bx bxl-instagram"
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank",
      className: "link-btn"
    }))), __jsx("div", {
      className: "single-instagram-post"
    }, __jsx("img", {
      src: __webpack_require__("wWkf"),
      alt: "image"
    }), __jsx("i", {
      className: "bx bxl-instagram"
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank",
      className: "link-btn"
    })))) : ''));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (InstagramFeed);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "8I5c":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/insta7-c051086c02d3f532e754b2692da85272.jpg";

/***/ }),

/***/ "ACD1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SUB_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_SHIPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_QUANTITY_WITH_NUMBER; });
/* unused harmony export ORDER_FORM */
/* unused harmony export CHECKOUT_CHARGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return RESET_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return USRER_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CHECK_USRER_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return USRER_LOGOUT; });
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

/***/ "CgTi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./store/actions/cartActions.js
var cartActions = __webpack_require__("Nxmy");

// CONCATENATED MODULE: ./components/Modals/WishlistModal.js
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class WishlistModal_WishlistModal extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      modal: false
    });

    _defineProperty(this, "closeModal", () => {
      this.props.onClick(this.state.modal);
    });
  }

  render() {
    return __jsx("div", {
      className: `shoppingWishlistModal right ${this.props.active}`
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
    }, __jsx("h3", null, "My Wish List (3)"), __jsx("div", {
      className: "products-cart-content"
    }, __jsx("div", {
      className: "products-cart"
    }, __jsx("div", {
      className: "products-image"
    }, __jsx(link_default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__("xDLk"),
      alt: "image"
    })))), __jsx("div", {
      className: "products-content"
    }, __jsx("h3", null, __jsx(link_default.a, {
      href: "#"
    }, __jsx("a", null, "Long Sleeve Leopard T-Shirt"))), __jsx("span", null, "Blue / XS"), __jsx("div", {
      className: "products-price"
    }, __jsx("span", null, "1"), __jsx("span", null, "x"), __jsx("span", {
      className: "price"
    }, "$250.00")), __jsx(link_default.a, {
      href: "#"
    }, __jsx("a", {
      className: "remove-btn"
    }, __jsx("i", {
      className: "bx bx-trash"
    }))))), __jsx("div", {
      className: "products-cart"
    }, __jsx("div", {
      className: "products-image"
    }, __jsx(link_default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__("KMck"),
      alt: "image"
    })))), __jsx("div", {
      className: "products-content"
    }, __jsx("h3", null, __jsx(link_default.a, {
      href: "#"
    }, __jsx("a", null, "Causal V-Neck Soft Raglan"))), __jsx("span", null, "Blue / XS"), __jsx("div", {
      className: "products-price"
    }, __jsx("span", null, "1"), __jsx("span", null, "x"), __jsx("span", {
      className: "price"
    }, "$200.00")), __jsx(link_default.a, {
      href: "#"
    }, __jsx("a", {
      className: "remove-btn"
    }, __jsx("i", {
      className: "bx bx-trash"
    }))))), __jsx("div", {
      className: "products-cart"
    }, __jsx("div", {
      className: "products-image"
    }, __jsx(link_default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__("+hxB"),
      alt: "image"
    })))), __jsx("div", {
      className: "products-content"
    }, __jsx("h3", null, __jsx(link_default.a, {
      href: "#"
    }, __jsx("a", null, "Hanes Men's Pullover"))), __jsx("span", null, "Blue / XS"), __jsx("div", {
      className: "products-price"
    }, __jsx("span", null, "1"), __jsx("span", null, "x"), __jsx("span", {
      className: "price"
    }, "$200.00")), __jsx(link_default.a, {
      href: "#"
    }, __jsx("a", {
      className: "remove-btn"
    }, __jsx("i", {
      className: "bx bx-trash"
    })))))), __jsx("div", {
      className: "products-cart-btn"
    }, __jsx(link_default.a, {
      href: "/products-left-sidebar"
    }, __jsx("a", {
      className: "optional-btn"
    }, "Go Shopping!"))))));
  }

}

/* harmony default export */ var Modals_WishlistModal = (WishlistModal_WishlistModal);
// CONCATENATED MODULE: ./components/Layouts/TopHeader.js
var TopHeader_jsx = external_react_default.a.createElement;

function TopHeader_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class TopHeader_TopHeader extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    TopHeader_defineProperty(this, "state", {
      WishlistModal: false
    });

    TopHeader_defineProperty(this, "toggleModalWishlist", () => {
      this.setState({
        WishlistModal: !this.state.WishlistModal
      });
    });

    TopHeader_defineProperty(this, "handleLogout", () => {
      this.props.userLogout();
      router_default.a.push('/');
    });
  }

  render() {
    const {
      user
    } = this.props;
    return TopHeader_jsx(external_react_default.a.Fragment, null, TopHeader_jsx("div", {
      className: "top-header"
    }, TopHeader_jsx("div", {
      className: "container"
    }, TopHeader_jsx("div", {
      className: "row align-items-center"
    }, TopHeader_jsx("div", {
      className: "col-lg-6 col-md-12"
    }, TopHeader_jsx("ul", {
      className: "header-contact-info"
    }, TopHeader_jsx("li", null, "Welcome to Livani"), TopHeader_jsx("li", null, "Call: +1-541-754-3010"), TopHeader_jsx("li", null, TopHeader_jsx("div", {
      className: "dropdown language-switcher d-inline-block"
    }, TopHeader_jsx("button", {
      className: "dropdown-toggle",
      type: "button"
    }, TopHeader_jsx("img", {
      src: __webpack_require__("K04G"),
      alt: "image"
    }), TopHeader_jsx("span", null, "Eng ", TopHeader_jsx("i", {
      className: "bx bx-chevron-down"
    }))), TopHeader_jsx("div", {
      className: "dropdown-menu"
    }, TopHeader_jsx(link_default.a, {
      href: "#"
    }, TopHeader_jsx("a", {
      className: "dropdown-item d-flex align-items-center"
    }, TopHeader_jsx("img", {
      src: __webpack_require__("MA2x"),
      className: "shadow-sm",
      alt: "flag"
    }), TopHeader_jsx("span", null, "Ger"))), TopHeader_jsx(link_default.a, {
      href: "#"
    }, TopHeader_jsx("a", {
      className: "dropdown-item d-flex align-items-center"
    }, TopHeader_jsx("img", {
      src: __webpack_require__("L3xN"),
      className: "shadow-sm",
      alt: "flag"
    }), TopHeader_jsx("span", null, "Fre"))), TopHeader_jsx(link_default.a, {
      href: "#"
    }, TopHeader_jsx("a", {
      className: "dropdown-item d-flex align-items-center"
    }, TopHeader_jsx("img", {
      src: __webpack_require__("yLzJ"),
      className: "shadow-sm",
      alt: "flag"
    }), TopHeader_jsx("span", null, "Spa"))), TopHeader_jsx(link_default.a, {
      href: "#"
    }, TopHeader_jsx("a", {
      className: "dropdown-item d-flex align-items-center"
    }, TopHeader_jsx("img", {
      src: __webpack_require__("rzaN"),
      className: "shadow-sm",
      alt: "flag"
    }), TopHeader_jsx("span", null, "Rus"))), TopHeader_jsx(link_default.a, {
      href: "#"
    }, TopHeader_jsx("a", {
      className: "dropdown-item d-flex align-items-center"
    }, TopHeader_jsx("img", {
      src: __webpack_require__("y+R7"),
      className: "shadow-sm",
      alt: "flag"
    }), TopHeader_jsx("span", null, "Ita")))))))), TopHeader_jsx("div", {
      className: "col-lg-6 col-md-12"
    }, TopHeader_jsx("ul", {
      className: "header-top-menu"
    }, TopHeader_jsx("li", null, TopHeader_jsx(link_default.a, {
      href: "/login"
    }, TopHeader_jsx("a", null, TopHeader_jsx("i", {
      className: "bx bxs-user"
    }), " My Account"))), TopHeader_jsx("li", null, TopHeader_jsx(link_default.a, {
      href: "#toggleModalWishlist"
    }, TopHeader_jsx("a", {
      onClick: this.toggleModalWishlist
    }, TopHeader_jsx("i", {
      className: "bx bx-heart"
    }), " Wishlist"))), TopHeader_jsx("li", null, TopHeader_jsx(link_default.a, {
      href: "/compare"
    }, TopHeader_jsx("a", null, TopHeader_jsx("i", {
      className: "bx bx-shuffle"
    }), " Compare"))), TopHeader_jsx("li", null, user ? TopHeader_jsx(link_default.a, {
      href: "#"
    }, TopHeader_jsx("a", {
      onClick: e => {
        e.preventDefault();
        this.handleLogout();
      }
    }, TopHeader_jsx("i", {
      className: "bx bx-log-in"
    }), " Logout")) : TopHeader_jsx(link_default.a, {
      href: "/login"
    }, TopHeader_jsx("a", null, TopHeader_jsx("i", {
      className: "bx bx-log-in"
    }), " Login")))))))), TopHeader_jsx(Modals_WishlistModal, {
      onClick: this.toggleModalWishlist,
      active: this.state.WishlistModal ? 'active' : ''
    }));
  }

}

const mapStateToProps = state => {
  return {
    user: state.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userLogout: () => {
      dispatch(Object(cartActions["j" /* userLogout */])());
    }
  };
};

/* harmony default export */ var Layouts_TopHeader = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(TopHeader_TopHeader));

/***/ }),

/***/ "EuFW":
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "I/+h":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/insta8-07d7632f250f9441066d6ef35b5aa3b6.jpg";

/***/ }),

/***/ "Ix5F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class PageBanner extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let {
      pageTitle,
      homePageUrl,
      homePageText,
      activePageText
    } = this.props;
    return __jsx("div", {
      className: "page-title-area"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "page-title-content"
    }, __jsx("h2", null, pageTitle), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: homePageUrl
    }, __jsx("a", null, homePageText))), __jsx("li", null, activePageText)))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (PageBanner);

/***/ }),

/***/ "JNgp":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-hover4-69a2db62a5914d3818106600c3e25034.jpg";

/***/ }),

/***/ "K04G":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NTM4RDUxQjYxM0IxMUU3ODM5NTg5Qjc3NkUwNEZFMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NTM4RDUxQzYxM0IxMUU3ODM5NTg5Qjc3NkUwNEZFMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk1MzhENTE5NjEzQjExRTc4Mzk1ODlCNzc2RTA0RkUxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk1MzhENTFBNjEzQjExRTc4Mzk1ODlCNzc2RTA0RkUxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAKgBAAwERAAIRAQMRAf/EAJkAAQABBQEAAAAAAAAAAAAAAAAHAgMEBQYBAQEAAgMBAQAAAAAAAAAAAAAAAgYBBAUDBxAAAAQBBwkHBAMBAAAAAAAAAQIDBAAREhMFBhYHMaHRkpPTFVVWIUGRIjIzFFFhQtKCIyVFEQAAAgMQAgIBBQAAAAAAAAAAAfACAxEhMVGBoRJSghNTBBRUBRVBcZHRMmHhIkJD/9oADAMBAAIRAxEAPwDlhqtFarm7o4qNFlE3Cx3LoRonRkzgAJthKQRE/b2zhyxa6ThuQwQePY1hmjZ9nxYyXx3cwFDJ8G/6QACFJSiFHMmTs0RvDo+PfiEHBjN6jaGamEywqz/iDxFKcLVr8gRA5HUpJwGCT8YkbQ3fl7yfoBubIVNU94KpSrBVdk0cJuqesREKBaiE4EM3ESAM3ygAy98c7lHFmC1I3nvZDp8O2as8wqbJWku+9G8JNuvhv1Ep4l/SKpdMqwufZcjgFP8AYXXw36iU8S/pC6ZVg7LkcAp/sLr4b9RKeJf0hdMqwdlyOAU/2PS2Zw5KYDFtGoBgGUBASgICH8IXTKsMHyPIn/gSSiHmhQQqZFU4fFBw1dkKu7AF0nAgoUJjYkwaFQMk+XL3hF6WfWjfKDx7jHzobIW3+gNX/GXpQcnPwmcXiRQ+JLSfMo5BT75mbvjzdedd8Q/1hiAWG5iHTSdgoRQjYtXFO/RSAjVsM4fK8b0f95gk9XfJ3xI4o6T3k/R+AGdZo9UNLRVO8rZis4q5Ur0xjJmCgX8yhSnbJf1URSmylljR5JZUmC1J8v4vefEI6fDs2y+YVJidFd9w5PRiR7w4V8iceAb6KreMaqfIueg5TGVSyF4cK+ROPAN9C8Y1U+Q0HKYyqWQvDhXyJx4BvoXjGqnyGg5TGVSyF4cK+ROPAN9C8Y1U+Q0HKYyqWRGhLF2+aNSt2lnHiLgyazd8vNFUqyahgEAKUQEpJACScUe2LrqGRm6axfoPndAxfGylsxcCldR7walFctXeeeCgpUc75E2ky+aTJEb9m5+ZUo/2CgcQoTsviKBSrK2eeKVi2BuWr3YJzQRK2ERApkwLMVl7O02eMm3Y1icfdlCgsNvZCobb1XaJhWwWXcA6blcC7UVA1GsdedIYCSABJANJIWNPkMwrcmSp0jecIb3HZdRdsRNFqCj7piSr0W96YLqH0xXL1pVFk63I7icgvRb3pguofTC9aVQ63I7icgvRb3pguofTC9aVQ63I7icgvRb3pguofTC9aVQ63I7ichXwTFnnTXNuIUG0ZJII6zisJdLYcExZ501zbiFBtGSSBrOKwl0thwTFnnTXNuIUG0ZJIGs4rCXS2HBMWedNc24hQbRkkgazisJdLYcExZ501zbiFBtGSSBrOKwl0thwTFnnTXNuIUG0ZJIGs4rCXS2HBMWedNc24hQbRkkgazisJdLYcExZ501zbiFBtGSSBrOKwl0tjT3Xsd1aO0JpjzulKw6HZZzbTGF17HdWjtCaYXSlYOyzm2mMLr2O6tHaE0wulKwdlnNtMYXXsd1aO0JphdKVg7LObaYwuvY7q0doTTC6UrB2Wc20xhdex3Vo7QmmF0pWDss5tpjC69jurR2hNMLpSsHZZzbTGF17HdWjtCaYXSlYOyzm2mMcE499T2/Ub2/Rl/H7fSNMxaVPxKGWEW9WMCQasADVgAasADVgAasAFxv76ft+ovuejL+X2+sZIRX/ABOGSEf/2Q=="

/***/ }),

/***/ "KMck":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img2-f798b134dec99836ebf59fa336cdf267.jpg";

/***/ }),

/***/ "L3xN":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMEY3OTk0MDYxM0MxMUU3ODQ3Rjk5RTY5NjQzOEY2MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxMEY3OTk0MTYxM0MxMUU3ODQ3Rjk5RTY5NjQzOEY2MyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjEwRjc5OTNFNjEzQzExRTc4NDdGOTlFNjk2NDM4RjYzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEwRjc5OTNGNjEzQzExRTc4NDdGOTlFNjk2NDM4RjYzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAKgBAAwERAAIRAQMRAf/EAIAAAAMBAAMAAAAAAAAAAAAAAAAGBwgBAgMBAAIDAQEBAAAAAAAAAAAAAAAHAwUGBAECEAABAwAIBAMJAAAAAAAAAAAAAQIDMbEyM3Q2BwgRUbM0kgREIWFxEkJicwYWEQEAAAMJAQEAAAAAAAAAAAAAATGBwTKCAzMENAUGEQL/2gAMAwEAAhEDEQA/AEB8sj3ue96ue5VVzlVVVVWlVU2PxyOvzO5qAU3b2qr+9zcV9BN1Iyu7PSqky5tIGfTgAjWrKr/VJ7fTR1uKzd3zE8xxcUbCXxXmcrRfHLXva5HNcrXNXiiovBUVAeRhCKcjOI8AFO2957mwE3UjK7tNKqTLm0gZ9OACM6s5rTDR1uKzd3zE8xxcUbCYcrRAAnQziOABTtvee5sBN1Iyu7TSqky5tIGfTgAjOrOa0w0dbis3d8xPMcXFGwmHK0QAJ0M4jgAU7b3nubATdSMru00qpMubSBn04AIzqzmtMNHW4rN3fMTzHFxRsJhytEACdDOI4AFO2957mwE3UjK7tNKqTLm0gZ9OACM6s5rTDR1uKzd3zE8xxcUbCYcrRAAQ/N91Nc23XV3Stj7eQzISI55eA9Cmbfc9S2exmo/JGV3Z6VUmXNo8oE4AI1qxmpKO2jp+Lis3d8w/McXFGwmeE5Whenl7+O7tNvLFP1e7mewfP7uxnSb/2Q=="

/***/ }),

/***/ "MA2x":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpENEQyQjUxRTYxM0IxMUU3QThGRDlFNzgyMDM4RjBCQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpENEQyQjUxRjYxM0IxMUU3QThGRDlFNzgyMDM4RjBCQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ0RDJCNTFDNjEzQjExRTdBOEZEOUU3ODIwMzhGMEJDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ0RDJCNTFENjEzQjExRTdBOEZEOUU3ODIwMzhGMEJDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAKgBAAwERAAIRAQMRAf/EAHkAAQEBAAMAAAAAAAAAAAAAAAABBgIFBwEBAAIDAQAAAAAAAAAAAAAAAAEFAgQGBxAAAQIBDQADAQAAAAAAAAAAAAECAzFRkRKi0qPjVAVVFhchQYEyEQEAAAMHBQEAAAAAAAAAAAAA4WKiUaGx0QJSFgEDBBQVMf/aAAwDAQACEQMRAD8A82fFive573uc9yqrnKqqqqvyqqqmwhKzp1JCs6dQFZ06gKzp1AVnTqArOnUCsixWPa9j3Ne1UVrkVUVFT5RUVCB2XWd701uHeNb3O1biuePebsq05nWd701uHeHudq3E495uyrTmdZ3vTW4d4e52rcTj3m7KtOZ1ne9Nbh3h7natxOPebsq05nWd701uHeHudq3E495uyrTmdZ3vTW4d4e52rcTj3m7KtOZ1ne9Nbh3h7natxOPebsq05nWd701uHeHudq3E495uyrTm3RRvTgAAAAAAADd+XpyeBmFJ9iS+Dm+QyVQPL05PAzB9iS+ByGSqB5enJ4GYPsSXwOQyVQPL05PAzB9iS+ByGSqB5enJ4GYPsSXwOQyVQPL05PAzB9iS+ByGSqB5enJ4GYPsSXwOQyVQPL05PAzB9iS+ByGSqDdlI5sAAAAAAAA5O/pZJfqT8M9f71/EdEoMQoAUAKAFACgCt/pJJfuT9MtH70/Dq//Z"

/***/ }),

/***/ "Nxmy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return checkUserLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return userLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return userLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return subtractQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addQuantityWithNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return resetCart; });
/* harmony import */ var _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ACD1");
 //CHECK_USRER_LOGIN

const checkUserLogin = () => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__[/* CHECK_USRER_LOGIN */ "f"]
  };
}; // USRER_LOGOUT

const userLogout = () => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__[/* USRER_LOGOUT */ "k"]
  };
}; // USRER_LOGIN

const userLogin = () => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__[/* USRER_LOGIN */ "j"]
  };
}; //add products

const addProducts = () => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__[/* ADD_PRODUCTS */ "a"]
  };
}; //add cart action

const addToCart = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__[/* ADD_TO_CART */ "e"],
    id
  };
}; //remove item action

const removeItem = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__[/* REMOVE_ITEM */ "g"],
    id
  };
}; //subtract qt action

const subtractQuantity = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__[/* SUB_QUANTITY */ "i"],
    id
  };
}; //add qt action

const addQuantity = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__[/* ADD_QUANTITY */ "b"],
    id
  };
}; //add qt action with quantity number

const addQuantityWithNumber = (id, qty) => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__[/* ADD_QUANTITY_WITH_NUMBER */ "c"],
    id,
    qty
  };
}; // Reset cart after form submit

const resetCart = () => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__[/* RESET_CART */ "h"]
  };
};

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "PRJF":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img7-e538354221d60ed07ad0b0a2332b88af.jpg";

/***/ }),

/***/ "PV8R":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/insta4-a2628c20c1f9e03faa48437e5d66b2cf.jpg";

/***/ }),

/***/ "PvAP":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/insta6-1a41c927974b3451f06cfc842e67d34e.jpg";

/***/ }),

/***/ "QbmJ":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAlCAYAAAAEGWqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEVBRjZDNjFBNjA3MTFFOUFEQjBCNTJEMjU3ODI4OTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEVBRjZDNjBBNjA3MTFFOUFEQjBCNTJEMjU3ODI4OTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWViNWRhYzgtNGM1OS1hMjQ0LTlkYTctY2Q0MDIzYTNlMjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIv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"

/***/ }),

/***/ "Qz8T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ['react-owl-carousel3']
  }
});
const options = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  margin: 30,
  navText: ["<i class='flaticon-left'></i>", "<i class='flaticon-right-arrow'></i>"],
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    768: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
};

class FacilitySlider extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_isMounted", false);

    _defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this._isMounted = true;
    this.setState({
      display: true
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return __jsx("div", {
      className: "facility-area pb-70"
    }, __jsx("div", {
      className: "container"
    }, this.state.display ? __jsx(OwlCarousel, _extends({
      className: "facility-slides owl-carousel owl-theme"
    }, options), __jsx("div", {
      className: "single-facility-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-tracking"
    })), __jsx("h3", null, "Free Shipping Worldwide")), __jsx("div", {
      className: "single-facility-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-return"
    })), __jsx("h3", null, "Easy Return Policy")), __jsx("div", {
      className: "single-facility-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-shuffle"
    })), __jsx("h3", null, "7 Day Exchange Policy")), __jsx("div", {
      className: "single-facility-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-sale"
    })), __jsx("h3", null, "Weekend Discount Coupon")), __jsx("div", {
      className: "single-facility-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-credit-card"
    })), __jsx("h3", null, "Secure Payment Methods")), __jsx("div", {
      className: "single-facility-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-location"
    })), __jsx("h3", null, "Track Your Order")), __jsx("div", {
      className: "single-facility-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-customer-service"
    })), __jsx("h3", null, "24/7 Customer Support"))) : ''));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (FacilitySlider);

/***/ }),

/***/ "R1pG":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/insta2-b9150c02a589f58a122205bc59dc73e7.jpg";

/***/ }),

/***/ "U3qu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Nxmy");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oAEb");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class QuickViewModal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      modal: false,
      qty: 1,
      max: 10,
      min: 1
    });

    _defineProperty(this, "closeModal", () => {
      this.props.onClick(this.state.modal);
      this.setState({
        qty: 1
      });
    });

    _defineProperty(this, "handleAddToCartFromView", () => {
      this.props.addQuantityWithNumber(this.props.product.id, this.state.qty);
      react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].success('Added to the cart', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      setTimeout(() => {
        this.closeModal();
      }, 2000);
    });

    _defineProperty(this, "IncrementItem", () => {
      this.setState(prevState => {
        if (prevState.qty < 10) {
          return {
            qty: prevState.qty + 1
          };
        } else {
          return null;
        }
      });
    });

    _defineProperty(this, "DecreaseItem", () => {
      this.setState(prevState => {
        if (prevState.qty > 1) {
          return {
            qty: prevState.qty - 1
          };
        } else {
          return null;
        }
      });
    });
  }

  render() {
    let {
      product
    } = this.props;
    return __jsx("div", {
      className: `modal fade productsQuickView ${this.props.active}`
    }, __jsx("div", {
      className: "modal-dialog modal-dialog-centered"
    }, __jsx("div", {
      className: "modal-content"
    }, __jsx("button", {
      type: "button",
      className: "close",
      onClick: this.closeModal
    }, __jsx("span", {
      "aria-hidden": "true"
    }, __jsx("i", {
      className: "bx bx-x"
    }))), __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "products-image"
    }, __jsx("img", {
      src: product["imageUrl"],
      alt: "image"
    }), product.onSale ? __jsx("div", {
      className: "sale-tag"
    }, "Sale!") : null)), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "products-content"
    }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, product.title))), __jsx("div", {
      className: "price"
    }, product.offer ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
      className: "old-price"
    }, "$", product.oldPrice), __jsx("span", {
      className: "new-price"
    }, "$", product.newPrice)) : __jsx("span", {
      className: "new-price"
    }, "$", product.oldPrice)), __jsx("div", {
      className: "products-review"
    }, __jsx("div", {
      className: "rating"
    }, __jsx("i", {
      className: "bx bxs-star"
    }), __jsx("i", {
      className: "bx bxs-star"
    }), __jsx("i", {
      className: "bx bxs-star"
    }), __jsx("i", {
      className: "bx bxs-star"
    }), __jsx("i", {
      className: "bx bxs-star"
    })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "rating-count"
    }, "3 reviews"))), __jsx("ul", {
      className: "products-info"
    }, __jsx("li", null, __jsx("span", null, "Vendor:"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, "Lereve"))), __jsx("li", null, __jsx("span", null, "Availability:"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, "In stock (7 items)"))), __jsx("li", null, __jsx("span", null, "Products Type:"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, "T-Shirt")))), __jsx("div", {
      className: "products-color-switch"
    }, __jsx("h4", null, "Color:"), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", {
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: "Black",
      className: "color-black"
    }))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", {
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: "White",
      className: "color-white"
    }))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", {
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: "Green",
      className: "color-green"
    }))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", {
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: "Yellow Green",
      className: "color-yellowgreen"
    }))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", {
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: "Teal",
      className: "color-teal"
    }))))), __jsx("div", {
      className: "products-size-wrapper"
    }, __jsx("h4", null, "Size:"), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, "XS"))), __jsx("li", {
      className: "active"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, "S"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, "M"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, "XL"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, "XXL"))))), __jsx("div", {
      className: "products-add-to-cart"
    }, __jsx("div", {
      className: "input-counter"
    }, __jsx("span", {
      className: "minus-btn",
      onClick: this.DecreaseItem
    }, __jsx("i", {
      className: "bx bx-minus"
    })), __jsx("input", {
      type: "text",
      value: this.state.qty,
      min: this.state.min,
      max: this.state.max,
      onChange: e => this.setState({
        qty: e.target.value
      })
    }), __jsx("span", {
      className: "plus-btn",
      onClick: this.IncrementItem
    }, __jsx("i", {
      className: "bx bx-plus"
    }))), __jsx("button", {
      type: "submit",
      className: "default-btn",
      onClick: this.handleAddToCartFromView
    }, "Add to Cart")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "view-full-info"
    }, "View Full Info"))))))));
  }

}

const mapDispatchToProps = dispatch => {
  return {
    addQuantityWithNumber: (id, qty) => {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__[/* addQuantityWithNumber */ "c"])(id, qty));
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(QuickViewModal));

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

/***/ "bpez":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/insta5-0d2d8f3f2b193c1d0a3ec2bd6022e65a.jpg";

/***/ }),

/***/ "bruv":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/insta1-0b004d054be92d0e8d2d33bf9e717858.jpg";

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

/***/ "g7ta":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let currentYear = new Date().getFullYear();
    return __jsx("footer", {
      className: "footer-area"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-3 col-md-6 col-sm-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("h3", null, "About The Store"), __jsx("div", {
      className: "about-the-store"
    }, __jsx("p", null, "One of the most popular on the web is shopping."), __jsx("ul", {
      className: "footer-contact-info"
    }, __jsx("li", null, __jsx("i", {
      className: "bx bx-map"
    }), "Wonder Street, USA, New York"), __jsx("li", null, __jsx("i", {
      className: "bx bx-phone-call"
    }), "+1-541-754-3010"), __jsx("li", null, __jsx("i", {
      className: "bx bx-envelope"
    }), "hello@livani.com"))), __jsx("ul", {
      className: "social-link"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "d-block",
      target: "_blank"
    }, __jsx("i", {
      className: "bx bxl-facebook"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "d-block",
      target: "_blank"
    }, __jsx("i", {
      className: "bx bxl-twitter"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "d-block",
      target: "_blank"
    }, __jsx("i", {
      className: "bx bxl-instagram"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "d-block",
      target: "_blank"
    }, __jsx("i", {
      className: "bx bxl-linkedin"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "d-block",
      target: "_blank"
    }, __jsx("i", {
      className: "bx bxl-pinterest-alt"
    }))))))), __jsx("div", {
      className: "col-lg-3 col-md-6 col-sm-6"
    }, __jsx("div", {
      className: "single-footer-widget pl-4"
    }, __jsx("h3", null, "Quick Links"), __jsx("ul", {
      className: "quick-links"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about"
    }, __jsx("a", null, "About Us"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/products-left-sidebar"
    }, __jsx("a", null, "Shop Now!"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/products-left-sidebar-2"
    }, __jsx("a", null, "Woman's"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/faqs"
    }, __jsx("a", null, "FAQ's"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact"
    }, __jsx("a", null, "Contact Us"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/customer-service"
    }, __jsx("a", null, "Customer Services")))))), __jsx("div", {
      className: "col-lg-3 col-md-6 col-sm-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("h3", null, "Customer Support"), __jsx("ul", {
      className: "customer-support"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/login"
    }, __jsx("a", null, "My Account"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/checkout"
    }, __jsx("a", null, "Checkout"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/cart"
    }, __jsx("a", null, "Cart"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/faqs"
    }, __jsx("a", null, "FAQ's"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/track-order"
    }, __jsx("a", null, "Order Tracking"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact"
    }, __jsx("a", null, "Help & Support")))))), __jsx("div", {
      className: "col-lg-3 col-md-6 col-sm-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("h3", null, "Newsletter"), __jsx("div", {
      className: "footer-newsletter-box"
    }, __jsx("p", null, "To get the latest news and latest updates from us."), __jsx("form", {
      className: "newsletter-form"
    }, __jsx("label", null, "Your E-mail Address:"), __jsx("input", {
      type: "email",
      className: "input-newsletter",
      placeholder: "Enter your email",
      name: "email",
      required: true
    }), __jsx("button", {
      type: "submit"
    }, "Subscribe")))))), __jsx("div", {
      className: "footer-bottom-area"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("p", null, "Made With love by Gaiasoft")), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("ul", {
      className: "payment-types"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("img", {
      src: __webpack_require__("m+1/"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("img", {
      src: __webpack_require__("QbmJ"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("img", {
      src: __webpack_require__("lrAN"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("img", {
      src: __webpack_require__("/M8r"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("img", {
      src: __webpack_require__("r/BK"),
      alt: "image"
    }))))))))), __jsx("div", {
      className: "lines"
    }, __jsx("div", {
      className: "line"
    }), __jsx("div", {
      className: "line"
    }), __jsx("div", {
      className: "line"
    })));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Footer);

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

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "lrAN":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAlCAYAAAAEGWqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzM0RTIzQTdBNjA3MTFFOThGMjlBMUEwQzU0MEU4MjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzM0RTIzQTZBNjA3MTFFOThGMjlBMUEwQzU0MEU4MjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWViNWRhYzgtNGM1OS1hMjQ0LTlkYTctY2Q0MDIzYTNlMjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqhN8oQAAArCSURBVHjazFkLcFTVGf7uY193s5tNliQEIk8xGZFGhICOiKggVtqhjq8pY2urjrZjOzra6dCRqdqRlmJHpx0HRMcgUo0PWsegDBIhJgqBmNCEVxIgr02ym5B9ZLPv++zZ5e5ys9lNgo/aO3Ny7+69e8/3/f/3P84JhW92UJPcV/AdH9Q3+A2Vdp0JvJKFjPJ9EUiAdjhcswoLCzbRNL1EkmSXIIjnY7HY+Ugk0jM66ne53R5fS8tx35NP/iaoIaJ8F8SoywXf3Nw67ZprFlbp9cytqVmVizcVKDFFUdySIPXzgtwX44V+QqwrGo0MkPOgy+Ua3LVr5/CuXZX8t0WMuhzwZNDhMP+SyaT7baaHBkMCYpKM4hwd9DSd+E6W4wSVkCwrF0RRGiIeI2exOxKJdQsCPxAIBPo6O88PrF9/pzuNVDZyytclQI+MBO+3WMxvEGzG5A0XAb2n3Y9DjgB6/DxESUGBmcV9ZTY8Wm4HTVHZoluUJSUgScqIJEkjoigPEoKdhFQP8ViP1zvSXVX1VvfWrVvCcTtkI0dN1foDAxd+UFBgr9Lp6LL4l4KsYEeLG9ua3ej0xsDHX5cES+4ZaQUbbyvBs0sLgHAEkc4O8L09kEMhsLZ8GK5ZBP3MEmhleNFjCk+uw+QcId4a6u7ufHbhwrKD5JakjjFk2KmAr67el2O35z3DshfBDwQFPFHTj486/BBp8ghLgyLnpDVkmkFUpFF7pAMPNb0H3ZFDGDnXCfCRxLTxJ2mrFba7N8D+8GOgOS7FnWEoPTmRQdmI04tFUfgb+bycDFHFkySSoMxOwQP0zTev+rVez94Tn+ScL4qfVffhWG8AFMcmrJ0ARV20okKzyBXCyJciKOk9CWdjJaZHPaBMVlAGY8osciiA4X/8FTIvovDJp0AxzLiJSaxg586dC8iliYxYphRNT6Z7l8u90mw2Ph0HOBQW8PO9Dhzr8uMXi3OxZhaH+RYWNhMDOSolfhEP3hXudjzV+i6uDLkQzi8GYyLzx4M6/hLqYj6gjCbQOWb4//0uYm1tGQF8+OFHOHGipZFcxpkbyNDFnaStQfRE0mlpOTmDSGcrTVMFEVHG7w4N4ug5Px4qNeIvS+14ZK4Rb68txi/LrCi0mKAPjOLBhrdw9WA7Gm1XEkeLmOnphhATCO60cCPpiTZxkHzDiJ7rGAdgeHgYlZWVYZbVvakS0KuKodVBZZNQKmVedVVpXPdL4nO/S/Re1erG+gVGPLE4H76wiBKORtdwCEvpKGYvz0ddG491tjK0tbYjP9SP2b4+SAYObI4VCAbIbOylQE9ELU1OMsRwcByIHTteQygUOHDixIlTKk5GAzxljWwxQPl8wQcMBt3D8fkGQyJeJ9nGRnR9U74NI6ICSoiBM+oxzPMot+hwYxGD5baZ0JmuxOmKEK4SvLi6oRpc6YOg/9MA/oPdCQiKKJGgNRMJGaEQD9EMC53NNmby5ubjOHDgwADP89V+v1/OBDwbgYTlnc4LiywW7gUi28T9BmcIjUMRsMTlL56NoKgrjHJOwZ0kBirmFsLri6DLG0GbO4Jepx/rF8+E52QXQiWlBFwR6BvXIv+GlYgd/QJsNIjQ6ZOQLjihEPJ0vh36ufNSAILBILZt2y6ZTIZ9X3xR35eW99PrwRgCCYZVVe+b8vLytpB0NjN5o9EVhsRLkEjWGVIYDJGkfzoiYZ83jIIzPZgfHcGG6+eS+zmI5VPgiZXLy+aAP/YlQkP90JeWwTWtBAU/+Slcgg5z7nBi+OlHIY/6kXPTLdBfMTsF4uDBWjQ2Np7xet2falKmqI5kHZAzZqHrrlvCrFv3440GA7sm+V2MBO+FIJ9Ilwn3kD80Q0HWs/CYbERCFFYc34vYi8+h55/vYZnzNHSffACnX4SwYBFy7FYMNzahSKfA9+KfEertgzLUBzngB2PJQ+6P7iZnqxq4bmzfvi04fXrhv5xOZyBeL8ng1SGkEYC2kCWw1dTU/pDjDL8iuk8RYwhio46+VCo1P1BkERYpjIY5FZgWHcVd5z7DjMPbQcsSvHU1QGkpTGea4Kq4C7O5XEx75DFMJxi8z75E2j4e1nvWw7zi5tQ7X311B0hHe6S+vq5RAzymISBqitgYCSXkk5PD/YFIxz4mSAiBFSVmvMoSqxPZwMRcSiIiBavnAu7vrMGApRAsI6HAREFgTMj1dkD6/CQURoeCw9XoDg5idj4L8dQJ8H294Cquh/3Rx0kqvVjcWltPYs+e94c5jntPY/nYBATGpMz4YEjv4SY535oe6QGi/82HXXilyY1QTL74OHFKAZHHDRjG49WbcZPjKJFUHkI60hYkS3OiPaKgEyLggySO5ER5hW7+AszY8jK48uuS/Q/uvfc+CEJs2969e6vJV6TnQLyJi+fXkHodTZPROA/QHR1ntzIM8/SsWbPyjEZ9ioBFz+C5lTNw6zwrviIBHRYUlJCWefFMK+YNkkZtjwc9tBW0gaRHWR7TnZFWGryOVGKrDtTICEzXLkXhM3+Cqfza1Pt3796N/n5Ha2dn52cTWH9cACOtLDM1NTUtpLB82d/f5xMEYbrZbLEZjYaUlObbDFhZkoNbZ1tQUcyhxMzAPC0P/IALoa8aCAE9KJa59Pq4FwghaXQ00cAZ190N01PPwLbw6hR4h6MPGzdujNrt9ldI0XKolo6oI6qxvKgJXmQiQHs8Hqqurs5TW1vb2tracoh8dgQCQavJZLabzRxDq4uUMdWEdJ6GReUkq4ySnuYMlEiEFCsxkeNBRryBM1+/EkW//yPsGx6AqahwTOp7/vkX4PN59pJ5PyXrgmgGAnym4B3XNqhk9GrTFO/+uPg5Nzc3Z+3aO5asWbN63bJly5fMnTsnz2w200kyqYMIPNTchHDjYdLfeEHpjdDNmgNu6TIY5s3L2G3u338Amze/0OfxuJ9va2vrVbUeUrUfVknEVA/IExGgVAKsSiLZ/Rk11/pVq1bNuf32O1ZXVCy9sbS07AqysDcaDPqvtZtA0iU2bHhAItbfTqz/sQo2pBlZAzddQumqoDKU70RF7Onp8R08+FkLKfF1Xq9vgEhMIVkmh6Q+zmAwXBaByso38fnntU0ul7NqhKxVM0gnllZ9My7smUk2paS0cp64JhNGjh07ev6TTz6ud7lcHUNDg/5oNMaZTFyexZIzKfju7h5s2rQpSAL3taampm4VrDZoJwzcqRAYZ/1MQ5Zlsb29zUmyV5PD4Wjp6urqcbs9jF5vKLJarTTDZH79li1bcebMqf1Hjhz5WA3SSNoQJgrcqRLQ5lwpmze08jp6tKH91KlTX50923G8r8/Bkww63WrNNSZTcfx4/fU38M47bzuI9P4+NDTkT5OONmjFqWx0UVPYPqQ1QZ7MVsmAZ9Vl3riRm2vjyspKi2+7bfUtFRXLV+v1upL9+/eTzLNvoLi4eFt9fX2zCjasCdpwBgLKN9mZozKkWzoLkaxk0lZUUL0maKyvBc9n6nmyHZPtSmh3wyiNtJLbG7Q62WReYTXrWS0BPoNspMkC99vendZ6hNZYW5dGSOsBWQWbqWWeMG1+GwSyEaHSiDAaMtrdBG2KFlXQQoYVF75rApkqOrIEPZ22ME9P0WJa1lP+1wQmkheVvpeTVmfkTIv174tANq9QGbZFsm2j4/+FwOXM8bX/5fRfAQYA3CE/1Of2GKMAAAAASUVORK5CYII="

/***/ }),

/***/ "m+1/":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAlCAYAAADSvLDKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDQ3MkI5QzFBNjA3MTFFOTkzOUREMEE1NDc3MDUyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDQ3MkI5QzBBNjA3MTFFOTkzOUREMEE1NDc3MDUyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWViNWRhYzgtNGM1OS1hMjQ0LTlkYTctY2Q0MDIzYTNlMjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIv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"

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

/***/ "pFRj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./utils/ActiveLink.js
var ActiveLink = __webpack_require__("0Yqi");

// CONCATENATED MODULE: ./components/Modals/SearchModal.js
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class SearchModal_SearchModal extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      modal: false
    });

    _defineProperty(this, "closeModal", () => {
      this.props.onClick(this.state.modal);
    });
  }

  render() {
    return __jsx("div", {
      className: `search-overlay ${this.props.active}`
    }, __jsx("div", {
      className: "d-table"
    }, __jsx("div", {
      className: "d-table-cell"
    }, __jsx("div", {
      className: "search-overlay-layer"
    }), __jsx("div", {
      className: "search-overlay-layer"
    }), __jsx("div", {
      className: "search-overlay-layer"
    }), __jsx("div", {
      className: "search-overlay-close",
      onClick: this.closeModal
    }, __jsx("span", {
      className: "search-overlay-close-line"
    }), __jsx("span", {
      className: "search-overlay-close-line"
    })), __jsx("div", {
      className: "search-overlay-form"
    }, __jsx("form", null, __jsx("input", {
      type: "text",
      className: "input-search",
      placeholder: "Search here..."
    }), __jsx("button", {
      type: "submit"
    }, __jsx("i", {
      className: "bx bx-search-alt"
    })))))));
  }

}

/* harmony default export */ var Modals_SearchModal = (SearchModal_SearchModal);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: ./store/actions/cartActions.js
var cartActions = __webpack_require__("Nxmy");

// CONCATENATED MODULE: ./components/Modals/ShoppingCartModal.js
var ShoppingCartModal_jsx = external_react_default.a.createElement;

function ShoppingCartModal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class ShoppingCartModal_ShoppingCartModal extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    ShoppingCartModal_defineProperty(this, "state", {
      modal: false
    });

    ShoppingCartModal_defineProperty(this, "handleRemove", id => {
      this.props.removeItem(id);
      external_react_toastify_["toast"].error('Removed from cart', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    });

    ShoppingCartModal_defineProperty(this, "closeModal", () => {
      this.props.onClick(this.state.modal);
    });
  }

  render() {
    let cartItems = this.props.products.length ? this.props.products.map((product, idx) => {
      return ShoppingCartModal_jsx("div", {
        className: "products-cart-content",
        key: idx
      }, ShoppingCartModal_jsx("div", {
        className: "products-cart"
      }, ShoppingCartModal_jsx("div", {
        className: "products-image"
      }, ShoppingCartModal_jsx(link_default.a, {
        href: "#"
      }, ShoppingCartModal_jsx("a", null, ShoppingCartModal_jsx("img", {
        src: product.imageUrl,
        alt: "image"
      })))), ShoppingCartModal_jsx("div", {
        className: "products-content"
      }, ShoppingCartModal_jsx("h3", null, ShoppingCartModal_jsx(link_default.a, {
        href: "#"
      }, ShoppingCartModal_jsx("a", null, product.title))), ShoppingCartModal_jsx("div", {
        className: "products-price"
      }, ShoppingCartModal_jsx("span", null, product.quantity), ShoppingCartModal_jsx("span", null, "x"), ShoppingCartModal_jsx("span", {
        className: "price"
      }, "$", product.newPrice)), ShoppingCartModal_jsx(link_default.a, {
        href: "#"
      }, ShoppingCartModal_jsx("a", {
        className: "remove-btn",
        onClick: e => {
          e.preventDefault();
          this.handleRemove(product.id);
        }
      }, ShoppingCartModal_jsx("i", {
        className: "bx bx-trash"
      }))))));
    }) : ShoppingCartModal_jsx("div", {
      className: "products-cart-content"
    }, ShoppingCartModal_jsx("p", null, "Empty."));
    return ShoppingCartModal_jsx(external_react_default.a.Fragment, null, ShoppingCartModal_jsx("div", {
      className: `shoppingCartModal right ${this.props.active}`
    }, ShoppingCartModal_jsx("div", {
      className: "modal-innter-content"
    }, ShoppingCartModal_jsx("button", {
      type: "button",
      className: "close",
      onClick: this.closeModal
    }, ShoppingCartModal_jsx("span", {
      "aria-hidden": "true"
    }, ShoppingCartModal_jsx("i", {
      className: "bx bx-x"
    }))), ShoppingCartModal_jsx("div", {
      className: "modal-body"
    }, ShoppingCartModal_jsx("h3", null, "My Cart (", this.props.products.length, ")"), cartItems, ShoppingCartModal_jsx("div", {
      className: "products-cart-subtotal"
    }, ShoppingCartModal_jsx("span", null, "Subtotal"), ShoppingCartModal_jsx("span", {
      className: "subtotal"
    }, "$", this.props.total)), ShoppingCartModal_jsx("div", {
      className: "products-cart-btn"
    }, ShoppingCartModal_jsx(link_default.a, {
      href: "/checkout"
    }, ShoppingCartModal_jsx("a", {
      className: "default-btn"
    }, "Proceed to Checkout")), ShoppingCartModal_jsx(link_default.a, {
      href: "/cart"
    }, ShoppingCartModal_jsx("a", {
      className: "optional-btn"
    }, "View Shopping Cart")))))));
  }

}

const mapStateToProps = state => {
  return {
    products: state.addedItems,
    total: state.total
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(Object(cartActions["f" /* removeItem */])(id));
    }
  };
};

/* harmony default export */ var Modals_ShoppingCartModal = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(ShoppingCartModal_ShoppingCartModal));
// CONCATENATED MODULE: ./components/Modals/SidebarModal.js
var SidebarModal_jsx = external_react_default.a.createElement;

function SidebarModal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class SidebarModal_SidebarModal extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    SidebarModal_defineProperty(this, "state", {
      modal: false
    });

    SidebarModal_defineProperty(this, "closeModal", () => {
      this.props.onClick(this.state.modal);
    });
  }

  render() {
    return SidebarModal_jsx(external_react_default.a.Fragment, null, SidebarModal_jsx("div", {
      className: `sidebarModal right ${this.props.active}`
    }, SidebarModal_jsx("div", {
      className: "modal-innter-content"
    }, SidebarModal_jsx("button", {
      type: "button",
      className: "close",
      onClick: this.closeModal
    }, SidebarModal_jsx("span", {
      "aria-hidden": "true"
    }, SidebarModal_jsx("i", {
      className: "bx bx-x"
    }))), SidebarModal_jsx("div", {
      className: "modal-body"
    }, SidebarModal_jsx("div", {
      className: "sidebar-about-content"
    }, SidebarModal_jsx("h3", null, "About The Store"), SidebarModal_jsx("div", {
      className: "about-the-store"
    }, SidebarModal_jsx("p", null, "One of the most popular on the web is shopping. Lorem ipsum dolor sit amet, consectetur adipiscing elit."), SidebarModal_jsx("ul", {
      className: "sidebar-contact-info"
    }, SidebarModal_jsx("li", null, SidebarModal_jsx("i", {
      className: "bx bx-map"
    }), "Wonder Street, USA, New York"), SidebarModal_jsx("li", null, SidebarModal_jsx("i", {
      className: "bx bx-phone-call"
    }), "+1-541-754-3010"), SidebarModal_jsx("li", null, SidebarModal_jsx("i", {
      className: "bx bx-envelope"
    }), "hello@livani.com"))), SidebarModal_jsx("ul", {
      className: "social-link"
    }, SidebarModal_jsx("li", null, SidebarModal_jsx(link_default.a, {
      href: "#"
    }, SidebarModal_jsx("a", {
      className: "d-block",
      target: "_blank"
    }, SidebarModal_jsx("i", {
      className: "bx bxl-facebook"
    })))), SidebarModal_jsx("li", null, SidebarModal_jsx(link_default.a, {
      href: "#"
    }, SidebarModal_jsx("a", {
      className: "d-block",
      target: "_blank"
    }, SidebarModal_jsx("i", {
      className: "bx bxl-twitter"
    })))), SidebarModal_jsx("li", null, SidebarModal_jsx(link_default.a, {
      href: "#"
    }, SidebarModal_jsx("a", {
      className: "d-block",
      target: "_blank"
    }, SidebarModal_jsx("i", {
      className: "bx bxl-instagram"
    })))), SidebarModal_jsx("li", null, SidebarModal_jsx(link_default.a, {
      href: "#"
    }, SidebarModal_jsx("a", {
      className: "d-block",
      target: "_blank"
    }, SidebarModal_jsx("i", {
      className: "bx bxl-linkedin"
    })))), SidebarModal_jsx("li", null, SidebarModal_jsx(link_default.a, {
      href: "#"
    }, SidebarModal_jsx("a", {
      className: "d-block",
      target: "_blank"
    }, SidebarModal_jsx("i", {
      className: "bx bxl-pinterest-alt"
    })))))), SidebarModal_jsx("div", {
      className: "sidebar-new-in-store"
    }, SidebarModal_jsx("h3", null, "New In Store"), SidebarModal_jsx("ul", {
      className: "products-list"
    }, SidebarModal_jsx("li", null, SidebarModal_jsx(link_default.a, {
      href: "#"
    }, SidebarModal_jsx("a", null, SidebarModal_jsx("img", {
      src: __webpack_require__("xDLk"),
      alt: "image"
    })))), SidebarModal_jsx("li", null, SidebarModal_jsx(link_default.a, {
      href: "#"
    }, SidebarModal_jsx("a", null, SidebarModal_jsx("img", {
      src: __webpack_require__("KMck"),
      alt: "image"
    })))), SidebarModal_jsx("li", null, SidebarModal_jsx(link_default.a, {
      href: "#"
    }, SidebarModal_jsx("a", null, SidebarModal_jsx("img", {
      src: __webpack_require__("+hxB"),
      alt: "image"
    })))), SidebarModal_jsx("li", null, SidebarModal_jsx(link_default.a, {
      href: "#"
    }, SidebarModal_jsx("a", null, SidebarModal_jsx("img", {
      src: __webpack_require__("wDLY"),
      alt: "image"
    }))))), SidebarModal_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), SidebarModal_jsx(link_default.a, {
      href: "/products-without-sidebar"
    }, SidebarModal_jsx("a", {
      className: "shop-now-btn"
    }, "Shop Now")))))));
  }

}

/* harmony default export */ var Modals_SidebarModal = (SidebarModal_SidebarModal);
// CONCATENATED MODULE: ./components/Layouts/Navbar.js
var Navbar_jsx = external_react_default.a.createElement;

function Navbar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Navbar_Navbar extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Navbar_defineProperty(this, "_isMounted", false);

    Navbar_defineProperty(this, "state", {
      display: false,
      collapsed: true
    });

    Navbar_defineProperty(this, "toggleNavbar", () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    });

    Navbar_defineProperty(this, "toggleModalSearch", () => {
      this.setState({
        SearchModal: !this.state.SearchModal
      });
    });

    Navbar_defineProperty(this, "toggleModalCart", () => {
      this.setState({
        ShoppingCartModal: !this.state.ShoppingCartModal
      });
    });

    Navbar_defineProperty(this, "toggleModalSidebar", () => {
      this.setState({
        SidebarModal: !this.state.SidebarModal
      });
    });
  }

  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  } // Search Modal


  render() {
    const {
      products
    } = this.props;
    const {
      collapsed
    } = this.state;
    const classNameOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classNameTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return Navbar_jsx(external_react_default.a.Fragment, null, Navbar_jsx("div", {
      id: "navbar",
      className: "navbar-area"
    }, Navbar_jsx("div", {
      className: "main-nav"
    }, Navbar_jsx("div", {
      className: "container"
    }, Navbar_jsx("nav", {
      className: "navbar navbar-expand-md navbar-light"
    }, Navbar_jsx(ActiveLink["a" /* default */], {
      href: "/"
    }, Navbar_jsx("a", {
      className: "navbar-brand"
    }, Navbar_jsx("h2", null, "-Salvador's hotel"))), Navbar_jsx("button", {
      onClick: this.toggleNavbar,
      className: classNameTwo,
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarSupportedContent",
      "aria-controls": "navbarSupportedContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }, Navbar_jsx("span", {
      className: "icon-bar top-bar"
    }), Navbar_jsx("span", {
      className: "icon-bar middle-bar"
    }), Navbar_jsx("span", {
      className: "icon-bar bottom-bar"
    })), Navbar_jsx("div", {
      className: classNameOne,
      id: "navbarSupportedContent"
    }, Navbar_jsx("ul", {
      className: "navbar-nav"
    }, Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(ActiveLink["a" /* default */], {
      href: "/"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Home"))), Navbar_jsx("li", {
      className: "nav-item megamenu"
    }, Navbar_jsx(ActiveLink["a" /* default */], {
      href: "/hospedaje"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Hospedajes"))), Navbar_jsx("li", {
      className: "nav-item megamenu"
    }, Navbar_jsx(ActiveLink["a" /* default */], {
      href: "/contact"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Contact US"))), Navbar_jsx("li", {
      className: "nav-item megamenu"
    }, Navbar_jsx(ActiveLink["a" /* default */], {
      href: "/rastrear-reservacion"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Rastrear Reservaci\xF3n")))), Navbar_jsx("div", {
      className: "others-option"
    }, Navbar_jsx("div", {
      className: "option-item"
    }, Navbar_jsx("div", {
      className: "search-btn-box",
      onClick: this.toggleModalSearch
    }, Navbar_jsx("i", {
      className: "search-btn bx bx-search-alt"
    }))), Navbar_jsx("div", {
      className: "option-item"
    }, Navbar_jsx("div", {
      className: "burger-menu",
      onClick: this.toggleModalSidebar
    }, Navbar_jsx("span", {
      className: "top-bar"
    }), Navbar_jsx("span", {
      className: "middle-bar"
    }), Navbar_jsx("span", {
      className: "bottom-bar"
    }))))))))), Navbar_jsx(Modals_SearchModal, {
      onClick: this.toggleModalSearch,
      active: this.state.SearchModal ? 'active' : ''
    }), Navbar_jsx(Modals_SidebarModal, {
      onClick: this.toggleModalSidebar,
      active: this.state.SidebarModal ? 'active' : ''
    }));
  }

}

const Navbar_mapStateToProps = state => {
  return {
    products: state.addedItems
  };
};

/* harmony default export */ var Layouts_Navbar = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(Navbar_mapStateToProps)(Navbar_Navbar));

/***/ }),

/***/ "q4RA":
/***/ (function(module, exports) {

module.exports = require("react-owl-carousel3");

/***/ }),

/***/ "r/BK":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAkCAYAAADPRbkKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEVEQ0JEOTRBNjA3MTFFOUJEMjJGMjRCRkRBQTU4NTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEVEQ0JEOTNBNjA3MTFFOUJEMjJGMjRCRkRBQTU4NTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWViNWRhYzgtNGM1OS1hMjQ0LTlkYTctY2Q0MDIzYTNlMjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIv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"

/***/ }),

/***/ "rzaN":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MjI1RDJEQjYxM0MxMUU3ODE3M0YwMkM1MjgyRTVFMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MjI1RDJEQzYxM0MxMUU3ODE3M0YwMkM1MjgyRTVFMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQyMjVEMkQ5NjEzQzExRTc4MTczRjAyQzUyODJFNUUyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQyMjVEMkRBNjEzQzExRTc4MTczRjAyQzUyODJFNUUyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAKgBAAwERAAIRAQMRAf/EAHUAAQEBAQAAAAAAAAAAAAAAAAADBggBAQADAQEAAAAAAAAAAAAAAAABAgYEAxAAAQAHBwUBAAAAAAAAAAAAAAHio9MEVKQykjNVFgcXMVFhAkIDEQEAAAQHAQADAAAAAAAAAAAAAaLiY6HRUgMTFRYxgQIy/9oADAMBAAIRAxEAPwDpwAAAAAAAABiOats85pop0dnX72nGGanJA5q2zzmminQ6/e04wzOSBzVtnnNNFOh1+9pxhmckDmrbPOaaKdDr97TjDM5IHNW2ec00U6HX72nGGZyQOats85pop0Ov3tOMMzkgc1bZ5zTRTodfvacYZnJA5q2zzmminQ6/e04wzOSDlg0rnAAAAAAAANHpFE0zWMx6O3NS3HjLslRpFE0zWHo7c1J4y7JUaRRNM1h6O3NSeMuyVGkUTTNYejtzUnjLslRpFE0zWHo7c1J4y7JUaRRNM1h6O3NSeMuyVGkUTTNYejtzUnjLslRpFE0zWHo7c1J4y7JU0RmG5AAAAAAAALRGP+mHa9sOx1+fHYmLz/T+Yffz9TukLF0BdAXQF0BdApD4/wCeHa9cSx1+vHcmCv7/AMx+/j6//9k="

/***/ }),

/***/ "sSV7":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/insta3-9474cabbb508c213706e0b63f4114ab3.jpg";

/***/ }),

/***/ "sjPB":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "uhzS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Layouts/TopHeader.js + 1 modules
var TopHeader = __webpack_require__("CgTi");

// EXTERNAL MODULE: ./components/Layouts/Navbar.js + 3 modules
var Navbar = __webpack_require__("pFRj");

// EXTERNAL MODULE: ./components/Common/PageBanner.js
var PageBanner = __webpack_require__("Ix5F");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: ./store/actions/cartActions.js
var cartActions = __webpack_require__("Nxmy");

// CONCATENATED MODULE: ./components/ProductDetails/ProductDetailsTab.js
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class ProductDetailsTab_ProductDetailsTab extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "openTabSection", (evt, tabNmae) => {
      let i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabs-item");

      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("fadeInUp");
        tabcontent[i].style.display = "none";
      }

      tablinks = document.getElementsByTagName("li");

      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("current", "");
      }

      document.getElementById(tabNmae).style.display = "block";
      document.getElementById(tabNmae).className += " fadeInUp animated";
      evt.currentTarget.className += "current";
    });
  }

  render() {
    return __jsx("div", {
      className: "tab products-details-tab"
    }, __jsx("ul", {
      className: "tabs"
    }, __jsx("li", {
      onClick: e => {
        e.preventDefault();
        this.openTabSection(e, 'tab1');
      },
      className: "current"
    }, __jsx("a", {
      href: "#"
    }, __jsx("div", {
      className: "dot"
    }), " Description")), __jsx("li", {
      onClick: e => {
        e.preventDefault();
        this.openTabSection(e, 'tab4');
      }
    }, __jsx("a", {
      href: "#"
    }, __jsx("div", {
      className: "dot"
    }), " Why Buy From Us")), __jsx("li", {
      onClick: e => {
        e.preventDefault();
        this.openTabSection(e, 'tab5');
      }
    }, __jsx("a", {
      href: "#"
    }, __jsx("div", {
      className: "dot"
    }), " Reviews"))), __jsx("div", {
      className: "tab-content"
    }, __jsx("div", {
      id: "tab1",
      className: "tabs-item"
    }, __jsx("div", {
      className: "products-details-tab-content"
    }, __jsx("p", null, "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum.  Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh eget ipsum. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh eget ipsum. Nulla libero. Vivamus pharetra posuere sapien."), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("ul", null, __jsx("li", null, "Capacidad de personas: 6"), __jsx("li", null, "Ba\xF1os: "), __jsx("li", null, "Camas: "), __jsx("li", null, "Cuenta con Cocina")))))), __jsx("div", {
      id: "tab4",
      className: "tabs-item"
    }, __jsx("div", {
      className: "products-details-tab-content"
    }, __jsx("p", null, "Descripci\xF3n detallada:"), __jsx("p", null, "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum.  Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh eget ipsum. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh eget ipsum. Nulla libero. Vivamus pharetra posuere sapien."))), __jsx("div", {
      id: "tab5",
      className: "tabs-item"
    }, __jsx("div", {
      className: "products-details-tab-content"
    }, __jsx("div", {
      className: "products-review-form"
    }, __jsx("h3", null, "Customer Reviews"), __jsx("div", {
      className: "review-title"
    }, __jsx("div", {
      className: "rating"
    }, __jsx("i", {
      className: "bx bxs-star"
    }), __jsx("i", {
      className: "bx bxs-star"
    }), __jsx("i", {
      className: "bx bxs-star"
    }), __jsx("i", {
      className: "bx bxs-star"
    }), __jsx("i", {
      className: "bx bx-star"
    })), __jsx("p", null, "Based on 3 reviews"), __jsx(link_default.a, {
      href: "#"
    }, __jsx("a", {
      className: "default-btn"
    }, "Write a Review"))), __jsx("div", {
      className: "review-comments"
    }, __jsx("div", {
      className: "review-item"
    }, __jsx("div", {
      className: "rating"
    }, __jsx("i", {
      className: "bx bxs-star"
    }), __jsx("i", {
      className: "bx bxs-star"
    }), __jsx("i", {
      className: "bx bxs-star"
    }), __jsx("i", {
      className: "bx bxs-star"
    }), __jsx("i", {
      className: "bx bx-star"
    })), __jsx("h3", null, "Good"), __jsx("span", null, __jsx("strong", null, "Admin"), " on ", __jsx("strong", null, "Sep 21, 2019")), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.")), __jsx("div", {
      className: "review-item"
    }, __jsx("div", {
      className: "rating"
    }, __jsx("i", {
      className: "bx bxs-star"
    }), __jsx("i", {
      className: "bx bxs-star"
    }), __jsx("i", {
      className: "bx bxs-star"
    }), __jsx("i", {
      className: "bx bxs-star"
    }), __jsx("i", {
      className: "bx bx-star"
    })), __jsx("h3", null, "Good"), __jsx("span", null, __jsx("strong", null, "Admin"), " on ", __jsx("strong", null, "Sep 21, 2019")), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.")), __jsx("div", {
      className: "review-item"
    }, __jsx("div", {
      className: "rating"
    }, __jsx("i", {
      className: "bx bxs-star"
    }), __jsx("i", {
      className: "bx bxs-star"
    }), __jsx("i", {
      className: "bx bxs-star"
    }), __jsx("i", {
      className: "bx bxs-star"
    }), __jsx("i", {
      className: "bx bx-star"
    })), __jsx("h3", null, "Good"), __jsx("span", null, __jsx("strong", null, "Admin"), " on ", __jsx("strong", null, "Sep 21, 2019")), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."))), __jsx("div", {
      className: "review-form"
    }, __jsx("h3", null, "Write a Review"), __jsx("form", {
      onSubmit: e => e.preventDefault()
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      type: "text",
      id: "name",
      name: "name",
      placeholder: "Enter your name",
      className: "form-control"
    }))), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      type: "email",
      id: "email",
      name: "email",
      placeholder: "Enter your email",
      className: "form-control"
    }))), __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      type: "text",
      id: "review-title",
      name: "review-title",
      placeholder: "Enter your review a title",
      className: "form-control"
    }))), __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("textarea", {
      name: "review-body",
      id: "review-body",
      cols: "30",
      rows: "6",
      placeholder: "Write your comments here",
      className: "form-control"
    }))), __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("button", {
      type: "submit",
      className: "default-btn"
    }, "Submit Review"))))))))));
  }

}

/* harmony default export */ var ProductDetails_ProductDetailsTab = (ProductDetailsTab_ProductDetailsTab);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: ./components/Modals/QuickViewModal.js
var QuickViewModal = __webpack_require__("U3qu");

// CONCATENATED MODULE: ./components/Common/SingleProductStyleTwo.js
var SingleProductStyleTwo_jsx = external_react_default.a.createElement;

function SingleProductStyleTwo_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class SingleProductStyleTwo_SingleProductStyleTwo extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    SingleProductStyleTwo_defineProperty(this, "state", {
      QuickViewModal: false
    });

    SingleProductStyleTwo_defineProperty(this, "handleAddToCart", id => {
      this.props.onHandleAddToCart(id);
    });

    SingleProductStyleTwo_defineProperty(this, "toggleModal", () => {
      this.setState({
        QuickViewModal: !this.state.QuickViewModal
      });
      this.props.ontoggleModal(this.state.QuickViewModal);
    });

    SingleProductStyleTwo_defineProperty(this, "handleModalProduct", product => {
      this.props.onhandleModalProduct(product);
    });
  }

  render() {
    let {
      product
    } = this.props;
    return SingleProductStyleTwo_jsx("div", {
      className: "single-products-box"
    }, SingleProductStyleTwo_jsx("div", {
      className: "products-image"
    }, SingleProductStyleTwo_jsx(link_default.a, {
      href: `/products-type-1?id=${product.id}`
    }, SingleProductStyleTwo_jsx("a", null, SingleProductStyleTwo_jsx("img", {
      src: product.imageUrl,
      className: "main-image",
      alt: "image"
    }), SingleProductStyleTwo_jsx("img", {
      src: product.imageHoverUrl,
      className: "hover-image",
      alt: "image"
    }))), SingleProductStyleTwo_jsx("div", {
      className: "products-button"
    }, SingleProductStyleTwo_jsx("ul", null, SingleProductStyleTwo_jsx("li", null, SingleProductStyleTwo_jsx("div", {
      className: "wishlist-btn"
    }, SingleProductStyleTwo_jsx(link_default.a, {
      href: "#"
    }, SingleProductStyleTwo_jsx("a", {
      onClick: e => e.preventDefault()
    }, SingleProductStyleTwo_jsx("i", {
      className: "bx bx-heart"
    }), SingleProductStyleTwo_jsx("span", {
      className: "tooltip-label"
    }, "Add to Wishlist"))))), SingleProductStyleTwo_jsx("li", null, SingleProductStyleTwo_jsx("div", {
      className: "compare-btn"
    }, SingleProductStyleTwo_jsx(link_default.a, {
      href: "#"
    }, SingleProductStyleTwo_jsx("a", {
      onClick: e => e.preventDefault()
    }, SingleProductStyleTwo_jsx("i", {
      className: "bx bx-refresh"
    }), SingleProductStyleTwo_jsx("span", {
      className: "tooltip-label"
    }, "Compare"))))), SingleProductStyleTwo_jsx("li", null, SingleProductStyleTwo_jsx("div", {
      className: "quick-view-btn"
    }, SingleProductStyleTwo_jsx(link_default.a, {
      href: "#"
    }, SingleProductStyleTwo_jsx("a", {
      onClick: e => {
        e.preventDefault();
        this.toggleModal();
        this.handleModalProduct(product);
      }
    }, SingleProductStyleTwo_jsx("i", {
      className: "bx bx-search-alt"
    }), SingleProductStyleTwo_jsx("span", {
      className: "tooltip-label"
    }, "Quick View"))))))), product.onSale ? SingleProductStyleTwo_jsx("div", {
      className: "sale-tag"
    }, "Sale!") : null, product.new ? SingleProductStyleTwo_jsx("div", {
      className: "new-tag"
    }, "New!") : null), SingleProductStyleTwo_jsx("div", {
      className: "products-content"
    }, SingleProductStyleTwo_jsx("h3", null, SingleProductStyleTwo_jsx("a", {
      href: `/products-type-1?id=${product.id}`
    }, product.title)), SingleProductStyleTwo_jsx("div", {
      className: "price"
    }, product.offer ? SingleProductStyleTwo_jsx(external_react_default.a.Fragment, null, SingleProductStyleTwo_jsx("span", {
      className: "old-price"
    }, "$", product.oldPrice), SingleProductStyleTwo_jsx("span", {
      className: "new-price"
    }, "$", product.newPrice)) : SingleProductStyleTwo_jsx("span", {
      className: "new-price"
    }, "$", product.oldPrice)), SingleProductStyleTwo_jsx("div", {
      className: "star-rating"
    }, SingleProductStyleTwo_jsx("i", {
      className: "bx bxs-star"
    }), SingleProductStyleTwo_jsx("i", {
      className: "bx bxs-star"
    }), SingleProductStyleTwo_jsx("i", {
      className: "bx bxs-star"
    }), SingleProductStyleTwo_jsx("i", {
      className: "bx bxs-star"
    }), SingleProductStyleTwo_jsx("i", {
      className: "bx bxs-star"
    })), SingleProductStyleTwo_jsx("a", {
      className: "add-to-cart",
      onClick: e => {
        e.preventDefault();
        this.handleAddToCart(product.id);
      }
    }, "Add To Cart")), product.discount ? SingleProductStyleTwo_jsx("span", {
      className: "products-discount"
    }, SingleProductStyleTwo_jsx("span", null, product.discountOff, "% OFF")) : null);
  }

}

/* harmony default export */ var Common_SingleProductStyleTwo = (SingleProductStyleTwo_SingleProductStyleTwo);
// CONCATENATED MODULE: ./components/ProductDetails/RelatedProducts.js
var RelatedProducts_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function RelatedProducts_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const OwlCarousel = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ['react-owl-carousel3']
  }
});





const options = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  margin: 30,
  navText: ["<i class='flaticon-left'></i>", "<i class='flaticon-right-arrow'></i>"],
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    768: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
};

class RelatedProducts_RelatedProducts extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    RelatedProducts_defineProperty(this, "_isMounted", false);

    RelatedProducts_defineProperty(this, "state", {
      QuickViewModal: false,
      display: false,
      modalProduct: {},
      products: []
    });

    RelatedProducts_defineProperty(this, "toggleModal", () => {
      this.setState({
        QuickViewModal: !this.state.QuickViewModal
      });
    });

    RelatedProducts_defineProperty(this, "handleAddToCart", id => {
      this.props.addToCart(id);
      external_react_toastify_["toast"].success('Added to the cart', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    });

    RelatedProducts_defineProperty(this, "passDataToModal", product => {
      this.setState({
        modalProduct: product
      });
    });
  }

  componentDidMount() {
    this._isMounted = true;
    this.setState({
      display: true,
      products: this.props.products
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return RelatedProducts_jsx("div", {
      className: "related-products"
    }, RelatedProducts_jsx("div", {
      className: "container"
    }, RelatedProducts_jsx("div", {
      className: "section-title"
    }, RelatedProducts_jsx("span", {
      className: "sub-title"
    }, "Our Shop"), RelatedProducts_jsx("h2", null, "Related Products")), this.state.display ? RelatedProducts_jsx(OwlCarousel, _extends({
      className: "products-slides owl-carousel owl-theme"
    }, options), this.state.products.slice(0, 6).map((product, idx) => RelatedProducts_jsx(Common_SingleProductStyleTwo, {
      product: product,
      key: idx,
      onHandleAddToCart: this.handleAddToCart,
      onhandleModalProduct: this.passDataToModal,
      ontoggleModal: this.toggleModal
    }))) : '', RelatedProducts_jsx(QuickViewModal["a" /* default */], {
      onClick: this.toggleModal,
      active: this.state.QuickViewModal ? 'active' : '',
      product: this.state.modalProduct
    })));
  }

}

const mapStateToProps = state => {
  return {
    products: state.products.filter(product => product.type == 'Women Clothes')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(Object(cartActions["d" /* addToCart */])(id));
    }
  };
}; // export default RelatedProducts;


/* harmony default export */ var ProductDetails_RelatedProducts = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(RelatedProducts_RelatedProducts));
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// CONCATENATED MODULE: ./components/ProductDetails/ProductImage.js
var ProductImage_jsx = external_react_default.a.createElement;

function ProductImage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class ProductImage_ProductImage extends external_react_["Component"] {
  constructor(props) {
    super(props);

    ProductImage_defineProperty(this, "renderSliderMainImages", () => {
      return DEFAULT_PROPS.map(({
        id,
        image
      }) => {
        return ProductImage_jsx("div", {
          key: id
        }, ProductImage_jsx("div", {
          className: "item"
        }, ProductImage_jsx("img", {
          src: this.props.imageUrl,
          alt: "image"
        })));
      });
    });

    ProductImage_defineProperty(this, "renderSliderSubImages", () => {
      return DEFAULT_PROPS.map(({
        id,
        image
      }) => {
        return ProductImage_jsx("div", {
          key: id
        }, ProductImage_jsx("div", {
          className: "item"
        }, ProductImage_jsx("img", {
          src: this.props.imageUrl,
          alt: "image"
        })));
      });
    });

    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return ProductImage_jsx("div", {
      className: "products-page-gallery"
    }, ProductImage_jsx("div", {
      className: "product-page-gallery-main"
    }, ProductImage_jsx("div", null, ProductImage_jsx(external_react_slick_default.a, {
      asNavFor: this.state.nav2,
      ref: slider => this.slider1 = slider
    }, this.renderSliderMainImages()))), ProductImage_jsx("div", {
      className: "product-page-gallery-preview"
    }, ProductImage_jsx("div", null, ProductImage_jsx(external_react_slick_default.a, {
      asNavFor: this.state.nav1,
      ref: slider => this.slider2 = slider,
      slidesToShow: 5,
      swipeToSlide: true,
      focusOnSelect: true,
      arrows: false,
      dots: false
    }, this.renderSliderSubImages()))));
  }

}

const DEFAULT_PROPS = [{
  id: 1,
  image: __webpack_require__("+hxB")
}, {
  id: 2,
  image: __webpack_require__("wDLY")
}, {
  id: 3,
  image: __webpack_require__("2byq")
}, {
  id: 4,
  image: __webpack_require__("JNgp")
}, {
  id: 5,
  image: __webpack_require__("PRJF")
}];
/* harmony default export */ var ProductDetails_ProductImage = (ProductImage_ProductImage);
// CONCATENATED MODULE: ./components/ProductDetails/ProductDetailsStyleOne.js
var ProductDetailsStyleOne_jsx = external_react_default.a.createElement;

function ProductDetailsStyleOne_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ProductDetailsStyleOne_extends() { ProductDetailsStyleOne_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ProductDetailsStyleOne_extends.apply(this, arguments); }











const hookClass = props => {
  const router = Object(router_["useRouter"])();
  return ProductDetailsStyleOne_jsx(ProductDetailsStyleOne_ProductDetailsStyleOne, ProductDetailsStyleOne_extends({}, props, {
    router: router
  }));
};

class ProductDetailsStyleOne_ProductDetailsStyleOne extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    ProductDetailsStyleOne_defineProperty(this, "state", {
      qty: 1,
      max: 10,
      min: 1
    });

    ProductDetailsStyleOne_defineProperty(this, "handleAddToCart", () => {
      let {
        id
      } = this.props.router.query;
      let {
        qty
      } = this.state;
      this.props.addQuantityWithNumber(id, qty);
      external_react_toastify_["toast"].success('Added to the cart', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    });

    ProductDetailsStyleOne_defineProperty(this, "incrementItem", () => {
      this.setState(prevState => {
        if (prevState.qty < 10) {
          return {
            qty: prevState.qty + 1
          };
        } else {
          return null;
        }
      });
    });

    ProductDetailsStyleOne_defineProperty(this, "decreaseItem", () => {
      this.setState(prevState => {
        if (prevState.qty > 1) {
          return {
            qty: prevState.qty - 1
          };
        } else {
          return null;
        }
      });
    });
  }

  render() {
    // let { id } = this.props.router.query;
    let {
      title,
      offer,
      oldPrice,
      newPrice,
      imageUrl
    } = this.props.product; // console.log()
    // let data = products.filter((product) => product.id == id);

    return ProductDetailsStyleOne_jsx("section", {
      className: "product-details-area pt-100 pb-70"
    }, ProductDetailsStyleOne_jsx(external_react_toastify_["ToastContainer"], null), ProductDetailsStyleOne_jsx("div", {
      className: "container"
    }, ProductDetailsStyleOne_jsx("div", {
      className: "row"
    }, ProductDetailsStyleOne_jsx("div", {
      className: "col-lg-5 col-md-12"
    }, ProductDetailsStyleOne_jsx(ProductDetails_ProductImage, {
      imageUrl: imageUrl
    })), ProductDetailsStyleOne_jsx("div", {
      className: "col-lg-7 col-md-12"
    }, ProductDetailsStyleOne_jsx("div", {
      className: "products-details-desc"
    }, ProductDetailsStyleOne_jsx("h3", null, title), ProductDetailsStyleOne_jsx("div", {
      className: "price"
    }, offer ? ProductDetailsStyleOne_jsx(external_react_default.a.Fragment, null, ProductDetailsStyleOne_jsx("span", {
      className: "old-price"
    }, "$", oldPrice), ProductDetailsStyleOne_jsx("span", {
      className: "new-price"
    }, "$", newPrice)) : ProductDetailsStyleOne_jsx("span", {
      className: "new-price"
    }, "$", oldPrice)), ProductDetailsStyleOne_jsx("div", {
      className: "products-review"
    }, ProductDetailsStyleOne_jsx("div", {
      className: "rating"
    }, ProductDetailsStyleOne_jsx("i", {
      className: "bx bx-star"
    }), ProductDetailsStyleOne_jsx("i", {
      className: "bx bx-star"
    }), ProductDetailsStyleOne_jsx("i", {
      className: "bx bx-star"
    }), ProductDetailsStyleOne_jsx("i", {
      className: "bx bx-star"
    }), ProductDetailsStyleOne_jsx("i", {
      className: "bx bx-star"
    })), ProductDetailsStyleOne_jsx(link_default.a, {
      href: "#"
    }, ProductDetailsStyleOne_jsx("a", {
      onClick: e => e.preventDefault(),
      className: "rating-count"
    }, "3 reviews"))), ProductDetailsStyleOne_jsx("ul", {
      className: "products-info"
    }, ProductDetailsStyleOne_jsx("li", null, ProductDetailsStyleOne_jsx("span", null, "Disponibilidad:"), "3 libres"), ProductDetailsStyleOne_jsx("li", null, ProductDetailsStyleOne_jsx("span", null, "Tipo:"), "Bungalow"), ProductDetailsStyleOne_jsx("li", null, ProductDetailsStyleOne_jsx("span", null, "Capacidad de Personas:"), "5")), ProductDetailsStyleOne_jsx("br", null), ProductDetailsStyleOne_jsx("div", {
      className: "products-add-to-cart"
    }, ProductDetailsStyleOne_jsx("div", {
      className: "input-counter"
    }, ProductDetailsStyleOne_jsx("input", {
      type: "date"
    })), ProductDetailsStyleOne_jsx("div", {
      className: "input-counter"
    }, ProductDetailsStyleOne_jsx("input", {
      type: "date"
    }))), ProductDetailsStyleOne_jsx("br", null), ProductDetailsStyleOne_jsx("ul", {
      className: "products-info"
    }, ProductDetailsStyleOne_jsx("li", null, ProductDetailsStyleOne_jsx("span", null, "D\xEDas de Estancia: 5")), ProductDetailsStyleOne_jsx("li", null, ProductDetailsStyleOne_jsx("span", null, "subtotal:"), " 1000")), ProductDetailsStyleOne_jsx("div", {
      className: "products-add-to-cart"
    }, ProductDetailsStyleOne_jsx(link_default.a, {
      href: "/checkout"
    }, ProductDetailsStyleOne_jsx("button", {
      className: "default-btn",
      onClick: console.log("Checkout")
    }, ProductDetailsStyleOne_jsx("i", {
      className: "fas fa-cart-plus"
    }), "Reservar Ahora")))))), ProductDetailsStyleOne_jsx(ProductDetails_ProductDetailsTab, null)));
  }

}

const ProductDetailsStyleOne_mapDispatchToProps = dispatch => {
  return {
    addQuantityWithNumber: (id, qty) => {
      dispatch(Object(cartActions["c" /* addQuantityWithNumber */])(id, qty));
    },
    addToCart: id => {
      dispatch(Object(cartActions["d" /* addToCart */])(id));
    }
  };
};

/* harmony default export */ var ProductDetails_ProductDetailsStyleOne = (Object(external_react_redux_["connect"])(null, ProductDetailsStyleOne_mapDispatchToProps)(hookClass));
// EXTERNAL MODULE: ./components/Common/FacilitySlider.js
var FacilitySlider = __webpack_require__("Qz8T");

// EXTERNAL MODULE: ./components/Common/InstagramFeed.js
var InstagramFeed = __webpack_require__("30GX");

// EXTERNAL MODULE: ./components/Layouts/Footer.js
var Footer = __webpack_require__("g7ta");

// EXTERNAL MODULE: ./firebase/index.js
var firebase = __webpack_require__("xWvD");

// CONCATENATED MODULE: ./pages/product.js
var product_jsx = external_react_default.a.createElement;










const Product = ({
  product
}) => {
  console.log(product);
  return product_jsx(external_react_default.a.Fragment, null, product_jsx(Navbar["a" /* default */], null), product_jsx(ProductDetails_ProductDetailsStyleOne, {
    product: product
  }), product_jsx(InstagramFeed["a" /* default */], null), product_jsx(Footer["a" /* default */], null));
};

Product.getInitialProps = async ({
  query: {
    id
  }
}) => {
  console.log(id);
  const db = firebase["b" /* firebase */].firestore();
  let response = await db.collection("products").doc(id).get(); // console.log(response.data())

  return {
    product: response.data()
  };
};

/* harmony default export */ var pages_product = __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "wDLY":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img4-0d69769318217b935aae5cb3aaedee23.jpg";

/***/ }),

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "wWkf":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/insta10-042700f23ca12981ba23abf90200b805.jpg";

/***/ }),

/***/ "xDLk":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img1-a7be1081b9e0d9b9b4f2da00121a0c23.jpg";

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

/***/ "y+R7":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMUM1QUQyRDYxM0MxMUU3QTE2RkM2RkVEMTY1NUZGQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMUM1QUQyRTYxM0MxMUU3QTE2RkM2RkVEMTY1NUZGQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAxQzVBRDJCNjEzQzExRTdBMTZGQzZGRUQxNjU1RkZCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAxQzVBRDJDNjEzQzExRTdBMTZGQzZGRUQxNjU1RkZCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAKgBAAwERAAIRAQMRAf/EAHsAAAMBAQEBAAAAAAAAAAAAAAAGBwQBAgMBAAIDAQEBAAAAAAAAAAAAAAAGBAUHAwECEAABAwEGBAYDAAAAAAAAAAAAAQIDBxExsTN0NiFRMrJhQpI0RBZxcgQRAQABAwUBAAMAAAAAAAAAAAABwTI0coIDBAYxEYEC/9oADAMBAAIRAxEAPwDc573OVznKrlW1VVbVVVMnmZlWuWrzAHKlKr9mk4/Fk72F/wCcyJ0zR24LldHlMABGqsqv2pOPxo8XFZ272ieYxd00Jdq8yKYvw6172uRzXK1zVtRUWxUVAeTES0CIwgADnSnc0mlk72F95zInTNHbguV0ekwAEZqzutNNHi4rO3e0TzGLumhMIpiABpERg4AHOlO5pNLJ3sL7zmROmaO3Bcro9JgAIzVndaaaPFxWdu9onmMXdNCYRTEADSIjBwAOdKdzSaWTvYX3nMidM0duC5XR6TAARmrO6000eLis7d7RPMYu6aEwimIAGkRGDgAc6U7mk0snewvvOZE6Zo7cFyuj0mAAjNWd1ppo8XFZ272ieYxd00JhFMQAN8+fJl9S5fRf5fDkI/8Af2fjB5ePSfIONKtzSXe2ku/ZhfecyJ0zR24LldHlMABGqsbqS720d/5cVnbvaH5jF3TQmekimF9P58+PL6m5nRf5vDmew+f7tn7+vr//2Q=="

/***/ }),

/***/ "yLzJ":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyODQ3Mjc2MTYxM0MxMUU3ODJENDgwMDE3MDIxNjRGOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyODQ3Mjc2MjYxM0MxMUU3ODJENDgwMDE3MDIxNjRGOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI4NDcyNzVGNjEzQzExRTc4MkQ0ODAwMTcwMjE2NEY4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI4NDcyNzYwNjEzQzExRTc4MkQ0ODAwMTcwMjE2NEY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAKgBAAwERAAIRAQMRAf/EAI4AAQACAgMAAAAAAAAAAAAAAAAEBQEDAgYHAQEAAgMBAQAAAAAAAAAAAAAAAgYDBAUBBxAAAQMBBgMFCAMAAAAAAAAAAQIDBAAREpMFVQZR0RYyktIzFTFBIkJiExQ0YXGREQACAQEGBQMDBQAAAAAAAAAAAQIDETGRUhMUIUFREgRxoSJhgTLwscHRBf/aAAwDAQACEQMRAD8ApFOOLUVKUVKUbVKJJJJ95rln0xIxeVxNALyuJoBeVxNALyuJoBeVxNALyuJoDKXHEKCkqKVJNqVAkEEe8UDR7x6BkWnRcFvw1R9zVzSxZXdafV4nFeS7babW7Ihw2GGkqW46tlsJSlItJPw1m8edarNRU2rfqzx1qnJybKyBL2JNnrhNxGmXb9xhciGGkOKtu3bxT8JvggBVnD2105+FUsfbVeN/D1/SJz14xUndzslbYWvoGRadFwW/DXG3NXNLFkdafV4j0DItOi4LfhpuauaWLGtPq8R6BkWnRcFvw03NXNLFjWn1eI9AyLTouC34abmrmlixrT6vEegZFp0XBb8NNzVzSxY1p9XiT6wGM6vuF8QkFMWJLiflvoVmMlX47iS2oFF5KG1POAKCRZeb/wAqwLxYqEJW2vstSfX6Xe7Njxvm+Li+26/+bFgzOxsz2q4p9qQuL+XFlqBelXY6xHKQEFJIZBVeCrRZaKsFD/LhoRlWj+azP+zR8rynOpKFNy+KuSt+XuXMERVyHpbUKQw7IN2Q+6uOptZaN1ASGnHFAhJ+YCqr53jqnRptO3jL0v5cLfW37Gbul+LaaXrbx9V+xOrkgUAoBQCgKSREczGG9CGVpyq8QtUkfaV91YcCiVhtRUSeJrt1/JppU7JqXarOCljxSRHx6s1NuSl92vYhP7FQiOlMaW0VvtluaS0oG0qcsWiwi8brtnxe8A/xWat51Hsj8pSceXLl1uuNil5Vkm3CzD3LmKsmXc9ITF+2lSDmFrRW6kKF0KuEr/q2tTy6sJUIRU4uUeSUrePHmrOF15pwlPudttnqrPtx5k+uSZhQCgFAeFdUbj1OVjL51dtnRyRwLDoU8qHVG49TlYy+dNnRyRwGhTyodUbj1OVjL502dHJHAaFPKh1RuPU5WMvnTZ0ckcBoU8qHVG49TlYy+dNnRyRwGhTyodUbj1OVjL502dHJHAaFPKh1RuPU5WMvnTZ0ckcBoU8qHVG49TlYy+dNnRyRwGhTyohyf2XfK7avK7Ht+T6eFbTJRuV5r7teEh3aAd2gHdoB3aAd2gNkb9lryu2nzex7fn+njXqIyud5/9k="

/***/ })

/******/ });