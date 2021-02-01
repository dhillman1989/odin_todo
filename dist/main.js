/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _onLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onLoad */ \"./src/components/onLoad.js\");\n/* harmony import */ var _newProjectForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProjectForm */ \"./src/components/newProjectForm.js\");\n\n\n\nvar createHeader = function createHeader(pIndex, projects, currProject) {\n  var projectTitle = currProject.projectTitle,\n      tagline = currProject.tagline;\n  var container = document.querySelector(\".container\"); //dropdown\n\n  var projectDropdown = document.createElement(\"select\");\n  projectDropdown.innerHTML = projects.map(function (p, idx) {\n    return \"<option value=\".concat(idx, \">\").concat(p.projectTitle, \"</option>\");\n  });\n\n  projectDropdown.onchange = function (e) {\n    (0,_onLoad__WEBPACK_IMPORTED_MODULE_0__.default)(e.target.value);\n  };\n\n  projectDropdown.selectedIndex = pIndex; //add new project button\n\n  var newProjectButton = document.createElement(\"button\");\n  newProjectButton.id = \"newProjectButton\";\n  newProjectButton.innerText = \"+ New Project\"; //create header\n\n  var h1 = document.createElement(\"h1\");\n  h1.innerText = projectTitle;\n  var par = document.createElement(\"p\");\n  par.innerText = tagline; //add to DOM\n\n  container.appendChild(projectDropdown);\n  container.appendChild(h1);\n  container.appendChild(par);\n  container.appendChild(newProjectButton); //Add Event Listeners\n\n  document.querySelector(\"#newProjectButton\").addEventListener(\"click\", function () {\n    (0,_newProjectForm__WEBPACK_IMPORTED_MODULE_1__.default)();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);\n\n//# sourceURL=webpack://my-webpack-project/./src/components/header.js?");

/***/ }),

/***/ "./src/components/newProjectForm.js":
/*!******************************************!*\
  !*** ./src/components/newProjectForm.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _onLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onLoad */ \"./src/components/onLoad.js\");\n/* harmony import */ var _controllers_projectController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/projectController */ \"./src/controllers/projectController.js\");\n\n\n\nvar newProjectForm = function newProjectForm() {\n  var form = document.createElement(\"form\");\n  form.classList.add(\"popupform\");\n  form.innerHTML = \"<input id=\\\"addNewProject-title\\\" placeholder=\\\"Project Title\\\"><input id=\\\"addNewProject-tagline\\\" placeholder=\\\"Tag Line\\\">\\n  <button id=\\\"addNewProject-submit\\\">ADD PROJECT</button>\";\n  document.querySelector(\"body\").appendChild(form);\n  document.querySelector(\"#addNewProject-submit\").addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    var newIndex = (0,_controllers_projectController__WEBPACK_IMPORTED_MODULE_1__.addProject)(document.querySelector(\"#addNewProject-title\").value, document.querySelector(\"#addNewProject-tagline\").value);\n    document.querySelector(\".popupform\").remove();\n    (0,_onLoad__WEBPACK_IMPORTED_MODULE_0__.default)(newIndex);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newProjectForm);\n\n//# sourceURL=webpack://my-webpack-project/./src/components/newProjectForm.js?");

/***/ }),

