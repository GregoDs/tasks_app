// RegisterPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';
import { registerUser } from '../api';  // Adjust the path as needed

const RegisterPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null); // State to hold error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newUser = await registerUser(formData);
      // Handle successful registration (e.g., show success message, redirect user)
      console.log('Registration successful. New user:', newUser);
    } catch (error) {
      // Handle registration error
      console.error('Registration error:', error);
      setError('Registration failed. Please try again.'); // Set error message
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      {error && <div className="error-message">{error}</div>} {/* Display error message */}
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="auth-button">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
