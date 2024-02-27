import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Notification from "../../components/Notification/Notifications.jsx";
import { delay } from "../../additionals/delay.js";
import PasswordInput from "../common/forms/passwordInput";
import "./RegisterComponent.scss";

const Register = ({ apiEndpoint }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    <section className="register">
      <div className="register__form">
        <div className="logo"></div>
        <div className="form">
          <div className="form__header">
            <h1 className="form__title">Регистрация</h1>
            <p className="form__descr">
              Заполните регистрационные данные. Это займет пару минут.Все, что
              вам нужно, это адрес электронной почты
            </p>
          </div>
          {notification && (
            <Notification
              type={notification.type}
              text={notification.text}
              count={key}
            />
          )}
          <form onSubmit={handleFormSubmit}>
            <label className="input__field">
              Введите адрес электронной почты
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="naku@gmailcom"
                required
              />
            </label>
            <label className="input__field">
              Введите ваше юзернейм
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
              Установить пароль
              <PasswordInput
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </label>
            <label className="input__field">
              Повторите пароль
              <PasswordInput
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </label>
            <div className="form__footer">
              <button
                type="submit"
                className="button__submit"
              >
                Зарегистрироваться
              </button>
              <div className="form__forgot">
                <p className="have__account">Уже есть аккаунт?</p>
                <Link to="/log">Войти</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
