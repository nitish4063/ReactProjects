import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todoSliceName',
    initialState: {
        todoArr: [{id: 1, text: 'Default todo', completed: false}]
    },
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload,   // payload is that we will send
                completed: false
            }
            state.todoArr.push(newTodo)
        },
        removeTodo: (state, action) => {
            // action.payload = id (that we sent to delete)
            state.todoArr = state.todoArr.filter(
                (todoObj) => todoObj.id !== action.payload
            )
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

// export const todoReducer = todoSlice.reducer
export default todoSlice.reducer
