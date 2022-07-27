import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useSelector } from "react-redux";
import BasketItem from "./components/basketItem";
import "./basket.css";

function Basket() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const cart = useSelector((state) => state.Cart);
  const basketItems = cart?.value?.line_items;

  return (
    <div className="basket__container">
      {!isAuthenticated ? (
        <div className="basket-login__container">
          <h3>You need to sign in first!</h3>
          <button onClick={loginWithRedirect}>Sign in</button>
        </div>
      ) : (
        <div className="basket-cards__container">
          {basketItems && basketItems.length > 0 && (
            <>
              <ul className="basket-cards-headers__container">
                <li>Shopping Cart</li>
                <li>Price</li>
              </ul>
              <ul className="basket-items__container">
                {basketItems.map((item) => {
                  return <BasketItem data={item} kety={item.id} />;
                })}
              </ul>
              <div className="total__price__container">
                <span>
                  Subtotal ({cart.value?.total_items} items):{" "}
                  <b>{cart?.value?.subtotal?.formatted_with_symbol}</b>
                </span>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Basket;
