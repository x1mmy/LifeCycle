import React, { useState } from 'react';
import { Package, LayoutDashboard, Bell, Settings, Menu, X } from "lucide-react"
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormData(prevState => ({
    //     ...prevState,
    //     [name]: value
    //   }));
      
    //   // Clear error when user starts typing
    //   if (errors[name]) {
    //     setErrors(prevErrors => ({
    //       ...prevErrors,
    //       [name]: ''
    //     }));
    //   }
    };
  
    // const validateForm = () => {
    //   const newErrors = {};
      
    //   if (!formData.firstName.trim()) {
    //     newErrors.firstName = 'First name is required';
    //   }
      
    //   if (!formData.lastName.trim()) {
    //     newErrors.lastName = 'Last name is required';
    //   }
      
    //   if (!formData.email.trim()) {
    //     newErrors.email = 'Email is required';
    //   } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    //     newErrors.email = 'Email is invalid';
    //   }
      
    //   if (!formData.password) {
    //     newErrors.password = 'Password is required';
    //   } else if (formData.password.length < 6) {
    //     newErrors.password = 'Password must be at least 6 characters';
    //   }
      
    //   if (formData.password !== formData.confirmPassword) {
    //     newErrors.confirmPassword = 'Passwords do not match';
    //   }
  
    //   return newErrors;
    // };
  
    const handleSubmit = (e) => {
    //   e.preventDefault();
      
    //   const newErrors = validateForm();
    //   if (Object.keys(newErrors).length > 0) {
    //     setErrors(newErrors);
    //     return;
    //   }
  
    //   // Handle signup logic here
    //   console.log('Form submitted:', formData);
    };
  
    return (
      <div className="signup-container">
        <div className="signup-card">
          <div className="logo">
            <Package className="brand-icon" />
            <span>LifeCycle</span>
          </div>
          
          <h1>Create an account</h1>
          <p className="subtitle">Enter your information to create your account</p>
  
          <form onSubmit={handleSubmit}>
            <div className="name-row">
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={errors.firstName ? 'error' : ''}
                />
                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
              </div>
  
              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={errors.lastName ? 'error' : ''}
                />
                {errors.lastName && <span className="error-message">{errors.lastName}</span>}
              </div>
            </div>
  
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                placeholder="name@example.com"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
  
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? 'error' : ''}
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
  
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? 'error' : ''}
              />
              {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>
  
            <button type="submit" className="create-account-button">
              Create account
            </button>
          </form>
  
          <p className="login-link">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
    );
  };
  
  export default SignUp;