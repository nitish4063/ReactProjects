import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSliceName",
  initialState: {
    productArr: [],
  },
  reducers: {
    add: (state, action) => {
      state.productArr.push(action.payload);
    },
    remove: (state, action) => {
      state.productArr = state.productArr.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

// just for learning purpose
export const tempSlice = createSlice({
  name: "tempSliceName",
  initialState: {
    tempArr: [],
  },
  reducers: {
    addTemp: (state, action) => {
      state.tempArr.push(action.payload);
    },
  },
});

export const { addTemp } = tempSlice.actions;
export const tempReducer = tempSlice.reducer;
