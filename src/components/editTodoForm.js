import onLoad from "./onLoad";
import { editTodo } from "../controllers/projectController";

const editTodoForm = (pIndex, currProject, todo) => {
  //remove any existing popupforms (if any)
  document.querySelector(".popupform") &&
    document.querySelector(".popupform").remove();

  const form = document.createElement("form");
  form.classList.add("popupform");
  form.classList.add("newtodo-form");
  form.innerHTML = `
  <div class="close-popup">X</div>
  <h2>Edit Todo</h2>
    <label for="editTodo-title">Task</label>
        <input id="editTodo-title" placeholder="Task" value="${
          todo.title
        }" required>
        <label for="editTodo-desc">Description</label>
        <input id="editTodo-desc" placeholder="Extra details" value="${
          todo.desc
        }">
        <label for="editTodo-duedate">Due Date</label>
        <input type="date" value="${todo.duedate}" id="editTodo-duedate" >
        <label for="editTodo-priority">Priority</label>
        <select id="editTodo-priority">
          <option ${
            todo.priority == 3 && "selected"
          } value="3">High priority</option>
          <option ${
            todo.priority == 2 && "selected"
          } value="2">Medium priority</option>
          <option ${
            todo.priority == 1 && "selected"
          } value="1">Low Priority</option>
          <option ${
            todo.priority == 0 && "selected"
          } value="0">no priority</option>
          </select>
        <button id="editTodo-submit" class="button--secondary">ADD TODO</button>
        `;

  document.querySelector("body").appendChild(form);

  document.querySelector("#editTodo-submit").addEventListener("click", (e) => {
    if (document.querySelector("#editTodo-title").value != "") {
      e.preventDefault();
      editTodo(
        currProject.id,
        todo.id,
        document.querySelector("#editTodo-title").value,
        document.querySelector("#editTodo-desc").value,
        document.querySelector("#editTodo-duedate").value,
        document.querySelector("#editTodo-priority").value
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

export default editTodoForm;
