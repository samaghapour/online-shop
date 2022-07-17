import { combineReducers } from "redux";
import AllProductsReducer from "./AllProductsReducer";
import CartReducer from "./CartReducer";
import categoriesReucer from "./CategoriesReducer";
import IsLoadingReducer from "./LoadingReducer";
import ProductDetailsReducer from "./ProductDetailsReducer";
import ProductsReducer from "./ProductsReducer";

export const AllReducers = combineReducers({
  Categories: categoriesReucer,
  IsLoading: IsLoadingReducer,
  AllProducts: AllProductsReducer,
  Products: ProductsReducer,
  ProductDetails: ProductDetailsReducer,
  Cart: CartReducer,
});
