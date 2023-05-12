"use strict";
(self["webpackChunkwebpack_todolist"] = self["webpackChunkwebpack_todolist"] || []).push([["index"],{

/***/ "./modules/addtodo.js":
/*!****************************!*\
  !*** ./modules/addtodo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todoclass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoclass.js */ "./modules/todoclass.js");


// Define a constant variable `inputvalue`
//  and give it the value of the element with the id 'create-todo'
const inputvalue = document.getElementById('create-todo');

// Define a constant variable `enterCreate`
// and assign it the value of the element with the id 'create'
const enterCreate = document.getElementById('create');

// Define a constant variable `form`
//  and assign it the value of the first element that matches the selector '.form'
const form = document.querySelector('.form');

// Define the `addTodo` function using arrow function syntax
const addTodo = () => {
  // Add a submit event listener to the `form` element
  form.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    // Create a new `TodoList` object using the `inputvalue` parameter
    const todo = new _todoclass_js__WEBPACK_IMPORTED_MODULE_0__["default"](inputvalue);
    // Call the `createTodo()` method on the `todo` object to create a new todo item
    todo.createTodo();
  });

  // Add a click event listener to the `enterCreate` element
  enterCreate.addEventListener('click', () => {
  // Create a new `TodoList` object using the `inputvalue` parameter
    const todo = new _todoclass_js__WEBPACK_IMPORTED_MODULE_0__["default"](inputvalue);
    // Call the `createTodo()` method on the `todo` object to create a new todo item
    todo.createTodo();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTodo);

/***/ }),

/***/ "./modules/clearcompleted.js":
/*!***********************************!*\
  !*** ./modules/clearcompleted.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todoclass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoclass.js */ "./modules/todoclass.js");


// Define a function `clearcompleted`
const clearcompleted = () => {
  // Get the `clearbtn` element with the ID 'to-do-clear'
  const clearbtn = document.getElementById('to-do-clear');

  // Add a click event listener to the `clearbtn` element
  clearbtn.addEventListener('click', () => {
    // Get the todos from local storage or set to an empty array if none exist
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    // Filter out the completed todos
    todos = todos.filter((complete) => !complete.completed);
    // Update the index of each todo
    todos.forEach((task, i) => { task.index = i + 1; });
    // Update the todos in local storage
    localStorage.setItem('todos', JSON.stringify(todos));
    // Create a new `TodoList` object
    const todo = new _todoclass_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    // Call the `todosList()` method on the `todo` object to update the todo list
    todo.todosList();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearcompleted);

/***/ }),

/***/ "./modules/deletetodo.js":
/*!*******************************!*\
  !*** ./modules/deletetodo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todoclass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoclass.js */ "./modules/todoclass.js");


const alltodos = document.getElementById('to-do-list');

// Define a function `deletetodo`
const deletetodo = () => {
  // Get the `alltodos` element
  alltodos.addEventListener('click', (e) => {
    // Check if the clicked element has a class of 'fa-trash'
    if (e.target.classList.contains('fa-trash')) {
      // Get the id of the clicked element
      const { id } = e.target;
      // Get the todos from local storage or set to an empty array if none exist
      let todos = JSON.parse(localStorage.getItem('todos')) || [];
      // Filter out the todo with the same id as the clicked element
      todos = todos.filter((todo) => todo.index.toString() !== id);
      // Update the index of each todo
      todos.forEach((task, i) => { task.index = i + 1; });
      // Update the todos in local storage
      localStorage.setItem('todos', JSON.stringify(todos));
      // Create a new `TodoList` object
      const todo = new _todoclass_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
      // Call the `todosList()` method on the `todo` object to update the todo list
      todo.todosList();
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deletetodo);

/***/ }),

/***/ "./modules/edittodos.js":
/*!******************************!*\
  !*** ./modules/edittodos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todoclass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoclass.js */ "./modules/todoclass.js");


/**
 * Update a todo item in localStorage and refresh the todo list
 * @param {string} description - The updated description of the todo item
 * @param {string} id - The id of the todo item to update
 */
const updatetodo = (description, id) => {
  // Get the existing todos from localStorage, or initialize an empty array
  const Todos = JSON.parse(localStorage.getItem('todos')) || [];

  if (description === '') {
    // If the description is empty, show an alert message and do nothing
    alert('desc cannot be Empty');
  } else {
    // Otherwise, find the todo item with the given id in the Todos array
    const search = Todos.find((todo) => todo.index.toString() === id);

    if (search !== undefined) {
      // If a matching todo item was found, update its description and index
      search.description = description;
      search.index = id;
      localStorage.setItem('todos', JSON.stringify(Todos));
    }

    // Refresh the todo list on the page
    const refresh = new _todoclass_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    refresh.todosList();
    document.location.reload();
  }
};

