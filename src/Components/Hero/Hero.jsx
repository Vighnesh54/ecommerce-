import React, { useEffect, useState } from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });
  const [editingProductId, setEditingProductId] = useState(null); // Track which product is being edited

  const navigate = useNavigate();

  // Fetch products from API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // Handle Buy Now
  const handleBuyNow = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Add / Edit Product
  const handleAddOrEditProduct = (e) => {
    e.preventDefault();
    if (!newProduct.title || !newProduct.price || !newProduct.image) {
      alert("Please fill all required fields!");
      return;
    }

    if (editingProductId) {
      // Update existing product
      setProducts((prev) =>
        prev.map((item) =>
          item.id === editingProductId ? { ...item, ...newProduct } : item
        )
      );
      setEditingProductId(null);
    } else {
      // Add new product
      const productWithId = { ...newProduct, id: Date.now() };
      setProducts((prev) => [productWithId, ...prev]);
    }

    setShowForm(false);
    setNewProduct({
      title: "",
      description: "",
      price: "",
      category: "",
      image: "",
    });
  };

  // Handle Delete Product
  const handleDeleteProduct = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      setProducts((prev) => prev.filter((item) => item.id !== id));
    }
  };

  // Handle Edit Product
  const handleEditProduct = (product) => {
    setNewProduct({
      title: product.title,
      description: product.description,
      price: product.price,
      category: product.category,
      image: product.image,
    });
    setEditingProductId(product.id);
    setShowForm(true);
  };

  return (
    <div className="hero">
      <div className="hero-header">
        <h1>Shop</h1>
        <p>All You Need</p>
        <button
          className="add-product-btn"
          onClick={() => {
            setShowForm(!showForm);
            setEditingProductId(null); // Reset editing mode if toggling
            setNewProduct({
              title: "",
              description: "",
              price: "",
              category: "",
              image: "",
            });
          }}
        >
          {showForm ? "Close Form" : "+ Add Product"}
        </button>
      </div>

      {/* Add / Edit Product Form */}
      {showForm && (
        <form className="add-product-form" onSubmit={handleAddOrEditProduct}>
          <input
            type="text"
            name="title"
            placeholder="Product Title"
            value={newProduct.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={newProduct.category}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newProduct.description}
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newProduct.price}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={newProduct.image}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-btn">
            {editingProductId ? "Update Product" : "Add Product"}
          </button>
        </form>
      )}

      {/* Product List */}
      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} className="product-img" />
            <div className="product-info">
              <h3 className="product-title">{item.title.slice(0, 20)}...</h3>
              <p className="product-category">{item.category}</p>
              <p className="product-price">${item.price}</p>
              <div className="product-buttons">
                <button className="add-btn">Add to Cart</button>
                <button className="buy-btn" onClick={() => handleBuyNow(item)}>
                  Buy Now
                </button>
                <button
                  className="edit-btn"
                  onClick={() => handleEditProduct(item)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteProduct(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
