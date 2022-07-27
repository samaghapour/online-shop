import { createAsyncThunk } from "@reduxjs/toolkit";
import { commerce } from "../../lib/commerce";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const response = await commerce.categories.list();
    return response.data;
  }
);
