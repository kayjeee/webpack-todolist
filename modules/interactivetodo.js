const interacttodo = () => {
  // Select all the checkboxes for each todo item
  const checklist = document.querySelectorAll('.mycheck');

  // Loop through each checkbox
  checklist.forEach((checkbox) => {
    // Add a change event listener to each checkbox
    checkbox.addEventListener('change', (e) => {
      // Get the ID of the clicked checkbox
      const { id } = e.target;

      // Retrieve the list of todos from local storage or an empty array if none exist
      const todos = JSON.parse(localStorage.getItem('todos')) || [];

      // Find the todo in the list with the same ID as the clicked checkbox
      const todo = todos.find((item) => item.index.toString() === id);

      // If the checkbox is checked and a todo with the given ID is found
      if (e.target.checked && todo !== undefined) {
        // Toggle the 'completed' status of the todo and update its index
        todo.completed = !todo.completed;
        todo.index = id;
        // Reload the page to update the display
        document.location.reload();
      }

      // Save the updated list of todos to local storage
      localStorage.setItem('todos', JSON.stringify(todos));
    });
  });
};

export default interacttodo;