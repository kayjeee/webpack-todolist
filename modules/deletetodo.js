import TodoList from './todoclass.js';

const alltodos = document.getElementById('to-do-list');

const deletetodo = () => {
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
      // eslint-disable-next-line no-return-assign
      todos.forEach((task, i) => task.index = i + 1);

      // Update the todos in local storage
      localStorage.setItem('todos', JSON.stringify(todos));

      // Create a new `TodoList` object
      new TodoList().todosList();
    }
  });
};

export default deletetodo;