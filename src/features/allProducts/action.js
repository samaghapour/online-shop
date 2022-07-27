import { createAsyncThunk } from "@reduxjs/toolkit";
import { commerce } from "../../lib/commerce";

export const getAllProducts = createAsyncThunk(
  "allProducts/getAllProducts",
  async () => {
    const response = await commerce.products.list({ limit: 100 });
    return response.data;
  }
);
