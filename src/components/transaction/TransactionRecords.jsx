import React, { useState, useEffect } from 'react';
import API from '../../api/api';

export default function TransactionRecords() {
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    try {
      const res = await API.get('/transactions/rewards');
      console.log(res.data)
      setRecords(res.data);
    } catch (err) {
      alert('Failed to load transaction records');
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div>
      <h2>Transaction Records</h2>
      {records.map(r => (
        <div key={r._id}>
          <p>Type: {r.type}</p>
          <p>Amount: ₹{r.amount}</p>
          <p>Date: {new Date(r.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
