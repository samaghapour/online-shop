import { createSlice } from "@reduxjs/toolkit";
import { getProductDetails } from "./action";

const initialState = {
  error: false,
  loading: false,
  value: null,
};

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProductDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductDetails.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.value = action.payload;
      });
  },
});

export default productDetailsSlice.reducer;
