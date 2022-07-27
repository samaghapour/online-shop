import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateCart, deleteFromCart } from "../../../../features/cart/action";

function BasketItem({ data }) {
  const quantityRef = useRef();
  const dispatch = useDispatch();

  const UpdateProductQuantityFunc = () => {
    dispatch(
      updateCart({ lineId: data.id, quantityNumber: quantityRef.current.value })
    );
  };

  const DeleteAddedProduct = () => {
    dispatch(deleteFromCart(data.id));
  };

  return (
    <div className="basket-item">
      <img src={data?.image.url} alt="" />
      <div className="basket-item-content">
        <Link to={`/saved/${data.product_id}`}>{data?.product_name}</Link>
        <div>
          <div className="quantity__container">
            <label htmlFor="quantity">Quantity:</label>
            <select
              name="quantity"
              className="QuantitySelector"
              defaultValue={data?.quantity}
              ref={quantityRef}
              onChange={UpdateProductQuantityFunc}
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
          <button className="deleteBtn" onClick={DeleteAddedProduct}>
            Delete
          </button>
        </div>
      </div>
      <span className="basket-item-price">
        {data?.line_total?.formatted_with_symbol}
      </span>
    </div>
  );
}

export default BasketItem;