// Define a function `edittodo`
const edittodo = () => {
  // Get all elements with class `text-todo`
  const allselected = document.querySelectorAll('.text-todo');
  // Loop through each `text-todo` element
  for (let i = 0; i < allselected.length; i += 1) {
    // Add a click event listener to the current `text-todo` element
    allselected[i].addEventListener('click', (e) => {
      // Get the id of the clicked element
      const { id } = e.target;
      // Create an `input` element
      const input = document.createElement('input');
      // Get the text content of the clicked element
      const inputvalue = allselected[i].textContent;
      // Clear the text content of the clicked element
      allselected[i].textContent = '';
      // Set the `type` attribute of the `input` element to `text`--
      input.setAttribute('type', 'text');
      // Append the `input` element to the clicked element
      allselected[i].appendChild(input);
      // Set focus to the `input` element
      input.focus();
      // Set the value of the `input` element to the original text content
      input.value = inputvalue;
      // Add a focusout event listener to the `input` element
      input.addEventListener('focusout', () => {
        // Call the `updatetodo()` function with the new text value and the clicked element's id
        updatetodo(input.value, id);
      });
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (edittodo);

/***/ }),

/***/ "./modules/interactivetodo.js":
/*!************************************!*\
  !*** ./modules/interactivetodo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const interacttodo = () => {
  // Select all the checkboxes for each todo item
  const checklist = document.querySelectorAll('.mycheck');

  // Loop through each checkbox
  for (let i = 0; i < checklist.length; i += 1) {
    // Add a change event listener to each checkbox
    checklist[i].addEventListener('change', (e) => {
      // Get the ID of the clicked checkbox
      const { id } = e.target;
      // Retrieve the list of todos from local storage or an empty array if none exist
      const todos = JSON.parse(localStorage.getItem('todos')) || [];
      // Find the todo in the list with the same ID as the clicked checkbox
      const search = todos.find((item) => item.index.toString() === id);

      // If the checkbox is checked
      if (e.target.checked) {
        // If a todo with the given ID is found in the list
        if (search !== undefined) {
          // Toggle the 'completed' status of the todo and update its index
          search.completed = !search.completed;
          search.index = id;
        }
        // Reload the page to update the display
        document.location.reload();
      }
      // Save the updated list of todos to local storage
      localStorage.setItem('todos', JSON.stringify(todos));
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (interacttodo);

/***/ }),

