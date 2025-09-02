// src/api/adminAPI.js
import axios from 'axios';

const adminAPI = axios.create({
  baseURL: 'http://localhost:5959/api/admin', // change if needed
});

// Attach token from localStorage to every request
adminAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default adminAPI;
