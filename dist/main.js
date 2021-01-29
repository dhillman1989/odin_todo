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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar createHeader = function createHeader(projectName, tagline) {\n  var container = document.querySelector(\".container\");\n  var h1 = document.createElement(\"h1\");\n  h1.innerText = projectName;\n  var par = document.createElement(\"p\");\n  par.innerText = tagline;\n  container.appendChild(h1);\n  container.appendChild(par);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);\n\n//# sourceURL=webpack://my-webpack-project/./src/components/header.js?");

/***/ }),

/***/ "./src/components/onLoad.js":
/*!**********************************!*\
  !*** ./src/components/onLoad.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/components/header.js\");\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList */ \"./src/components/todoList.js\");\n\n\n\nvar onLoad = function onLoad() {\n  (0,_header__WEBPACK_IMPORTED_MODULE_0__.default)(\"TEST\", \"what are you waiting for?\");\n  (0,_todoList__WEBPACK_IMPORTED_MODULE_1__.createTodoList)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onLoad);\n\n//# sourceURL=webpack://my-webpack-project/./src/components/onLoad.js?");

/***/ }),

/***/ "./src/components/todoList.js":
/*!************************************!*\
  !*** ./src/components/todoList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTodoList\": () => /* binding */ createTodoList,\n/* harmony export */   \"populateTodoList\": () => /* binding */ populateTodoList\n/* harmony export */ });\n/* harmony import */ var _controllers_projectController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/projectController */ \"./src/controllers/projectController.js\");\n\nvar createTodoList = function createTodoList() {\n  var container = document.querySelector(\".container\");\n  var list = document.createElement(\"ul\");\n  list.classList.add(\"todoList\");\n  container.appendChild(list);\n};\nvar populateTodoList = function populateTodoList(projectTitle) {\n  var currProject = (0,_controllers_projectController__WEBPACK_IMPORTED_MODULE_0__.getOneProject)(projectTitle);\n  var list = document.querySelector(\".todoList\"); // list.innerHTML =\n\n  console.log(currProject);\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/todoList.js?");

/***/ }),

/***/ "./src/controllers/projectController.js":
/*!**********************************************!*\
  !*** ./src/controllers/projectController.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProjects\": () => /* binding */ getProjects,\n/* harmony export */   \"getProjectNames\": () => /* binding */ getProjectNames,\n/* harmony export */   \"setProjects\": () => /* binding */ setProjects,\n/* harmony export */   \"getOneProject\": () => /* binding */ getOneProject\n/* harmony export */ });\nvar getProjects = function getProjects() {\n  var data = JSON.parse(localStorage.getItem(\"projects\"));\n  return data;\n};\nvar getProjectNames = function getProjectNames() {\n  var projectTitles = [];\n  var data = JSON.parse(localStorage.getItem(\"projects\"));\n  data.forEach(function (p) {\n    return arr.push(p.projectTitle);\n  });\n  return projectTitles;\n};\nvar setProjects = function setProjects(newData) {\n  localStorage.setItem(\"projects\", JSON.stringify(newData));\n};\nvar getOneProject = function getOneProject(projectTitle) {\n  var data = JSON.parse(localStorage.getItem(\"projects\"));\n  var project = data.find(function (p) {\n    return p.projectTitle == projectTitle;\n  });\n  return project;\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/controllers/projectController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_onLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/onLoad */ \"./src/components/onLoad.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_todoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/todoList */ \"./src/components/todoList.js\");\n\n\n\n(0,_components_onLoad__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_components_todoList__WEBPACK_IMPORTED_MODULE_2__.populateTodoList)(\"stuff\");\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

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