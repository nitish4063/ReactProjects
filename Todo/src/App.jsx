import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts/Todo";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todoArr, setTodoArr] = useState([]);

  const addTodo = (todo) => {
    setTodoArr((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodoArr((prev) =>
      prev.map((eachVal) => (eachVal.id === id ? todo : eachVal))
    );
  };

  const deleteTodo = (id) => {
    setTodoArr((prev) => prev.filter((eachVal) => eachVal.id !== id));
  };

  const toggleComplete = (id) => {
    setTodoArr((prev) =>
      prev.map((eachVal) =>
        eachVal.id === id
          ? { ...eachVal, completed: !eachVal.completed }
          : eachVal
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodoArr(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoArr));
  }, [todoArr]);

  return (
    <TodoProvider
      value={{ todoArr, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todoArr.map((eachVal) => (
              <div key={eachVal.id} className="w-full">
                <TodoItem todo={eachVal}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
