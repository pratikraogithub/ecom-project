import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/register/', {
                username,
                password
            });
            setSuccess('Registration successful! Redirecting to login...');
            setError('');
            setTimeout(() => {
                navigate('/login');
            }, 2000); // Redirect after 2 seconds
        } catch (err) {
            setError('Registration failed. Try a different username.');
            setSuccess('');
        }
    };

    return (
        <div className="container mt-5">
            <h2>Register</h2>

            {success && <div className="alert alert-success">{success}</div>}
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleRegister}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                        className="form-control"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className="btn btn-primary">Register</button>
            </form>
        </div>
    );
};

export default Register;
