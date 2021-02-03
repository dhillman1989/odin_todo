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

/***/ "./src/components/editProjectForm.js":
/*!*******************************************!*\
  !*** ./src/components/editProjectForm.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _onLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onLoad */ \"./src/components/onLoad.js\");\n/* harmony import */ var _controllers_projectController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/projectController */ \"./src/controllers/projectController.js\");\n\n\n\nvar editProjectForm = function editProjectForm(pIndex, currProject) {\n  //remove any existing popupforms (if any)\n  document.querySelector(\".popupform\") && document.querySelector(\".popupform\").remove();\n  var form = document.createElement(\"form\");\n  form.classList.add(\"popupform\");\n  form.classList.add(\"editproject-form\");\n  form.innerHTML = \"\\n  <div class=\\\"close-popup\\\">X</div>\\n  <h2>EDIT \".concat(currProject.projectTitle, \"</h2>\\n  <input id=\\\"editProject-title\\\" value=\\\"\").concat(currProject.projectTitle, \"\\\" required>\\n  <input id=\\\"editProject-tagline\\\" value=\\\"\").concat(currProject.tagline, \"\\\" required>\\n  <button id=\\\"editProject-submit\\\" class=\\\"button--secondary\\\">UPDATE PROJECT</button>\\n  \");\n  document.querySelector(\"body\").appendChild(form);\n  document.querySelector(\"#editProject-submit\").addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    (0,_controllers_projectController__WEBPACK_IMPORTED_MODULE_1__.editProject)(currProject.id, document.querySelector(\"#editProject-title\").value, document.querySelector(\"#editProject-tagline\").value);\n    document.querySelector(\".popupform\").remove();\n    (0,_onLoad__WEBPACK_IMPORTED_MODULE_0__.default)(pIndex);\n  });\n  document.querySelector(\".close-popup\").addEventListener(\"click\", function () {\n    return document.querySelector(\".popupform\").remove();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editProjectForm);\n\n//# sourceURL=webpack://my-webpack-project/./src/components/editProjectForm.js?");

/***/ }),

