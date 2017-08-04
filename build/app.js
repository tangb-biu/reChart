webpackJsonp([0],{

/***/ "./App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("../node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__("../node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__("../node_modules/react-router-dom/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_transition_group_CSSTransitionGroup__ = __webpack_require__("../node_modules/react-transition-group/CSSTransitionGroup.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_transition_group_CSSTransitionGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_transition_group_CSSTransitionGroup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_history_createHashHistory__ = __webpack_require__("../node_modules/history/createHashHistory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_history_createHashHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_history_createHashHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style__ = __webpack_require__("./style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_global__ = __webpack_require__("./actions/global.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var history = __WEBPACK_IMPORTED_MODULE_5_history_createHashHistory___default()();

var App = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(function (state) {
	return state;
}, function (dispatch) {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["c" /* bindActionCreators */])(__WEBPACK_IMPORTED_MODULE_7__actions_global__, dispatch);
}), _dec(_class = function (_Component) {
	_inherits(App, _Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			var animate = this.props.globals.animate;

			console.log(animate);
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["a" /* BrowserRouter */],
				{ history: history },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Route */], { render: function render(_ref) {
						var location = _ref.location;

						return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_4_react_transition_group_CSSTransitionGroup___default.a,
							{
								transitionName: animate,
								transitionEnter: true,
								transitionLeave: true,
								transitionAppear: true,
								transitionEnterTimeout: 400,
								transitionLeaveTimeout: 400,
								transitionAppearTimeout: 400
							},
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								'div',
								{ key: location.pathname },
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Route */], { location: location, exact: true, path: '/', render: function render() {
										return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
											'div',
											{ style: { background: '#993366' } },
											__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
												'h1',
												null,
												'\u9996\u9875'
											),
											__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["c" /* Link */],
												{ to: '/chartList' },
												'\u56FE\u8868\u5217\u8868'
											),
											__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
											__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["c" /* Link */],
												{ to: '/chart/1' },
												'\u67F1\u72B6\u56FE'
											)
										);
									} }),
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Route */], { loaction: location, path: '/chartList', render: function render() {
										return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
											'div',
											{ style: { background: '#CC0033' } },
											__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
												'h1',
												null,
												'\u56FE\u8868\u5217\u8868'
											),
											__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["c" /* Link */],
												{ to: '/' },
												'\u9996\u9875'
											),
											__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
											__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["c" /* Link */],
												{ to: '/chart/1' },
												'\u67F1\u72B6\u56FE'
											)
										);
									} }),
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["b" /* Route */], { location: location, path: '/chart/:chartId', render: function render() {
										return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
											'div',
											{ style: { background: '#FF6633' } },
											__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
												'h1',
												null,
												'\u67F1\u72B6\u56FE'
											),
											__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["c" /* Link */],
												{ to: '/' },
												'\u9996\u9875'
											),
											' ',
											__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
											__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["c" /* Link */],
												{ to: '/chartList' },
												'\u56FE\u8868\u5217\u8868'
											)
										);
									} })
							)
						);
					} })
			);
		}
	}]);

	return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class);
var _default = App;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(history, 'history', 'D:/gitRepository2/reChart/src/App.js');

	__REACT_HOT_LOADER__.register(App, 'App', 'D:/gitRepository2/reChart/src/App.js');

	__REACT_HOT_LOADER__.register(_default, 'default', 'D:/gitRepository2/reChart/src/App.js');
}();

;

/***/ }),

/***/ "./actions/global.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentAnimate", function() { return currentAnimate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_actions__ = __webpack_require__("../node_modules/redux-actions/es/index.js");


var _createActions = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createActions */])({
	CURRENT_ANIMATE: function CURRENT_ANIMATE(animate) {
		return { animate: animate };
	}
});

var currentAnimate = _createActions.currentAnimate;

;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(currentAnimate, 'currentAnimate', 'D:/gitRepository2/reChart/src/actions/global.js');
}();

;

/***/ }),

