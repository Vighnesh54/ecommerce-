import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    setCart((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevItems, { ...product, qty: 1 }];
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Update quantity
  const updateQty = (id, qty) => {
    if (qty < 1) return;
    setCart((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  // Cart total
  const cartTotal = cart.reduce(
    (total, item) => total + item.qty * Number(item.price || 0),
    0
  );

  // Total count
  const getCartCount = () => cart.reduce((total, item) => total + item.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQty, cartTotal, getCartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
