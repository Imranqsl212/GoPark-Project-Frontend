import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const OTPVerificationPage = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const email = localStorage.getItem('email');
      const response = await axios.post('https://defteam.onrender.com/api-auth/check_otp/', { email:email, otp:otp });
      if (response.status === 200) {
        return navigate('/reset-password');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  return (
    <div>
      <h1>OTP Verification</h1>
      <form onSubmit={handleSubmit}>
        <label>OTP:</label>
        <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required />
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
};

export default OTPVerificationPage;