/***/ "./src/components/newTodoForm.js":
/*!***************************************!*\
  !*** ./src/components/newTodoForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _onLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onLoad */ \"./src/components/onLoad.js\");\n/* harmony import */ var _controllers_projectController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/projectController */ \"./src/controllers/projectController.js\");\n\n\n\nvar newTodoForm = function newTodoForm(pIndex, currProject) {\n  var form = document.createElement(\"form\");\n  form.classList.add(\"popupform\");\n  form.innerHTML = \"\\n        <input id=\\\"addNewTodo-title\\\" placeholder=\\\"Task\\\">\\n        <input id=\\\"addNewTodo-desc\\\" placeholder=\\\"Extra details\\\">\\n        <input id=\\\"addNewTodo-duedate\\\" placeholder=\\\"due date\\\">\\n        <input id=\\\"addNewTodo-priority\\\" placeholder=\\\"priority\\\">\\n        <button id=\\\"addNewTodo-submit\\\">ADD TODO</button>\\n        \";\n  document.querySelector(\"body\").appendChild(form);\n  document.querySelector(\"#addNewTodo-submit\").addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    (0,_controllers_projectController__WEBPACK_IMPORTED_MODULE_1__.addTodo)(currProject.id, document.querySelector(\"#addNewTodo-title\").value, document.querySelector(\"#addNewTodo-desc\").value, document.querySelector(\"#addNewTodo-duedate\").value, document.querySelector(\"#addNewTodo-priority\").value);\n    document.querySelector(\".popupform\").remove();\n    (0,_onLoad__WEBPACK_IMPORTED_MODULE_0__.default)(pIndex);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newTodoForm);\n\n//# sourceURL=webpack://my-webpack-project/./src/components/newTodoForm.js?");

/***/ }),

/***/ "./src/components/onLoad.js":
/*!**********************************!*\
  !*** ./src/components/onLoad.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/components/header.js\");\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList */ \"./src/components/todoList.js\");\n/* harmony import */ var _controllers_projectController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/projectController */ \"./src/controllers/projectController.js\");\n\n\n\n\nvar onLoad = function onLoad(projectIndex) {\n  //clear container for initialisation\n  document.querySelector(\".container\").innerHTML = \"\"; //get data for the projects\n\n  var projects = (0,_controllers_projectController__WEBPACK_IMPORTED_MODULE_2__.getProjects)();\n  var index = projectIndex || 0;\n  var currProject = projects[index]; ///render page elements\n\n  (0,_header__WEBPACK_IMPORTED_MODULE_0__.default)(index, projects, currProject);\n  (0,_todoList__WEBPACK_IMPORTED_MODULE_1__.createTodoList)(index, currProject);\n  (0,_todoList__WEBPACK_IMPORTED_MODULE_1__.populateTodoList)(currProject);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onLoad);\n\n//# sourceURL=webpack://my-webpack-project/./src/components/onLoad.js?");

/***/ }),

/***/ "./src/components/todoList.js":
/*!************************************!*\
  !*** ./src/components/todoList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTodoList\": () => /* binding */ createTodoList,\n/* harmony export */   \"populateTodoList\": () => /* binding */ populateTodoList\n/* harmony export */ });\n/* harmony import */ var _onLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onLoad */ \"./src/components/onLoad.js\");\n/* harmony import */ var _newTodoForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newTodoForm */ \"./src/components/newTodoForm.js\");\n/* harmony import */ var _controllers_projectController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/projectController */ \"./src/controllers/projectController.js\");\n\n\n\nvar createTodoList = function createTodoList(pIndex, currProject) {\n  var container = document.querySelector(\".container\"); //INPUT TO ADD NEW TODOS\n\n  var addNewTodoButton = document.createElement(\"button\");\n  addNewTodoButton.innerHTML = \"Add Todo\";\n  addNewTodoButton.id = \"addNewTodoButton\";\n  var list = document.createElement(\"ul\");\n  list.classList.add(\"todoList\");\n  container.appendChild(addNewTodoButton);\n\n  addNewTodoButton.onclick = function (e) {\n    e.preventDefault();\n    (0,_newTodoForm__WEBPACK_IMPORTED_MODULE_1__.default)(pIndex, currProject);\n  };\n\n  container.appendChild(list);\n};\nvar populateTodoList = function populateTodoList(currProject) {\n  var project = (0,_controllers_projectController__WEBPACK_IMPORTED_MODULE_2__.getOneProject)(currProject);\n  var list = document.querySelector(\".todoList\");\n  list.innerHTML = !project || !project.todos ? \"<h4>Nothing to see here yet!</h4>\" : project.todos.map(function (todo) {\n    return \"\\n    <li class=\\\"todoList__todo\\\">\\n      <input type=\\\"checkbox\\\"/>\\n      <div class=\\\"todoList__text\\\">\\n        <h4>\".concat(todo.title, \"</h4>\\n        <p>\").concat(todo.desc, \"</p>\\n      </div>\\n      <div class= \\\"todoList__controls\\\">\\n        <i class=\\\"fas fa-pencil-alt\\\" data-todoid=\").concat(todo.id, \"></i>\\n        <i class=\\\"fas fa-minus-circle\\\" data-todoid=\").concat(todo.id, \"></i>\\n      </div>\\n      \\n    </li>\\n    \");\n  }).join(\"\");\n  var deleteButtons = document.querySelectorAll(\".fa-minus-circle\");\n  deleteButtons.forEach(function (btn) {\n    return btn.addEventListener(\"click\", function (e) {\n      confirm(\"ARE YOU SURE? THIS CANT BE UNDONE\") && (0,_controllers_projectController__WEBPACK_IMPORTED_MODULE_2__.deleteTodo)(project.id.toString(), e.target.dataset.todoid.toString());\n      populateTodoList(currProject);\n    });\n  });\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/todoList.js?");

