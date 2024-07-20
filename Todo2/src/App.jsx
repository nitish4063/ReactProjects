import { useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { useTodo } from "./context/TodoContext";

function App() {
  const { todoArr, setTodoArr } = useTodo();

  useEffect(() => {
    const todolocal = JSON.parse(localStorage.getItem("todolocal"))

    if(todolocal && todolocal.length > 0){
        setTodoArr(todolocal) 
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todolocal", JSON.stringify(todoArr))
  }, [todoArr])

  return (
    <>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>

          <div className="mb-4">
            <TodoForm />
          </div>

          <div className="flex flex-wrap gap-y-3">
            {todoArr.map((obj) => (
              <div key={obj.id} className="w-full">
                <TodoItem todoObj={obj} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
