import TodoList from './todoclass.js';

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
    const todo = new TodoList(inputvalue.value);
    // Call the `createTodo()` method on the `todo` object to create a new todo item
    todo.createTodo();
  });

  // Add a click event listener to the `enterCreate` element
  enterCreate.addEventListener('click', () => {
  // Create a new `TodoList` object using the `inputvalue` parameter
    const todo = new TodoList(inputvalue);
    // Call the `createTodo()` method on the `todo` object to create a new todo item
    todo.createTodo();
  });
};

export default addTodo;