/***/ "./modules/todoclass.js":
/*!******************************!*\
  !*** ./modules/todoclass.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class TodoList {
  constructor(description) {
    this.description = description;
  }

  todosList() {
    const alltodos = document.getElementById('to-do-list');
    const clearbtn = document.querySelector('.to-do-clear');
    const todos = JSON.parse(localStorage.getItem('todos')) || [];

    clearbtn.style.display = 'none';
    if (todos.length > 0) {
      todos.sort((a, b) => a.index - b.index);
      this.id = 0;
      let content = '';
      for (let i = 0; i < todos.length; i += 1) {
        if (todos[i].completed === true) {
          content += `
  <li class="each-todo"><input type="checkbox" class="mycheck" id=${todos[i].index} checked> <p class="text-todo linthrough" id=${todos[i].index}>${todos[i].description}</p><i class="fa-solid fa-trash" id=${todos[i].index}></i></li>`;
        } else {
          content += `
  <li class="each-todo"><input type="checkbox" class="mycheck" id=${todos[i].index}> <p class="text-todo" id=${todos[i].index}>${todos[i].description}</p><i class="fa-solid fa-trash" id=${todos[i].index}></i></li>`;
        }
      }
      alltodos.innerHTML = content;
      clearbtn.style.display = 'block';

      // Add event listener for the checkboxes
      const checkboxes = document.querySelectorAll('.mycheck');
      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
          const todoId = checkbox.getAttribute('id');
          const todo = todos.find((t) => t.index === todoId);
          todo.completed = checkbox.checked;
          localStorage.setItem('todos', JSON.stringify(todos));
          this.todosList();
        });
      });
    } else {
      alltodos.innerHTML = ' <p>No Todo List added</p>';
    }
  }

  createTodo() {
    const Todos = JSON.parse(localStorage.getItem('todos')) || [];
    if (this.description.value === '') {
      alert('desc cannot be Empty');
    } else {
      // If the description input is not empty,
      //  create a new todo object and add it to the array of todos
      const index = Todos.length + 1;
      Todos.push({
        index,
        description: this.description.value,
        completed: false,
      });
      // Save the updated array of todos to local storage
      localStorage.setItem('todos', JSON.stringify(Todos));
      // Clear the description input and update the todo list
      this.description.value = '';
      this.todosList();
      document.location.reload();
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  padding: 10px;\n}\n\n.container {\n  margin: 20px auto;\n  max-width: 800px;\n  padding: 20px 30px;\n  box-shadow: 3px 2px 10px 7px rgba(27, 0, 0, 0.17);\n  border-radius: 5px;\n  animation: fade-in 1s ease-in;\n}\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: rgb(36, 3, 51);\n}\n\n.to-do-add {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.form {\n  width: 98%;\n  margin-block: 20px;\n  animation: slide-up 0.5s ease-in;\n}\n\n@keyframes slide-up {\n  0% {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\ninput[type=\"text\"] {\n  line-height: 2;\n  padding: 5px 10px;\n  font-style: italic;\n  width: 98%;\n  border: none;\n  border-radius: 5px;\n  font-family: inherit;\n}\n\ni {\n  cursor: pointer;\n  font-size: 1.2rem;\n  transition: color 0.3s ease-in;\n  right: 100px;\n}\n\ni:hover {\n  color: red;\n}\n\n.to-do-clear {\n  background-color: gainsboro;\n  width: 100%;\n  margin: 5px auto;\n  display: block;\n  padding: 10px 20px;\n  border: none;\n  font-size: 1.3rem;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.3s ease-in;\n}\n\n.to-do-clear:hover {\n  background-color: black;\n  color: #ffff;\n}\n\nul {\n  list-style-type: none;\n}\n\n.each-todo {\n  display: flex;\n  justify-content: flex-start;\n  gap: 20px;\n  position: relative;\n  width: 100%;\n  margin-block: 10px;\n  border-top: 1px solid gray;\n  padding-block: 5px;\n}\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.fa-ellipsis-vertical {\n  position: absolute;\n  right: 10px;\n  transition: color 0.3s ease-in;\n}\n\n.fa-ellipsis-vertical:hover {\n  color: red;\n}\n\n.hidden {\n  display: none;\n}\n\n.linthrough {\n  text-decoration: line-through;\n}\n\n.fa-trash {\n  position: absolute;\n  right: 11px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,kCAAkC;EAClC,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,iDAAiD;EACjD,kBAAkB;EAClB,6BAA6B;AAC/B;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;AACF;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,gCAAgC;AAClC;;AAEA;EACE;IACE,2BAA2B;IAC3B,UAAU;EACZ;;EAEA;IACE,wBAAwB;IACxB,UAAU;EACZ;AACF;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,2BAA2B;EAC3B,WAAW;EACX,gBAAgB;EAChB,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,oBAAoB;EACpB,eAAe;EACf,4BAA4B;AAC9B;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,SAAS;EACT,kBAAkB;EAClB,WAAW;EACX,kBAAkB;EAClB,0BAA0B;EAC1B,kBAAkB;AACpB;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;AACF;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,8BAA8B;AAChC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  padding: 10px;\n}\n\n.container {\n  margin: 20px auto;\n  max-width: 800px;\n  padding: 20px 30px;\n  box-shadow: 3px 2px 10px 7px rgba(27, 0, 0, 0.17);\n  border-radius: 5px;\n  animation: fade-in 1s ease-in;\n}\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: rgb(36, 3, 51);\n}\n\n.to-do-add {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.form {\n  width: 98%;\n  margin-block: 20px;\n  animation: slide-up 0.5s ease-in;\n}\n\n@keyframes slide-up {\n  0% {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\ninput[type=\"text\"] {\n  line-height: 2;\n  padding: 5px 10px;\n  font-style: italic;\n  width: 98%;\n  border: none;\n  border-radius: 5px;\n  font-family: inherit;\n}\n\ni {\n  cursor: pointer;\n  font-size: 1.2rem;\n  transition: color 0.3s ease-in;\n  right: 100px;\n}\n\ni:hover {\n  color: red;\n}\n\n.to-do-clear {\n  background-color: gainsboro;\n  width: 100%;\n  margin: 5px auto;\n  display: block;\n  padding: 10px 20px;\n  border: none;\n  font-size: 1.3rem;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.3s ease-in;\n}\n\n.to-do-clear:hover {\n  background-color: black;\n  color: #ffff;\n}\n\nul {\n  list-style-type: none;\n}\n\n.each-todo {\n  display: flex;\n  justify-content: flex-start;\n  gap: 20px;\n  position: relative;\n  width: 100%;\n  margin-block: 10px;\n  border-top: 1px solid gray;\n  padding-block: 5px;\n}\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.fa-ellipsis-vertical {\n  position: absolute;\n  right: 10px;\n  transition: color 0.3s ease-in;\n}\n\n.fa-ellipsis-vertical:hover {\n  color: red;\n}\n\n.hidden {\n  display: none;\n}\n\n.linthrough {\n  text-decoration: line-through;\n}\n\n.fa-trash {\n  position: absolute;\n  right: 11px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_addtodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/addtodo.js */ "./modules/addtodo.js");
/* harmony import */ var _modules_todoclass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/todoclass.js */ "./modules/todoclass.js");
/* harmony import */ var _modules_deletetodo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/deletetodo.js */ "./modules/deletetodo.js");
/* harmony import */ var _modules_edittodos_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/edittodos.js */ "./modules/edittodos.js");
/* harmony import */ var _modules_interactivetodo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/interactivetodo.js */ "./modules/interactivetodo.js");
/* harmony import */ var _modules_clearcompleted_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/clearcompleted.js */ "./modules/clearcompleted.js");








