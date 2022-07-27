import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./action";

const initialState = {
  loading: false,
  error: false,
  value: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.value = action.payload;
      });
  },
});

export default productsSlice.reducer;
