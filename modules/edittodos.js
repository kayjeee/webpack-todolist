import TodoList from './todoclass.js';

/**
 * Update a todo item in localStorage and refresh the todo list
 * @param {string} description - The updated description of the todo item
 * @param {string} id - The id of the todo item to update
 */
const updatetodo = (description, id) => {
  // Get the existing todos from localStorage, or initialize an empty array
  const Todos = JSON.parse(localStorage.getItem('todos')) || [];

  // Check if the description is empty
  if (description === '') {
    // If the description is empty, show an alert message and do nothing
    alert('Description cannot be empty');
    return;
  }

  // Find the todo item with the given id in the Todos array
  const todo = Todos.find((item) => item.index.toString() === id);

  // If a matching todo item was found
  if (todo) {
    // Update its description and index
    todo.description = description;
    todo.index = id;
    // Save the updated Todos array to localStorage
    localStorage.setItem('todos', JSON.stringify(Todos));
  }

  // Refresh the todo list on the page
  const refresh = new TodoList();
  refresh.todosList();

  // Reload the page to reflect the changes
  document.location.reload();
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