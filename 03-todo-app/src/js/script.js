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
            <button class="edit"><i class="fa-regular fa-pen-to-square fa-lg" style="color: rgb(39, 163, 22);"></i></button>
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

//edit todo function
const editTodo = (todoElement) => {
  const todoId = todoElement.dataset.id;
  const todo = todos.find((todo) => todo.id === todoId);
  todoElement.innerHTML = `<div class="editDiv">
      <input class="editInput" type="text" value="${todo.text}">

      <div class="confirm">
        <button class="confirmEdit"><i class="fa-solid fa-check" style="color: rgb(4, 255, 0);"></i></button>
        <button class="cancelEdit"><i class="fa-solid fa-xmark" style="color: rgb(255, 0, 0);"></i></button>
      </div>
    </div>`;
};

const confirmEdit = (todoElement) => {
  const todoId = todoElement.dataset.id;
  const todo = todos.find((todo) => todo.id === todoId);

  if (!todo) return;

  const newTodo = todoElement.querySelector(".editInput").value.trim();

  if (newTodo === "") return;

  todo.text = newTodo;
  saveTodos();

  todoElement.innerHTML = `
        <label>
          <input type="checkbox" 
                class="input" 
                ${todo.completed ? "checked" : ""} />
          <span class="custom-checkbox"></span>
      </label>
      <p class="item">${todo.text}</p>
      <div class="controls">
            <button class="edit"><i class="fa-regular fa-pen-to-square fa-lg" style="color: rgb(39, 163, 22);"></i></button>
            <button class="delete"><i class="fa-solid fa-trash-can fa-lg" style="color: rgb(200, 60, 60);"></i></button>
            <p class="time">${todo.time}</p>
      </div>`;

  if (todo.completed) {
    todoElement.classList.add("completed");
  }
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

//event listener for delete
todoListContainer.addEventListener("click", (e) => {
  //Listener for Handle completion
  if (e.target.classList.contains("item")) {
    const todoElement = e.target.closest(".todos-items");
    const checkbox = todoElement.querySelector(".input");

    checkbox.checked = !checkbox.checked;
    handleTodoCompletion(todoElement, checkbox.checked);
  }

  // Handle delete
  if (e.target.closest(".delete")) {
    const todoElement = e.target.closest(".todos-items");
    handleTodoDelete(todoElement);
  }

  // handle edit
  if (e.target.closest(".edit")) {
    const todoElement = e.target.closest(".todos-items");
    editTodo(todoElement);
  }

  if (e.target.closest(".confirmEdit")) {
    const todoElement = e.target.closest(".todos-items");
    confirmEdit(todoElement);
  }

  // if(e.target.closest(".cancelEdit")) {
  //   const todoElement = e.target.closest(".todos-items")
  //   cancelEdit(todoElement)
  // }
});

loadSavedTodos();