/***/ "./src/components/editTodoForm.js":
/*!****************************************!*\
  !*** ./src/components/editTodoForm.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _onLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onLoad */ \"./src/components/onLoad.js\");\n/* harmony import */ var _controllers_projectController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/projectController */ \"./src/controllers/projectController.js\");\n\n\n\nvar editTodoForm = function editTodoForm(pIndex, currProject, todo) {\n  //remove any existing popupforms (if any)\n  document.querySelector(\".popupform\") && document.querySelector(\".popupform\").remove();\n  var form = document.createElement(\"form\");\n  form.classList.add(\"popupform\");\n  form.classList.add(\"newtodo-form\");\n  form.innerHTML = \"\\n  <div class=\\\"close-popup\\\">X</div>\\n  <h2>Edit Todo</h2>\\n        <input id=\\\"editTodo-title\\\" placeholder=\\\"Task\\\" value=\\\"\".concat(todo.title, \"\\\" required>\\n        <input id=\\\"editTodo-desc\\\" placeholder=\\\"Extra details\\\" value=\\\"\").concat(todo.desc, \"\\\">\\n        <input type=\\\"date\\\" value=\\\"\").concat(todo.duedate, \"\\\" id=\\\"editTodo-duedate\\\" >\\n        <select id=\\\"editTodo-priority\\\">\\n          <option \").concat(todo.priority == 3 && \"selected\", \" value=\\\"3\\\">High priority</option>\\n          <option \").concat(todo.priority == 2 && \"selected\", \" value=\\\"2\\\">Medium priority</option>\\n          <option \").concat(todo.priority == 1 && \"selected\", \" value=\\\"1\\\">Low Priority</option>\\n          <option \").concat(todo.priority == 0 && \"selected\", \" value=\\\"0\\\">no priority</option>\\n          </select>\\n        <button id=\\\"editTodo-submit\\\" class=\\\"button--secondary\\\">ADD TODO</button>\\n        \");\n  document.querySelector(\"body\").appendChild(form);\n  document.querySelector(\"#editTodo-submit\").addEventListener(\"click\", function (e) {\n    if (document.querySelector(\"#editTodo-title\").value != \"\") {\n      e.preventDefault();\n      (0,_controllers_projectController__WEBPACK_IMPORTED_MODULE_1__.editTodo)(currProject.id, todo.id, document.querySelector(\"#editTodo-title\").value, document.querySelector(\"#editTodo-desc\").value, document.querySelector(\"#editTodo-duedate\").value, document.querySelector(\"#editTodo-priority\").value);\n      document.querySelector(\".popupform\").remove();\n      (0,_onLoad__WEBPACK_IMPORTED_MODULE_0__.default)(pIndex);\n    }\n  });\n  document.querySelector(\".close-popup\").addEventListener(\"click\", function () {\n    return document.querySelector(\".popupform\").remove();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTodoForm);\n\n//# sourceURL=webpack://my-webpack-project/./src/components/editTodoForm.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _onLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onLoad */ \"./src/components/onLoad.js\");\n/* harmony import */ var _newProjectForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProjectForm */ \"./src/components/newProjectForm.js\");\n/* harmony import */ var _editProjectForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editProjectForm */ \"./src/components/editProjectForm.js\");\n/* harmony import */ var _controllers_projectController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/projectController */ \"./src/controllers/projectController.js\");\n\n\n\n\n\nvar createHeader = function createHeader(pIndex, projects, currProject) {\n  var projectTitle = currProject.projectTitle,\n      tagline = currProject.tagline;\n  var container = document.querySelector(\".container\"); //dropdown\n\n  var projectDropdown = document.createElement(\"select\");\n  projectDropdown.innerHTML = projects.map(function (p, idx) {\n    return \"<option value=\".concat(idx, \">\").concat(p.projectTitle, \"</option>\");\n  });\n\n  projectDropdown.onchange = function (e) {\n    (0,_onLoad__WEBPACK_IMPORTED_MODULE_0__.default)(e.target.value);\n  };\n\n  projectDropdown.selectedIndex = pIndex; //add new project button\n  //create header\n\n  var h1 = document.createElement(\"h1\");\n  h1.innerText = projectTitle;\n  var par = document.createElement(\"p\");\n  par.innerText = tagline; ///edit & delete buttons\n\n  var controls = document.createElement(\"div\");\n  controls.classList.add(\"projectControls\");\n  controls.innerHTML = \"<button id='newProjectButton' class='button--textonly'>Create New Project</button> \\n    <button class='project-edit button--textonly'>Edit</button>\\n    <button class='button-delete button--textonly button--textdanger'>Delete Project</button>\"; //add to DOM\n\n  container.appendChild(projectDropdown);\n  container.appendChild(controls);\n  container.appendChild(h1);\n  container.appendChild(par); //Add Event Listeners\n\n  document.querySelector(\"#newProjectButton\").addEventListener(\"click\", function () {\n    (0,_newProjectForm__WEBPACK_IMPORTED_MODULE_1__.default)();\n  });\n  document.querySelector(\".button-delete\").addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    confirm(\"Are you sure you want to delete \\\"\".concat(currProject.projectTitle, \"\\\"? This cannot be undone.\"));\n    (0,_controllers_projectController__WEBPACK_IMPORTED_MODULE_3__.deleteProject)(currProject.id);\n    (0,_onLoad__WEBPACK_IMPORTED_MODULE_0__.default)();\n  });\n  document.querySelector(\".project-edit\").addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    (0,_editProjectForm__WEBPACK_IMPORTED_MODULE_2__.default)(pIndex, currProject);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);\n\n//# sourceURL=webpack://my-webpack-project/./src/components/header.js?");

/***/ }),

/***/ "./src/components/newProjectForm.js":
/*!******************************************!*\
  !*** ./src/components/newProjectForm.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _onLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onLoad */ \"./src/components/onLoad.js\");\n/* harmony import */ var _controllers_projectController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/projectController */ \"./src/controllers/projectController.js\");\n\n\n\nvar newProjectForm = function newProjectForm() {\n  //remove any existing popupforms (if any)\n  document.querySelector(\".popupform\") && document.querySelector(\".popupform\").remove();\n  var form = document.createElement(\"form\");\n  form.classList.add(\"popupform\");\n  form.classList.add(\"newproject-form\");\n  form.innerHTML = \"\\n  <div class=\\\"close-popup\\\">X</div>\\n  <h2>NEW PROJECT</h2>\\n  <input id=\\\"addNewProject-title\\\" placeholder=\\\"Project Title\\\" required>\\n  <input id=\\\"addNewProject-tagline\\\" placeholder=\\\"Tag Line\\\" required>\\n  <button id=\\\"addNewProject-submit\\\" class=\\\"button--secondary\\\">ADD PROJECT</button>\\n  \";\n  document.querySelector(\"body\").appendChild(form);\n  document.querySelector(\"#addNewProject-submit\").addEventListener(\"click\", function (e) {\n    e.preventDefault();\n\n    if (document.querySelector(\"#addNewProject-title\").value != \"\" && document.querySelector(\"#addNewProject-tagline\").value != \"\") {\n      var newIndex = (0,_controllers_projectController__WEBPACK_IMPORTED_MODULE_1__.addProject)(document.querySelector(\"#addNewProject-title\").value, document.querySelector(\"#addNewProject-tagline\").value);\n      document.querySelector(\".popupform\").remove();\n      (0,_onLoad__WEBPACK_IMPORTED_MODULE_0__.default)(newIndex);\n    }\n  });\n  document.querySelector(\".close-popup\").addEventListener(\"click\", function () {\n    return document.querySelector(\".popupform\").remove();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newProjectForm);\n\n//# sourceURL=webpack://my-webpack-project/./src/components/newProjectForm.js?");

