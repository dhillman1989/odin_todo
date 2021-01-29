export const getProjects = () => {
  const data = JSON.parse(localStorage.getItem("projects"));
  return data;
};

export const getProjectTitles = () => {
  let projectTitles = [];
  const data = JSON.parse(localStorage.getItem("projects"));
  data.forEach((p) => projectTitles.push(p.projectTitle));

  return projectTitles;
};

export const setProjects = (newData) => {
  localStorage.setItem("projects", JSON.stringify(newData));
};

export const getOneProject = (projectTitle) => {
  const data = JSON.parse(localStorage.getItem("projects"));
  let project = data.find((p) => p.projectTitle == projectTitle);
  return project;
};
