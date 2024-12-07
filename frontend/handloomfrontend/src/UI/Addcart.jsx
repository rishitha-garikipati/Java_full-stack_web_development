import { useCart } from './CartContext';
import './Addcart.css';
import Customernavbar from './Customernavbar';

export default function Addcart() {
  const { cartItems, removeFromCart } = useCart();

  // Calculate total cost of the cart items
  const totalCost = cartItems.reduce((total, item) => total + item.cost, 0);

  const handleBuyNow = () => {
    // You can define your buy now logic here, such as navigating to a checkout page
    alert("Proceeding to checkout...");
  };

  return (
    <div>
      <Customernavbar />
      <div className="add-cart-container-wrapper">
        <div className="add-cart-container">
          <h2>Cart</h2>
          <div className="cart-items">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div className="cart-item-card" key={index}>
                  <img src={item.imageUrl} alt={item.name} className="product-image" />
                  <div className="product-details">
                    <h3>{item.name}</h3>
                    <p className="price">₹{item.cost}</p>
                    <div className="rating">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={i < item.rating ? 'filled' : ''}>
                          ⭐
                        </span>
                      ))}
                    </div>
                    <div className="key-features">
                      <h4>Key Features</h4>
                      <ul>
                        {item.features.split(',').map((feature, index) => (
                          <li key={index}>{feature.trim()}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button
                    className="remove-from-cart-btn"
                    onClick={() => removeFromCart(item.id)} // Add item id or unique identifier for removal
                  >
                    Remove from Cart
                  </button>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>

          {cartItems.length > 0 && (
            <>
              <div className="total-cost">
                <h3>Total Cost: ₹{totalCost}</h3>
              </div>
              <button
                className="buy-now-btn"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
