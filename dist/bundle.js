/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _todoApp = __webpack_require__(3);
	
	var _todoApp2 = _interopRequireDefault(_todoApp);
	
	var _appStore = __webpack_require__(15);
	
	var _appStore2 = _interopRequireDefault(_appStore);
	
	var _reactRedux = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var render = function render() {
		_reactDom2.default.render(React.createElement(
			_reactRedux.Provider,
			{ store: _appStore2.default },
			React.createElement(_todoApp2.default, null)
		), document.getElementById('root'));
	};
	
	render();

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _todoAdd = __webpack_require__(4);
	
	var _todoAdd2 = _interopRequireDefault(_todoAdd);
	
	var _todoList = __webpack_require__(8);
	
	var _todoList2 = _interopRequireDefault(_todoList);
	
	var _footer = __webpack_require__(10);
	
	var _footer2 = _interopRequireDefault(_footer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TodoApp = function (_Component) {
		_inherits(TodoApp, _Component);
	
		function TodoApp() {
			_classCallCheck(this, TodoApp);
	
			return _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).apply(this, arguments));
		}
	
		_createClass(TodoApp, [{
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					null,
					React.createElement(
						'div',
						null,
						' My Todo Component Starts '
					),
					React.createElement(_todoAdd2.default, null),
					React.createElement(_todoList2.default, null),
					React.createElement(_footer2.default, null)
				);
			}
		}]);
	
		return TodoApp;
	}(_react.Component);
	
	exports.default = TodoApp;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _todoAction = __webpack_require__(5);
	
	var _reactRedux = __webpack_require__(7);
	
	var TodoAddView = function TodoAddView(_ref) {
		var addTodoOnClick = _ref.addTodoOnClick;
	
	
		var input;
		return React.createElement(
			'div',
			null,
			React.createElement('input', { type: 'text', ref: function ref(e) {
					return input = e;
				},
				placeholder: 'Add todo' }),
			React.createElement('input', { type: 'button', value: 'Add Todo',
				onClick: function onClick() {
					addTodoOnClick(input.value);
					input.value = '';
				} })
		);
	};
	TodoAddView.propTypes = {
		addTodoOnClick: React.PropTypes.func.isRequired
	};
	
	var mapDispatcherToProps = function mapDispatcherToProps(dispatch) {
		return {
			addTodoOnClick: function addTodoOnClick(text) {
				dispatch((0, _todoAction.addToDo)(text));
			}
		};
	};
	
	var TodoAdd = (0, _reactRedux.connect)(null, mapDispatcherToProps)(TodoAddView);
	exports.default = TodoAdd;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.toggleTodoAction = exports.addToDo = undefined;
	
	var _todoConstant = __webpack_require__(6);
	
	var _todoConstant2 = _interopRequireDefault(_todoConstant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var addToDo = exports.addToDo = function addToDo(text) {
		return {
			type: _todoConstant2.default.ADD_TODO,
			text: text
		};
	};
	
	var toggleTodoAction = exports.toggleTodoAction = function toggleTodoAction(id) {
		return {
			type: _todoConstant2.default.TOGGLE_TODO,
			id: id
		};
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var TodoConstant = {
		ADD_TODO: "ADD_TODO",
		TOGGLE_TODO: "TOGGLE_TODO"
	};
	console.warn("Find better ways of defining constant");
	
	exports.default = TodoConstant;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = ReactRedux;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _todoAction = __webpack_require__(5);
	
	var _filteroption = __webpack_require__(9);
	
	var _filteroption2 = _interopRequireDefault(_filteroption);
	
	var _reactRedux = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getTodoList = function getTodoList(_ref) {
		var todos = _ref.todos;
		var currentFilter = _ref.currentFilter;
	
		switch (currentFilter) {
			case _filteroption2.default.COMPLETED:
				return todos.filter(function (x) {
					return x.completed;
				});
			case _filteroption2.default.PENDING:
				return todos.filter(function (x) {
					return !x.completed;
				});
			default:
				return todos;
		}
	};
	
	var TodoView = function TodoView(_ref2) {
		var todos = _ref2.todos;
		var onTodoClick = _ref2.onTodoClick;
	
		return React.createElement(
			'ul',
			null,
			todos.map(function (todo) {
				return React.createElement(
					'li',
					{ key: todo.id,
						onClick: function onClick() {
							onTodoClick(todo.id);
						},
						style: { textDecoration: todo.completed ? 'line-through' : 'none' }
					},
					todo.text
				);
			})
		);
	};
	
	TodoView.propTypes = {
		todos: React.PropTypes.arrayOf(React.PropTypes.shape({
			id: React.PropTypes.number.isRequired,
			completed: React.PropTypes.bool.isRequired,
			text: React.PropTypes.string.isRequired
		}).isRequired).isRequired,
		onTodoClick: React.PropTypes.func.isRequired
	};
	
	var mapStateToProps = function mapStateToProps(state) {
		return {
			todos: getTodoList(state)
		};
	};
	
	var mapDispatcherToProps = function mapDispatcherToProps(dispatch) {
		return {
			onTodoClick: function onTodoClick(id) {
				dispatch((0, _todoAction.toggleTodoAction)(id));
			}
		};
	};
	var TodoList = (0, _reactRedux.connect)(mapStateToProps, mapDispatcherToProps)(TodoView);
	exports.default = TodoList;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var FilterOption = {
		"ALL": "ALL",
		"COMPLETED": 'COMPLETED',
		"PENDING": 'PENDING'
	};
	
	exports.default = FilterOption;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _filter = __webpack_require__(11);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _filterOption = __webpack_require__(14);
	
	var _filterOption2 = _interopRequireDefault(_filterOption);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Footer = function (_Component) {
		_inherits(Footer, _Component);
	
		function Footer() {
			_classCallCheck(this, Footer);
	
			return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
		}
	
		_createClass(Footer, [{
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					null,
					React.createElement(
						_filter2.default,
						{ filter: _filterOption2.default.ALL },
						_filterOption2.default.ALL
					),
					', ',
					React.createElement(
						_filter2.default,
						{ filter: _filterOption2.default.COMPLETED },
						_filterOption2.default.COMPLETED
					),
					', ',
					React.createElement(
						_filter2.default,
						{ filter: _filterOption2.default.PENDING },
						_filterOption2.default.PENDING
					)
				);
			}
		}]);
	
		return Footer;
	}(_react.Component);
	
	exports.default = Footer;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _filterAction = __webpack_require__(12);
	
	var _filterAction2 = _interopRequireDefault(_filterAction);
	
	var _reactRedux = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapStateToProps = function mapStateToProps(state) {
		return {
			selectedFilter: state.currentFilter
		};
	};
	var mapDispatcherToProps = function mapDispatcherToProps(dispatch, ownProps) {
		return {
			onFilterLinkClick: function onFilterLinkClick() {
				dispatch((0, _filterAction2.default)(ownProps.filter));
			}
		};
	};
	
	var FilterLinkView = function FilterLinkView(_ref) {
		var filter = _ref.filter;
		var selectedFilter = _ref.selectedFilter;
		var onFilterLinkClick = _ref.onFilterLinkClick;
		var children = _ref.children;
	
		if (selectedFilter == filter) {
			return React.createElement(
				"span",
				null,
				" ",
				children,
				" "
			);
		}
		return React.createElement(
			"a",
			{ href: "#",
				onClick: onFilterLinkClick
			},
			children
		);
	};
	FilterLinkView.propTypes = {
		filter: React.PropTypes.string.isRequired,
		selectedFilter: React.PropTypes.string.isRequired,
		onFilterLinkClick: React.PropTypes.func.isRequired,
		children: React.PropTypes.node.isRequired
	};
	
	var FilterLink = (0, _reactRedux.connect)(mapStateToProps, mapDispatcherToProps)(FilterLinkView);
	exports.default = FilterLink;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _filterConstant = __webpack_require__(13);
	
	var _filterConstant2 = _interopRequireDefault(_filterConstant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FilterAction = function FilterAction(currentFilter) {
		return {
			currentFilter: currentFilter,
			type: _filterConstant2.default.FILTER_SELECTION
		};
	};
	
	exports.default = FilterAction;

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var FilterConstant = {
		FILTER_SELECTION: "FILTER_SELECTION"
	};
	
	exports.default = FilterConstant;

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var FilterOption = {
		"ALL": "ALL",
		"COMPLETED": 'COMPLETED',
		"PENDING": 'PENDING'
	};
	
	exports.default = FilterOption;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(16);
	
	var _todoAppReducer = __webpack_require__(17);
	
	var _todoAppReducer2 = _interopRequireDefault(_todoAppReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var store = (0, _redux.createStore)(_todoAppReducer2.default);
	window.store = store;
	exports.default = store;

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = Redux;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _todoReducer = __webpack_require__(18);
	
	var _todoReducer2 = _interopRequireDefault(_todoReducer);
	
	var _filterReducer = __webpack_require__(19);
	
	var _filterReducer2 = _interopRequireDefault(_filterReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TodoAppReducer = function TodoAppReducer() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		var action = arguments[1];
	
	
		return {
			todos: (0, _todoReducer2.default)(state.todos, action),
			currentFilter: (0, _filterReducer2.default)(state.currentFilter, action)
		};
	};
	
	exports.default = TodoAppReducer;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _todoConstant = __webpack_require__(6);
	
	var _todoConstant2 = _interopRequireDefault(_todoConstant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var nextId = 0;
	var TodoReducer = function TodoReducer() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
		var action = arguments[1];
	
		var actionType = action.type;
	
		var _ret = function () {
			switch (actionType) {
				case _todoConstant2.default.ADD_TODO:
					return {
						v: [].concat(_toConsumableArray(state), [{
							text: action.text,
							id: nextId++,
							completed: false
						}])
					};
				case _todoConstant2.default.TOGGLE_TODO:
					var id = action.id;
	
					var x = state.map(function (todo) {
						if (todo.id == id) {
							return Object.assign({}, todo, { completed: !todo.completed });
						}
						return todo;
					});
	
					return {
						v: x
					};
				default:
					return {
						v: state
					};
			}
		}();
	
		if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	};
	
	exports.default = TodoReducer;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _filterConstant = __webpack_require__(13);
	
	var _filterConstant2 = _interopRequireDefault(_filterConstant);
	
	var _filterOption = __webpack_require__(14);
	
	var _filterOption2 = _interopRequireDefault(_filterOption);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var currentFilter = _filterOption2.default.ALL;
	
	var FilterReducer = function FilterReducer() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? currentFilter : arguments[0];
		var action = arguments[1];
	
		var type = action.type;
		switch (type) {
			case _filterConstant2.default.FILTER_SELECTION:
				{
					return action.currentFilter;
				}
			default:
				return state;
		}
		return state;
	};
	
	exports.default = FilterReducer;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map