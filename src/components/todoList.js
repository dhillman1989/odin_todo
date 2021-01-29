import {
  getProjects,
  getProjectNames,
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
  // list.innerHTML =

  console.log(currProject);
};
