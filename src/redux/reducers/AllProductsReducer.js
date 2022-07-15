const AllProductsReducer = (state = null, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return action.payload;

    default:
      return state;
  }
};

export default AllProductsReducer;
