import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./action";

const initialState = {
  value: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export default categoriesSlice.reducer;
