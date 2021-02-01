import newProjectForm from "./newProjectForm";

export const projectsEmptyState = () => {
  const container = document.querySelector(".container");

  const emptyState = document.createElement("div");
  emptyState.classList.add("emptyState");
  emptyState.innerHTML = `
  <img class="emptyState__image" src="./images/nodata.svg"><h2>Nothing here yet!</h2>
    <p>Try adding a new project...<p>
    <button class="newProjectButton button--primary"> + NEW PROJECT</button>`;

  container.appendChild(emptyState);

  document.querySelector(".newProjectButton").addEventListener("click", (e) => {
    e.preventDefault();
    newProjectForm();
  });
};
