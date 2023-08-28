import todosReducer from "./todos/actionReducer";
import filterReducer from "./filters/actionReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todos: todosReducer,
    filters: filterReducer
})
export default rootReducer