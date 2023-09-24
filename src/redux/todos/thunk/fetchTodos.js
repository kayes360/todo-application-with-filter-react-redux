import { loaded_todo } from "../actions";

const fetchTodos = async (dispatch, getState) => {
  const response = await fetch("http://localhost:9000/todos");

  const todos = await response.json();
    console.log(todos)
  dispatch(loaded_todo(todos));
};
export default fetchTodos