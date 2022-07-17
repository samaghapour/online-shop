const CartReducer = (state = null, action) => {
  switch (action.type) {
    case "GET_CART":
      return action.payload;

    default:
      return state;
  }
};
export default CartReducer;
