import onLoad from "./onLoad";
import { addProject } from "../controllers/projectController";

const newProjectForm = () => {
  //remove any existing popupforms (if any)
  document.querySelector(".popupform") &&
    document.querySelector(".popupform").remove();

  const form = document.createElement("form");
  form.classList.add("popupform");
  form.classList.add("newproject-form");
  form.innerHTML = `
  <h2>NEW PROJECT</h2>
  <input id="addNewProject-title" placeholder="Project Title" required>
  <input id="addNewProject-tagline" placeholder="Tag Line" required>
  <button id="addNewProject-submit">ADD PROJECT</button>
  `;

  document.querySelector("body").appendChild(form);

  document
    .querySelector("#addNewProject-submit")
    .addEventListener("click", (e) => {
      e.preventDefault();
      if (
        document.querySelector("#addNewProject-title").value != "" &&
        document.querySelector("#addNewProject-tagline").value != ""
      ) {
        let newIndex = addProject(
          document.querySelector("#addNewProject-title").value,
          document.querySelector("#addNewProject-tagline").value
        );
        document.querySelector(".popupform").remove();
        onLoad(newIndex);
      }
    });
};

export default newProjectForm;
