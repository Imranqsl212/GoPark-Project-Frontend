import { useState, Link } from "react";
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
    <section className="otp">
      {notification && (
        <Notification
          type={notification.type}
          text={notification.text}
          count={key}
        />
      )}
      <div className="otp__form">
        <div className="logo"></div>
        <div className="form">
          <div className="form__header"> 
            <h1>Верификация</h1>
            <p>Мы отправили код подтверждение на ваш email.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <label className="input__field">
              Введите код подтверждение 
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                placeholder="0000"
              />
            </label>
          </form>
          <div className="form__footer">  
            <button className="button__submit" onClick={handleSubmit} type="submit">Отправить</button>
            <div className="form__forgot">
              <p>Не пришел код?</p>
              <Link to="/log">Отправить повторно </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OTPVerification;
