const interacttodo = () => {
  const checklist = document.querySelectorAll('.mycheck');

  checklist.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      const { id } = e.target;
      const todos = JSON.parse(localStorage.getItem('todos')) || [];
      const todo = todos.find((item) => item.index.toString() === id);
      if (e.target.checked) {
        if (todo) {
          todo.completed = !todo.completed;
          todo.index = id;
        }
        document.location.reload();
      }

      localStorage.setItem('todos', JSON.stringify(todos));
    });
  });
};

export default interacttodo;