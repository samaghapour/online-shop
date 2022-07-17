const ProductsReducer = (state = null, action) => {
  switch (action.type) {
    case "GET_EXISITING_PRODUCTS":
      return action.payload;

    default:
      return state;
  }
};

export default ProductsReducer;
