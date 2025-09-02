import React, { useState, useEffect } from 'react';
import API from '../../api/api';

export default function Rewards() {
  const [rewards, setRewards] = useState([]);

  const fetchRewards = async () => {
    try {
      const res = await API.get('/transactions/rewards');
      setRewards(res.data);
    } catch (err) {
      alert('Failed to load rewards');
    }
  };

  useEffect(() => {
    fetchRewards();
  }, []);

  return (
    <div>
      <h2>Rewards History</h2>
      {rewards.map(r => (
        <div key={r._id}>
          <p>Type: {r.type}</p>
          <p>Amount: ₹{r.amount}</p>
          <p>Date: {new Date(r.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
