import TodoList from './todoclass.js';

const clearcompleted = () => {
  const clearbtn = document.getElementById('to-do-clear');

  clearbtn.addEventListener('click', () => {
    // Get the todos from local storage or set to an empty array if none exist
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    // Filter out the completed todos
    todos = todos.filter((todo) => !todo.completed)
    // Update the index of each todo
      .map((todo, index) => ({ ...todo, index: index + 1 }));
    // Update the todos in local storage
    localStorage.setItem('todos', JSON.stringify(todos));
    // Create a new `TodoList` object
    const todo = new TodoList();
    // Call the `todosList()` method on the `todo` object to update the todo list
    todo.todosList();
  });
};

export default clearcompleted;
