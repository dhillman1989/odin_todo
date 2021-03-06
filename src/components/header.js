import onLoad from "./onLoad";
import newProjectForm from "./newProjectForm";
import editProjectForm from "./editProjectForm";
import { deleteProject } from "../controllers/projectController";

const createHeader = (pIndex, projects, currProject) => {
  const { projectTitle, tagline } = currProject;
  const container = document.querySelector(".container");

  //dropdown
  const projectDropdown = document.createElement("select");
  projectDropdown.innerHTML = projects.map(
    (p, idx) => `<option value=${idx}>${p.projectTitle}  </option>`
  );
  projectDropdown.onchange = (e) => {
    onLoad(e.target.value);
  };
  projectDropdown.selectedIndex = pIndex;

  //add new project button

  //create header

  const h1 = document.createElement("h1");
  h1.classList.add("heading");
  h1.innerText = projectTitle;

  const par = document.createElement("p");
  par.classList.add("tagline");
  par.innerText = tagline;

  ///edit & delete buttons
  const controls = document.createElement("div");
  controls.classList.add("projectControls");
  controls.innerHTML = `<button id='newProjectButton' class='button--textonly'> New Project</button> 
    <button class='project-edit button--textonly'>Edit</button>
    <button class='button-delete button--textonly button--textdanger'>Delete Project</button>`;

  //add to DOM
  container.appendChild(projectDropdown);
  container.appendChild(controls);
  container.appendChild(h1);
  container.appendChild(par);

  //Add Event Listeners
  document.querySelector("#newProjectButton").addEventListener("click", () => {
    newProjectForm();
  });

  document.querySelector(".button-delete").addEventListener("click", (e) => {
    e.preventDefault();
    confirm(
      `Are you sure you want to delete "${currProject.projectTitle}"? This cannot be undone.`
    ) && deleteProject(currProject.id);
    onLoad();
  });

  document.querySelector(".project-edit").addEventListener("click", (e) => {
    e.preventDefault();
    editProjectForm(pIndex, currProject);
  });
};

export default createHeader;
