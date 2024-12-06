import { useEffect, useState } from 'react';
import './Artisannavbar.css'; // Corrected to "Artisan"
import { Link } from 'react-router-dom';

export default function Artisannavbar() { // Corrected to "Artisan"
  const [username, setUsername] = useState("");

  // Retrieve the username from localStorage when the component mounts
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername); // Set the username from localStorage
    }
  }, []);

  return (
    <div className="artisan-navbar-container">
      <div className="artisan-project-name">Handloom Fashion</div>
      <div className="artisan-nav-links">
        <Link to="/artisanhome">Home</Link> {/* Corrected to "artisan" */}
        <Link to="/addproducts">Add Products</Link>
        <Link to="/viewproducts">View Products</Link>
        <Link to="/support">Support</Link>
      </div>
      <div className="artisan-auth-buttons">
        {username ? (
          <span className="username-display">Welcome, {username}</span>
        ) : (
          <span className="username-display">Welcome, Guest</span>
        )}
        <Link to="/profile">
          <button className="artisan-userprofile-btn">User Profile</button>
        </Link>
      </div>
    </div>
  );
}
