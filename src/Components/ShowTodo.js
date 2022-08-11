import React, { useState } from "react";

const ShowTodo = ({ deleteTodo, item, dispatch }) => {
  const [taskDone, setTaskDone] = useState(false);
  const handleTaskDone = () => {
    if (taskDone === true) {
      setTaskDone(false);
    } else {
      setTaskDone(true);
    }
  };
  return (
    <div className="bg-sky-300 p-2 w-80 rounded-lg flex justify-between items-center my-2">
      <div className=" flex">
        {/* taskDone button */}
        <input
          type="checkbox"
          className=" mr-2"
          onClick={() => handleTaskDone()}
        />
        <h2
          className={
            taskDone ? "line-through text-red-400" : " text-yellow-800"
          }
        >
          {item.data}
        </h2>
      </div>
      <small>
        <button
          onClick={() => dispatch(deleteTodo(item.id))}
          className="bg-red-500  rounded flex justify-items-end"
        >
          <small className="text-white px-1">delete</small>
        </button>
      </small>
    </div>
  );
};

export default ShowTodo;
