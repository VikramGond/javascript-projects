const todos = document.getElementById("todos");
const addBtn = document.getElementById("add");
const todoLists = document.getElementById("todo-lists");

addBtn.addEventListener("click", createTodos());

addBtn.addEventListener("keypress", (e) => {
  if (e.key == "Enter") createTodos();
});

const createTodos = () => {
  let todo = document.createElement("li");
  todo.id = todo - list;
  todo.textContent = todos.value.trim();
  todoLists.appendChild(todo);
};
