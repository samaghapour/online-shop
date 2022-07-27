import { createAsyncThunk } from "@reduxjs/toolkit";
import { commerce } from "../../lib/commerce";

export const getProductDetails = createAsyncThunk(
  "productDetails/getProductDetails",
  async (id) => {
    const response = await commerce.products.retrieve(id);
    return response;
  }
);
