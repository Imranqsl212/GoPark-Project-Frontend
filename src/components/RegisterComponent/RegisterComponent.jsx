import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Notification from "../../components/Notification/Notifications.jsx";
import { delay } from "../../additionals/delay.js";
import './RegisterComponent.css'

const Register = ({ apiEndpoint }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [notification, setNotification] = useState(null);
  const [key, setKey] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(apiEndpoint, formData);

      const tokens = {
        access: response.data.access,
        refresh: response.data.refresh,
      };

      localStorage.setItem("tokens", JSON.stringify(tokens));
      console.log("Registration successful:", response.data);

      setNotification({
        type: "success",
        text: "Registration successful!",
      });

      delay(navigate, "/", 1000);
    } catch (error) {
      console.error("Error during registration:", error.response.data);

      setNotification({
        type: "error",
        text: "Email or username already exists. Please choose another.",
      });

      setKey(key + 1);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      {notification && (
        <Notification
          type={notification.type}
          text={notification.text}
          count={key}
        />
      )}
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button onClick={handleFormSubmit} type="submit">Register</button>
        <button onClick={() => navigate("/log")}>Login</button>
        <button onClick={() => navigate("/forgot")}>Forgot</button>
      </form>
    </div>
  );
};

export default Register;
