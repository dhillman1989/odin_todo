import { v4 as uuidv4 } from "uuid";

export const changeProjectIndex = (projectId) => {
  let data = localStorage.getItem("projects");
  let index = data.findIndex((p) => p.id == projectId);
  return index;
};

export const addProject = (projectTitle, tagline) => {
  const data = JSON.parse(localStorage.getItem("projects")) || [];
  const newProject = { id: uuidv4(), projectTitle, tagline, todos: [] };
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
  let project = data.find((p) => p.id == currProject.id);
  return project;
};

//ALTER TODOS
export const addTodo = (projectId, todoTitle) => {
  const data = JSON.parse(localStorage.getItem("projects")) || [];
  const index = data.findIndex((p) => p.id == projectId);
  const todo = {
    id: uuidv4(),
    title: todoTitle,
    desc: "",
    completed: false,
    duedate: "tbc",
    priority: "low",
  };

  const newTodos = [...data[index].todos, todo];

  data.splice(index, 1, {
    ...data[index],
    todos: [...newTodos],
  });

  localStorage.setItem("projects", JSON.stringify(data));
};

export const deleteTodo = (projectId, todoId) => {
  const data = JSON.parse(localStorage.getItem("projects")) || [];
  const pIndex = data.findIndex((p) => p.id == projectId);

  const newTodos = [...data[pIndex].todos.filter((t) => t.id != todoId)];

  data.splice(pIndex, 1, { ...data[pIndex], todos: [...newTodos] });

  localStorage.setItem("projects", JSON.stringify(data));
};
