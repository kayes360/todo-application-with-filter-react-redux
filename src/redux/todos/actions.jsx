import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_PRIORITY,
  DELETE_TODO,
  All_COMPLETE,
  CLEAR_COMPLETED,
} from "src/redux/todos/actionTypes";

export const add_todo = (value) => {
  return {
    type: ADD_TODO,
    payload: value,
  };
};
export const toggle_todo = (todoId) => {
  return {
    type: TOGGLE_TODO,
    payload: todoId,
  };
};
export const set_priority = (todoId, priorityColor) => {
  return {
    type: SET_PRIORITY,
    payload: {
      todoId,
      priorityColor,
    },
  };
};
export const delete_todo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
};
export const all_complete = () => {
  return {
    type: All_COMPLETE,
  };
};
export const clear_completed = () => {
  return {
    type: CLEAR_COMPLETED,
  };
};
