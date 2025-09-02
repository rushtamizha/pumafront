import React, { useState, useEffect } from 'react';
import API from '../../api/api';

export default function Tasks() {
  const [status, setStatus] = useState('');

  const handleCheckIn = async () => {
    try {
      await API.post('/user/daily-checkin');
      setStatus('Daily check-in successful');
    } catch (err) {
      setStatus('Already checked-in today or error occurred');
    }
  };

  return (
    <div>
      <h2>Tasks</h2>
      <button onClick={handleCheckIn}>Daily Check-In</button>
      <p>{status}</p>
    </div>
  );
}
