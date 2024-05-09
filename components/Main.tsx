"use client";

import { useState } from "react";

import Filter from "./Filter";

const Main = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState();

  const changeHandler = (e) => {
    e.preventDefault();

    setNewTask(() => e.target.value.trim());
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setTodoList([newTask, ...todoList]);
    setNewTask("");
  };

  return (
    <main className="flex flex-col gap-y-10">
      <div>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            className="w-full rounded py-2 px-5 outline-none"
            onChange={changeHandler}
            value={newTask}
          />
        </form>
      </div>

      <ul className="bg-white min-h-96 flex flex-col gap-y-5 overflow-y-scroll p-3 rounded">
        {todoList &&
          todoList.map((task, index) => (
            <li key={index} className="flex gap-5">
              <input type="radio" />
              <p>{task}</p>
            </li>
          ))}

        <div className="flex justify-between mt-auto">
          <div>{5} items left</div>
          <Filter className={"hidden lg:block"} />
          <div>Clear Completed</div>
        </div>
      </ul>
    </main>
  );
};

export default Main;
