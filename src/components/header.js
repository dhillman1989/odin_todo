import newProjectForm from "./newProjectForm";

const createHeader = (project) => {
  const { projectTitle, tagline } = project;
  const container = document.querySelector(".container");

  const newProjectButton = document.createElement("button");
  newProjectButton.id = "newProjectButton";
  newProjectButton.innerText = "+ New Project";

  const h1 = document.createElement("h1");
  h1.innerText = projectTitle;

  const par = document.createElement("p");
  par.innerText = tagline;

  container.appendChild(h1);
  container.appendChild(par);
  container.appendChild(newProjectButton);

  document.querySelector("#newProjectButton").addEventListener("click", () => {
    newProjectForm();
  });
};

export default createHeader;
