import { useState, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Notification from "../../components/Notification/Notifications.jsx";
import { delay } from "../../additionals/delay.js";
import { Buttons, Button, Form, Input, PasswordInput, Links, LinkItem } from "../common";

import "./RegisterComponent.scss";

//TODO: Add constants, add spinner, refactoring fetch function, create button component last
const Register = ({ apiEndpoint }) => {
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);
  const [key, setKey] = useState(1);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
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

  const validatePassword = value => 
  value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/) ? true : 
  '*Пароль должен содержать минимум 8 символов, хотя бы одну большую букву, одну маленькую букву, один знак и только латинские буквы';

  return (
    <section className="register">
          {notification && (<Notification type={notification.type} text={notification.text} count={key} />
          )}
          <Form 
            onSubmit={handleSubmit(onSubmit)} 
            title='Регистрация' 
            descr='Заполните регистрационные данные. Это займет пару минут.Все, что вам нужно, это адрес электронной почты'
          >
            <Input 
              label='Введите адрес электронной почты'
              name="email"
              type="email"
              required
              register={register}
              placeholder="akylai@gmail.com"
              error={errors.email}
            />
            <Input 
              label='Введите имя пользователя'
              name="username"
              type="text"
              required
              register={register}
              placeholder="Akylai"
              error={errors.username}
            />
            <PasswordInput
              label='Введите пароль'
              name="password"
              register={register}
              required
              placeholder="********"
              error={errors.password}
              validate={value => validatePassword(value) }
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
            <Buttons>
              <Button title="Зарегистрироваться" />
              <Links title='Уже есть аккаунт?'>
                <LinkItem to="log" name='Войти'/>
              </Links>
            </Buttons>
          </Form>
    </section>
  );
};

export default Register;
