import { set_priority } from "../actions";

const changeColor = (todoId, priorityColor) => {
    console.log("changeColor")
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({ 
        priorityColor: priorityColor,
      }),
      headers: {
        "Content-type": "application/json; charset= UTF-8",
      },
    }); 
    const todo = await response.json();  
    dispatch(set_priority(todo.id, todo.priorityColor));
  };
};
export default changeColor; 