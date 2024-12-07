import  { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Customersignup.css';

export default function Customersignup() {
    const [customer, setCustomer] = useState({
        username: "",
        email: "",
        password: "",
        mobile: ""
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when submitting

        try {
            const response = await axios.post("http://localhost:2004/customer/signup", customer);
            if (response.status === 200) {
                setMessage("Signup successful!");
                setTimeout(() => navigate('/customerlogin'), 2000);
            }
        } catch (error) {
            setMessage("Signup failed: " + error.message);
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div className="customersignup-container">
            <div className="container">
                <h3>Customer Signup</h3>
                <form onSubmit={handleSubmit} className="form-container">
                    <label className="label">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={customer.username}
                        onChange={handleChange}
                        className="input"
                        required
                    />

                    <label className="label">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={customer.email}
                        onChange={handleChange}
                        className="input"
                        required
                    />

                    <label className="label">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={customer.password}
                        onChange={handleChange}
                        className="input"
                        required
                    />

                    <label className="label">Mobile</label>
                    <input
                        type="tel"
                        name="mobile"
                        value={customer.mobile}
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
                                setCustomer({
                                    username: "",
                                    email: "",
                                    password: "",
                                    mobile: ""
                                })
                            }
                        >
                            Clear
                        </button>
                    </div>
                </form>
                {message && <p className="message">{message}</p>}
                <p className="redirect-message">
                    Already have an account? <Link to="/customerlogin">Login here</Link>
                </p>
            </div>
        </div>
    );
}
