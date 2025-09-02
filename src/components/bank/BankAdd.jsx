import React, { useState } from 'react';
import API from '../../api/api';
import { useNavigate } from 'react-router-dom';

export default function BankAdd() {

  const navigate = useNavigate()
  
  const [form, setForm] = useState({
    bankName: '',
    accountNumber: '',
    ifsc: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/user/add-bank', form);
      setForm({
        accountNumber: '',
        ifscCode: '',
        bankName: ''
      });
      alert('Bank added successfully');
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to add bank');
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className='addBank-page'>
      <div className="addBank-page-header">
        <header className='addBank-page-head'>
          <div className="backbtn" onClick={()=>navigate("/")} >
            <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#e3e3e3"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
          </div>
          <span>Add Bank Account</span>
        </header>
      </div>
      <div className="addBank-page-content">
        <form className="van-form" onSubmit={handleSubmit} >

            <div className="field-item">
            <div className="van-cell__title">
              <span>Bank Account Number</span>
            </div>
            <div className="van-cell__value">
              <div className="van-field__body">
                <input type="text" placeholder="bank Account Number" onChange={handleChange} name="accountNumber" required className='van-field__control' />
              </div>
            </div></div>

            <div className="field-item">
            <div className="van-cell__title">
              <span>IFSC Code</span>
            </div>
            <div className="van-cell__value">
              <div className="van-field__body">
                <input type="text" placeholder="IFSC Code"  onChange={handleChange} name="ifsc" required className='van-field__control' />
              </div>
            </div></div>

            <div className="field-item">
            <div className="van-cell__title">
              <span>Bank Holder Name</span>
            </div>
            <div className="van-cell__value">
              <div className="van-field__body">
                <input type="text" placeholder="Bank Holder Name" onChange={handleChange} name="bankName" required className='van-field__control' />
              </div>
            </div></div>
             
            <button className='submit' type="submit" >
              Continue
            </button>
        </form>
      </div>
    </div>
  );
}
