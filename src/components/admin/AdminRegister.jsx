import React, { useState } from 'react';
import API from '../../api/api';
import { useNavigate } from 'react-router-dom';

export default function AdminRegister() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/admin/register', form);
      alert('Admin registered successfully');
      navigate('/admin-login');
    } catch (err) {
      alert(err.response?.data?.message || 'Admin registration failed');
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Admin Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
