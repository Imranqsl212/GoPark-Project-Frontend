import React, { useState } from "react";
import axios from "axios";
import Notification from "../../../components/Notification/Notifications.jsx";
import { useNavigate } from "react-router-dom";
import { delay } from "../../../additionals/delay.js";
 import './OTP-Checker-component.scss'

const OTPVerification = ({ apiEndpoint }) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);
  const [key, setKey] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const email = localStorage.getItem("email");
      const response = await axios.post(apiEndpoint, {
        email: email,
        otp: otp,
      });

      if (response.status === 200) {
        setNotification({
          type: "success",
          text: "OTP entered successfully!",
        });

        delay(navigate, "/reset-password", 900);
      }
    } catch (error) {
      setNotification({
        type: "error",
        text: "Invalid OTP entered",
      });

      setKey(key + 1);
    }
  };

  return (
    <div>
      {notification && (
        <Notification
          type={notification.type}
          text={notification.text}
          count={key}
        />
      )}
      <h1>OTP Verification</h1>
      <form onSubmit={handleSubmit}>
        <label>OTP:</label>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button onClick={handleSubmit} type="submit">Verify OTP</button>
      </form>
    </div>
  );
};

export default OTPVerification;
