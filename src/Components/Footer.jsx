import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter_by_status, filter_by_color } from "src/redux/filters/actions";

export default function Footer() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos);
  const {status, color} = useSelector((state) => state.filters); 
  const incompleteTaskCount = todoList.filter(
    (todo) => todo.completed === false
  ).length;

  const handleStatusChange = (status) => {
    dispatch(filter_by_status(status));
  };

  const handleColorChange = (currentColor) => { 
    console.log("state color", color)
    if (color.includes(currentColor)) {
      dispatch(filter_by_color(  currentColor,  "removed" ));
    } else {
      dispatch(filter_by_color(  currentColor,  "added" ));
    }
  };

  return (
    <>
      {todoList.length > 0 ? (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
          <p>
            {incompleteTaskCount === 0 ? "No" : incompleteTaskCount} tasks left
          </p>
          <ul className="flex space-x-1 items-center text-xs">
            <li
              className={`cursor-pointer ${status === "All" && "font-bold"}`}
              onClick={() => handleStatusChange("all")}
            >
              All
            </li>
            <li>|</li>
            <li
              className={`cursor-pointer ${
                status === "Incompleted" && "font-bold"
              }`}
              onClick={() => handleStatusChange("Incompleted")}
            >
              Incompleted
            </li>
            <li>|</li>
            <li
              className={`cursor-pointer ${
                status === "Completed" && "font-bold"
              }`}
              onClick={() => handleStatusChange("Completed")}
            >
              Completed
            </li>

            <li
              className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${color.includes('green') && 'bg-green-500'}`}
              onClick={() =>handleColorChange("green")}
            ></li>
              <li
                className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${color.includes('yellow') && 'bg-yellow-500'}`}
                onClick={() => handleColorChange("yellow")}
              ></li>
            <li
              className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${color.includes('red') && 'bg-red-500'}`}
              onClick={() => handleColorChange("red")}
            ></li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
