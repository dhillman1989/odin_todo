import onLoad from "./onLoad";
import {
  getProjects,
  setProjects,
  addProject,
  getOneProject,
  addTodo,
  deleteTodo,
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
    addTodo(currProject.id, document.querySelector("#addnew").value);
    populateTodoList(currProject);
  };
  container.appendChild(list);
};

export const populateTodoList = (currProject) => {
  const project = getOneProject(currProject);

  const list = document.querySelector(".todoList");

  list.innerHTML =
    !project || !project.todos
      ? `<h4>Nothing to see here yet!</h4>`
      : project.todos
          .map(
            (todo) => `
    <li class="todoList__todo">
      <input type="checkbox"/>
      <div class="todoList__text">
        <h4>${todo.title}</h4>
        <p>${todo.desc}</p>
      </div>
      <div class= "todoList__controls">
        <i class="fas fa-pencil-alt" data-todoid=${todo.id}></i>
        <i class="fas fa-minus-circle" data-todoid=${todo.id}></i>
      </div>
      
    </li>
    `
          )
          .join("");

  const deleteButtons = document.querySelectorAll(".fa-minus-circle");
  deleteButtons.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      confirm("ARE YOU SURE? THIS CANT BE UNDONE") &&
        deleteTodo(project.id.toString(), e.target.dataset.todoid.toString());
      populateTodoList(currProject);
    })
  );
};
