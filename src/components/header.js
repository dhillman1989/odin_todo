import onLoad from "./onLoad";

const createHeader = (index, projects, currProject) => {
  const { projectTitle, tagline } = currProject;

  const projectDropdown = document.createElement("select");
  projectDropdown.innerHTML = projects.map(
    (p, idx) => `<option value=${idx}>${p.projectTitle}</option>`
  );
  projectDropdown.onchange = (e) => {
    console.log(e.target.value);
    onLoad(e.target.value);
  };
  projectDropdown.selectedIndex = index;

  const container = document.querySelector(".container");
  const h1 = document.createElement("h1");
  h1.innerText = projectTitle;

  const par = document.createElement("p");
  par.innerText = tagline;

  container.appendChild(projectDropdown);
  container.appendChild(h1);
  container.appendChild(par);
};

export default createHeader;
