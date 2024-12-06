import  { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Customerlogin.css';

export default function Customerlogin() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when logging in

        try {
            const response = await axios.post("http://localhost:2004/customer/login", credentials);
            if (response.status === 200) {
                setMessage("Login successful!");
                localStorage.setItem("username", credentials.username);  // Store username in localStorage
                navigate('/customerhome'); // Redirect to home page after login
            }
        } catch (error) {
            setMessage("Login failed: " + error.message);
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div className="customerlogin-container">
            <div className="login-container">
                <h3>Customer Login</h3>
                <form onSubmit={handleLogin} className="form-container">
                    <label className="label">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        className="input"
                        required
                    />
                    <label className="label">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        className="input"
                        required
                    />
                    <button type="submit" className="button submit" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                {message && <p className="message">{message}</p>}
                <p className="redirect-message">
                    Don't have an account? <Link to="/customersignup">Sign up here</Link>
                </p>
            </div>
        </div>
    );
}