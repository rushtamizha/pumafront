import React, { useState } from 'react';
import API from '../../api/api';
import { useNavigate, useParams } from 'react-router-dom';
export default function UserRegister() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    password: '',
    referredBy: '',
    otp: '',
  });
  const [generatedOtp, setGeneratedOtp] = useState('');

  const generateOtp = async () => {
    try {
      const res = await API.post('/auth/generate-otp', { mobile: form.mobile });
      setGeneratedOtp(res.data.otp);
      setForm({ ...form, otp: res.data.otp }); // auto fill OTP
      //alert('OTP generated: ' + res.data.otp);
    } catch (err) {
      alert(err.response?.data?.message || 'OTP generation failed');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', form);
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed');
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className='signUp-page'>
<div className="signUp-page-header">
        <img src="https://1000logos.net/wp-content/uploads/2021/04/Puma-logo.png" alt="" />
      </div>
      <div className="signUp-page-content">
        <div className="signUp-page-content-title">Sign Up</div>
        <div className="signUp-page-content-box">
          <div className="item">
            <div className="phone-number-container">
              <div className="input-container">
                <div className="input-icon"></div>
                <input name="mobile" type="text" id="phone_number" placeholder='mobile number' className='input-field' onChange={handleChange} required />
              </div>
            </div>
          </div>
          <div className="item">
              <div className="input-container">
                <input name="otp" type="text" id="sms_invitation_code" placeholder='Input SMS OTP Code' className='input-field' onChange={handleChange} required value={generatedOtp} />
                <div className="suffix-icon">
                  <button className='otp-send' onClick={generateOtp} >Send</button>
                </div>
              </div>
          </div>
          <div className="item">
              <div className="input-container">
                <div className="input-icon"></div>
                <input name="password" type="password" id="password" placeholder='input Password' className='input-field' onChange={handleChange} />
              </div>
          </div>
          <div className="item">
              <div className="input-container">
                <div className="input-icon"></div>
                <input name="name" type="text" id="nickname" placeholder='Input Nickname' className='input-field' onChange={handleChange} required />
              </div>
          </div>
          <div className="item">
              <div className="input-container">
                <div className="input-icon"></div>
                <input name="referredBy" type="text" id="invitation_code" placeholder='input invitation code' className='input-field' 
               onChange={handleChange} />
              </div>
          </div>
          <div className="item">
            <button className='confirm' onClick={handleSubmit}>Register</button>
          </div>
          <div className="item">
            <button className='register-login' onClick={()=> navigate("/login")}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
