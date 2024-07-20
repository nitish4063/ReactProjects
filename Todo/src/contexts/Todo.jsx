import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todoArr: [
        {
            id: 1,
            todo: "default todo text",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider