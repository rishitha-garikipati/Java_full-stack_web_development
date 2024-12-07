import './Mainnavbar.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Mainnavbar() {
  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate('/customerlogin'); 
  };

  const handleSignupClick = () => {
    navigate('/customersignup'); 
  };

  return (
    <div className="navbar-container">
      <div className="project-name">Handloom Fashion</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/customerlogin">Buy Products</Link>
        <Link to="/artisanprofiles">Artisan Profiles</Link>
        <Link to="/support">Support</Link>
        <Link to="/customerlogin">Cart</Link>
        <Link to="/artisansignup">Become Weave Seller</Link>
        <Link to="/adminsignup">Admin Login</Link>
      </div>
      <div className="auth-buttons">
        <button className="signup-btn" onClick={handleSignupClick}>Sign Up</button>
        <button className="login-btn" onClick={handleLoginClick}>Log In</button> 
      </div>
    </div>
  );
}
