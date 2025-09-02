import React, { useState, useEffect } from 'react';
import API from '../../api/api';

export default function Commission() {
  const [commissions, setCommissions] = useState([]);

  const fetchCommission = async () => {
    try {
      const res = await API.get('/transactions/commission');
      setCommissions(res.data);
    } catch (err) {
      alert('Failed to load commission');
    }
  };

  useEffect(() => {
    fetchCommission();
  }, []);

  return (
    <div>
      <h2>Commission Records</h2>
      {commissions.map(c => (
        <div key={c._id}>
          <p>Amount: ₹{c.amount}</p>
          <p>Level: {c.level}</p>
          <p>Date: {new Date(c.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
