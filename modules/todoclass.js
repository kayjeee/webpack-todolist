class TodoList {
  constructor(description) {
    this.description = description;
  }

  todosList() {
    const alltodos = document.getElementById('to-do-list');
    const clearbtn = document.querySelector('.to-do-clear');
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push({
      description: 'Do laundry',
      completed: false,
      index: 1,
    });

    todos.push({
      description: 'Buy groceries',
      completed: true,
      index: 2,
    });

    todos.push({
      description: 'Clean room',
      completed: false,
      index: 3,
    });
    clearbtn.style.display = 'none';
    if (todos.length > 0) {
      this.id = 0;
      let content = '';
      for (let i = 0; i < todos.length; i += 1) {
        if (todos[i].completed === true) {
          content += `
<li class="each-todo"><input type="checkbox" class="mycheck" id=${todos[i].index}> <p class="text-todo linthrough" id=${todos[i].index}>${todos[i].description}</p><i class="fa-solid fa-trash" id=${todos[i].index}></i></li>`;
        } else {
          content += `
<li class="each-todo"><input type="checkbox" class="mycheck" id=${todos[i].index}> <p class="text-todo" id=${todos[i].index}>${todos[i].description}</p><i class="fa-solid fa-trash" id=${todos[i].index}></i></li>`;
        }
      }
      alltodos.innerHTML = content;
      clearbtn.style.display = 'block';
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

export default TodoList;