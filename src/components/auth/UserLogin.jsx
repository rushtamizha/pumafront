import React, { useState } from 'react';
import API from '../../api/api';
import { useNavigate } from 'react-router-dom';

export default function UserLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ mobile: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', form);
      localStorage.setItem('token', res.data.token);
      alert('Login successful');
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className='login-page'>
    <div className="login-page-header">
      <img src="https://1000logos.net/wp-content/uploads/2021/04/Puma-logo.png" alt="" />
    </div>
    <div className="login-page-content">
      <div className="login-page-content-title">login</div>
      <div className="login-page-content-subtitle">Please login to coutinue</div>
      <div className="login-page-content-box">
        <div className="item">
          <div className="phone-number-container">
            <div className="input-container">
              <input type="text" id="phoneNumber" placeholder="Input Phone Number" className="input-field" name="mobile" onChange={handleChange} required />
            </div>
          </div>
        </div>
        <div className="item">
          <div className="input-container">
              <input type="password" id="password" placeholder="password" className="input-field" name="password" onChange={handleChange} required />
            </div>
        </div>
        <div className="item">
          <div className="forgot-password" onClick={() => navigate('/forgot-password')} >
            Forgot Password
          </div>
        </div>
        <div className="login-btn">
          <button className='login' onClick={handleSubmit} >Login</button>
        </div>
      </div>
    </div>
    </div>
  );
}
