import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_PRIORITY,
  DELETE_TODO,
  All_COMPLETE,
  CLEAR_COMPLETED,
} from "src/redux/todos/actionTypes";

const initialState = [

];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          todoText: action.payload.todoText,
          completed: false,
          priorityColor: '',
        },
      ];
    case TOGGLE_TODO: 
      return state.map (todo =>{
        if(todo.id !== action.payload.id){
          return todo
        }
        return {
          ...todo,
          completed: !todo.completed
        }
      })
    case SET_PRIORITY:
      console.log(action.payload.priorityColor)
      return state.map((todo)=>{
        if (todo.id !== action.payload.todoId) {
          return todo
        }
        return{
          ...todo,
          priorityColor: action.payload.priorityColor
        }
      })
     
    case DELETE_TODO: 
      return state.filter(todo=> todo.id !== action.payload.id)
    
    case All_COMPLETE:
      return state.map((todo)=>{
        if( todo.completed === false){
          return {
            ...todo,
            completed: true
          }
        }
        return todo
      })
    case CLEAR_COMPLETED:
      console.log("clear")  
    return state.filter((todo)=> todo.completed === false)
    default:
      return state;
  }
};

export default todosReducer;
