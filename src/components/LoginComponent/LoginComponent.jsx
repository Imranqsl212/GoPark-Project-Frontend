import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Notification from "../../components/Notification/Notifications.jsx";
import { delay } from "../../additionals/delay.js";
import PasswordInput from "../common/forms/PasswordInput.jsx";
import "./LoginComponent.scss";

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
    <section className="login">
      {notification && (
        <Notification
          type={notification.type}
          text={notification.text}
          count={key}
        />
      )}
      <div className="login__form">
        <div className="logo"></div>
        <div className="form">
          <div className="form__header">
            <h1 className="form__title">Вход</h1>
          </div>
          <form onSubmit={handleFormSubmit}>
            <label className="input__field">
              Введите ваш юзернейм
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
                placeholder="Акылай"
              />
            </label>
            <label className="input__field">
              Введите пароль
              <PasswordInput
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </label>
            <div className="form__footer">
              <button
                className="button__submit"
                onClick={handleFormSubmit}
                type="submit"
              >
                Войти
              </button>
              <Link to="/forgot" className="login__forgot">
                Забыли пароль?
              </Link>
              <Link to="/reg" className="login__register">
                Регистрация
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