/***/ }),

/***/ "./src/components/newTodoForm.js":
/*!***************************************!*\
  !*** ./src/components/newTodoForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _onLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onLoad */ \"./src/components/onLoad.js\");\n/* harmony import */ var _controllers_projectController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/projectController */ \"./src/controllers/projectController.js\");\n\n\n\nvar newTodoForm = function newTodoForm(pIndex, currProject) {\n  //remove any existing popupforms (if any)\n  document.querySelector(\".popupform\") && document.querySelector(\".popupform\").remove();\n  var form = document.createElement(\"form\");\n  form.classList.add(\"popupform\");\n  form.classList.add(\"newtodo-form\");\n  form.innerHTML = \"\\n  <div class=\\\"close-popup\\\">X</div>\\n  <h2>Add a new Todo</h2>\\n        <input id=\\\"addNewTodo-title\\\" placeholder=\\\"Task\\\" required>\\n        <input id=\\\"addNewTodo-desc\\\" placeholder=\\\"Extra details\\\">\\n        <input type=\\\"date\\\" id=\\\"addNewTodo-duedate\\\" >\\n        <select id=\\\"addNewTodo-priority\\\">\\n          <option value=\\\"3\\\">High priority</option>\\n          <option value=\\\"2\\\">Medium priority</option>\\n          <option value=\\\"1\\\">Low Priority</option>\\n          <option selected=\\\"selected\\\" value=\\\"0\\\">no priority</option>\\n          </select>\\n        <button id=\\\"addNewTodo-submit\\\" class=\\\"button--secondary\\\">ADD TODO</button>\\n        \";\n  document.querySelector(\"body\").appendChild(form);\n  document.querySelector(\"#addNewTodo-submit\").addEventListener(\"click\", function (e) {\n    if (document.querySelector(\"#addNewTodo-title\").value != \"\") {\n      e.preventDefault();\n      (0,_controllers_projectController__WEBPACK_IMPORTED_MODULE_1__.addTodo)(currProject.id, document.querySelector(\"#addNewTodo-title\").value, document.querySelector(\"#addNewTodo-desc\").value, document.querySelector(\"#addNewTodo-duedate\").value, document.querySelector(\"#addNewTodo-priority\").value);\n      document.querySelector(\".popupform\").remove();\n      (0,_onLoad__WEBPACK_IMPORTED_MODULE_0__.default)(pIndex);\n    }\n  });\n  document.querySelector(\".close-popup\").addEventListener(\"click\", function () {\n    return document.querySelector(\".popupform\").remove();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newTodoForm);\n\n//# sourceURL=webpack://my-webpack-project/./src/components/newTodoForm.js?");

/***/ }),

/***/ "./src/components/onLoad.js":
/*!**********************************!*\
  !*** ./src/components/onLoad.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/components/header.js\");\n/* harmony import */ var _projectsEmptyState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectsEmptyState */ \"./src/components/projectsEmptyState.js\");\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoList */ \"./src/components/todoList.js\");\n/* harmony import */ var _controllers_projectController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/projectController */ \"./src/controllers/projectController.js\");\n\n\n\n\n\nvar onLoad = function onLoad(projectIndex) {\n  //clear container for initialisation\n  document.querySelector(\".container\").innerHTML = \"\"; //get data for the projects\n\n  var projects = (0,_controllers_projectController__WEBPACK_IMPORTED_MODULE_3__.getProjects)();\n\n  if (projects.length > 0) {\n    var index = projectIndex || 0;\n    var currProject = projects[index]; ///render page elements\n\n    (0,_header__WEBPACK_IMPORTED_MODULE_0__.default)(index, projects, currProject);\n    (0,_todoList__WEBPACK_IMPORTED_MODULE_2__.createTodoList)(index, currProject);\n    (0,_todoList__WEBPACK_IMPORTED_MODULE_2__.populateTodoList)(index, currProject);\n  } else {\n    ///IF NO PROJECTS IN STORAGE\n    (0,_projectsEmptyState__WEBPACK_IMPORTED_MODULE_1__.projectsEmptyState)();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onLoad);\n\n//# sourceURL=webpack://my-webpack-project/./src/components/onLoad.js?");

