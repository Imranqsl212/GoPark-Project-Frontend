import { useState, useCallback, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Notification from "../../components/Notification/Notifications.jsx";
import { delay } from "../../additionals/delay.js";
import PasswordInput from "../common/input/passwordInput";
import Input from "../common/input";

import "./RegisterComponent.scss";

//TODO: Add constants, add spinner, refactoring fetch function
const Register = ({ apiEndpoint }) => {
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);
  const [key, setKey] = useState(1);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isLoading },
  } = useForm({mode: 'onChange'});

  const password = useRef({})
  password.current = watch('password', '')

  const onSubmit = useCallback(
    async (data) => {
      try {
        const response = await axios.post(apiEndpoint, data);
  
        const tokens = {
          access: response.data.access,
          refresh: response.data.refresh,
        };
  
        localStorage.setItem("tokens", JSON.stringify(tokens));
  
        setNotification({
          type: "success",
          text: "Регистрация прошла успешно!",
        });
  
        delay(navigate, "/", 1000);
      } catch (error) {
        console.error("Error during registration:", error.response.data);
  
        setNotification({
          type: "error",
          text: "Имя пользователя или пароль уже существуют. Попробуйте ещё раз!",
        });
  
        setKey(key + 1);
      }
    }
  )

  return (
    <section className="register">
      <div className="form__wrapper">
        <div className="form__logo"></div>
        <div className="form__main">
          <div className="form__header">
            <h1 className="form__title">Регистрация</h1>
            <p className="form__descr">
              Заполните регистрационные данные. Это займет пару минут.Все, что
              вам нужно, это адрес электронной почты
            </p>
          </div>
          {notification && (<Notification type={notification.type} text={notification.text} count={key} />
          )}
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
            <Input 
              label='Введите имя пользователя'
              name="username"
              type="text"
              required
              register={register}
              placeholder="Акылай"
              error={errors.username}
            />
            <PasswordInput
              label='Введите пароль'
              name="password"
              register={register}
              required
              placeholder="********"
              error={errors.password}
              validate={value => value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/) || '*Пароль должен содержать минимум 8 символов, хотя бы одну большую букву, одну маленькую букву, один знак и только латинские буквы' }
            />
            <PasswordInput
              label='Подтверждение пароля'
              name="confirmPassword"
              register={register}
              required
              placeholder="********"
              error={errors.confirmPassword}
              validate={value => value === password.current || '*Пароли не совпадают'}
            />
            <div className="form__footer">
              <button type="submit" className="button__submit">
                Зарегистрироваться
              </button>
              <div className="form__forgot">
                <p>Уже есть аккаунт?</p>
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
