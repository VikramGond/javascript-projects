const todoText = document.getElementById("todo-input");
const addButton = document.querySelector(".add-todos");
const todoListContainer = document.querySelector(".todo-lists");

//---------------------------todos array------------------------------

let todos = [];

//----------------------function declaration---------------------------

// validating todos
const validateTodo = () => {
  const text = todoText.value.trim();
  if (text !== "") {
    createTodo(text);
  }
};

//creating todo in todos variable
const createTodo = (text) => {
  const todo = {
    id: crypto.randomUUID(),
    text,
    completed: false,
  };

  todos.push(todo);
  saveTodos();
  renderTodos(todo);
};

//fetching todo at user site
const renderTodos = (todoOBJ) => {
  const newLi = document.createElement("li");
  newLi.classList.add("todos-items");
  newLi.dataset.id = todoOBJ.id;

  newLi.innerHTML = `
    <label>
        <input type="checkbox" 
               class="input" 
               ${todoOBJ.completed ? "checked" : ""} />
        <span class="custom-checkbox"></span>
    </label>
    <p class="item">${todoOBJ.text}</p>
    <div>
        <button class="delete">Delete</button>
        <p class="time">${getCurrentTime()}</p>
    </div>`;

  todoListContainer.appendChild(newLi);

  todoText.value = "";
};

//getting exact time from user site
const getCurrentTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

//handles todo completion
const handleTodoCompletion = (todoElement, completed) => {
  const todoId = todoElement.dataset.id;
  const todo = todos.find((todo) => todo.id === todoId);

  todo.completed = completed;
  todoElement.classList.toggle("completed", todo.completed);
  saveTodos();
};

//function for deleting todos
const handleTodoDelete = (todoElement) => {
  const todoId = todoElement.dataset.id;

  todos = todos.filter((todo) => todo.id !== todoId);
  todoElement.remove();
  saveTodos();
};

// --------------------event Listeners--------------------------

// on button press
addButton.addEventListener("click", validateTodo);

// on key press
todoText.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    validateTodo();
  }
});

// checkbox
todoListContainer.addEventListener("change", (e) => {
  if (e.target.classList.contains("input")) {
    const todoElement = e.target.closest(".todos-items");

    handleTodoCompletion(todoElement, e.target.checked);
  }
});

//text
todoListContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("item")) {
    const todoElement = e.target.closest(".todos-items");
    const checkbox = todoElement.querySelector(".input");

    checkbox.checked = !checkbox.checked;

    handleTodoCompletion(todoElement, checkbox.checked);
  }
});

// saveTodos
const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

//load saved todos
const loadSavedTodos = () => {
  const savedTodos = localStorage.getItem("todos");

  if (savedTodos) {
    todos = JSON.parse(savedTodos);
    renderSavedTodos();
  }
};

//push todo after page reload
const renderSavedTodos = () => {
  todos.forEach((todo) => {
    renderTodos(todo);
  });
};

//event listener for delete

todoListContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const todoElement = e.target.closest(".todos-items");

    handleTodoDelete(todoElement);
  }
});

loadSavedTodos();
