import React, { useEffect, useState } from 'react';
import API from '../../api/api';

export default function Wallet() {
  const [balance, setBalance] = useState(0);

  const fetchBalance = async () => {
    try {
      const res = await API.get('/user/profile');
      console.log(res.data.wallet.balance)
      setBalance(res.data.wallet.balance);
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to fetch balance');
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <div>
      <h2>Wallet</h2>
      <p>Balance: ₹{balance}</p>
    </div>
  );
}