const todoclass = new _modules_todoclass_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
todoclass.todosList();
(0,_modules_addtodo_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_deletetodo_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_modules_edittodos_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_modules_interactivetodo_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_modules_clearcompleted_js__WEBPACK_IMPORTED_MODULE_6__["default"])();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnFCO0FBQ3VCO0FBQ0c7QUFDRztBQUNIO0FBQ1U7QUFDQzs7QUFFMUQsc0JBQXNCLDZEQUFRO0FBQzlCO0FBQ0EsK0RBQU87QUFDUCxrRUFBVTtBQUNWLGlFQUFRO0FBQ1IsdUVBQVk7QUFDWixzRUFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdG9kb2xpc3QvLi9tb2R1bGVzL2FkZHRvZG8uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvbGlzdC8uL21vZHVsZXMvY2xlYXJjb21wbGV0ZWQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvbGlzdC8uL21vZHVsZXMvZGVsZXRldG9kby5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG9saXN0Ly4vbW9kdWxlcy9lZGl0dG9kb3MuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvbGlzdC8uL21vZHVsZXMvaW50ZXJhY3RpdmV0b2RvLmpzIiwid2VicGFjazovL3dlYnBhY2stdG9kb2xpc3QvLi9tb2R1bGVzL3RvZG9jbGFzcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vdG9kb2NsYXNzLmpzJztcblxuLy8gRGVmaW5lIGEgY29uc3RhbnQgdmFyaWFibGUgYGlucHV0dmFsdWVgXG4vLyAgYW5kIGdpdmUgaXQgdGhlIHZhbHVlIG9mIHRoZSBlbGVtZW50IHdpdGggdGhlIGlkICdjcmVhdGUtdG9kbydcbmNvbnN0IGlucHV0dmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLXRvZG8nKTtcblxuLy8gRGVmaW5lIGEgY29uc3RhbnQgdmFyaWFibGUgYGVudGVyQ3JlYXRlYFxuLy8gYW5kIGFzc2lnbiBpdCB0aGUgdmFsdWUgb2YgdGhlIGVsZW1lbnQgd2l0aCB0aGUgaWQgJ2NyZWF0ZSdcbmNvbnN0IGVudGVyQ3JlYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZScpO1xuXG4vLyBEZWZpbmUgYSBjb25zdGFudCB2YXJpYWJsZSBgZm9ybWBcbi8vICBhbmQgYXNzaWduIGl0IHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgZWxlbWVudCB0aGF0IG1hdGNoZXMgdGhlIHNlbGVjdG9yICcuZm9ybSdcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuXG4vLyBEZWZpbmUgdGhlIGBhZGRUb2RvYCBmdW5jdGlvbiB1c2luZyBhcnJvdyBmdW5jdGlvbiBzeW50YXhcbmNvbnN0IGFkZFRvZG8gPSAoKSA9PiB7XG4gIC8vIEFkZCBhIHN1Ym1pdCBldmVudCBsaXN0ZW5lciB0byB0aGUgYGZvcm1gIGVsZW1lbnRcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgZm9ybSBzdWJtaXNzaW9uIGJlaGF2aW9yXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIENyZWF0ZSBhIG5ldyBgVG9kb0xpc3RgIG9iamVjdCB1c2luZyB0aGUgYGlucHV0dmFsdWVgIHBhcmFtZXRlclxuICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kb0xpc3QoaW5wdXR2YWx1ZSk7XG4gICAgLy8gQ2FsbCB0aGUgYGNyZWF0ZVRvZG8oKWAgbWV0aG9kIG9uIHRoZSBgdG9kb2Agb2JqZWN0IHRvIGNyZWF0ZSBhIG5ldyB0b2RvIGl0ZW1cbiAgICB0b2RvLmNyZWF0ZVRvZG8oKTtcbiAgfSk7XG5cbiAgLy8gQWRkIGEgY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGBlbnRlckNyZWF0ZWAgZWxlbWVudFxuICBlbnRlckNyZWF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgLy8gQ3JlYXRlIGEgbmV3IGBUb2RvTGlzdGAgb2JqZWN0IHVzaW5nIHRoZSBgaW5wdXR2YWx1ZWAgcGFyYW1ldGVyXG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvTGlzdChpbnB1dHZhbHVlKTtcbiAgICAvLyBDYWxsIHRoZSBgY3JlYXRlVG9kbygpYCBtZXRob2Qgb24gdGhlIGB0b2RvYCBvYmplY3QgdG8gY3JlYXRlIGEgbmV3IHRvZG8gaXRlbVxuICAgIHRvZG8uY3JlYXRlVG9kbygpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZFRvZG87IiwiaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vdG9kb2NsYXNzLmpzJztcblxuLy8gRGVmaW5lIGEgZnVuY3Rpb24gYGNsZWFyY29tcGxldGVkYFxuY29uc3QgY2xlYXJjb21wbGV0ZWQgPSAoKSA9PiB7XG4gIC8vIEdldCB0aGUgYGNsZWFyYnRuYCBlbGVtZW50IHdpdGggdGhlIElEICd0by1kby1jbGVhcidcbiAgY29uc3QgY2xlYXJidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG8tZG8tY2xlYXInKTtcblxuICAvLyBBZGQgYSBjbGljayBldmVudCBsaXN0ZW5lciB0byB0aGUgYGNsZWFyYnRuYCBlbGVtZW50XG4gIGNsZWFyYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIEdldCB0aGUgdG9kb3MgZnJvbSBsb2NhbCBzdG9yYWdlIG9yIHNldCB0byBhbiBlbXB0eSBhcnJheSBpZiBub25lIGV4aXN0XG4gICAgbGV0IHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSkgfHwgW107XG4gICAgLy8gRmlsdGVyIG91dCB0aGUgY29tcGxldGVkIHRvZG9zXG4gICAgdG9kb3MgPSB0b2Rvcy5maWx0ZXIoKGNvbXBsZXRlKSA9PiAhY29tcGxldGUuY29tcGxldGVkKTtcbiAgICAvLyBVcGRhdGUgdGhlIGluZGV4IG9mIGVhY2ggdG9kb1xuICAgIHRvZG9zLmZvckVhY2goKHRhc2ssIGkpID0+IHsgdGFzay5pbmRleCA9IGkgKyAxOyB9KTtcbiAgICAvLyBVcGRhdGUgdGhlIHRvZG9zIGluIGxvY2FsIHN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICAgIC8vIENyZWF0ZSBhIG5ldyBgVG9kb0xpc3RgIG9iamVjdFxuICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kb0xpc3QoKTtcbiAgICAvLyBDYWxsIHRoZSBgdG9kb3NMaXN0KClgIG1ldGhvZCBvbiB0aGUgYHRvZG9gIG9iamVjdCB0byB1cGRhdGUgdGhlIHRvZG8gbGlzdFxuICAgIHRvZG8udG9kb3NMaXN0KCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xlYXJjb21wbGV0ZWQ7IiwiaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vdG9kb2NsYXNzLmpzJztcblxuY29uc3QgYWxsdG9kb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG8tZG8tbGlzdCcpO1xuXG4vLyBEZWZpbmUgYSBmdW5jdGlvbiBgZGVsZXRldG9kb2BcbmNvbnN0IGRlbGV0ZXRvZG8gPSAoKSA9PiB7XG4gIC8vIEdldCB0aGUgYGFsbHRvZG9zYCBlbGVtZW50XG4gIGFsbHRvZG9zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAvLyBDaGVjayBpZiB0aGUgY2xpY2tlZCBlbGVtZW50IGhhcyBhIGNsYXNzIG9mICdmYS10cmFzaCdcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS10cmFzaCcpKSB7XG4gICAgICAvLyBHZXQgdGhlIGlkIG9mIHRoZSBjbGlja2VkIGVsZW1lbnRcbiAgICAgIGNvbnN0IHsgaWQgfSA9IGUudGFyZ2V0O1xuICAgICAgLy8gR2V0IHRoZSB0b2RvcyBmcm9tIGxvY2FsIHN0b3JhZ2Ugb3Igc2V0IHRvIGFuIGVtcHR5IGFycmF5IGlmIG5vbmUgZXhpc3RcbiAgICAgIGxldCB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpIHx8IFtdO1xuICAgICAgLy8gRmlsdGVyIG91dCB0aGUgdG9kbyB3aXRoIHRoZSBzYW1lIGlkIGFzIHRoZSBjbGlja2VkIGVsZW1lbnRcbiAgICAgIHRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmluZGV4LnRvU3RyaW5nKCkgIT09IGlkKTtcbiAgICAgIC8vIFVwZGF0ZSB0aGUgaW5kZXggb2YgZWFjaCB0b2RvXG4gICAgICB0b2Rvcy5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7IHRhc2suaW5kZXggPSBpICsgMTsgfSk7XG4gICAgICAvLyBVcGRhdGUgdGhlIHRvZG9zIGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG4gICAgICAvLyBDcmVhdGUgYSBuZXcgYFRvZG9MaXN0YCBvYmplY3RcbiAgICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kb0xpc3QoKTtcbiAgICAgIC8vIENhbGwgdGhlIGB0b2Rvc0xpc3QoKWAgbWV0aG9kIG9uIHRoZSBgdG9kb2Agb2JqZWN0IHRvIHVwZGF0ZSB0aGUgdG9kbyBsaXN0XG4gICAgICB0b2RvLnRvZG9zTGlzdCgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWxldGV0b2RvOyIsImltcG9ydCBUb2RvTGlzdCBmcm9tICcuL3RvZG9jbGFzcy5qcyc7XG5cbi8qKlxuICogVXBkYXRlIGEgdG9kbyBpdGVtIGluIGxvY2FsU3RvcmFnZSBhbmQgcmVmcmVzaCB0aGUgdG9kbyBsaXN0XG4gKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb24gLSBUaGUgdXBkYXRlZCBkZXNjcmlwdGlvbiBvZiB0aGUgdG9kbyBpdGVtXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBUaGUgaWQgb2YgdGhlIHRvZG8gaXRlbSB0byB1cGRhdGVcbiAqL1xuY29uc3QgdXBkYXRldG9kbyA9IChkZXNjcmlwdGlvbiwgaWQpID0+IHtcbiAgLy8gR2V0IHRoZSBleGlzdGluZyB0b2RvcyBmcm9tIGxvY2FsU3RvcmFnZSwgb3IgaW5pdGlhbGl6ZSBhbiBlbXB0eSBhcnJheVxuICBjb25zdCBUb2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpIHx8IFtdO1xuXG4gIGlmIChkZXNjcmlwdGlvbiA9PT0gJycpIHtcbiAgICAvLyBJZiB0aGUgZGVzY3JpcHRpb24gaXMgZW1wdHksIHNob3cgYW4gYWxlcnQgbWVzc2FnZSBhbmQgZG8gbm90aGluZ1xuICAgIGFsZXJ0KCdkZXNjIGNhbm5vdCBiZSBFbXB0eScpO1xuICB9IGVsc2Uge1xuICAgIC8vIE90aGVyd2lzZSwgZmluZCB0aGUgdG9kbyBpdGVtIHdpdGggdGhlIGdpdmVuIGlkIGluIHRoZSBUb2RvcyBhcnJheVxuICAgIGNvbnN0IHNlYXJjaCA9IFRvZG9zLmZpbmQoKHRvZG8pID0+IHRvZG8uaW5kZXgudG9TdHJpbmcoKSA9PT0gaWQpO1xuXG4gICAgaWYgKHNlYXJjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBJZiBhIG1hdGNoaW5nIHRvZG8gaXRlbSB3YXMgZm91bmQsIHVwZGF0ZSBpdHMgZGVzY3JpcHRpb24gYW5kIGluZGV4XG4gICAgICBzZWFyY2guZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgIHNlYXJjaC5pbmRleCA9IGlkO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkoVG9kb3MpKTtcbiAgICB9XG5cbiAgICAvLyBSZWZyZXNoIHRoZSB0b2RvIGxpc3Qgb24gdGhlIHBhZ2VcbiAgICBjb25zdCByZWZyZXNoID0gbmV3IFRvZG9MaXN0KCk7XG4gICAgcmVmcmVzaC50b2Rvc0xpc3QoKTtcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxufTtcblxuLy8gRGVmaW5lIGEgZnVuY3Rpb24gYGVkaXR0b2RvYFxuY29uc3QgZWRpdHRvZG8gPSAoKSA9PiB7XG4gIC8vIEdldCBhbGwgZWxlbWVudHMgd2l0aCBjbGFzcyBgdGV4dC10b2RvYFxuICBjb25zdCBhbGxzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0LXRvZG8nKTtcbiAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggYHRleHQtdG9kb2AgZWxlbWVudFxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbHNlbGVjdGVkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgLy8gQWRkIGEgY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGN1cnJlbnQgYHRleHQtdG9kb2AgZWxlbWVudFxuICAgIGFsbHNlbGVjdGVkW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIC8vIEdldCB0aGUgaWQgb2YgdGhlIGNsaWNrZWQgZWxlbWVudFxuICAgICAgY29uc3QgeyBpZCB9ID0gZS50YXJnZXQ7XG4gICAgICAvLyBDcmVhdGUgYW4gYGlucHV0YCBlbGVtZW50XG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAvLyBHZXQgdGhlIHRleHQgY29udGVudCBvZiB0aGUgY2xpY2tlZCBlbGVtZW50XG4gICAgICBjb25zdCBpbnB1dHZhbHVlID0gYWxsc2VsZWN0ZWRbaV0udGV4dENvbnRlbnQ7XG4gICAgICAvLyBDbGVhciB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBjbGlja2VkIGVsZW1lbnRcbiAgICAgIGFsbHNlbGVjdGVkW2ldLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAvLyBTZXQgdGhlIGB0eXBlYCBhdHRyaWJ1dGUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudCB0byBgdGV4dGAtLVxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgIC8vIEFwcGVuZCB0aGUgYGlucHV0YCBlbGVtZW50IHRvIHRoZSBjbGlja2VkIGVsZW1lbnRcbiAgICAgIGFsbHNlbGVjdGVkW2ldLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgIC8vIFNldCBmb2N1cyB0byB0aGUgYGlucHV0YCBlbGVtZW50XG4gICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgLy8gU2V0IHRoZSB2YWx1ZSBvZiB0aGUgYGlucHV0YCBlbGVtZW50IHRvIHRoZSBvcmlnaW5hbCB0ZXh0IGNvbnRlbnRcbiAgICAgIGlucHV0LnZhbHVlID0gaW5wdXR2YWx1ZTtcbiAgICAgIC8vIEFkZCBhIGZvY3Vzb3V0IGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnRcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKCkgPT4ge1xuICAgICAgICAvLyBDYWxsIHRoZSBgdXBkYXRldG9kbygpYCBmdW5jdGlvbiB3aXRoIHRoZSBuZXcgdGV4dCB2YWx1ZSBhbmQgdGhlIGNsaWNrZWQgZWxlbWVudCdzIGlkXG4gICAgICAgIHVwZGF0ZXRvZG8oaW5wdXQudmFsdWUsIGlkKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlZGl0dG9kbzsiLCJjb25zdCBpbnRlcmFjdHRvZG8gPSAoKSA9PiB7XG4gIC8vIFNlbGVjdCBhbGwgdGhlIGNoZWNrYm94ZXMgZm9yIGVhY2ggdG9kbyBpdGVtXG4gIGNvbnN0IGNoZWNrbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5teWNoZWNrJyk7XG5cbiAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggY2hlY2tib3hcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGVja2xpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAvLyBBZGQgYSBjaGFuZ2UgZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBjaGVja2JveFxuICAgIGNoZWNrbGlzdFtpXS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgLy8gR2V0IHRoZSBJRCBvZiB0aGUgY2xpY2tlZCBjaGVja2JveFxuICAgICAgY29uc3QgeyBpZCB9ID0gZS50YXJnZXQ7XG4gICAgICAvLyBSZXRyaWV2ZSB0aGUgbGlzdCBvZiB0b2RvcyBmcm9tIGxvY2FsIHN0b3JhZ2Ugb3IgYW4gZW1wdHkgYXJyYXkgaWYgbm9uZSBleGlzdFxuICAgICAgY29uc3QgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKSB8fCBbXTtcbiAgICAgIC8vIEZpbmQgdGhlIHRvZG8gaW4gdGhlIGxpc3Qgd2l0aCB0aGUgc2FtZSBJRCBhcyB0aGUgY2xpY2tlZCBjaGVja2JveFxuICAgICAgY29uc3Qgc2VhcmNoID0gdG9kb3MuZmluZCgoaXRlbSkgPT4gaXRlbS5pbmRleC50b1N0cmluZygpID09PSBpZCk7XG5cbiAgICAgIC8vIElmIHRoZSBjaGVja2JveCBpcyBjaGVja2VkXG4gICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAvLyBJZiBhIHRvZG8gd2l0aCB0aGUgZ2l2ZW4gSUQgaXMgZm91bmQgaW4gdGhlIGxpc3RcbiAgICAgICAgaWYgKHNlYXJjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gVG9nZ2xlIHRoZSAnY29tcGxldGVkJyBzdGF0dXMgb2YgdGhlIHRvZG8gYW5kIHVwZGF0ZSBpdHMgaW5kZXhcbiAgICAgICAgICBzZWFyY2guY29tcGxldGVkID0gIXNlYXJjaC5jb21wbGV0ZWQ7XG4gICAgICAgICAgc2VhcmNoLmluZGV4ID0gaWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVsb2FkIHRoZSBwYWdlIHRvIHVwZGF0ZSB0aGUgZGlzcGxheVxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICAgIC8vIFNhdmUgdGhlIHVwZGF0ZWQgbGlzdCBvZiB0b2RvcyB0byBsb2NhbCBzdG9yYWdlXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbnRlcmFjdHRvZG87IiwiY2xhc3MgVG9kb0xpc3Qge1xuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHRvZG9zTGlzdCgpIHtcbiAgICBjb25zdCBhbGx0b2RvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0by1kby1saXN0Jyk7XG4gICAgY29uc3QgY2xlYXJidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tY2xlYXInKTtcbiAgICBjb25zdCB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpIHx8IFtdO1xuXG4gICAgY2xlYXJidG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBpZiAodG9kb3MubGVuZ3RoID4gMCkge1xuICAgICAgdG9kb3Muc29ydCgoYSwgYikgPT4gYS5pbmRleCAtIGIuaW5kZXgpO1xuICAgICAgdGhpcy5pZCA9IDA7XG4gICAgICBsZXQgY29udGVudCA9ICcnO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAodG9kb3NbaV0uY29tcGxldGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgY29udGVudCArPSBgXG4gIDxsaSBjbGFzcz1cImVhY2gtdG9kb1wiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cIm15Y2hlY2tcIiBpZD0ke3RvZG9zW2ldLmluZGV4fSBjaGVja2VkPiA8cCBjbGFzcz1cInRleHQtdG9kbyBsaW50aHJvdWdoXCIgaWQ9JHt0b2Rvc1tpXS5pbmRleH0+JHt0b2Rvc1tpXS5kZXNjcmlwdGlvbn08L3A+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaFwiIGlkPSR7dG9kb3NbaV0uaW5kZXh9PjwvaT48L2xpPmA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGVudCArPSBgXG4gIDxsaSBjbGFzcz1cImVhY2gtdG9kb1wiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cIm15Y2hlY2tcIiBpZD0ke3RvZG9zW2ldLmluZGV4fT4gPHAgY2xhc3M9XCJ0ZXh0LXRvZG9cIiBpZD0ke3RvZG9zW2ldLmluZGV4fT4ke3RvZG9zW2ldLmRlc2NyaXB0aW9ufTwvcD48aSBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoXCIgaWQ9JHt0b2Rvc1tpXS5pbmRleH0+PC9pPjwvbGk+YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYWxsdG9kb3MuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgIGNsZWFyYnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBjaGVja2JveGVzXG4gICAgICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm15Y2hlY2snKTtcbiAgICAgIGNoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+IHtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRvZG9JZCA9IGNoZWNrYm94LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICBjb25zdCB0b2RvID0gdG9kb3MuZmluZCgodCkgPT4gdC5pbmRleCA9PT0gdG9kb0lkKTtcbiAgICAgICAgICB0b2RvLmNvbXBsZXRlZCA9IGNoZWNrYm94LmNoZWNrZWQ7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgICAgICAgICB0aGlzLnRvZG9zTGlzdCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGx0b2Rvcy5pbm5lckhUTUwgPSAnIDxwPk5vIFRvZG8gTGlzdCBhZGRlZDwvcD4nO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZVRvZG8oKSB7XG4gICAgY29uc3QgVG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKSB8fCBbXTtcbiAgICBpZiAodGhpcy5kZXNjcmlwdGlvbi52YWx1ZSA9PT0gJycpIHtcbiAgICAgIGFsZXJ0KCdkZXNjIGNhbm5vdCBiZSBFbXB0eScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiB0aGUgZGVzY3JpcHRpb24gaW5wdXQgaXMgbm90IGVtcHR5LFxuICAgICAgLy8gIGNyZWF0ZSBhIG5ldyB0b2RvIG9iamVjdCBhbmQgYWRkIGl0IHRvIHRoZSBhcnJheSBvZiB0b2Rvc1xuICAgICAgY29uc3QgaW5kZXggPSBUb2Rvcy5sZW5ndGggKyAxO1xuICAgICAgVG9kb3MucHVzaCh7XG4gICAgICAgIGluZGV4LFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgLy8gU2F2ZSB0aGUgdXBkYXRlZCBhcnJheSBvZiB0b2RvcyB0byBsb2NhbCBzdG9yYWdlXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeShUb2RvcykpO1xuICAgICAgLy8gQ2xlYXIgdGhlIGRlc2NyaXB0aW9uIGlucHV0IGFuZCB1cGRhdGUgdGhlIHRvZG8gbGlzdFxuICAgICAgdGhpcy5kZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xuICAgICAgdGhpcy50b2Rvc0xpc3QoKTtcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAxMDA7MjAwOzMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICBib3gtc2hhZG93OiAzcHggMnB4IDEwcHggN3B4IHJnYmEoMjcsIDAsIDAsIDAuMTcpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDFzIGVhc2UtaW47XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLnRvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGNvbG9yOiByZ2IoMzYsIDMsIDUxKTtcXG59XFxuXFxuLnRvLWRvLWFkZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZm9ybSB7XFxuICB3aWR0aDogOTglO1xcbiAgbWFyZ2luLWJsb2NrOiAyMHB4O1xcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGVhc2UtaW47XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgbGluZS1oZWlnaHQ6IDI7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIHdpZHRoOiA5OCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuaSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbjtcXG4gIHJpZ2h0OiAxMDBweDtcXG59XFxuXFxuaTpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4udG8tZG8tY2xlYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDVweCBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcXG59XFxuXFxuLnRvLWRvLWNsZWFyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6ICNmZmZmO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5lYWNoLXRvZG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogMjBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJsb2NrOiAxMHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XFxuICBwYWRkaW5nLWJsb2NrOiA1cHg7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLmZhLWVsbGlwc2lzLXZlcnRpY2FsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluO1xcbn1cXG5cXG4uZmEtZWxsaXBzaXMtdmVydGljYWw6aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubGludGhyb3VnaCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmZhLXRyYXNoIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMXB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaURBQWlEO0VBQ2pELGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRTtJQUNFLDJCQUEyQjtJQUMzQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDEwMDsyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcXG4gIGJveC1zaGFkb3c6IDNweCAycHggMTBweCA3cHggcmdiYSgyNywgMCwgMCwgMC4xNyk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBhbmltYXRpb246IGZhZGUtaW4gMXMgZWFzZS1pbjtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlLWluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4udG9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgY29sb3I6IHJnYigzNiwgMywgNTEpO1xcbn1cXG5cXG4udG8tZG8tYWRkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5mb3JtIHtcXG4gIHdpZHRoOiA5OCU7XFxuICBtYXJnaW4tYmxvY2s6IDIwcHg7XFxuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgZWFzZS1pbjtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS11cCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBsaW5lLWhlaWdodDogMjtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgd2lkdGg6IDk4JTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG5pIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluO1xcbiAgcmlnaHQ6IDEwMHB4O1xcbn1cXG5cXG5pOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi50by1kby1jbGVhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogNXB4IGF1dG87XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xcbn1cXG5cXG4udG8tZG8tY2xlYXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogI2ZmZmY7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmVhY2gtdG9kbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAyMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYmxvY2s6IDEwcHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcXG4gIHBhZGRpbmctYmxvY2s6IDVweDtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlLWluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4uZmEtZWxsaXBzaXMtdmVydGljYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW47XFxufVxcblxcbi5mYS1lbGxpcHNpcy12ZXJ0aWNhbDpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5saW50aHJvdWdoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uZmEtdHJhc2gge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDExcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBhZGRUb2RvIGZyb20gJy4uL21vZHVsZXMvYWRkdG9kby5qcyc7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi4vbW9kdWxlcy90b2RvY2xhc3MuanMnO1xuaW1wb3J0IGRlbGV0ZXRvZG8gZnJvbSAnLi4vbW9kdWxlcy9kZWxldGV0b2RvLmpzJztcbmltcG9ydCBlZGl0dG9kbyBmcm9tICcuLi9tb2R1bGVzL2VkaXR0b2Rvcy5qcyc7XG5pbXBvcnQgaW50ZXJhY3R0b2RvIGZyb20gJy4uL21vZHVsZXMvaW50ZXJhY3RpdmV0b2RvLmpzJztcbmltcG9ydCBjbGVhcmNvbXBsZXRlZCBmcm9tICcuLi9tb2R1bGVzL2NsZWFyY29tcGxldGVkLmpzJztcblxuY29uc3QgdG9kb2NsYXNzID0gbmV3IFRvZG9MaXN0KCk7XG50b2RvY2xhc3MudG9kb3NMaXN0KCk7XG5hZGRUb2RvKCk7XG5kZWxldGV0b2RvKCk7XG5lZGl0dG9kbygpO1xuaW50ZXJhY3R0b2RvKCk7XG5jbGVhcmNvbXBsZXRlZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9