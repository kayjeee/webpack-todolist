import TodoList from './todoclass.js';

const alltodos = document.getElementById('to-do-list');

// Define a function `deletetodo`
const deletetodo = () => {
  alltodos.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-trash')) {
      const { id } = e.target;
      let todos = JSON.parse(localStorage.getItem('todos')) || [];
      todos = todos.filter((todo) => todo.index.toString() !== id);
      todos.forEach((task, i) => { task.index = i + 1; });
      localStorage.setItem('todos', JSON.stringify(todos));
      new TodoList().todosList();
    }
  });
};

export default deletetodo;