import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Notification from "../../components/Notification/Notifications.jsx";
import { delay } from "../../additionals/delay.js";

const Login = ({ apiEndpoint }) => {
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);
  const [key, setKey] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

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

      setNotification({
        type: "success",
        text: "Login successful!",
      });

      delay(navigate, "/", 1000);
    } catch (error) {
      setNotification({
        type: "error",
        text: "Username or password are invalid, please try another",
      });
      setKey(key + 1);
    }
  };

  return (
    <div>
      <h1>Login</h1>
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
        <button onClick={handleFormSubmit} type="submit">Login</button>
        <button
          onClick={() => {
            navigate("/reg");
          }}
        >
          Register
        </button>
        <button
          onClick={() => {
            navigate("/forgot");
          }}
        >
          Forgot Password?
        </button>
      </form>
    </div>
  );
};

export default Login;
