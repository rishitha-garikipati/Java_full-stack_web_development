import  { useEffect, useState } from 'react';
import './Customernavbar.css';
import { Link } from 'react-router-dom';

export default function Customernavbar() {
  const [username, setUsername] = useState("");

  // Retrieve the username from localStorage when the component mounts
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);  // Set the username from localStorage
    }
  }, []);

  return (
    <div className="customer-navbar-container">
      <div className="customer-project-name">Handloom Fashion</div>
      <div className="customer-nav-links">
        <Link to="/customerhome">Home</Link>
        <Link to="/buyproducts">Buy Products</Link>
        <Link to="/artisanprofiles">Artisan Profiles</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/customersupport">Support</Link>
      </div>
      <div className="customer-auth-buttons">
        {username ? (
          <span className="username-display">Welcome, {username}</span>
        ) : (
          <span className="username-display">Welcome, Guest</span>
        )}
        <Link to="/profile">
          <button className="customer-userprofile-btn">User Profile</button>
        </Link>
      </div>
    </div>
  );
}
