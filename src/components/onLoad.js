import createHeader from "./header";
import { createTodoList, populateTodoList } from "./todoList";
import { getProjects } from "../controllers/projectController";

const onLoad = () => {
  //clear container for initialisation
  document.querySelector(".container").innerHTML = "";

  //get data for the projects
  let projects = getProjects();
  let currProject = projects[0];

  ///render page elements

  createHeader(currProject);
  createTodoList(currProject);

  populateTodoList(currProject);
};

export default onLoad;
