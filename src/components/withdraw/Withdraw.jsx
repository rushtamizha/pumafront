import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../api/api';

export default function Withdraw() {
    const navigate = useNavigate();
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [bankdata, setBankdata] = useState({bankname:"Your Name",bankifsc:"Bank IFSC",banknumber:"Account Number"});
    
  const fetchBalance = async () => {
      try {
        const res = await API.get('/user/profile');
        setBalance(res.data.wallet.balance);
      } catch (err) {
        alert(err.response?.data?.message || 'Failed to fetch balance');
      }
    }; 
    const fetchbankdata = async () => {
      try {
         const res = await API.get('/user/bank');
        setBankdata(res.data);
      } catch (err) {
        alert(err.response?.data?.message || 'Failed to fetch bank data');
      }
    };
  
    

    useEffect(() => {
      fetchbankdata();
      fetchBalance();
    }, []);

  const handleWithdraw = async () => {
     try{
      await API.post('/user/withdraw', { amount });
      alert('Withdraw request successful');
      setAmount('');
      navigate("/")
    } catch (err) {
      alert(err.response?.data?.message || 'Withdraw failed');
    }
  };

  return (
    <div className="withdraw-page">
      <div className="bank-page-head">
        <div className="bank-page-back-btn" onClick={() => navigate("/")}>
          <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#e3e3e3">
            <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
          </svg>
        </div>
        <div className="bank-page-title">My Bank Account</div>
      </div>
      <div className="withdraw-page-content">
        <div className="withdraw-page-content-title">
          Withdraw Amount
        </div>
        <div className="withdraw-page-content-input">₹
          <input type="number" placeholder="Enter Amount" onChange={(e) => setAmount(e.target.value)}  />
        </div>
        <div className="withdrawal-balance">Withdraw Amount:₹ {balance}.00</div>
        <div className="select-bank">
          <div className="withdraw-page-content-title">
             Receiving Bank Card
          </div>
          <div role="radiogroup" className="select-bank-content">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z"/></svg>
            <span>{bankdata.accountNumber} ( {bankdata.bankName} )</span>
          </div>
          <div className="withdraw-page-content-border"></div>
          <div className="withdraw-page-content-tips">
            <div className="withdraw-page-content-tips-title">Withdraw Instructions</div>
            <div className="withdraw-page-content-tips-content">
              <div className="withdraw-page-content-tips-content-item">
                <span>Daily Withdrawal Time</span>
                <span>10:00:00 ~ 20:00:00</span>
              </div>
              <div className="withdraw-page-content-tips-content-item">
                <span>Minimum Single Withdrawal Amount</span>
                <span>₹200.00</span>
              </div>
              <div className="withdraw-page-content-tips-content-item">
                <span>Maximum Single Withdrawal Amount</span>
                <span>₹50,000.00</span>
              </div>
              <div className="withdraw-page-content-tips-content-item">
                <span>Minimum Single Withdrawal Unit Amount</span>
                <span>₹100.00</span>
              </div>
              <div className="withdraw-page-content-tips-content-item">
                <span>Withdrawal Tax Rate</span>
                <span>4%</span>
              </div>
              <div className="withdraw-page-content-tips-content-item">
                <span>Number of withdrawals per day</span>
                <span>1</span>
              </div>
              <div className="withdraw-page-content-tips-content-item">
                <span>*In order to facilitate fund settlement, you can only apply for one withdrawal per day</span>
              </div>
            </div>
          </div>
          <div className="deposit-button">
          <button className='deposit-button-confirm' onClick={handleWithdraw} >Confirm</button>
        </div>
        </div>
      </div>
    </div>
  );
}
