import React, { useState } from 'react';
import { Package, LayoutDashboard, Bell, Settings, Menu, X } from "lucide-react"
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt with:', { email, password });
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="logo">
                    <Package className="brand-icon" />
                    <span>LifeCycle</span>
                </div>

                <h1>Welcome back</h1>
                <p className="subtitle">Enter your credentials to access your account</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <div className="password-header">
                            <label htmlFor="password">Password</label>
                            <a href="/forgot-password" className="forgot-password">
                                Forgot password?
                            </a>
                        </div>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="sign-in-button">
                        Sign in
                    </button>
                </form>

                <p className="create-account">
                    Don't have an account?{' '}
                    <a href="#/signup">Create an account</a>
                </p>
            </div>
        </div>
    );
};

export default Login;