/***/ }),

/***/ "./src/components/projectsEmptyState.js":
/*!**********************************************!*\
  !*** ./src/components/projectsEmptyState.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectsEmptyState\": () => /* binding */ projectsEmptyState\n/* harmony export */ });\n/* harmony import */ var _newProjectForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProjectForm */ \"./src/components/newProjectForm.js\");\n\nvar projectsEmptyState = function projectsEmptyState() {\n  var container = document.querySelector(\".container\");\n  var emptyState = document.createElement(\"div\");\n  emptyState.classList.add(\"emptyState\");\n  emptyState.innerHTML = \"\\n  <img class=\\\"emptyState__image\\\" src=\\\"./images/nodata.svg\\\"><h2>Nothing here yet!</h2>\\n    <p>Try adding a new project...<p>\\n    <button class=\\\"newProjectButton button--primary\\\"> + NEW PROJECT</button>\";\n  container.appendChild(emptyState);\n  document.querySelector(\".newProjectButton\").addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    (0,_newProjectForm__WEBPACK_IMPORTED_MODULE_0__.default)();\n  });\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/projectsEmptyState.js?");

/***/ }),

/***/ "./src/components/todoList.js":
/*!************************************!*\
  !*** ./src/components/todoList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTodoList\": () => /* binding */ createTodoList,\n/* harmony export */   \"populateTodoList\": () => /* binding */ populateTodoList\n/* harmony export */ });\n/* harmony import */ var _onLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onLoad */ \"./src/components/onLoad.js\");\n/* harmony import */ var _newTodoForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newTodoForm */ \"./src/components/newTodoForm.js\");\n/* harmony import */ var _editTodoForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editTodoForm */ \"./src/components/editTodoForm.js\");\n/* harmony import */ var _controllers_projectController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/projectController */ \"./src/controllers/projectController.js\");\n\n\n\n\nvar createTodoList = function createTodoList(pIndex, currProject) {\n  var container = document.querySelector(\".container\"); //INPUT TO ADD NEW TODOS\n\n  var addNewTodoButton = document.createElement(\"button\");\n  addNewTodoButton.classList.add(\"button--primary\");\n  addNewTodoButton.innerHTML = \"Add Todo\";\n  addNewTodoButton.id = \"addNewTodoButton\";\n  var list = document.createElement(\"ul\");\n  list.classList.add(\"todoList\");\n  container.appendChild(addNewTodoButton);\n\n  addNewTodoButton.onclick = function (e) {\n    e.preventDefault();\n    (0,_newTodoForm__WEBPACK_IMPORTED_MODULE_1__.default)(pIndex, currProject);\n  };\n\n  container.appendChild(list);\n};\nvar populateTodoList = function populateTodoList(pIndex, currProject) {\n  var project = (0,_controllers_projectController__WEBPACK_IMPORTED_MODULE_3__.getOneProject)(currProject);\n  var list = document.querySelector(\".todoList\");\n  list.innerHTML = !project || !project.todos.length ? \"<div class=\\\"emptyState\\\"><img src=\\\"./images/notodos.svg\\\" class=\\\"emptyState__image\\\"><h4>Nothing to see here yet!</h4></div>\" : project.todos.map(function (todo) {\n    return \"\\n    <li class=\\\"todoList__todo priority-\".concat(todo.priority, \"\\\">\\n      <input class=\\\"item-checkbox\\\" data-id=\").concat(todo.id, \" type=\\\"checkbox\\\" \").concat(todo.completed && \"checked\", \"/>\\n      <div class=\\\"todoList__text\\\">\\n        <h4>\").concat(todo.title, \"</h4>\\n        <p>\").concat(todo.desc, \"</p>\\n      </div>\\n      <div class=\\\"todoList__duedate\\\">\").concat(todo.duedate, \"</div>\\n      <div class= \\\"todoList__controls\\\">\\n        <i class=\\\"fas fa-pencil-alt\\\" data-todotitle=\\\"\").concat(todo.title, \"\\\"\\n        data-tododesc=\\\"\").concat(todo.desc, \"\\\"\\n        data-tododuedate=\\\"\").concat(todo.duedate, \"\\\"\\n        data-todopriority=\\\"\").concat(todo.priority, \"\\\"\\n        data-todoid =\\\"\").concat(todo.id, \"\\\"></i>\\n        <i class=\\\"fas fa-minus-circle\\\" data-todoid=\\\"\").concat(todo.id, \"\\\"></i>\\n      </div>\\n      \\n    </li>\\n    \");\n  }).join(\"\"); ///EDIT CONTROLS\n\n  var editButtons = document.querySelectorAll(\".fa-pencil-alt\");\n  editButtons.forEach(function (btn) {\n    return btn.addEventListener(\"click\", function (e) {\n      (0,_editTodoForm__WEBPACK_IMPORTED_MODULE_2__.default)(pIndex, currProject, {\n        title: e.target.dataset.todotitle,\n        desc: e.target.dataset.tododesc,\n        duedate: e.target.dataset.tododuedate,\n        priority: e.target.dataset.todopriority,\n        id: e.target.dataset.todoid\n      });\n    });\n  }); ///DELETE CONTROLS\n\n  var deleteButtons = document.querySelectorAll(\".fa-minus-circle\");\n  deleteButtons.forEach(function (btn) {\n    return btn.addEventListener(\"click\", function (e) {\n      confirm(\"ARE YOU SURE? THIS CANT BE UNDONE\") && (0,_controllers_projectController__WEBPACK_IMPORTED_MODULE_3__.deleteTodo)(project.id.toString(), e.target.dataset.todoid.toString());\n      populateTodoList(currProject);\n    });\n  }); ///TOGGLE CHECKBOX\n\n  var checkboxes = document.querySelectorAll(\".item-checkbox\");\n  checkboxes.forEach(function (cbox) {\n    cbox.addEventListener(\"click\", function (e) {\n      (0,_controllers_projectController__WEBPACK_IMPORTED_MODULE_3__.toggleTodoStatus)(currProject.id, e.target.dataset.id);\n    });\n  });\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/todoList.js?");

