const todos = document.getElementById("todos");
const addBtn = document.getElementById("add");
const todoLists = document.getElementById("todo-lists");

const createTodos = (e) => {
  let todo = document.createElement("li");
  let deleteBtn = document.createElement("button");

  deleteBtn.id = "deleteBtn";
  todo.id = "todo-list";

  deleteBtn.innerHTML = "Delete"
  todo.textContent = todos.value.trim();
  todo.appendChild(deleteBtn);
  todoLists.appendChild(todo);
};

addBtn.addEventListener("click", createTodos);

todos.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {createTodos()};
});
