import React, { useState, useContext } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.jpg";
import cart_icon from "../Assets/icon.jpg";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext"; // ✅ Correct import path

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getCartCount } = useContext(CartContext); // ✅ Access cart count from context

  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>

      {/* Menu Links */}
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        
        
      </ul>

      {/* Login and Cart Section */}
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/cart" className="cart-icon-container">
          <img src={cart_icon} alt="cart" className="cart-icon" />
          {/* ✅ Dynamic Cart Count */}
          <div className="nav-cart-count">{getCartCount()}</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