/***/ "./index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("../node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_hot_loader__ = __webpack_require__("../node_modules/react-hot-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_hot_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_hot_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__("../node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("../node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_thunk__ = __webpack_require__("../node_modules/redux-thunk/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux_logger__ = __webpack_require__("../node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_redux__ = __webpack_require__("../node_modules/react-router-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_history_createBrowserHistory__ = __webpack_require__("../node_modules/history/createBrowserHistory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_history_createBrowserHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reducers_index__ = __webpack_require__("./reducers/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__App__ = __webpack_require__("./App.js");














var history = __WEBPACK_IMPORTED_MODULE_8_history_createBrowserHistory___default()();
var middleware = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_react_router_redux__["routerMiddleware"])(history);
var middlewares = [__WEBPACK_IMPORTED_MODULE_5_redux_thunk___default.a, middleware, __WEBPACK_IMPORTED_MODULE_6_redux_logger___default.a];
var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_redux__["a" /* createStore */])(__WEBPACK_IMPORTED_MODULE_9__reducers_index__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3_redux__["b" /* applyMiddleware */].apply(undefined, middlewares));

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	__WEBPACK_IMPORTED_MODULE_2_react_hot_loader__["AppContainer"],
	null,
	__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		__WEBPACK_IMPORTED_MODULE_4_react_redux__["a" /* Provider */],
		{ store: store },
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__App__["a" /* default */], null)
	)
), document.getElementById('root'));
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(history, 'history', 'D:/gitRepository2/reChart/src/index.js');

	__REACT_HOT_LOADER__.register(middleware, 'middleware', 'D:/gitRepository2/reChart/src/index.js');

	__REACT_HOT_LOADER__.register(middlewares, 'middlewares', 'D:/gitRepository2/reChart/src/index.js');

	__REACT_HOT_LOADER__.register(store, 'store', 'D:/gitRepository2/reChart/src/index.js');
}();

;

/***/ }),

/***/ "./reducers/global.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return globals; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_actions__ = __webpack_require__("../node_modules/redux-actions/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_global__ = __webpack_require__("./actions/global.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var globals = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["b" /* handleActions */])(_defineProperty({}, __WEBPACK_IMPORTED_MODULE_1__actions_global__["currentAnimate"], function (state, _ref) {
	var animate = _ref.paload.animate;

	return Object.assign({}, state, { animate: animate });
}), { animate: 'normal' });
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(globals, 'globals', 'D:/gitRepository2/reChart/src/reducers/global.js');
}();

;

/***/ }),

/***/ "./reducers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("../node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux__ = __webpack_require__("../node_modules/react-router-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__("./reducers/global.js");




var rootReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["d" /* combineReducers */])({
	routing: __WEBPACK_IMPORTED_MODULE_1_react_router_redux__["routerReducer"],
	globals: __WEBPACK_IMPORTED_MODULE_2__global__["a" /* globals */]
});

var _default = rootReducer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(rootReducer, 'rootReducer', 'D:/gitRepository2/reChart/src/reducers/index.js');

	__REACT_HOT_LOADER__.register(_default, 'default', 'D:/gitRepository2/reChart/src/reducers/index.js');
}();

;

/***/ }),

/***/ "./style.css":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../node_modules/react-hot-loader/patch.js");
__webpack_require__("../node_modules/webpack-dev-server/client/index.js?http:/localhost:3011");
__webpack_require__("../node_modules/webpack/hot/only-dev-server.js");
module.exports = __webpack_require__("./index.js");


