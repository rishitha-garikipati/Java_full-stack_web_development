import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from './CartContext';
import './Buyproducts.css';
import Customernavbar from './Customernavbar';

export default function Buyproducts() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:7723/product/view');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        alert('Error fetching products');
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Customernavbar />
      <div className="buy-products-container-wrapper">
        <div className="buy-products-container">
          <h2>Our Products</h2>
          <div className="buy-products-grid">
            {products.length > 0 ? (
              products.map((product, index) => (
                <div className="buy-product-card" key={index}>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="product-image"
                  />
                  <h3>{product.name}</h3>
                  <p className="price">₹{product.cost}</p>
                  <div className="rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={i < product.rating ? 'filled' : ''}>
                        ⭐
                      </span>
                    ))}
                  </div>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))
            ) : (
              <p>No products available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
