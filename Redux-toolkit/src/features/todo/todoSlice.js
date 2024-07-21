import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoSliceName",
  initialState: {
    //   todoArr: [{ id: 1, text: "Default todo", completed: false }]
    todoArr: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload, // payload is that we will send
        completed: false,
      };
      state.todoArr.push(newTodo);
    },
    removeTodo: (state, action) => {
      // action.payload = id (that we sent to delete)
      state.todoArr = state.todoArr.filter(
        (todoObj) => todoObj.id !== action.payload
      );
    },
    updateTodo: (state, action) => {
      state.todoArr = state.todoArr.map((todoObj) =>
        todoObj.id === action.payload.id ? {
            id: nanoid(),
            text: 'new todo', // payload is that we will send
            completed: false} : todoObj
      );
    console.log(action.payload)
    console.log('clicked')
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
// export default todoSlice.reducer
