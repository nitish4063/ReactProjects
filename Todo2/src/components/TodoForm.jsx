import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
  const [inputMsg, setInputMsg] = useState("");
  const { addTodo } = useTodo();

  const addCurrentTodo = (e) => {
    e.preventDefault()
    if(!inputMsg) return

    addTodo({id: Date.now(), todo: inputMsg, completed: false})
    setInputMsg('')
  }

  return (
    <form onSubmit={addCurrentTodo}  className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        value={inputMsg}
        onChange={(e) => setInputMsg(e.target.value)}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
