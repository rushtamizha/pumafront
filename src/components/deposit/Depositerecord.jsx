import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../api/api';
const Depositerecord = () => {
    const navigate = useNavigate();
  const [deposits, setDeposits] = useState([]);

  useEffect(() => {
    fetchDeposits();
  }, []);

  const fetchDeposits = async () => {
    try {
      const res = await API.get('/transactions/deposits'); // your backend endpoint
      setDeposits(res.data);
      console.log(res.data)
      console.log(res.data)
    } catch (err) {
      console.error('Failed to fetch deposits:', err);
      setDeposits([]);
    }
  };

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    };
    return new Date(dateString).toLocaleString('en-GB', options).replace(',', '');
  };


  return (
    <div className='className="deposit-page'>
        <div className="bank-page-head">
        <div className="bank-page-back-btn" onClick={() => navigate("/")}>
          <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#e3e3e3">
            <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
          </svg>
        </div>
        <div className="bank-page-title">Deposit Record</div>
      </div>

      <div className="deposit-page-content flex-1">
        <div className="deposit-page-content-wrapper van-pull-refresh">
          <div className="van-pull-refresh__track">

            <div className="van-pull-refresh__head"></div>

            <div role="feed" className="van-list">
              {deposits.length === 0 ? (
                <div className="van-list__finished-text">No Deposit Records</div>
              ) : (
                deposits.map((item,idx) => (
                <div key={idx} className="deposit-page-content-item flex">
                  <div className="deposit-page-content-item-list">

                    <div className="deposit-page-content-item-list-top">
                      <div className="details">
                        <span className="bold">Deposit</span>
                        <span className="status success">{item.status || 'Success'}</span>
                      </div>
                      <div className="amount success">₹{item.amount}</div>
                    </div>

                    <div className="deposit-page-content-item-list-low">
                      <span className="time">{formatDate(item.createdAt)}</span>
                      <span className="methods">Pumapay</span>
                    </div>

                  </div>
                </div>
              ))
              )}

              <div className="van-list__finished-text">No more data</div>
              <div className="van-list__placeholder"></div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Depositerecord