/***/ }),

/***/ "./src/controllers/projectController.js":
/*!**********************************************!*\
  !*** ./src/controllers/projectController.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeProjectIndex\": () => /* binding */ changeProjectIndex,\n/* harmony export */   \"addProject\": () => /* binding */ addProject,\n/* harmony export */   \"getProjects\": () => /* binding */ getProjects,\n/* harmony export */   \"deleteProjects\": () => /* binding */ deleteProjects,\n/* harmony export */   \"getOneProject\": () => /* binding */ getOneProject,\n/* harmony export */   \"addTodo\": () => /* binding */ addTodo,\n/* harmony export */   \"deleteTodo\": () => /* binding */ deleteTodo\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"../../node_modules/uuid/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nvar changeProjectIndex = function changeProjectIndex(projectId) {\n  var data = localStorage.getItem(\"projects\");\n  var index = data.findIndex(function (p) {\n    return p.id == projectId;\n  });\n  return index;\n};\nvar addProject = function addProject(projectTitle, tagline) {\n  var data = JSON.parse(localStorage.getItem(\"projects\")) || [];\n  var newProject = {\n    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),\n    projectTitle: projectTitle,\n    tagline: tagline,\n    todos: []\n  };\n  var newData = [].concat(_toConsumableArray(data), [newProject]);\n  localStorage.setItem(\"projects\", JSON.stringify(newData));\n  return JSON.parse(localStorage.getItem(\"projects\")).length - 1;\n};\nvar getProjects = function getProjects() {\n  var data = JSON.parse(localStorage.getItem(\"projects\")) || [];\n  return data;\n};\nvar deleteProjects = function deleteProjects() {};\nvar getOneProject = function getOneProject(currProject) {\n  var data = JSON.parse(localStorage.getItem(\"projects\")) || [];\n  var project = data.find(function (p) {\n    return p.id == currProject.id;\n  });\n  return project;\n}; //ALTER TODOS\n\nvar addTodo = function addTodo(projectId, todoTitle, desc, duedate, priority) {\n  var data = JSON.parse(localStorage.getItem(\"projects\")) || [];\n  var index = data.findIndex(function (p) {\n    return p.id == projectId;\n  });\n  var todo = {\n    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),\n    title: todoTitle,\n    desc: desc,\n    completed: false,\n    duedate: duedate,\n    priority: priority\n  };\n  var newTodos = [].concat(_toConsumableArray(data[index].todos), [todo]);\n  data.splice(index, 1, _objectSpread(_objectSpread({}, data[index]), {}, {\n    todos: _toConsumableArray(newTodos)\n  }));\n  localStorage.setItem(\"projects\", JSON.stringify(data));\n};\nvar deleteTodo = function deleteTodo(projectId, todoId) {\n  var data = JSON.parse(localStorage.getItem(\"projects\")) || [];\n  var pIndex = data.findIndex(function (p) {\n    return p.id == projectId;\n  });\n\n  var newTodos = _toConsumableArray(data[pIndex].todos.filter(function (t) {\n    return t.id != todoId;\n  }));\n\n  data.splice(pIndex, 1, _objectSpread(_objectSpread({}, data[pIndex]), {}, {\n    todos: _toConsumableArray(newTodos)\n  }));\n  localStorage.setItem(\"projects\", JSON.stringify(data));\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/controllers/projectController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_onLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/onLoad */ \"./src/components/onLoad.js\");\n\n(0,_components_onLoad__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "../../node_modules/uuid/index.js":
/*!****************************************!*\
  !*** ../../node_modules/uuid/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var v1 = __webpack_require__(/*! ./v1 */ \"../../node_modules/uuid/v1.js\");\nvar v4 = __webpack_require__(/*! ./v4 */ \"../../node_modules/uuid/v4.js\");\n\nvar uuid = v4;\nuuid.v1 = v1;\nuuid.v4 = v4;\n\nmodule.exports = uuid;\n\n\n//# sourceURL=webpack://my-webpack-project/../../node_modules/uuid/index.js?");

/***/ }),

