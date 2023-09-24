import { add_todo } from "../actions";

const addTodo = (todoItem) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/todos", {
      method: "POST",
      body: JSON.stringify({
        todoText: todoItem.todoText,
        completed: false,  
        priorityColor: todoItem.priorityColor,
      }),
      headers: {
        "Content-type": "application/json; charset= UTF-8",
      },
    });
    console.log("async todoItem", todoItem)
    const todo = await response.json();
    console.log("async todo", todo)
    dispatch(add_todo(todo));
  };
};
export default addTodo;
