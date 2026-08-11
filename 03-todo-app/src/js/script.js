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
    time: getCurrentTime(),
  };

  todos.push(todo);
  saveTodos();
  renderTodos(todo);

  //CLEARING THE INPUT VALUE
  todoText.value = "";
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
      <div class="controls">
            <button class="edit"><i class="fa-regular fa-pen-to-square fa-lg" style="color: rgb(255, 255, 255);"></i></button>
            <button class="delete"><i class="fa-solid fa-trash-can fa-lg" style="color: rgb(200, 60, 60);"></i></button>
            <p class="time">${todoOBJ.time}</p>
      </div>`;

  todoListContainer.appendChild(newLi);

  if (todoOBJ.completed) {
    newLi.classList.add("completed");
  }
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

//render todo after page reload
const renderSavedTodos = () => {
  todos.forEach((todo) => {
    renderTodos(todo);
  });
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

//event listener for delete
todoListContainer.addEventListener("click", (e) => {
  if (e.target.closest(".delete")) {
    const todoElement = e.target.closest(".todos-items");

    handleTodoDelete(todoElement);
  }
});

loadSavedTodos();
