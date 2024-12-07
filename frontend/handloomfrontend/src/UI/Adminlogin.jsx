import  { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Adminlogin.css'; 

export default function Adminlogin() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true); 

        try {
            const response = await axios.post("http://localhost:7723/admin/login", credentials);
            if (response.status === 200) {
                setMessage("Login successful!");
                localStorage.setItem("adminUsername", credentials.username); 
                navigate('/adminhome'); 
            }
        } catch (error) {
            setMessage("Login failed: " + error.message);
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div className="adminlogin-container">
            <div className="login-container">
                <h3>Admin Login</h3>
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
                    Not an admin? <Link to="/adminsignup">Admin Login</Link>
                </p>
            </div>
        </div>
    );
}
