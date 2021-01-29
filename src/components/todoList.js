export const createTodoList = () => {
  const container = document.querySelector(".container");
  const list = document.createElement("ul");
  list.classList.add("todoList");

  container.appendChild(list);
};

export const populateTodoList = () => {
  const list = document.querySelector(".todoList");
  list.innerHTML = `
      <li class="todoList__todo">
        <input class="todoList__input--new" />
        <div class="todoList__controls">
          <i class="fas fa-plus-circle"></i>
        </div>
      </li>

      <li class="todoList__todo">
        <input type="checkbox" />
        <div class="todoList__text">
          <h4>task 1</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            aliquam.
          </p>
        </div>
        <div class="todoList__controls">
          <i class="fas fa-pencil-alt"></i>
          <i class="fas fa-minus-circle"></i>
        </div>
      </li>
      <li class="todoList__todo">
        <input type="checkbox" />
        <div class="todoList__text">
          <h4>task 2</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            aliquam.
          </p>
        </div>
        <div class="todoList__controls">
          <i class="fas fa-pencil-alt"></i>
          <i class="fas fa-minus-circle"></i>
        </div>
      </li>
  `;
};
