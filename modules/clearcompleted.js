import TodoList from './todoclass.js';

// Define a function `clearcompleted`
const clearcompleted = () => {
  // Get the `clearbtn` element with the ID 'to-do-clear'
  const clearbtn = document.getElementById('to-do-clear');

  // Add a click event listener to the `clearbtn` element
  clearbtn.addEventListener('click', () => {
    // Get the todos from local storage or set to an empty array if none exist
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    // Filter out the completed todos
    todos = todos.filter((task) => !task.completed);

    // Update the index of each todo
    todos.forEach((task, i) => {
      task.index = i + 1;
    });

    // Update the todos in local storage
    localStorage.setItem('todos', JSON.stringify(todos));

    // Create a new `TodoList` object
    const todo = new TodoList();

    // Call the `todosList()` method on the `todo` object to update the todo list
    todo.todosList();
  });
};

export default clearcompleted;