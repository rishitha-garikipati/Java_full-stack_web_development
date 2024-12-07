import  { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Adminsignup.css'; 

export default function Adminsignup() {
    const [admin, setAdmin] = useState({
        username: "",
        password: ""
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setAdmin({ ...admin, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(
                "http://localhost:7723/admin/signup",
                admin,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true, 
                }
            );
            if (response.status === 200) {
                setMessage("Signup successful!");
                setTimeout(() => navigate('/adminlogin'), 2000);
            }
        } catch (error) {
            if (error.response) {
                console.error("Response Error:", error.response.data);
                setMessage("Signup failed: " + error.response.data.message);
            } else if (error.request) {
                console.error("Request Error:", error.request);
                setMessage("Signup failed: No response from server.");
            } else {
                console.error("Error:", error.message);
                setMessage("Signup failed: " + error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="adminSignup-container">
            <div className="container">
                <h3>Admin Signup</h3>
                <form onSubmit={handleSubmit} className="form-container">
                    <label className="label">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={admin.username}
                        onChange={handleChange}
                        className="input"
                        required
                    />

                    <label className="label">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={admin.password}
                        onChange={handleChange}
                        className="input"
                        required
                    />

                    <div className="button-container">
                        <button type="submit" className="button submit" disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                        <button
                            type="reset"
                            className="button clear"
                            onClick={() =>
                                setAdmin({
                                    username: "",
                                    password: ""
                                })
                            }
                        >
                            Clear
                        </button>
                    </div>
                </form>
                {message && <p className="message">{message}</p>}
                <p className="redirect-message">
                    Already have an account? <Link to="/adminlogin">Login here</Link>
                </p>
            </div>
        </div>
    );
}
