const interacttodo = () => {
  // Select all the checkboxes for each todo item
  const checklist = document.querySelectorAll('.mycheck');

  // Loop through each checkbox
  for (let i = 0; i < checklist.length; i += 1) {
    // Add a change event listener to each checkbox
    checklist[i].addEventListener('change', (e) => {
      // Get the ID of the clicked checkbox
      const { id } = e.target;
      // Retrieve the list of todos from local storage or an empty array if none exist
      const todos = JSON.parse(localStorage.getItem('todos')) || [];
      // Find the todo in the list with the same ID as the clicked checkbox
      const search = todos.find((item) => item.index.toString() === id);

      // If the checkbox is checked
      if (e.target.checked) {
        // If a todo with the given ID is found in the list
        if (search !== undefined) {
          // Toggle the 'completed' status of the todo and update its index
          search.completed = !search.completed;
          search.index = id;
        }
        // Reload the page to update the display
        document.location.reload();
      }
      // Save the updated list of todos to local storage
      localStorage.setItem('todos', JSON.stringify(todos));
    });
  }
};

export default interacttodo;