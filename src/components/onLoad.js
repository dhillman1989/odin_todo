import createHeader from "./header";
import { createTodoList, populateTodoList } from "./todoList";
import { getProjects } from "../controllers/projectController";

const onLoad = (projectIndex) => {
  //clear container for initialisation
  document.querySelector(".container").innerHTML = "";

  //get data for the projects

  let projects = getProjects();
  let index = projectIndex || 0;
  let currProject = projects[index];

  ///render page elements

  createHeader(index, projects, currProject);
  createTodoList(index, currProject);
  populateTodoList(currProject);
};

export default onLoad;
