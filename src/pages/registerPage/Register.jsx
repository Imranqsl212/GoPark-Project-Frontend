import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuthentication from "../../additionals/CheckAuth.js";
import Notification from "../../components/Notification/Notifications.jsx";

const Register = () => {
  const navigate = useNavigate();
  const { checkAuthentication } = useAuthentication();
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
      const response = await axios.post(
        "https://defteam.onrender.com/api-auth/register/",
        formData
      );

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

      checkAuthentication();

      await new Promise((resolve) => setTimeout(resolve, 2000));

      navigate("/");

      checkAuthentication();
      return navigate("/");
    } catch (error) {
      console.error("Error during registration:", error.response.data);

      if (error.response.status === 400) {
        setNotification({
          type: "error",
          text: "Email or username already exists. Please choose another.",
        });
      } else {
        setNotification({
          type: "error",
          text: "Error during registration. Please try again.",
        });
      }

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
        <button type="submit">Register</button>
        <button
          onClick={() => {
            navigate("/log");
          }}
        >
          Login
        </button>

        <button
          onClick={() => {
            navigate("/email");
          }}
        >
          Forgot
        </button>
      </form>
    </div>
  );
};

export default Register;
