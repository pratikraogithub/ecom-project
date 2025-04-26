// src/pages/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuth }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/api/login/', {
                username,
                password
            });

            localStorage.setItem('access', res.data.access);
            localStorage.setItem('refresh', res.data.refresh);
            setAuth(true);
            navigate('/');
        } catch (err) {
            alert('Login failed');
        }
    };

    return (
        <div className="container mt-5">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input className="form-control" value={username} onChange={e => setUsername(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
                </div>
                <button className="btn btn-success">Login</button>
            </form>
        </div>
    );
};

export default Login;
