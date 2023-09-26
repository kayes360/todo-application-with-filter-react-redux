import { delete_todo } from "../actions";

const deleteTodos = (todoId) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "DELETE",
    });
    dispatch(delete_todo(todoId));
  };
};
export default deleteTodos;
