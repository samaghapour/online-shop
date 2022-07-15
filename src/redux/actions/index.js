import { commerce } from "../../lib/commerce";

export const GetCategories = () => async (dispatch) => {
  try {
    commerce.categories.list().then((category) => {
      dispatch({ type: "GET_CATEGORIES", payload: category.data });
    });
  } catch (error) {
    console.log(error);
  }
};

export const GetAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "IS_LOADING", payload: true });
    commerce.products.list({ limit: 100 }).then((response) => {
      dispatch({
        type: "GET_ALL_PRODUCTS",
        payload: response.data,
      });
      dispatch({ type: "IS_LOADING", payload: false });
    });
  } catch (error) {
    console.log(error);
    alert("something went wrong!");
  }
};
