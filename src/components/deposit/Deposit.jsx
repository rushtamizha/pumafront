import  { useState } from 'react';
import { useEffect } from 'react';
import API from '../../api/api';
import { useNavigate } from 'react-router-dom';

export default function Deposit() {
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);  // track which button is active
  const navigate = useNavigate();
  
  const fetchBalance = async () => {
      try {
        const res = await API.get('/user/profile');
        setBalance(res.data.wallet.balance);
      } catch (err) {
        alert(err.response?.data?.message || 'Failed to fetch balance');
      }
    }; 

    useEffect(() => {
          fetchBalance();
     }, []);

  const handleDeposit = async () => {
    try {
      await API.post('/user/deposit', { amount });
      alert('Deposit request successful');
      setAmount('');
      setActiveIndex(null);  // reset active state 
       navigate("/")
    } catch (err) {
      alert(err?.response?.data?.message || 'Deposit failed');
    }
  };

  const quickOptions = [100, 500, 1000, 2000, 10000, 50000];

  return (
    <div className='deposit-page'>
      <div className="bank-page-head">
        <div className="bank-page-back-btn" onClick={() => navigate("/")}>
          <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#e3e3e3">
            <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
          </svg>
        </div>
        <div className="bank-page-title">My Bank Account</div>
      </div>

      <div className="deposit-page-content">
        <div className="deposit-page-content-title">Top Up Amount</div>

        <div className="deposit-page-content-input">₹
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
              setActiveIndex(null);  // reset active when typing manually
            }}
          />
        </div>

        <div className="deposit-balance">
          Your Available Balance: ₹ {balance}.00
        </div>

        <div>Quick options</div>

        <div className="deposit-page-content-amount-choose">
          {quickOptions.map((option, index) => (
            <div
              key={index}
              className={`deposit-page-content-amount-choose-item ${activeIndex === index ? 'deposit-active' : ''}`}
              onClick={() => {
                setAmount(option);
                setActiveIndex(index);
              }}
            >
              <span>₹</span><span>{option.toLocaleString()}</span>
            </div>
          ))}
        </div>

        <div className="deposit-button">
          <button className='deposit-button-confirm' onClick={handleDeposit}>Confirm</button>
        </div>
      </div>
    </div>
  );
}
