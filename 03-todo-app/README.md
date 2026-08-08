# 📝 Todo App

A simple and clean **Todo List web application** built with **HTML, CSS, and JavaScript**.
This project allows users to add tasks, mark them as completed, delete tasks, and see the time when each task was created.

This is one of my JavaScript projects, created to practice **DOM manipulation, event handling, dynamic HTML elements, and basic JavaScript logic**.

## 🚀 Features

* ➕ Add new todos
* ⌨️ Add todos using the **Enter** key
* ☑️ Mark todos as completed using a custom checkbox
* 🗑️ Delete todos
* 🕐 Display the time when a todo was added
* 🚫 Prevent empty todos from being added
* 🎨 Custom dark-themed UI
* 📱 Simple and lightweight design

## 🛠️ Technologies Used

* **HTML5** — Structure of the application
* **CSS3** — Styling and layout
* **JavaScript (ES6+)** — Application logic and DOM manipulation

## 📂 Project Structure

```text
Todo-App/
│
├── index.html
│
├── src/
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       └── script.js
│
└── README.md
```

## ⚙️ How It Works

### 1. Adding a Todo

The user enters a task in the input field and clicks the **Add** button.

JavaScript then:

1. Gets the text from the input.
2. Removes unnecessary whitespace.
3. Checks whether the input is empty.
4. Creates a new `<li>` element.
5. Adds the todo to the todo list.
6. Records the current time.
7. Clears the input field.

### 2. Adding with Enter

You don't have to click the **Add** button every time.

Pressing **Enter** while typing in the input field also adds the todo.

### 3. Custom Checkbox

Each todo contains a custom checkbox that allows the user to mark the task as completed.

### 4. Delete Button

Every todo has its own **Delete** button.

> 🚧 Delete functionality is currently part of the UI and can be implemented using event delegation.

## 🧠 JavaScript Concepts Practiced

This project helped me practice several important JavaScript concepts:

* `document.getElementById()`
* `document.querySelector()`
* `document.createElement()`
* `classList.add()`
* `innerHTML`
* `appendChild()`
* Event listeners
* Keyboard events
* `keydown`
* Functions
* Arrow functions
* Template literals
* `Date` object
* `String.prototype.padStart()`
* Input validation
* DOM manipulation

## 🎨 UI

The application uses a dark background with green and light-colored accents.

The todo items are displayed using **CSS Grid**, allowing the checkbox, todo text, and action section to remain properly aligned.

## 📸 Screenshot

Add a screenshot of your application here:

```md
![Todo App Screenshot](./screenshot.png)
```

## 🔮 Future Improvements

Some features I plan to add:

* [ ] Delete todo functionality
* [ ] Mark completed todos with a different style
* [ ] Edit existing todos
* [ ] Store todos using `localStorage`
* [ ] Show the number of completed/pending todos
* [ ] Add a clear-all button
* [ ] Add filtering for All / Active / Completed
* [ ] Improve responsive design
* [ ] Add animations
* [ ] Add task persistence after page refresh

## 🎯 Purpose of the Project

The main goal of this project is to strengthen my **JavaScript fundamentals** by building something practical instead of only following tutorials.

Through this project, I am practicing how JavaScript interacts with HTML and CSS to create dynamic web applications.

## 📌 Project Status

**Currently in development 🚧**

More functionality and improvements will be added as I continue learning JavaScript.

---

Made with ❤️ using **HTML, CSS & JavaScript**
