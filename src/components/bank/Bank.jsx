import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../api/api';

const Bank = () => {
  const navigate = useNavigate();
  const [bankdata, setBankdata] = useState({bankname:"Your Name",bankifsc:"Bank IFSC",banknumber:"Account Number"});
  const fetchbankdata = async () => {
      try {
        const res = await API.get('/user/bank');
        setBankdata(res.data);
        console.log(res.data.length)
      } catch (err) {
        alert(err.response?.data?.message || 'Failed to fetch balance');
      }
    };
    
  
    useEffect(() => {
      fetchbankdata();
    }, []);
  return (
   <div className="bank-page">
    <div className="bank-page-head">
      <div className="bank-page-back-btn" onClick={()=>navigate("/")} >
        <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#e3e3e3"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
      </div>
      <div className="bank-page-title">My Bank Account</div>
    </div>
    <div className="bank-page-content">
      {bankdata ?
      <div className="bank-page-content-card">
        <div className="bank-page-content-card-title">
          <div className="bank-page-content-card-logo">
            <img src="https://m.thyssenkrupp-invest.ru/_nuxt/img/logo.f5bf3bd.svg" alt="" />
          </div>
          <div className="bank-page-content-card-details">
            <div className="bank-card-name">{bankdata.bankName}</div>
            <div className="bank-card-ifsc">{bankdata.ifsc}</div>
          </div>
        </div>
        <div className="bank-page-content-card-number">
          {bankdata.accountNumber}
        </div>
        </div> : <h4>No Bank Account</h4> }

    </div>
    <div className="bank-page-button">
      <button className="bank-page-submit" onClick={()=>navigate("/add-bank")}>
      Add New Card
     </button>
    </div>
   </div>
  )
}

export default Bank