const todoText = document.getElementById("todo-input");
const addButton = document.querySelector(".add-todos");
const todoListContainer = document.querySelector(".todo-lists");

// function declaration

const addNewTodo = (e) => {
  const text = todoText.value.trim();

  if (text !== "") {
    const newLi = document.createElement("li");
    newLi.classList.add("todos-items");

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
  }
};

const getCurrentTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

// event Listeners
addButton.addEventListener("click", addNewTodo);

todoText.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addNewTodo();
  }
});
