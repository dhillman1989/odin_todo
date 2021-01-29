import {
  getProjects,
  getProjectTitles,
  setProjects,
  getOneProject,
} from "../controllers/projectController";

export const createTodoList = () => {
  const container = document.querySelector(".container");
  const list = document.createElement("ul");
  list.classList.add("todoList");

  container.appendChild(list);
};

export const populateTodoList = (projectTitle) => {
  const currProject = getOneProject(projectTitle);

  const list = document.querySelector(".todoList");

  list.innerHTML = currProject.todos
    .map(
      (todo) => `
    <li class="todoList__todo">
      <input type="checkbox"/>
      <div class="todoList__text">
        <h4>${todo.title}</h4>
        <p>${todo.desc}</p>
      </div>
      
    </li>
    `
    )
    .join("");
};
