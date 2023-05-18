/* eslint-disable no-alert */
import TodoList from './todoclass.js';

const updatetodo = (description, id) => {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];

  if (description === '') {
    alert('desc cannot be Empty');
  } else {
    const todo = todos.find((todo) => todo.index.toString() === id);
    if (todo) {
      todo.description = description;
      todo.index = id;
      localStorage.setItem('todos', JSON.stringify(todos));
    }
    const refresh = new TodoList();
    refresh.todosList();
    document.location.reload();
  }
};

const edittodo = () => {
  const allselected = document.querySelectorAll('.text-todo');

  allselected.forEach((selected) => {
    selected.addEventListener('click', (e) => {
      const { id } = e.target;
      const input = document.createElement('input');
      const inputValue = selected.textContent;
      selected.textContent = '';
      input.setAttribute('type', 'text');
      selected.appendChild(input);
      input.focus();
      input.value = inputValue;
      input.addEventListener('focusout', () => {
        updatetodo(input.value, id);
      });
    });
  });
};

export default edittodo;