import onLoad from "./onLoad";
import { addTodo } from "../controllers/projectController";
import moment from "moment";

const newTodoForm = (pIndex, currProject) => {
  //remove any existing popupforms (if any)
  document.querySelector(".popupform") &&
    document.querySelector(".popupform").remove();

  const form = document.createElement("form");
  form.classList.add("popupform");
  form.classList.add("newtodo-form");
  form.innerHTML = `
  <div class="close-popup">X</div>
  <h2>Add a new Todo</h2>
        <label for="addNewTodo-title">Task</label>
        <input id="addNewTodo-title" placeholder="Task" required>
        <label for="addNewTodo-desc">Description</label>
        <input id="addNewTodo-desc" placeholder="Extra details">
        <label for="addNewTodo-duedate">Due Date</label>
        <input type="date" id="addNewTodo-duedate" >
        <label for="addNewTodo-priority">Priority</label>
        <select id="addNewTodo-priority">
          <option value="3">High priority</option>
          <option value="2">Medium priority</option>
          <option value="1">Low Priority</option>
          <option selected="selected" value="0">no priority</option>
          </select>
        <button id="addNewTodo-submit" class="button--secondary">ADD TODO</button>
        `;

  document.querySelector("body").appendChild(form);

  document
    .querySelector("#addNewTodo-submit")
    .addEventListener("click", (e) => {
      if (document.querySelector("#addNewTodo-title").value != "") {
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
      }
    });

  document
    .querySelector(".close-popup")
    .addEventListener("click", () =>
      document.querySelector(".popupform").remove()
    );
};

export default newTodoForm;
