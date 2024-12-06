import { useState, useEffect } from 'react';
import ArtisanNavbar from './ArtisanNavbar';
import './ArtisanHome.css'; // Corrected CSS file name

export default function ArtisanHome() {
  const [username, setUsername] = useState("");

  // Retrieve the username from localStorage when the component mounts
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername); // Set the username from localStorage
    }
  }, []);

  return (
    <div className="artisan-home-container">
      <ArtisanNavbar />
      <div className="artisan-home-content">
        <h1 className="artisan-home-title">Welcome to Handloom Fashion, {username}</h1>
        <p className="artisan-home-description">
          You are now logged in as an artisan. Start selling your handmade products and showcase your talent to the world!
        </p>
        <div className="artisan-home-action-buttons">
          <button className="artisan-home-button">Add New Product</button>
          <button className="artisan-home-button">View My Products</button>
        </div>
      </div>
    </div>
  );
}
