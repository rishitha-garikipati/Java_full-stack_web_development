import  { useState } from 'react';
import axios from 'axios';
import './Addproducts.css';
import Artisannavbar from './Artsiannavbar';

export default function Addproducts() {
  const [product, setProduct] = useState({
    name: '',
    cost: '',
    rating: '',
    features: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2004/product/add', product);
      alert(response.data); // Success message from backend
      setProduct({ name: '', cost: '', rating: '', features: '', imageUrl: '' }); // Reset form
    } catch (error) {
      alert('Error adding product: ' + error.message);
    }
  };

  return (
    <div>
      <Artisannavbar />
      <div className="add-product-container-wrapper">
        <div className="add-product-container">
          <h2>Add Product</h2>
          <form onSubmit={handleSubmit}>
            <label>Product Name:</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
            />

            <label>Product Cost:</label>
            <input
              type="number"
              name="cost"
              value={product.cost}
              onChange={handleChange}
              required
            />

            <label>Rating (1-5):</label>
            <input
              type="number"
              name="rating"
              value={product.rating}
              onChange={handleChange}
              step="0.1"
              min="1"
              max="5"
              required
            />

            <label>Features:</label>
            <textarea
              name="features"
              value={product.features}
              onChange={handleChange}
              required
            />

            <label>Image URL:</label>
            <input
              type="url"
              name="imageUrl"
              value={product.imageUrl}
              onChange={handleChange}
              required
            />

            <button type="submit">Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
}
