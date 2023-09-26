import {
  TODO_LOADED,
  ADD_TODO,
  TOGGLE_TODO,
  SET_PRIORITY,
  DELETE_TODO,
  All_COMPLETE,
  CLEAR_COMPLETED,
} from "src/redux/todos/actionTypes";

const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_LOADED:
      return action.payload;
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          todoText: action.payload.todoText,
          completed: false,
          priorityColor: "",
        },
      ];
    case TOGGLE_TODO:
      console.log("action.payload",action.payload)
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    case SET_PRIORITY:
      console.log(action.payload.priorityColor);
      return state.map((todo) => {
        if (todo.id !== action.payload.todoId) {
          return todo;
        }
        return {
          ...todo,
          priorityColor: action.payload.priorityColor,
        };
      });

    case DELETE_TODO:
      console.log(action.payload)
      return state.filter((todo) => todo.id !== action.payload);

    case All_COMPLETE:
      //if at least one incomplete
      const allTodosCompleted = state.every((todo) => todo.completed === true);
      if (allTodosCompleted) {
        return state.map((todo) => {
          return {
            ...todo,
            completed: false,
          };
        });
      } else {
        return state.map((todo) => {
          return {
            ...todo,
            completed: true,
          };
        });
      }
    //if all compl
    case CLEAR_COMPLETED:
      console.log("clear");
      return state.filter((todo) => todo.completed === false);
    default:
      return state;
  }
};

export default todosReducer;