/***/ "../../node_modules/uuid/lib/bytesToUuid.js":
/*!**************************************************!*\
  !*** ../../node_modules/uuid/lib/bytesToUuid.js ***!
  \**************************************************/
/***/ ((module) => {

eval("/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\nvar byteToHex = [];\nfor (var i = 0; i < 256; ++i) {\n  byteToHex[i] = (i + 0x100).toString(16).substr(1);\n}\n\nfunction bytesToUuid(buf, offset) {\n  var i = offset || 0;\n  var bth = byteToHex;\n  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4\n  return ([\n    bth[buf[i++]], bth[buf[i++]],\n    bth[buf[i++]], bth[buf[i++]], '-',\n    bth[buf[i++]], bth[buf[i++]], '-',\n    bth[buf[i++]], bth[buf[i++]], '-',\n    bth[buf[i++]], bth[buf[i++]], '-',\n    bth[buf[i++]], bth[buf[i++]],\n    bth[buf[i++]], bth[buf[i++]],\n    bth[buf[i++]], bth[buf[i++]]\n  ]).join('');\n}\n\nmodule.exports = bytesToUuid;\n\n\n//# sourceURL=webpack://my-webpack-project/../../node_modules/uuid/lib/bytesToUuid.js?");

/***/ }),

/***/ "../../node_modules/uuid/lib/rng-browser.js":
/*!**************************************************!*\
  !*** ../../node_modules/uuid/lib/rng-browser.js ***!
  \**************************************************/
/***/ ((module) => {

eval("// Unique ID creation requires a high quality random # generator.  In the\n// browser this is a little complicated due to unknown quality of Math.random()\n// and inconsistent support for the `crypto` API.  We do the best we can via\n// feature-detection\n\n// getRandomValues needs to be invoked in a context where \"this\" is a Crypto\n// implementation. Also, find the complete implementation of crypto on IE11.\nvar getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||\n                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));\n\nif (getRandomValues) {\n  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto\n  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef\n\n  module.exports = function whatwgRNG() {\n    getRandomValues(rnds8);\n    return rnds8;\n  };\n} else {\n  // Math.random()-based (RNG)\n  //\n  // If all else fails, use Math.random().  It's fast, but is of unspecified\n  // quality.\n  var rnds = new Array(16);\n\n  module.exports = function mathRNG() {\n    for (var i = 0, r; i < 16; i++) {\n      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;\n      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;\n    }\n\n    return rnds;\n  };\n}\n\n\n//# sourceURL=webpack://my-webpack-project/../../node_modules/uuid/lib/rng-browser.js?");

/***/ }),

