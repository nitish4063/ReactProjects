import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// slice for API call

export const productSlice = createSlice({
  name: "productSliceName",
  initialState: {
    data: [],
    status: "idle",
  },
  reducers: {
    // fetchProducts(state, action){
    //     state.data = action.payload;
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export const { fetchProducts } = productSlice.actions;
export const productReducer = productSlice.reducer;

// export function getProducts(){
//     return async function getProductsThunk(dispatch, getState){
//         const data = await fetch("https://fakestoreapi.com/products")
//         const res = await data.json()
//         dispatch(fetchProducts(res))
//     }
// }

export const getProducts = createAsyncThunk("products/get", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const res = await data.json();
  return res;
});
