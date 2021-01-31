import { addProject } from "../controllers/projectController";

const newProjectForm = () => {
  const form = document.createElement("form");
  form.classList.add("popupform");
  form.innerHTML = `<input id="addNewProject-title" placeholder="Project Title"><input id="addNewProject-tagline" placeholder="Tag Line">
  <button id="addNewProject-submit">ADD PROJECT</button>`;

  document.querySelector("body").appendChild(form);

  document
    .querySelector("#addNewProject-submit")
    .addEventListener("click", (e) => {
      e.preventDefault();
      addProject(
        document.querySelector("#addNewProject-title").value,
        document.querySelector("#addNewProject-tagline").value
      );
    });
};

export default newProjectForm;