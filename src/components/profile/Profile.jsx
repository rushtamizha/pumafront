import React, { useState, useEffect } from 'react';
import API from '../../api/api';
import Navbar from '../navbar/Navbar';
import Header from '../header/Header';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate()
  const [profile, setProfile] = useState({});
  const fetchProfile = async () => {
    try {
      const res = await API.get('/user/profile');
      setProfile(res.data);
      console.log(res.data)
    } catch (err) {
      alert('Failed to load profile');
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className='settings-space'>
      <Navbar/>
      <Header/>
      <div className="settings-space-content flex-1">

      <div className="settings-space-content-info">
        <div className="name bold">{profile.name}</div>
        <div className="cid">id: {profile.mobile}</div>

        <div className="content">

          <div className="content-item">
            <div className="content-item-value">₹{profile.wallet ? profile.wallet.balance : '0.00'}</div>
            <div className="content-item-label">Current Balance</div>
          </div>

          <div className="content-border"></div>

          <div className="content-item">
            <div className="content-item-value">₹{profile.wallet ? profile.wallet.balance : '0.00'}</div>
            <div className="content-item-label">Withdraw Balance</div>
          </div>

        </div>

        <div className="deposit-withdrawal">
          <button type="button" className="w-full button flex items-center justify-center button-primary small" onClick={()=>navigate("/deposit-record")}>
          Deposit Records
        </button>
        <button type="button" className="w-full button flex items-center justify-center button-primary small" onClick={()=>navigate("/withdrawal-record")}>
          Withdrawal Records
        </button>
        </div>
      </div>

      <div className="settings-space-content-wrapper">

        <div className="settings-space-content-wrapper-title">My Records</div>

        <div className="settings-space-content-wrapper-routers">

          <div className="settings-space-content-wrapper-routers-item2">
            <div className="title truncate">Nickname</div>
            <div className="right flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.5 13L10.5 8L5.5 3" stroke="#0F0F0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <div className="settings-space-content-wrapper-routers-item2">
            <div className="title truncate">Phone Number</div>
            <div className="right flex items-center">
              <span className="value">{profile.mobile}</span>
            </div>
          </div>

          <div className="settings-space-content-wrapper-routers-item2">
            <div className="title truncate">Change Account Password</div>
            <div className="right flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.5 13L10.5 8L5.5 3" stroke="#0F0F0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <div className="settings-space-content-wrapper-routers-item2">
            <div className="title truncate">Change Trade Password</div>
            <div className="right flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.5 13L10.5 8L5.5 3" stroke="#0F0F0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

        </div>

      </div>

      <div className="settings-space-content-logout" onClick={()=>navigate("/login")}>
        Logout
      </div>

      <div className="settings-space-content-tips">
        App Version: 1.0
      </div>

    </div>
    </div>
  );
}
