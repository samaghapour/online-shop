import { createAsyncThunk } from "@reduxjs/toolkit";

import { commerce } from "../../lib/commerce";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (productCategory) => {
    const response = await commerce.products.list({
      category_slug: [productCategory],
      limit: 500,
    });
    const ExistingProducts = response?.data?.filter(
      (item) => item.price.raw > 0
    );
    return ExistingProducts;
  }
);