/***/ "../../node_modules/uuid/v1.js":
/*!*************************************!*\
  !*** ../../node_modules/uuid/v1.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var rng = __webpack_require__(/*! ./lib/rng */ \"../../node_modules/uuid/lib/rng-browser.js\");\nvar bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ \"../../node_modules/uuid/lib/bytesToUuid.js\");\n\n// **`v1()` - Generate time-based UUID**\n//\n// Inspired by https://github.com/LiosK/UUID.js\n// and http://docs.python.org/library/uuid.html\n\nvar _nodeId;\nvar _clockseq;\n\n// Previous uuid creation time\nvar _lastMSecs = 0;\nvar _lastNSecs = 0;\n\n// See https://github.com/uuidjs/uuid for API details\nfunction v1(options, buf, offset) {\n  var i = buf && offset || 0;\n  var b = buf || [];\n\n  options = options || {};\n  var node = options.node || _nodeId;\n  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;\n\n  // node and clockseq need to be initialized to random values if they're not\n  // specified.  We do this lazily to minimize issues related to insufficient\n  // system entropy.  See #189\n  if (node == null || clockseq == null) {\n    var seedBytes = rng();\n    if (node == null) {\n      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)\n      node = _nodeId = [\n        seedBytes[0] | 0x01,\n        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]\n      ];\n    }\n    if (clockseq == null) {\n      // Per 4.2.2, randomize (14 bit) clockseq\n      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;\n    }\n  }\n\n  // UUID timestamps are 100 nano-second units since the Gregorian epoch,\n  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so\n  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'\n  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.\n  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();\n\n  // Per 4.2.1.2, use count of uuid's generated during the current clock\n  // cycle to simulate higher resolution clock\n  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;\n\n  // Time since last uuid creation (in msecs)\n  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;\n\n  // Per 4.2.1.2, Bump clockseq on clock regression\n  if (dt < 0 && options.clockseq === undefined) {\n    clockseq = clockseq + 1 & 0x3fff;\n  }\n\n  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new\n  // time interval\n  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {\n    nsecs = 0;\n  }\n\n  // Per 4.2.1.2 Throw error if too many uuids are requested\n  if (nsecs >= 10000) {\n    throw new Error('uuid.v1(): Can\\'t create more than 10M uuids/sec');\n  }\n\n  _lastMSecs = msecs;\n  _lastNSecs = nsecs;\n  _clockseq = clockseq;\n\n  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch\n  msecs += 12219292800000;\n\n  // `time_low`\n  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;\n  b[i++] = tl >>> 24 & 0xff;\n  b[i++] = tl >>> 16 & 0xff;\n  b[i++] = tl >>> 8 & 0xff;\n  b[i++] = tl & 0xff;\n\n  // `time_mid`\n  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;\n  b[i++] = tmh >>> 8 & 0xff;\n  b[i++] = tmh & 0xff;\n\n  // `time_high_and_version`\n  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version\n  b[i++] = tmh >>> 16 & 0xff;\n\n  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)\n  b[i++] = clockseq >>> 8 | 0x80;\n\n  // `clock_seq_low`\n  b[i++] = clockseq & 0xff;\n\n  // `node`\n  for (var n = 0; n < 6; ++n) {\n    b[i + n] = node[n];\n  }\n\n  return buf ? buf : bytesToUuid(b);\n}\n\nmodule.exports = v1;\n\n\n//# sourceURL=webpack://my-webpack-project/../../node_modules/uuid/v1.js?");

/***/ }),

/***/ "../../node_modules/uuid/v4.js":
/*!*************************************!*\
  !*** ../../node_modules/uuid/v4.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var rng = __webpack_require__(/*! ./lib/rng */ \"../../node_modules/uuid/lib/rng-browser.js\");\nvar bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ \"../../node_modules/uuid/lib/bytesToUuid.js\");\n\nfunction v4(options, buf, offset) {\n  var i = buf && offset || 0;\n\n  if (typeof(options) == 'string') {\n    buf = options === 'binary' ? new Array(16) : null;\n    options = null;\n  }\n  options = options || {};\n\n  var rnds = options.random || (options.rng || rng)();\n\n  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n  rnds[6] = (rnds[6] & 0x0f) | 0x40;\n  rnds[8] = (rnds[8] & 0x3f) | 0x80;\n\n  // Copy bytes to buffer, if provided\n  if (buf) {\n    for (var ii = 0; ii < 16; ++ii) {\n      buf[i + ii] = rnds[ii];\n    }\n  }\n\n  return buf || bytesToUuid(rnds);\n}\n\nmodule.exports = v4;\n\n\n//# sourceURL=webpack://my-webpack-project/../../node_modules/uuid/v4.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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