import { createSlice } from "@reduxjs/toolkit";
import { addToCart, deleteFromCart, getCart, updateCart } from "./action";

const initialState = {
  value: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCart.fulfilled, (state, action) => {
        state.value = action.payload;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.value = action.payload;
      })
      .addCase(deleteFromCart.fulfilled, (state, action) => {
        state.value = action.payload;
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.value = action.payload;
      });
  },
});

export default cartSlice.reducer;
