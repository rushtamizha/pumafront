import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [mobile, setMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate()
  const handleSendOtp = async () => {
    try {
      const res = await axios.post('http://localhost:5959/api/auth/forgot-password/generate-otp', { mobile });
      alert("OTP sent successfully");
      setOtp(res.data.otp)
      setOtpSent(true);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const handleResetPassword = async () => {
    try {
      await axios.post('http://localhost:5959/api/auth/forgot-password/reset', { mobile, otp, newPassword });
      alert("Password reset successful");
      navigate('/login');
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className='login-page'>
      <div className="login-page-header">
        <img src="https://1000logos.net/wp-content/uploads/2021/04/Puma-logo.png" alt="" />
      </div>
      <div className="login-page-content">
        <div className="login-page-content-subtitle">Reset Your Password</div>
        <div className="login-page-content-box">
          <div className="item">
            <div class="input-container"><input id="mobile" placeholder="Enter Your Mobile Number" class="input-field" required="" type="number" name="mobile" value={mobile} onChange={e => setMobile(e.target.value)} /></div>
          </div>
          <div class="item"><div class="input-container"><input id="sms_invitation_code" placeholder="Input SMS OTP Code" class="input-field" required="" type="text" value={otp} name="otp"/><div class="suffix-icon"><button class="otp-send" onClick={handleSendOtp} >Send</button></div></div></div>

          <div className="item">
            <div class="input-container"><input id="password" placeholder="New Password" class="input-field" required="" type="password" name="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} /></div>
          </div>
          <div class="login-btn"><button class="login" onClick={handleResetPassword} >Confirm</button></div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
