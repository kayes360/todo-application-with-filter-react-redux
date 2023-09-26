import Notes from "../assets/images/notes.png";
import DoubleTick from "../assets/images/double-tick.png";
import Plus from "../assets/images/plus.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  add_todo,
  all_complete,
  clear_completed,
} from "src/redux/todos/actions";
import addTodo from "../redux/todos/thunk/addTodos";
export default function Header() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos); 
  const [todoText, setTodoText] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoItem = {
      id: crypto.randomUUID(),
      todoText,
      completed: false,
      priorityColor: '',
    }; 
    dispatch(addTodo(todoItem));
  };
  
  return (
    <div>
      <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
        <img src={Notes} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          onChange={(e) => setTodoText(e.target.value)}
          required
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url(${Plus})] bg-no-repeat bg-contain`}
          onClick={handleSubmit}
        ></button>
      </form>
      {todoList.length > 0 && (
        <ul className="flex justify-between my-4 text-xs text-gray-500">
          <li
            className="flex space-x-1 cursor-pointer"
            onClick={() => dispatch(all_complete())}
          >
            <img className="w-4 h-4" src={DoubleTick} alt="Complete" />
            <span>Complete All Tasks</span>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => dispatch(clear_completed())}
          >
            Clear completed
          </li>
        </ul>
      )}
    </div>
  );
}
