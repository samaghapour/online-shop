import { useAuth0 } from "@auth0/auth0-react";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../../../redux/actions";

function AddToCartContainer({ data }) {
  const quantityRef = useRef();
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  const AddToCartFunc = () => {
    if (isAuthenticated) {
      const quantityNumber = quantityRef.current.value;

      dispatch(AddToCart(data.id, quantityNumber));
    } else {
      alert("You need to sign in first!");
    }
  };
  return (
    <div className="addToCart__container">
      <div className="ProductAddQuantity">
        <label htmlFor="quantity">Quantity:</label>
        <select
          name="quantity"
          className="QuantitySelector"
          defaultValue={"1"}
          ref={quantityRef}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <button
        className="addToCart_btn"
        data-poduct-id={data.id}
        title="Add this product to yout cart"
        onClick={AddToCartFunc}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default AddToCartContainer;
