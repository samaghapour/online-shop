import { useAuth0 } from "@auth0/auth0-react";
import {
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./header.css";
import { Link } from "react-router-dom";
import { toggleSidebar } from "../../utils/helpers";
import { getCart } from "../../features/cart/action";

function Header() {
  const { logout, isAuthenticated, loginWithRedirect } = useAuth0();
  const cart = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <div className="header__container">
      <button className="manu-btn" onClick={toggleSidebar}>
        <MenuOutlined />
      </button>
      <form className="search__container">
        <input type="search" placeholder="Search..." />

        <button type="submit" className="search-btn">
          <SearchOutlined />
        </button>
      </form>
      <button
        className="signup-btn"
        onClick={isAuthenticated ? logout : loginWithRedirect}
      >
        {isAuthenticated ? "sign out" : "sign in"}
      </button>
      <Link to="/basket" className="basket__container">
        <ShoppingCartOutlined />
        <span className="cart-total-items">
          {cart?.value && isAuthenticated ? cart.value?.total_items : "0"}
        </span>
      </Link>
    </div>
  );
}

export default Header;
