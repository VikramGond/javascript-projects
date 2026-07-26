const todos = document.getElementById("todos");
const addBtn = document.getElementById("add");
const todoLists = document.getElementById("todo-lists");

const validateTodos = (e) => {
  const todo = todos.value.trim();
  if (todo != "") {
    createTodos(todo);
    todos.value = ""
  }
};

const createTodos = (todo) => {
  let todoList = document.createElement("li");
  let deleteBtn = document.createElement("button");
  todoList.id = "todo-list";
  deleteBtn.id = "deleteBtn";
  deleteBtn.innerHTML = "Delete";
  pushTodos(todo, todoList, deleteBtn);
};

const pushTodos = (todo, todoList, deleteBtn) => {
  todoList.textContent = todos.value.trim();
  todoList.appendChild(deleteBtn);
  todoLists.appendChild(todoList);
};

addBtn.addEventListener("click", validateTodos);

todos.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    validateTodos();
  }
});
