import React, { useState } from 'react';
import API from '../../api/api';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/admin/login', form);
      localStorage.setItem('adminToken', res.data.token);
      alert('Admin login successful');
      navigate('/admin');
    } catch (err) {
      alert(err.response?.data?.message || 'Admin login failed');
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
