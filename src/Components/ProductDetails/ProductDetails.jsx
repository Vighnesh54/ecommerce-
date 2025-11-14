import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ProductDetails.css";
import { CartContext } from "../../Context/CartContext";
 // ✅ Import cart context

const ProductDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext); // ✅ Access addToCart function

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!state) {
    return (
      <div className="no-product">
        <h2>No Product Found</h2>
        <button onClick={() => navigate("/")}>Back to Shop</button>
      </div>
    );
  }

  const { id, image, title, description, price, category } = state;

  // 🧠 Choose sizes dynamically based on category
  let sizes = [];
  switch (category.toLowerCase()) {
    case "men's clothing":
    case "women's clothing":
      sizes = ["S", "M", "L", "XL"];
      break;
    case "jewelery":
      sizes = ["6", "7", "8", "9"];
      break;
    case "electronics":
      sizes = ["32in", "42in", "55in", "65in"];
      break;
    default:
      sizes = ["One Size"];
      break;
  }

  // ✅ Handle Add to Cart
  const handleAddToCart = () => {
    if (!selectedSize && sizes.length > 1) {
      alert("Please select a size before adding to cart!");
      return;
    }

    const productToAdd = {
      id,
      title,
      image,
      price,
      category,
      size: selectedSize || "One Size",
      quantity: Number(quantity),
    };

    addToCart(productToAdd); // ✅ Add item to cart
    alert(`${title} added to cart!`);
  };

  return (
    <div className="product-details-container">
      <div className="product-image-section">
        <img src={image} alt={title} className="detail-img" />
      </div>

      <div className="product-info-section">
        <h4 className="category-text">{category.toUpperCase()}</h4>
        <h1 className="product-title">{title}</h1>
        <p className="product-description">{description}</p>

        <div className="price-section">
          <span className="price">${price}</span>
          <span className="old-price">${(price * 1.5).toFixed(2)}</span>
          <span className="discount-badge">-50%</span>
        </div>

        <div className="options">
          <label>Size:</label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option value="">Select</option>
            {sizes.map((size) => (
              <option key={size}>{size}</option>
            ))}
          </select>

          <label>Qty:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div className="buttons">
          <button className="add-cart" onClick={handleAddToCart}>
            🛒 ADD TO CART
          </button>
          <button className="back-btn" onClick={() => navigate("/")}>
            ← BACK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
