import createHeader from "./header";
import { createTodoList, populateTodoList } from "./todoList";

const onLoad = () => {
  createHeader("TEST", "what are you waiting for?");
  createTodoList();
};

export default onLoad;
