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

export const GetProducts = (productCategory) => async (dispatch) => {
  try {
    dispatch({ type: "IS_LOADING", payload: true });
    commerce.products
      .list({
        category_slug: [productCategory],
        limit: 200,
      })
      .then((response) => {
        const exisitingProducts = response.data.filter(
          (item) => item.price.raw > 0
        );

        dispatch({
          type: "GET_EXISITING_PRODUCTS",
          payload: exisitingProducts,
        });
        dispatch({ type: "IS_LOADING", payload: false });
      });
  } catch (error) {
    console.log(error);
  }
};

export const GetProductDetails = (id) => (dispatch) => {
  try {
    dispatch({ type: "IS_LOADING", payload: true });
    commerce.products.retrieve(id).then((response) => {
      dispatch({ type: "GET_PRODUCT_DETAILS", payload: response });
    });
    dispatch({ type: "IS_LOADING", payload: false });
  } catch (error) {
    console.log(error);
  }
};

export const AddToCart = (id, quantityNumber) => async (dispatch) => {
  try {
    commerce.cart.add(id, quantityNumber).then((response) => {
      dispatch({ type: "GET_CART", payload: response });
    });
  } catch (error) {
    console.log(error);
  }
};

export const UpdateProductQuantity =
  (lineId, quantityNumber) => async (dispatch) => {
    try {
      commerce.cart
        .update(lineId, { quantity: quantityNumber })
        .then((response) => {
          dispatch({
            type: "UPDATE_CART_BY_QUANTITY",
            payload: response,
          });
        });
    } catch (error) {
      console.log(error);
      console.log("error received from UpdateProductQuantity action");
      alert("something went wrong! , try again please");
    }
  };

export const DeleteFromCart = (id) => async (dispatch) => {
  try {
    commerce.cart.remove(id).then((response) => {
      dispatch({
        type: "DELETE_ADDED_PRODUCTS",
        payload: response,
      });
    });
  } catch (error) {
    console.log(error);
    console.log("error received from deleteFromCart action");
    alert("something went wrong! , try again please");
  }
};

//search action for search challenge
// export const SearchProduct =
//   ( searchValue, allProducts) => async (dispatch) => {
//     dispatch({ type: 'IS_LOADING', payload: true });

//       let searchResult = allProducts.filter((product) => {
//         return (
//           product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
//           product.id.toLowerCase() === searchValue.toLowerCase() ||
//           product.description.toLowerCase().includes(searchValue.toLowerCase())
//         );
//       });

//     dispatch({ type: 'SEARCH_PRODUCT_RESULT', payload: searchResult });
//     dispatch({ type: 'IS_LOADING', payload: false });
//   };
