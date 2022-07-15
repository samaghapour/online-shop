import { combineReducers } from "redux";
import AllProductsReducer from "./AllProductsReducer";
import categoriesReucer from "./CategoriesReducer";
import IsLoadingReducer from "./LoadingReducer";

export const AllReducers = combineReducers({
  Categories: categoriesReucer,
  IsLoading: IsLoadingReducer,
  AllProducts: AllProductsReducer,
});
