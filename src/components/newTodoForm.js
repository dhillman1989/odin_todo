import onLoad from "./onLoad";
import { addTodo } from "../controllers/projectController";

const newTodoForm = (pIndex, currProject) => {
  const form = document.createElement("form");
  form.classList.add("popupform");
  form.innerHTML = `
        <input id="addNewTodo-title" placeholder="Task">
        <input id="addNewTodo-desc" placeholder="Extra details">
        <input id="addNewTodo-duedate" placeholder="due date">
        <input id="addNewTodo-priority" placeholder="priority">
        <button id="addNewTodo-submit">ADD TODO</button>
        `;

  document.querySelector("body").appendChild(form);

  document
    .querySelector("#addNewTodo-submit")
    .addEventListener("click", (e) => {
      e.preventDefault();
      addTodo(
        currProject.id,
        document.querySelector("#addNewTodo-title").value,
        document.querySelector("#addNewTodo-desc").value,
        document.querySelector("#addNewTodo-duedate").value,
        document.querySelector("#addNewTodo-priority").value
      );
      document.querySelector(".popupform").remove();
      onLoad(pIndex);
    });
};

export default newTodoForm;
