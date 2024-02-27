import { useState, useCallback } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Notification from "../../components/Notification/Notifications.jsx";
import { delay } from "../../additionals/delay.js";
import { useForm } from "react-hook-form";
import PasswordInput from "../common/forms/passwordInput";
import Input from "../common/forms/input/index.jsx";
import "./LoginComponent.scss";


const Login = ({ apiEndpoint }) => {
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);
  const [key, setKey] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = useCallback(
    async (data) => {
      try {
        console.log(data);
        const response = await axios.post(apiEndpoint, data);
  
        const tokens = {
          access: response.data.access,
          refresh: response.data.refresh,
        };
  
        localStorage.setItem("tokens", JSON.stringify(tokens));
  
        setNotification({
          type: "success",
          text: "Авторизация прошла успешно!",
        });
  
        delay(navigate, "/", 1000);
      } catch (error) {
        console.log(error);
        setNotification({
          type: "error",
          text: "Имя пользователя или пароль недействительны, попробуйте ещё раз.",
        });
        setKey(key + 1);
      }
    }
  )

  return (
    <section className="login">
      {notification && (<Notification type={notification.type} text={notification.text} count={key} />)}
      <div className="login__form">
        <div className="logo"></div>
        <div className="form">
          <div className="form__header">
            <h1 className="form__title">Вход</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input 
              label='Введите адрес электронной почты'
              name="email"
              type="email"
              required
              register={register}
              placeholder="Акылай"
              error={errors.email}
            />
            <PasswordInput
              label='Введите пароль'
              name="password"
              register={register}
              required
              placeholder="********"
              error={errors.password}
            />
            <div className="form__footer">
              <button className="button__submit" type="submit">
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
