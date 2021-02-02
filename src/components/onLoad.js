import createHeader from "./header";
import { projectsEmptyState } from "./projectsEmptyState";
import { createTodoList, populateTodoList } from "./todoList";
import { getProjects } from "../controllers/projectController";

const onLoad = (projectIndex) => {
  //clear container for initialisation
  document.querySelector(".container").innerHTML = "";

  //get data for the projects

  let projects = getProjects();

  if (projects.length > 0) {
    let index = projectIndex || 0;
    let currProject = projects[index];

    ///render page elements

    createHeader(index, projects, currProject);
    createTodoList(index, currProject);
    populateTodoList(index, currProject);
  } else {
    ///IF NO PROJECTS IN STORAGE
    projectsEmptyState();
  }
};

export default onLoad;
