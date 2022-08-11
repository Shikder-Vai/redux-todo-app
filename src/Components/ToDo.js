import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../Actions/ActionsIndex";
import ShowTodo from "./ShowTodo";

const Todo = () => {
  const [todoData, setTodoData] = useState("");
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.TodoReducer.todoList);

  return (
    <div className=" p-16 h-screen bg-slate-600 flex flex-col items-center">
      <h1 className=" text-white text-center">make your Todo Tasks</h1>
      <div>
        <div className="flex justify-center items-center">
          <input
            className="px-3 py-1 rounded-md w-64 my-2"
            type="text"
            placeholder="📝 Input your tasks"
            value={todoData}
            onChange={(event) => setTodoData(event.target.value)}
          />
          <button
            onClick={() => dispatch(addTodo(todoData), setTodoData(""))}
            className=" bg-slate-400 text-white p-1 mx-2 rounded-lg"
          >
            Add
          </button>
        </div>
      </div>
      <div className="mt-10 w-96 bg-slate-400 rounded-md flex items-center flex-col">
        {lists?.map((item) => (
          <ShowTodo
            dispatch={dispatch}
            key={item.id}
            item={item}
            deleteTodo={deleteTodo}
          />
        ))}
        {lists.length >= 1 && (
          <button
            onClick={() => dispatch(removeTodo())}
            className=" flex items-center p-1 text-white font-medium bg-green-400 rounded m-2 "
          >
            <small>All Remove</small>
          </button>
        )}
      </div>
    </div>
  );
};

export default Todo;
