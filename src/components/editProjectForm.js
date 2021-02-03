import onLoad from "./onLoad";
import { editProject } from "../controllers/projectController";

const editProjectForm = (pIndex, currProject) => {
  //remove any existing popupforms (if any)
  document.querySelector(".popupform") &&
    document.querySelector(".popupform").remove();

  const form = document.createElement("form");
  form.classList.add("popupform");
  form.classList.add("editproject-form");
  form.innerHTML = `
  <div class="close-popup">X</div>
  <h2>EDIT ${currProject.projectTitle}</h2>
  <input id="editProject-title" value="${currProject.projectTitle}" required>
  <input id="editProject-tagline" value="${currProject.tagline}" required>
  <button id="editProject-submit" class="button--secondary">UPDATE PROJECT</button>
  `;

  document.querySelector("body").appendChild(form);

  document
    .querySelector("#editProject-submit")
    .addEventListener("click", (e) => {
      e.preventDefault();
      editProject(
        currProject.id,
        document.querySelector("#editProject-title").value,
        document.querySelector("#editProject-tagline").value
      );
      document.querySelector(".popupform").remove();
      onLoad(pIndex);
    });

  document
    .querySelector(".close-popup")
    .addEventListener("click", () =>
      document.querySelector(".popupform").remove()
    );
};

export default editProjectForm;
