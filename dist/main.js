/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar createHeader = function createHeader(project) {\n  var projectTitle = project.projectTitle,\n      tagline = project.tagline;\n  var container = document.querySelector(\".container\");\n  var h1 = document.createElement(\"h1\");\n  h1.innerText = projectTitle;\n  var par = document.createElement(\"p\");\n  par.innerText = tagline;\n  container.appendChild(h1);\n  container.appendChild(par);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);\n\n//# sourceURL=webpack://my-webpack-project/./src/components/header.js?");

/***/ }),

/***/ "./src/components/onLoad.js":
/*!**********************************!*\
  !*** ./src/components/onLoad.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/components/header.js\");\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList */ \"./src/components/todoList.js\");\n/* harmony import */ var _controllers_projectController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/projectController */ \"./src/controllers/projectController.js\");\n\n\n\n\nvar onLoad = function onLoad() {\n  //clear container for initialisation\n  document.querySelector(\".container\").innerHTML = \"\"; //get data for the projects\n\n  var projects = (0,_controllers_projectController__WEBPACK_IMPORTED_MODULE_2__.getProjects)();\n  var currProject = projects[0]; ///render page elements\n\n  (0,_header__WEBPACK_IMPORTED_MODULE_0__.default)(currProject);\n  (0,_todoList__WEBPACK_IMPORTED_MODULE_1__.createTodoList)(currProject);\n  (0,_todoList__WEBPACK_IMPORTED_MODULE_1__.populateTodoList)(currProject);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onLoad);\n\n//# sourceURL=webpack://my-webpack-project/./src/components/onLoad.js?");

/***/ }),

/***/ "./src/components/todoList.js":
/*!************************************!*\
  !*** ./src/components/todoList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTodoList\": () => /* binding */ createTodoList,\n/* harmony export */   \"populateTodoList\": () => /* binding */ populateTodoList\n/* harmony export */ });\n/* harmony import */ var _onLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onLoad */ \"./src/components/onLoad.js\");\n/* harmony import */ var _controllers_projectController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/projectController */ \"./src/controllers/projectController.js\");\n\n\nvar createTodoList = function createTodoList(currProject) {\n  var container = document.querySelector(\".container\"); //INPUT TO ADD NEW TODOS\n\n  var form = document.createElement(\"form\");\n  form.innerHTML = \"<input id=\\\"addnew\\\" class=\\\"todoList__input\\\" ><button class=\\\"todoList__button\\\">Add</button>\";\n  var list = document.createElement(\"ul\");\n  list.classList.add(\"todoList\");\n  container.appendChild(form);\n\n  form.onsubmit = function (e) {\n    e.preventDefault();\n    (0,_controllers_projectController__WEBPACK_IMPORTED_MODULE_1__.addTodo)(currProject.projectTitle, document.querySelector(\"#addnew\").value);\n    console.log(currProject);\n    (0,_onLoad__WEBPACK_IMPORTED_MODULE_0__.default)();\n  };\n\n  container.appendChild(list);\n};\nvar populateTodoList = function populateTodoList(projectTitle) {\n  var currProject = (0,_controllers_projectController__WEBPACK_IMPORTED_MODULE_1__.getOneProject)(projectTitle);\n  var list = document.querySelector(\".todoList\");\n  list.innerHTML = !currProject || !currProject.todos ? \"<h4>Nothing to see here yet!</h4>\" : currProject.todos.map(function (todo) {\n    return \"\\n    <li class=\\\"todoList__todo\\\">\\n      <input type=\\\"checkbox\\\"/>\\n      <div class=\\\"todoList__text\\\">\\n        <h4>\".concat(todo.title, \"</h4>\\n        <p>\").concat(todo.desc, \"</p>\\n      </div>\\n      <div class= \\\"todoList__controls\\\">\\n        <i class=\\\"fas fa-pencil-alt\\\"></i>\\n        <i class=\\\"fas fa-minus-circle\\\"></i>\\n      </div>\\n      \\n    </li>\\n    \");\n  }).join(\"\");\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/todoList.js?");

/***/ }),

/***/ "./src/controllers/projectController.js":
/*!**********************************************!*\
  !*** ./src/controllers/projectController.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": () => /* binding */ addProject,\n/* harmony export */   \"getProjects\": () => /* binding */ getProjects,\n/* harmony export */   \"deleteProjects\": () => /* binding */ deleteProjects,\n/* harmony export */   \"getOneProject\": () => /* binding */ getOneProject,\n/* harmony export */   \"addTodo\": () => /* binding */ addTodo\n/* harmony export */ });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar addProject = function addProject(projectTitle, tagline) {\n  var data = JSON.parse(localStorage.getItem(\"projects\")) || [];\n  var newProject = {\n    projectTitle: projectTitle,\n    tagline: tagline,\n    todos: []\n  };\n  var newData = [].concat(_toConsumableArray(data), [newProject]);\n  localStorage.setItem(\"projects\", JSON.stringify(newData));\n};\nvar getProjects = function getProjects() {\n  var data = JSON.parse(localStorage.getItem(\"projects\")) || [];\n  return data;\n};\nvar deleteProjects = function deleteProjects() {};\nvar getOneProject = function getOneProject(currProject) {\n  var data = JSON.parse(localStorage.getItem(\"projects\")) || [];\n  var project = data.find(function (p) {\n    return p.projectTitle == currProject.projectTitle;\n  });\n  return project;\n}; //ALTER TODOS\n\nvar addTodo = function addTodo(projectTitle, todoTitle) {\n  var data = JSON.parse(localStorage.getItem(\"projects\")) || [];\n  var index = data.findIndex(function (p) {\n    return p.projectTitle == projectTitle;\n  });\n  var todo = {\n    title: todoTitle,\n    desc: \"\",\n    completed: false,\n    duedate: \"tbc\"\n  };\n  var newTodos = [].concat(_toConsumableArray(data[index].todos), [todo]);\n  data.splice(index, 1, _objectSpread(_objectSpread({}, data[index]), {}, {\n    todos: _toConsumableArray(newTodos)\n  }));\n  localStorage.setItem(\"projects\", JSON.stringify(data));\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/controllers/projectController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_onLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/onLoad */ \"./src/components/onLoad.js\");\n\n(0,_components_onLoad__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;