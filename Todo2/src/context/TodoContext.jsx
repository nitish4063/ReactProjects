import { useContext, createContext, useState } from "react";

export const TodoContext = createContext();

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = (props) => {
  const [todoArr, setTodoArr] = useState([]);

  const addTodo = (todoObj) => {
    setTodoArr((prevArr) => [todoObj, ...prevArr]);
  };

  const updateTodo = (id, todoObj) => {
    setTodoArr((curArr) =>
      curArr.map((obj) => {
        return obj.id === id ? todoObj : obj;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodoArr((curArr) => curArr.filter((obj) => {
        return obj.id !== id
    }))
  };

  const toggleComplete = (id) => {
    setTodoArr((curArr) => curArr.map((obj) => {
        return obj.id === id ? {...obj, completed: !obj.completed} : obj
    }))
  };

  return (
    <TodoContext.Provider
      value={{
        todoArr,
        setTodoArr,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
