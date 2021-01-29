import onLoad from "./onLoad";
import {
  getProjects,
  setProjects,
  addProject,
  addTodo,
  getOneProject,
} from "../controllers/projectController";

export const createTodoList = (currProject) => {
  const container = document.querySelector(".container");

  //INPUT TO ADD NEW TODOS
  const form = document.createElement("form");
  form.innerHTML = `<input id="addnew" class="todoList__input" ><button class="todoList__button">Add</button>`;
  const list = document.createElement("ul");
  list.classList.add("todoList");

  container.appendChild(form);
  form.onsubmit = (e) => {
    e.preventDefault();
    addTodo(currProject.projectTitle, document.querySelector("#addnew").value);
    console.log(currProject);
    onLoad();
  };
  container.appendChild(list);
};

export const populateTodoList = (projectTitle) => {
  const currProject = getOneProject(projectTitle);

  const list = document.querySelector(".todoList");

  list.innerHTML =
    !currProject || !currProject.todos
      ? `<h4>Nothing to see here yet!</h4>`
      : currProject.todos
          .map(
            (todo) => `
    <li class="todoList__todo">
      <input type="checkbox"/>
      <div class="todoList__text">
        <h4>${todo.title}</h4>
        <p>${todo.desc}</p>
      </div>
      <div class= "todoList__controls">
        <i class="fas fa-pencil-alt"></i>
        <i class="fas fa-minus-circle"></i>
      </div>
      
    </li>
    `
          )
          .join("");
};
