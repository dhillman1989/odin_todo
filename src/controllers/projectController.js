import { v4 as uuidv4 } from "uuid";

//CREATE A DEFAULT PROJECT TO DISPLAY IF THERE IS NOTHING IN LOCAL STORAGE
export const createDefaultProject = () => {
  const newProject = {
    id: uuidv4(),
    projectTitle: "Example Project",
    tagline: "feel free to edit or delete me",
    todos: [
      {
        id: uuidv4(),
        title: "delete me",
        desc: "or edit, your choice",
        duedate: null,
        priority: "high",
        completed: true,
      },
    ],
  };
  const newData = [newProject];
  localStorage.setItem("projects", JSON.stringify(newData));
  return JSON.parse(localStorage.getItem("projects")).length - 1;
};

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
  return JSON.parse(localStorage.getItem("projects")).length - 1;
};

export const getProjects = () => {
  const data = JSON.parse(localStorage.getItem("projects"));
  if (!data) {
    createDefaultProject();
    let newData = JSON.parse(localStorage.getItem("projects"));
    return newData;
  }
  return data;
};

export const editProject = (projectId, newTitle, newTagline) => {
  const data = JSON.parse(localStorage.getItem("projects"));
  const index = data.findIndex((p) => p.id == projectId);
  data[index] = { ...data[index], projectTitle: newTitle, tagline: newTagline };
  localStorage.setItem("projects", JSON.stringify(data));
};

export const deleteProject = (projectId) => {
  const data = JSON.parse(localStorage.getItem("projects"));
  const newData = data.filter((p) => p.id != projectId);
  localStorage.setItem("projects", JSON.stringify(newData));
};

export const getOneProject = (currProject) => {
  const data = JSON.parse(localStorage.getItem("projects")) || [];
  let project = data.find((p) => p.id == currProject.id);
  return project;
};

//ALTER TODOS
export const addTodo = (projectId, todoTitle, desc, duedate, priority) => {
  const data = JSON.parse(localStorage.getItem("projects")) || [];
  const index = data.findIndex((p) => p.id == projectId);
  const todo = {
    id: uuidv4(),
    title: todoTitle,
    desc,
    completed: false,
    duedate,
    priority,
  };

  const newTodos = [...data[index].todos, todo];

  data.splice(index, 1, {
    ...data[index],
    todos: [...newTodos],
  });

  localStorage.setItem("projects", JSON.stringify(data));
};

export const deleteTodo = (projectId, todoId) => {
  const data = JSON.parse(localStorage.getItem("projects"));
  const pIndex = data.findIndex((p) => p.id == projectId);

  const newTodos = [...data[pIndex].todos.filter((t) => t.id != todoId)];

  data.splice(pIndex, 1, { ...data[pIndex], todos: [...newTodos] });

  localStorage.setItem("projects", JSON.stringify(data));
};

export const toggleTodoStatus = (projectId, todoId) => {
  const data = JSON.parse(localStorage.getItem("projects"));
  const pIndex = data.findIndex((p) => p.id == projectId);

  const tIndex = data[pIndex].todos.findIndex((t) => t.id == todoId);
  data[pIndex].todos[tIndex] = {
    ...data[pIndex].todos[tIndex],
    completed: !data[pIndex].todos[tIndex].completed,
  };
  localStorage.setItem("projects", JSON.stringify(data));
};

export const editTodo = (projectId, todoId, title, desc, duedate, priority) => {
  const data = JSON.parse(localStorage.getItem("projects"));
  const pIndex = data.findIndex((p) => p.id == projectId);
  const tIndex = data[pIndex].todos.findIndex((t) => t.id == todoId);

  data[pIndex].todos[tIndex] = {
    ...data[pIndex].todos[tIndex],
    title,
    desc,
    duedate,
    priority,
  };

  localStorage.setItem("projects", JSON.stringify(data));
};
