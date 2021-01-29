export const addProject = (projectTitle, tagline) => {
  const data = JSON.parse(localStorage.getItem("projects")) || [];
  const newProject = { projectTitle, tagline, todos: [] };
  const newData = [...data, newProject];
  localStorage.setItem("projects", JSON.stringify(newData));
};

export const getProjects = () => {
  const data = JSON.parse(localStorage.getItem("projects")) || [];
  return data;
};

export const deleteProjects = () => {};

export const getOneProject = (currProject) => {
  const data = JSON.parse(localStorage.getItem("projects")) || [];
  let project = data.find((p) => p.projectTitle == currProject.projectTitle);
  return project;
};

//ALTER TODOS
export const addTodo = (projectTitle, todoTitle) => {
  const data = JSON.parse(localStorage.getItem("projects")) || [];
  const index = data.findIndex((p) => p.projectTitle == projectTitle);
  const todo = {
    title: todoTitle,
    desc: "",
    completed: false,
    duedate: "tbc",
  };

  const newTodos = [...data[index].todos, todo];

  data.splice(index, 1, {
    ...data[index],
    todos: [...newTodos],
  });

  localStorage.setItem("projects", JSON.stringify(data));
};
