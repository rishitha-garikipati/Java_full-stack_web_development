import  { useEffect, useState } from 'react';
import './Adminnavbar.css';  // Importing the artisan navbar CSS
import { Link } from 'react-router-dom';

export default function Adminnavbar() {
  const [username, setUsername] = useState("");

  // Retrieve the username from localStorage when the component mounts
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);  // Set the username from localStorage
    }
  }, []);

  return (
    <div className="admin-navbar-container">
      <div className="admin-project-name">Handloom Fashion</div>
      <div className="admin-nav-links">
        <Link to="/adminhome">Home</Link>
        <Link to="/viewcustomers">View Customer details</Link>
        <Link to="/viewartisan">View artisan details</Link>
        <Link to="/aboutus">Aboutus</Link>
      </div>
      <div className="admin-auth-buttons">
        {username ? (
          <span className="username-display">Welcome, {username}</span>
        ) : (
          <span className="username-display">Welcome, Guest</span>
        )}
        <Link to="/profile">
          <button className="admin-userprofile-btn">User Profile</button>
        </Link>
      </div>
    </div>
  );
}
