import onLoad from "./onLoad";
import newProjectForm from "./newProjectForm";
import { deleteProject } from "../controllers/projectController";

const createHeader = (pIndex, projects, currProject) => {
  const { projectTitle, tagline } = currProject;
  const container = document.querySelector(".container");

  //dropdown
  const projectDropdown = document.createElement("select");
  projectDropdown.innerHTML = projects.map(
    (p, idx) => `<option value=${idx}>${p.projectTitle}</option>`
  );
  projectDropdown.onchange = (e) => {
    onLoad(e.target.value);
  };
  projectDropdown.selectedIndex = pIndex;

  //add new project button
  const newProjectButton = document.createElement("button");
  newProjectButton.id = "newProjectButton";
  newProjectButton.innerText = "+ New Project";

  //create header

  const h1 = document.createElement("h1");
  h1.innerText = projectTitle;

  const par = document.createElement("p");
  par.innerText = tagline;

  ///edit & delete buttons
  const controls = document.createElement("div");
  controls.innerHTML =
    "<button class='project-edit'>Edit</button> <button class='button-delete'>Delete Project</button>";

  //add to DOM
  container.appendChild(projectDropdown);
  container.appendChild(controls);
  container.appendChild(h1);
  container.appendChild(par);

  container.appendChild(newProjectButton);

  //Add Event Listeners
  document.querySelector("#newProjectButton").addEventListener("click", () => {
    newProjectForm();
  });

  document.querySelector(".button-delete").addEventListener("click", (e) => {
    e.preventDefault();
    deleteProject(currProject.id);
    onLoad();
  });
};

export default createHeader;
