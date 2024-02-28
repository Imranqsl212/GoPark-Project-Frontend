import { useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Notification from "../../components/Notification/Notifications.jsx";
import { delay } from "../../additionals/delay.js";
import { Buttons, Button, Form, Input, PasswordInput, LinkItem } from "../common";

import "./LoginComponent.scss";

//TODO: Add constants, add spinner, refactoring fetch function, create button component last
const Login = ({ apiEndpoint }) => {
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);
  const [key, setKey] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({mode: 'onChange'});

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
      <Form onSubmit={handleSubmit(onSubmit)} title='Вход'>
        <Input 
          label='Введите адрес электронной почты'
          name="email"
          type="email"
          required
          register={register}
          placeholder="Akylai"
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
        <Buttons>
          <Button title='Войти' />
          <LinkItem to="forgot" name='Забыли пароль?' styleItem="forgot"/>
          <LinkItem to="reg" name='Регистрация' styleItem="register" />
        </Buttons>
      </Form>
    </section>
  );
};

export default Login;
