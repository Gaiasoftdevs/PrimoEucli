(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"0Yqi":function(t,e,n){"use strict";var r=n("zLVn");var o=n("nOHt"),a=n("YFqc"),c=n.n(a),i=n("q1tI"),l=n.n(i),u=l.a.createElement;e.a=Object(o.withRouter)((function(t){var e=t.router,n=t.children,o=function(t,e){if(null==t)return{};var n,o,a=Object(r.a)(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(o=0;o<c.length;o++)n=c[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}(t,["router","children"]),a=i.Children.only(n),s=a.props.className||"";return e.pathname===o.href&&o.activeClassName&&(s="".concat(s," ").concat(o.activeClassName).trim()),delete o.activeClassName,u(c.a,o,l.a.cloneElement(a,{className:s}))}))},"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},LyKl:function(t,e,n){"use strict";n.r(e);var r=n("1OyB"),o=n("vuIU"),a=n("Ji7U"),c=n("md7G"),i=n("foSv"),l=n("q1tI"),u=n.n(l),s=n("uf77"),f=n("wW3a"),d=n("UhCr"),p=n("JX7q"),h=n("rePB"),v=n("GGqY"),b=n("xWvD"),m=u.a.createElement;function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(i.a)(t);if(e){var o=Object(i.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var O=function(t){Object(a.a)(n,t);var e=y(n);function n(){var t;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return t=e.call.apply(e,[this].concat(a)),Object(h.a)(Object(p.a)(t),"state",{modal:!1,selected:""}),Object(h.a)(Object(p.a)(t),"closeModal",(function(){t.props.onClick(t.state.modal)})),Object(h.a)(Object(p.a)(t),"handleUpdate",(function(e){if(e.preventDefault(),""===t.state.selected)return!1;b.b.firestore().collection("orders").doc(t.props.orderId).update({status:t.state.selected}),v.c.success("Status changed to "+t.state.selected,{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),setTimeout((function(){t.closeModal(),window.location.reload(!1)}),1e3)})),t}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return m(u.a.Fragment,null,m("div",{className:"admin-product-modal ".concat(this.props.active)},m("div",{className:"modal-innter-content"},m("button",{type:"button",className:"close",onClick:this.closeModal},m("span",{"aria-hidden":"true"},m("i",{className:"bx bx-x"}))),m("div",{className:"modal-body"},m("h3",null,"Order Update"),m("form",{onSubmit:this.handleUpdate},m("div",{className:"form-group"},m("label",null,"Order Status"),m("select",{className:"form-control",id:"product-type",onChange:function(e){return t.setState({selected:e.target.value})}},m("option",null,"Select Option"),m("option",{value:"delivered"},"Delivered"),m("option",{value:"pending"},"Pending"),m("option",{value:"cancel"},"Declined"))),m("div",{className:"modal-btn"},m("div",{className:"btn optional-btn float-left",onClick:this.closeModal},"Cancel"),m("button",{className:"btn default-btn float-right"},"Update")))))))}}]),n}(l.Component),g=u.a.createElement;function j(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(i.a)(t);if(e){var o=Object(i.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var w=function(t){Object(a.a)(n,t);var e=j(n);function n(){var t;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return t=e.call.apply(e,[this].concat(a)),Object(h.a)(Object(p.a)(t),"state",{orderUpdateModal:!0}),Object(h.a)(Object(p.a)(t),"toggleOrderUpdateModal",(function(){t.setState({orderUpdateModal:!t.state.orderUpdateModal}),t.props.onOrderModal(t.state.orderUpdateModal)})),Object(h.a)(Object(p.a)(t),"passId",(function(e){t.props.onPassId(e)})),Object(h.a)(Object(p.a)(t),"convertDateTime",(function(t){var e=new Date(1970,0,1).setSeconds(t.seconds),n=new Intl.DateTimeFormat("en",{year:"numeric"}).format(e),r=new Intl.DateTimeFormat("en",{month:"short"}).format(e),o=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(e);return"".concat(o,"-").concat(r,"-").concat(n)})),Object(h.a)(Object(p.a)(t),"statusBtn",(function(t){return"pending"===t?g("span",{className:"badge badge_warning"},"Pending"):"cancel"===t?g("span",{className:"badge badge_danger"},"Cancel"):g("span",{className:"badge badge_success"},"Delivered")})),t}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=this.props.orders;return g(u.a.Fragment,null,e.map((function(e,n){return g("tr",{key:n,onClick:function(n){t.toggleOrderUpdateModal(),t.passId(e.id)}},g("td",null,g("strong",null,"#",e.id)),g("td",null,t.convertDateTime(e.createdAt)),g("td",null,e.customerDetails.address),g("td",null,"$",e.amount),g("td",null,"Stripe"),g("td",null,e.customerDetails.phone),g("td",null,t.statusBtn(e.status)))})))}}]),n}(l.Component),S=u.a.createElement;function U(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(i.a)(t);if(e){var o=Object(i.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var C=function(t){Object(a.a)(n,t);var e=U(n);function n(){var t;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return t=e.call.apply(e,[this].concat(a)),Object(h.a)(Object(p.a)(t),"state",{ordersData:[],loading:!0,orderUpdateModal:!1,orderId:""}),Object(h.a)(Object(p.a)(t),"toggleOrderUpdateModal",(function(e){t.setState({orderUpdateModal:e})})),Object(h.a)(Object(p.a)(t),"closeOrderUpdateModal",(function(){t.setState({orderUpdateModal:!1})})),Object(h.a)(Object(p.a)(t),"getId",(function(e){t.setState({orderId:e})})),t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=b.b.firestore().collection("orders"),n=[];e.get().then((function(e){e.forEach((function(t){var e=t.data();e.id=t.id,n.push(e)})),t.setState({ordersData:n}),t.loading=!1})).catch((function(t){console.log("error",t)}))}},{key:"render",value:function(){var t=this.state,e=t.ordersData,n=t.loading;return S("div",{className:"admin-main-content d-flex flex-column"},S("div",{className:"page-header"},S("h2",null,"Orders")),S("div",{className:"admin-table admin-orders-table height-555"},S("div",{className:"table-responsive"},S("table",{className:"table table-hover mb-0"},S("thead",null,S("tr",null,S("th",null,"Customer ID"),S("th",null,"Date"),S("th",null,"Delivery Address"),S("th",null,"Amount"),S("th",null,"Payment Method"),S("th",null,"Contact"),S("th",null,"Status"))),S("tbody",null,n?S(w,{onOrderModal:this.toggleOrderUpdateModal,onPassId:this.getId,orders:e}):"Loading...")))),S(O,{onClick:this.closeOrderUpdateModal,orderId:this.state.orderId,active:this.state.orderUpdateModal?"active":""}),S("div",{className:"flex-grow-1"}))}}]),n}(l.Component),D=u.a.createElement;function R(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(i.a)(t);if(e){var o=Object(i.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var M=function(t){Object(a.a)(n,t);var e=R(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return D(u.a.Fragment,null,D(s.a,null),D(f.a,null),D(C,null))}}]),n}(l.Component);e.default=Object(d.a)(M)},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("/GRZ"),o=n("i2R6"),a=n("48fX"),c=n("tCBg"),i=n("T0f4");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}var u=n("AroE"),s=n("7KCV");e.__esModule=!0,e.default=void 0;var f,d=s(n("q1tI")),p=n("QmWs"),h=n("g/15"),v=u(n("nOHt")),b=n("elyg");function m(t){return t&&"object"===typeof t?(0,h.formatWithValidation)(t):t}var y=new Map,O=window.IntersectionObserver,g={};function j(){return f||(O?f=new O((function(t){t.forEach((function(t){if(y.has(t.target)){var e=y.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(f.unobserve(t.target),y.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var w=function(t){a(n,t);var e=l(n);function n(t){var o;return r(this,n),(o=e.call(this,t)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(t){var e=null,n=null,r=null;return function(o,a){if(r&&o===e&&a===n)return r;var c=t(o,a);return e=o,n=a,r=c,c}}((function(t,e){return{href:(0,b.addBasePath)(m(t)),as:e?(0,b.addBasePath)(m(e)):e}})),o.linkClicked=function(t){var e=t.currentTarget,n=e.nodeName,r=e.target;if("A"!==n||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=o.formatUrls(o.props.href,o.props.as),c=a.href,i=a.as;if(function(t){var e=(0,p.parse)(t,!1,!0),n=(0,p.parse)((0,h.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(c)){var l=window.location.pathname;c=(0,p.resolve)(l,c),i=i?(0,p.resolve)(l,i):c,t.preventDefault();var u=o.props.scroll;null==u&&(u=i.indexOf("#")<0),v.default[o.props.replace?"replace":"push"](c,i,{shallow:o.props.shallow}).then((function(t){t&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==t.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,p.resolve)(t,n);return[o,r?(0,p.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&O&&t&&t.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=j();return n?(n.observe(t),y.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}y.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();v.default.prefetch(e[0],e[1],t).catch((function(t){0})),g[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=d.default.createElement("a",null,e));var a=d.Children.only(e),c={ref:function(e){t.handleRef(e),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(e):"object"===typeof a.ref&&(a.ref.current=e))},onMouseEnter:function(e){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(c.href=o||r),d.default.cloneElement(a,c)}}]),n}(d.Component);e.default=w},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}n.d(e,"a",(function(){return c}));var a=n("JX7q");function c(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?Object(a.a)(t):e}},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},wopW:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/orders",function(){return n("LyKl")}])}},[["wopW",0,2,8,10,1,3,9,11,13]]]);