/***/ })

},[0]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0eWxlLmNzcyJdLCJuYW1lcyI6WyJoaXN0b3J5IiwiY3JlYXRlSGlzdG9yeSIsIkFwcCIsImNvbm5lY3QiLCJzdGF0ZSIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImRpc3BhdGNoIiwiYW5pbWF0ZSIsInByb3BzIiwiZ2xvYmFscyIsImNvbnNvbGUiLCJsb2ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiYmFja2dyb3VuZCIsImNyZWF0ZUFjdGlvbnMiLCJDVVJSRU5UX0FOSU1BVEUiLCJjdXJyZW50QW5pbWF0ZSIsIm1pZGRsZXdhcmUiLCJyb3V0ZXJNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaGFuZGxlQWN0aW9ucyIsInBhbG9hZCIsIk9iamVjdCIsImFzc2lnbiIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwicm91dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBTUEsVUFBVSxpRUFBQUMsRUFBaEI7O0lBTU1DLEcsV0FKTCxtRkFBQUMsQ0FDQTtBQUFBLFFBQVNDLEtBQVQ7QUFBQSxDQURBLEVBRUE7QUFBQSxRQUFZLHdGQUFBQyxDQUFtQiw2Q0FBbkIsRUFBa0NDLFFBQWxDLENBQVo7QUFBQSxDQUZBLEM7Ozs7Ozs7Ozs7OzJCQUtTO0FBQUEsT0FDQUMsT0FEQSxHQUNZ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RDtBQUFBLElBQVUsT0FBT0osS0FBakI7QUFDQyw4REFBQyxzREFBRDtBQUREO0FBREQsQ0FERCxFQU1DSyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBTkQ7Ozs7Ozs7OytCQUxNM0IsTzs7K0JBQ0FrQixVOzsrQkFDQUUsVzs7K0JBQ0FDLEs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQk47QUFDQTs7QUFFTyxJQUFNWixVQUFVLDJGQUFBbUIscUJBQ3JCLCtEQURxQixZQUNKeEIsS0FESSxRQUN3QjtBQUFBLEtBQVhHLE9BQVcsUUFBcEJzQixNQUFvQixDQUFYdEIsT0FBVzs7QUFDN0MsUUFBT3VCLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCM0IsS0FBbEIsRUFBeUIsRUFBQ0csZ0JBQUQsRUFBekIsQ0FBUDtBQUNBLENBSHFCLEdBSXBCLEVBQUNBLFNBQVMsUUFBVixFQUpvQixDQUFoQjs7Ozs7Ozs7K0JBQU1FLE87Ozs7Ozs7Ozs7Ozs7OztBQ0hiO0FBQ0E7QUFDQTs7QUFFQSxJQUFNdUIsY0FBYyxxRkFBQUMsQ0FBZ0I7QUFDbkNDLFVBQVMsaUVBRDBCO0FBRW5DekIsVUFBQSx3REFBQUE7QUFGbUMsQ0FBaEIsQ0FBcEI7O2VBS2V1QixXO0FBQWY7Ozs7Ozs7OytCQUxNQSxXOzs7Ozs7Ozs7Ozs7QUNKTix5QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IFJvdXRlLCBCcm93c2VyUm91dGVyIGFzIFJvdXRlciAsIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgQ1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvQ1NTVHJhbnNpdGlvbkdyb3VwJ1xyXG5pbXBvcnQgY3JlYXRlSGlzdG9yeSBmcm9tICdoaXN0b3J5L2NyZWF0ZUhhc2hIaXN0b3J5J1xyXG5pbXBvcnQgJ0Avc3R5bGUnXHJcblxyXG5pbXBvcnQgKiBhcyBnbG9iYWxBY3Rpb25zIGZyb20gJ0AvYWN0aW9ucy9nbG9iYWwnXHJcbmNvbnN0IGhpc3RvcnkgPSBjcmVhdGVIaXN0b3J5KClcclxuXHJcbkBjb25uZWN0KFxyXG5cdHN0YXRlID0+IHN0YXRlLFxyXG5cdGRpc3BhdGNoID0+IGJpbmRBY3Rpb25DcmVhdG9ycyhnbG9iYWxBY3Rpb25zLCBkaXNwYXRjaClcclxuKVxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgYW5pbWF0ZSB9ID0gdGhpcy5wcm9wcy5nbG9iYWxzO1xyXG5cdFx0Y29uc29sZS5sb2coYW5pbWF0ZSlcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+XHJcblx0XHRcdFx0PFJvdXRlIHJlbmRlcj17KHsgbG9jYXRpb24gfSkgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PENTU1RyYW5zaXRpb25Hcm91cFxyXG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb25OYW1lPXthbmltYXRlfVxyXG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb25FbnRlcj17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uTGVhdmU9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbkFwcGVhcj17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uRW50ZXJUaW1lb3V0PXs0MDB9XHJcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbkxlYXZlVGltZW91dD17NDAwfVxyXG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb25BcHBlYXJUaW1lb3V0PXs0MDB9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGtleT17bG9jYXRpb24ucGF0aG5hbWV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFJvdXRlIGxvY2F0aW9uPXtsb2NhdGlvbn0gZXhhY3QgcGF0aD1cIi9cIiByZW5kZXI9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQoKSA9PiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e2JhY2tncm91bmQ6ICcjOTkzMzY2J319PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoMT7pppbpobU8L2gxPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL2NoYXJ0TGlzdFwiPuWbvuihqOWIl+ihqDwvTGluaz48YnIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL2NoYXJ0LzFcIj7mn7Hnirblm748L0xpbms+IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdH0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFJvdXRlIGxvYWN0aW9uPXtsb2NhdGlvbn0gcGF0aD1cIi9jaGFydExpc3RcIiByZW5kZXI9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQoKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZDogJyNDQzAwMzMnfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGgxPuWbvuihqOWIl+ihqDwvaDE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgdG89XCIvXCI+6aaW6aG1PC9MaW5rPjxici8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgdG89XCIvY2hhcnQvMVwiPuafseeKtuWbvjwvTGluaz4gXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0fSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFJvdXRlIGxvY2F0aW9uPXtsb2NhdGlvbn0gcGF0aD1cIi9jaGFydC86Y2hhcnRJZFwiIHJlbmRlcj17XHJcblx0XHRcdFx0XHRcdFx0XHRcdCgpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kOiAnI0ZGNjYzMyd9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDE+5p+x54q25Zu+PC9oMT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayB0bz1cIi9cIj7pppbpobU8L0xpbms+IDxici8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgdG89XCIvY2hhcnRMaXN0XCI+5Zu+6KGo5YiX6KGoPC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdH0gLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9DU1NUcmFuc2l0aW9uR3JvdXA+XHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0fX0vPlxyXG5cdFx0XHQ8L1JvdXRlcj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC5qcyIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbnMgfSBmcm9tICdyZWR1eC1hY3Rpb25zJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgY3VycmVudEFuaW1hdGUgfSA9IGNyZWF0ZUFjdGlvbnMoe1xyXG5cdENVUlJFTlRfQU5JTUFURTogYW5pbWF0ZSA9PiAoeyBhbmltYXRlIH0pXHJcbn0pXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hY3Rpb25zL2dsb2JhbC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcclxuaW1wb3J0IHsgQXBwQ29udGFpbmVyIH0gZnJvbSAncmVhY3QtaG90LWxvYWRlcidcclxuXHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xyXG5pbXBvcnQgY3JlYXRlTG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcclxuaW1wb3J0IHsgQ29ubmVjdGVkUm91dGVyLCByb3V0ZXJSZWR1Y2VyLCByb3V0ZXJNaWRkbGV3YXJlLCBwdXNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4J1xyXG5pbXBvcnQgY3JlYXRlSGlzdG9yeSBmcm9tICdoaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5J1xyXG5cclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJ0AvcmVkdWNlcnMvaW5kZXgnXHJcbmltcG9ydCBBcHAgZnJvbSAnQC9BcHAnXHJcblxyXG5jb25zdCBoaXN0b3J5ID0gY3JlYXRlSGlzdG9yeSgpXHJcbmNvbnN0IG1pZGRsZXdhcmUgPSByb3V0ZXJNaWRkbGV3YXJlKGhpc3RvcnkpXHJcbmNvbnN0IG1pZGRsZXdhcmVzID0gW3RodW5rLCBtaWRkbGV3YXJlLCBjcmVhdGVMb2dnZXJdXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcblx0PEFwcENvbnRhaW5lcj5cclxuXHRcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG5cdFx0XHQ8QXBwIC8+XHJcblx0XHQ8L1Byb3ZpZGVyPlxyXG5cdDwvQXBwQ29udGFpbmVyPiwgXHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxyXG4pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXguanMiLCJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucydcclxuaW1wb3J0IHsgY3VycmVudEFuaW1hdGUgfSBmcm9tICdAL2FjdGlvbnMvZ2xvYmFsJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdsb2JhbHMgPSBoYW5kbGVBY3Rpb25zKHtcclxuXHRbY3VycmVudEFuaW1hdGVdIChzdGF0ZSwge3BhbG9hZDoge2FuaW1hdGV9fSkge1xyXG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7YW5pbWF0ZX0pXHJcblx0fVxyXG59LCB7YW5pbWF0ZTogJ25vcm1hbCd9KVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvZ2xvYmFsLmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IHJvdXRlclJlZHVjZXIgfSBmcm9tICAncmVhY3Qtcm91dGVyLXJlZHV4J1xyXG5pbXBvcnQgeyBnbG9iYWxzIH0gZnJvbSAnLi9nbG9iYWwnXHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcblx0cm91dGluZzogcm91dGVyUmVkdWNlcixcclxuXHRnbG9iYWxzXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gLi9zdHlsZS5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==