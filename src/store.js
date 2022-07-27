import { configureStore } from "@reduxjs/toolkit";
import allProductSlice from "./features/allProducts/allProductsSlice";
import cartSlice from "./features/cart/cartSlice";
import categoriesSlice from "./features/categories/categoriesSlice";
import ProductDetailsSlice from "./features/productDetails/ProductDetailsSlice";
import productsSlice from "./features/products/productsSlice";

export const store = configureStore({
  reducer: {
    AllProducts: allProductSlice,
    Categories: categoriesSlice,
    Products: productsSlice,
    ProductDetails: ProductDetailsSlice,
    Cart: cartSlice,
  },
});
