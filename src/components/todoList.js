import onLoad from "./onLoad";
import newTodoForm from "./newTodoForm";
import editTodoForm from "./editTodoForm";
import {
  getProjects,
  setProjects,
  addProject,
  getOneProject,
  addTodo,
  deleteTodo,
  toggleTodoStatus,
} from "../controllers/projectController";

///MOMENT JS FOR DATE FORMATTING
import moment from "moment";

export const createTodoList = (pIndex, currProject) => {
  const container = document.querySelector(".container");

  //INPUT TO ADD NEW TODOS
  const addNewTodoButton = document.createElement("button");
  addNewTodoButton.classList.add("button--primary");
  addNewTodoButton.innerHTML = `Add Todo`;
  addNewTodoButton.id = "addNewTodoButton";

  const list = document.createElement("ul");
  list.classList.add("todoList");

  container.appendChild(addNewTodoButton);
  addNewTodoButton.onclick = (e) => {
    e.preventDefault();
    newTodoForm(pIndex, currProject);
  };
  container.appendChild(list);
};

export const populateTodoList = (pIndex, currProject) => {
  const project = getOneProject(currProject);

  const list = document.querySelector(".todoList");

  list.innerHTML =
    !project || !project.todos.length
      ? `<div class="emptyState"><img src="./images/notodos.svg" class="emptyState__image"><h4>Nothing to see here yet!</h4></div>`
      : project.todos
          .map(
            (todo) => `
    <li class="todoList__todo priority-${todo.priority}">
      <input class="item-checkbox" data-id=${todo.id} type="checkbox" ${
              todo.completed && "checked"
            }/>
      <div class="todoList__text">
        <h4>${todo.title}</h4>
        <p>${todo.desc}</p>
      </div>
      <div class="todoList__duedate">${moment(todo.duedate).format(
        "MMM Do YYYY"
      )}</div>
      <div class= "todoList__controls">
        <i class="fas fa-pencil-alt" data-todotitle="${todo.title}"
        data-tododesc="${todo.desc}"
        data-tododuedate="${todo.duedate}"
        data-todopriority="${todo.priority}"
        data-todoid ="${todo.id}"></i>
        <i class="fas fa-minus-circle" data-todoid="${todo.id}"></i>
      </div>
      
    </li>
    `
          )
          .join("");

  ///EDIT CONTROLS
  const editButtons = document.querySelectorAll(".fa-pencil-alt");
  editButtons.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      editTodoForm(pIndex, currProject, {
        title: e.target.dataset.todotitle,
        desc: e.target.dataset.tododesc,
        duedate: e.target.dataset.tododuedate,
        priority: e.target.dataset.todopriority,
        id: e.target.dataset.todoid,
      });
    })
  );

  ///DELETE CONTROLS
  const deleteButtons = document.querySelectorAll(".fa-minus-circle");
  deleteButtons.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      confirm(
        "Are you sure you want to delete this task? This can't be undone."
      ) &&
        deleteTodo(
          currProject.id.toString(),
          e.target.dataset.todoid.toString()
        );
      populateTodoList(pIndex, currProject);
    })
  );

  ///TOGGLE CHECKBOX
  const checkboxes = document.querySelectorAll(".item-checkbox");
  checkboxes.forEach((cbox) => {
    cbox.addEventListener("click", (e) => {
      toggleTodoStatus(currProject.id, e.target.dataset.id);
    });
  });
};
