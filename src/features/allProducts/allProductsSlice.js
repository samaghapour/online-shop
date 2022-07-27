import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "./action";

const initialState = {
  loading: false,
  error: false,
  value: [],
};

export const allProductSlice = createSlice({
  name: "allProducts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProducts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.value = action.payload;
      });
  },
});

export default allProductSlice.reducer;
