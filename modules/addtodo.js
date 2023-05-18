import TodoList from './todoclass.js';

const inputvalue = document.getElementById('todo-here-created');
const enterCreate = document.getElementById('create');
const form = document.querySelector('.form');

const addTodo = () => {
// Define a helper function to create a new todo item
  const createTodo = () => {
    // Create a new TodoList object using the inputvalue parameter
    const todo = new TodoList(inputvalue);
    todo.createTodo(); // Call the createTodo() method on the todo object to create a new todo item
  };

  // Add a submit event listener to the form element
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    createTodo(); // Call the createTodo() helper function to create a new todo item
  });

  // Add a click event listener to the enterCreate element
  enterCreate.addEventListener('click', createTodo);
};

export default addTodo;