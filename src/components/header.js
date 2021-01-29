const createHeader = (project) => {
  const { projectTitle, tagline } = project;
  const container = document.querySelector(".container");
  const h1 = document.createElement("h1");
  h1.innerText = projectTitle;

  const par = document.createElement("p");
  par.innerText = tagline;

  container.appendChild(h1);
  container.appendChild(par);
};

export default createHeader;
