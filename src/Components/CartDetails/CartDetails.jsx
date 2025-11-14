// src/components/CartDetails/CartDetails.jsx
import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./CartDetails.css";


const CartDetails = () => {
  const { cart, removeFromCart, updateQty, cartTotal } = useContext(CartContext);

  if (!cart || cart.length === 0) {
    return <div className="cart-empty">Your cart is empty 🛒</div>;
  }

  return (
    <div className="cart-details">
      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-row" key={item.id}>
            <img className="cart-thumb" src={item.image} alt={item.title} />
            <div className="cart-meta">
              <h4 className="cart-title">{item.title}</h4>
              <p className="cart-price">${item.price}</p>
              <div className="qty-control">
                <button
                  onClick={() => updateQty(item.id, item.qty - 1)}
                  className="qty-btn"
                >
                  −
                </button>
                <input
                  className="qty-input"
                  type="number"
                  min="1"
                  value={item.qty}
                  onChange={(e) => updateQty(item.id, Number(e.target.value))}
                />
                <button
                  onClick={() => updateQty(item.id, item.qty + 1)}
                  className="qty-btn"
                >
                  +
                </button>
              </div>
            </div>

            <div className="cart-row-right">
              <p className="row-subtotal">${(item.qty * Number(item.price || 0)).toFixed(2)}</p>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Order Summary</h3>
        <p>Total: <strong>${cartTotal.toFixed(2)}</strong></p>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default CartDetails;
