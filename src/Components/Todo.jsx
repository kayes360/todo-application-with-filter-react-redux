import Cancel from "src/assets/images/cancel.png";
import { useDispatch } from "react-redux";
import {
  toggle_todo,
  set_priority,
  delete_todo,
} from "src/redux/todos/actions";

export default function Todo({ todo }) {
  const { id, todoText, completed, priorityColor } = todo;

  const dispatch = useDispatch();

  return (
    <div
      className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0"
      key={id}
    >
      <div
        className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          completed && "border-green-500 focus-within:border-green-500"
        }`}
        onClick={() => dispatch(toggle_todo({ id }))}
      >
        <input
          type="checkbox"
          className="opacity-0 absolute rounded-full cursor-pointer"
        />

        <svg
          className={`${
            completed ? "" : "hidden"
          } fill-current w-3 h-3 text-green-500 pointer-events-none`}
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>

      <div className={`select-none flex-1 ${completed ? "line-through" : ""}`}>
        {/* <div className={` "select-none flex-1 ${completed && "line-through"}"`}> */}
        {todoText}
      </div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${
          priorityColor === "green" && "bg-green-500"
        }`}
        onClick={() => dispatch(set_priority(id, "green"))}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
          priorityColor === "yellow" && "bg-yellow-500"
        }`}
        onClick={() => dispatch(set_priority(id, "yellow"))}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${
          priorityColor === "red" && "bg-red-500"
        }`}
        onClick={() => dispatch(set_priority(id, "red"))}
      ></div>

      <img
        src={Cancel}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
        onClick={() => dispatch(delete_todo({ id }))}
      />
    </div>
  );
}
