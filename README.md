
# 📝 Todo List Web App

A simple and clean Todo List web application built using **HTML**, **CSS**, and **JavaScript**. This project allows users to add, delete, and store tasks using **localStorage**, making sure your tasks persist even after refreshing the page.

🔗 [Live Demo](https://todo-list-git-main-huzaifas-projects-827a906f.vercel.app/)  
👨‍💻 [Muhammad Huzaifa on LinkedIn](https://www.linkedin.com/in/muhammad-huzaifa-a31907333/?originalSubdomain=pk)

---

## 🚀 Features

- ✅ Add new tasks
- 🗑️ Delete individual tasks
- 💾 Saves tasks using localStorage
- 🌙 Simple and clean user interface
- ⚡ Instant DOM updates

---

## 📸 Preview

![Todo List Preview](https://user-images.githubusercontent.com/00000000/your-screenshot-link.jpg) <!-- Optional: Replace with your image URL -->

---

## 🧠 What I Learned

While building this project, I learned:

- DOM manipulation in vanilla JavaScript
- Event handling (`click`, `keydown`, etc.)
- Working with `localStorage` to persist data
- Creating dynamic HTML elements via JavaScript
- Writing cleaner and modular JavaScript code

---

## 🛠️ Tech Stack

- **HTML5** – Structure of the app  
- **CSS3** – Styling and layout  
- **JavaScript** – Functionality & task management

---

## 📂 Folder Structure

```
Todo-list/
├── index.html
├── style.css
├── script.js
```

---

## 💡 How to Use

1. Clone the repository  
   ```
   git clone https://github.com/MuhammadHuzaifa-Dev/Todo-list
   ```
2. Open `index.html` in your browser

You’re ready to go!

---

## 🧩 Key Code Highlights

### ✅ Adding Task
```js
addTaskBtn.addEventListener("click", () => {
  if (todoInput.value.trim() !== "") {
    saveTask(todoInput.value);
    renderTask(todoInput.value);
    todoInput.value = "";
  }
});
```

### 💾 Storing in LocalStorage
```js
let task = JSON.parse(localStorage.getItem("Task")) || [];
```

---

## 🙋‍♂️ Author

**Muhammad Huzaifa**  
🧑‍💻 Passionate Frontend Developer | MERN Stack Beginner  
📍 Pakistan  
🔗 [LinkedIn](https://www.linkedin.com/in/muhammad-huzaifa-a31907333/?originalSubdomain=pk)

---

## 🌟 Show Your Support

If you liked this project:

⭐ Star this repo  
🍴 Fork it  
🗣️ Share it  
💬 Connect with me on LinkedIn

---

## 📃 License

This project is licensed under the **MIT License** – feel free to use and modify it.
