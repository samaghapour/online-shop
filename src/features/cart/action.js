import { createAsyncThunk } from "@reduxjs/toolkit";
import { commerce } from "../../lib/commerce";

export const getCart = createAsyncThunk("cart/getCart", async () => {
  const response = await commerce.cart.retrieve();
  return response;
});
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ id, quantityNumber }) => {
    const response = await commerce.cart.add(id, quantityNumber);
    return response.cart;
  }
);
export const deleteFromCart = createAsyncThunk(
  "cart/deleteFromCart",
  async (id) => {
    const response = await commerce.cart.remove(id);
    return response.cart;
  }
);
export const updateCart = createAsyncThunk(
  "cart/updateCart",
  async ({ lineId, quantityNumber }) => {
    const response = await commerce.cart.update(lineId, {
      quantity: quantityNumber,
    });
    return response.cart;
  }
);