/***/ }),

/***/ "./src/controllers/projectController.js":
/*!**********************************************!*\
  !*** ./src/controllers/projectController.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDefaultProject\": () => /* binding */ createDefaultProject,\n/* harmony export */   \"changeProjectIndex\": () => /* binding */ changeProjectIndex,\n/* harmony export */   \"addProject\": () => /* binding */ addProject,\n/* harmony export */   \"getProjects\": () => /* binding */ getProjects,\n/* harmony export */   \"editProject\": () => /* binding */ editProject,\n/* harmony export */   \"deleteProject\": () => /* binding */ deleteProject,\n/* harmony export */   \"getOneProject\": () => /* binding */ getOneProject,\n/* harmony export */   \"addTodo\": () => /* binding */ addTodo,\n/* harmony export */   \"deleteTodo\": () => /* binding */ deleteTodo,\n/* harmony export */   \"toggleTodoStatus\": () => /* binding */ toggleTodoStatus,\n/* harmony export */   \"editTodo\": () => /* binding */ editTodo\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n //CREATE A DEFAULT PROJECT TO DISPLAY IF THERE IS NOTHING IN LOCAL STORAGE\n\nvar createDefaultProject = function createDefaultProject() {\n  var newProject = {\n    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.default)(),\n    projectTitle: \"Example Project\",\n    tagline: \"feel free to edit or delete me\",\n    todos: [{\n      id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.default)(),\n      title: \"delete me\",\n      desc: \"or edit, your choice\",\n      duedate: \"n/a\",\n      priority: \"high\",\n      completed: true\n    }]\n  };\n  var newData = [newProject];\n  localStorage.setItem(\"projects\", JSON.stringify(newData));\n  return JSON.parse(localStorage.getItem(\"projects\")).length - 1;\n};\nvar changeProjectIndex = function changeProjectIndex(projectId) {\n  var data = localStorage.getItem(\"projects\");\n  var index = data.findIndex(function (p) {\n    return p.id == projectId;\n  });\n  return index;\n};\nvar addProject = function addProject(projectTitle, tagline) {\n  var data = JSON.parse(localStorage.getItem(\"projects\")) || [];\n  var newProject = {\n    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.default)(),\n    projectTitle: projectTitle,\n    tagline: tagline,\n    todos: []\n  };\n  var newData = [].concat(_toConsumableArray(data), [newProject]);\n  localStorage.setItem(\"projects\", JSON.stringify(newData));\n  return JSON.parse(localStorage.getItem(\"projects\")).length - 1;\n};\nvar getProjects = function getProjects() {\n  var data = JSON.parse(localStorage.getItem(\"projects\"));\n\n  if (!data) {\n    createDefaultProject();\n    var newData = JSON.parse(localStorage.getItem(\"projects\"));\n    return newData;\n  }\n\n  return data;\n};\nvar editProject = function editProject(projectId, newTitle, newTagline) {\n  var data = JSON.parse(localStorage.getItem(\"projects\"));\n  var index = data.findIndex(function (p) {\n    return p.id == projectId;\n  });\n  data[index] = _objectSpread(_objectSpread({}, data[index]), {}, {\n    projectTitle: newTitle,\n    tagline: newTagline\n  });\n  localStorage.setItem(\"projects\", JSON.stringify(data));\n};\nvar deleteProject = function deleteProject(projectId) {\n  var data = JSON.parse(localStorage.getItem(\"projects\"));\n  var newData = data.filter(function (p) {\n    return p.id != projectId;\n  });\n  localStorage.setItem(\"projects\", JSON.stringify(newData));\n};\nvar getOneProject = function getOneProject(currProject) {\n  var data = JSON.parse(localStorage.getItem(\"projects\")) || [];\n  var project = data.find(function (p) {\n    return p.id == currProject.id;\n  });\n  return project;\n}; //ALTER TODOS\n\nvar addTodo = function addTodo(projectId, todoTitle, desc, duedate, priority) {\n  var data = JSON.parse(localStorage.getItem(\"projects\")) || [];\n  var index = data.findIndex(function (p) {\n    return p.id == projectId;\n  });\n  var todo = {\n    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.default)(),\n    title: todoTitle,\n    desc: desc,\n    completed: false,\n    duedate: duedate,\n    priority: priority\n  };\n  var newTodos = [].concat(_toConsumableArray(data[index].todos), [todo]);\n  data.splice(index, 1, _objectSpread(_objectSpread({}, data[index]), {}, {\n    todos: _toConsumableArray(newTodos)\n  }));\n  localStorage.setItem(\"projects\", JSON.stringify(data));\n};\nvar deleteTodo = function deleteTodo(projectId, todoId) {\n  var data = JSON.parse(localStorage.getItem(\"projects\"));\n  var pIndex = data.findIndex(function (p) {\n    return p.id == projectId;\n  });\n\n  var newTodos = _toConsumableArray(data[pIndex].todos.filter(function (t) {\n    return t.id != todoId;\n  }));\n\n  data.splice(pIndex, 1, _objectSpread(_objectSpread({}, data[pIndex]), {}, {\n    todos: _toConsumableArray(newTodos)\n  }));\n  localStorage.setItem(\"projects\", JSON.stringify(data));\n};\nvar toggleTodoStatus = function toggleTodoStatus(projectId, todoId) {\n  var data = JSON.parse(localStorage.getItem(\"projects\"));\n  var pIndex = data.findIndex(function (p) {\n    return p.id == projectId;\n  });\n  var tIndex = data[pIndex].todos.findIndex(function (t) {\n    return t.id == todoId;\n  });\n  data[pIndex].todos[tIndex] = _objectSpread(_objectSpread({}, data[pIndex].todos[tIndex]), {}, {\n    completed: !data[pIndex].todos[tIndex].completed\n  });\n  localStorage.setItem(\"projects\", JSON.stringify(data));\n};\nvar editTodo = function editTodo(projectId, todoId, title, desc, duedate, priority) {\n  var data = JSON.parse(localStorage.getItem(\"projects\"));\n  var pIndex = data.findIndex(function (p) {\n    return p.id == projectId;\n  });\n  var tIndex = data[pIndex].todos.findIndex(function (t) {\n    return t.id == todoId;\n  });\n  data[pIndex].todos[tIndex] = _objectSpread(_objectSpread({}, data[pIndex].todos[tIndex]), {}, {\n    title: title,\n    desc: desc,\n    duedate: duedate,\n    priority: priority\n  });\n  localStorage.setItem(\"projects\", JSON.stringify(data));\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/controllers/projectController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_onLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/onLoad */ \"./src/components/onLoad.js\");\n\n(0,_components_onLoad__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ rng\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nvar getRandomValues;\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\n    // find the complete implementation of crypto (msCrypto) on IE11.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/uuid/dist/esm-browser/validate.js?");

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