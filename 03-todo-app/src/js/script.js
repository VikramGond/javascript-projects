const todoText = document.getElementById("todo-input");
const addButton = document.querySelector(".add-todos");
const todoListContainer = document.querySelector(".todo-lists");

//---------------------------todos array------------------------------

const todos = [];

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
    text: text,
    completed: false,
  };

  todos.push(todo);
  fetchTodos(todo.text, todo.id);
};

//fetching todo at user site
const fetchTodos = (text, id) => {
  const newLi = document.createElement("li");
  newLi.classList.add("todos-items");
  newLi.dataset.id = id;

  newLi.innerHTML = `
    <label>
        <input type="checkbox" class="input" />
        <span class="custom-checkbox"></span>
    </label>
    <p class="item">${text}</p>
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

// --------------------event Listeners--------------------------

// on button press
addButton.addEventListener("click", validateTodo);

// on key press
todoText.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    validateTodo();
  }
});
