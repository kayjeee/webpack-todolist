import TodoList from './todoclass.js';

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
    const refresh = new TodoList();
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

export default edittodo;