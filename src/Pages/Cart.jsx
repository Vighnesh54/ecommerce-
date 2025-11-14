import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";


const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <p>Your cart is empty 🛒</p>;
  }

  return (
  <div>
  <h2>Your Cart</h2>
  {cartItems.map((item) => (
    <div key={item.id} style={{ marginBottom: "10px" }}>
      <img src={item.image} alt={item.name} width={80} />
      <p>{item.name}</p>
      <p>Qty: {item.quantity}</p>
      <p>Price: ${item.price}</p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  ))}
</div>

  );
};

export default Cart;
