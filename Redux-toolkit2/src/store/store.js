import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, tempReducer } from "./slice";
import { productReducer } from "./productSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    temp: tempReducer,
    products: productReducer,
  },
});
