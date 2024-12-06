import './Mainnavbar.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Mainnavbar() {
  const navigate = useNavigate(); // Hook for navigation

  const handleLoginClick = () => {
    navigate('/customerlogin'); // Redirect to Customerlogin page
  };

  const handleSignupClick = () => {
    navigate('/customersignup'); // Redirect to Customerlogin page
  };

  return (
    <div className="navbar-container">
      <div className="project-name">Handloom Fashion</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/buyproducts">Buy Products</Link>
        <Link to="/artisanprofiles">Artisan Profiles</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/signup">Become Weave Seller</Link>
        <Link to="/artisanlogin"></Link>
      </div>
      <div className="auth-buttons">
        <button className="signup-btn" onClick={handleSignupClick}>Sign Up</button>
        <button className="login-btn" onClick={handleLoginClick}>Log In</button> 
      </div>
    </div>
  );
}
