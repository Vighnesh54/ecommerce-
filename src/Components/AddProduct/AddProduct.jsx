import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import "./AddProduct.css";

const AddProduct = () => {
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.price || !form.category || !form.image) {
      alert("Please fill all fields!");
      return;
    }

    addProduct(form);
    alert("✅ Product added successfully!");
    navigate("/"); // Go back to product list
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Product Title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category (e.g. electronics, men's clothing)"
          value={form.category}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
