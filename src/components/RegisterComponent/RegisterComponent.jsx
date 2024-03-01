import { useState, useRef } from "react";
import { useForm } from "react-hook-form";

import useAuthService from "../../services/authService.js";
import { Buttons, Button, Form, Input, PasswordInput, Links, LinkItem } from "../common";

import "./RegisterComponent.scss";

//TODO: Add constants. Should add spinner?
const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { registerAsync } = useAuthService();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({mode: 'onChange'});

  const password = useRef({})
  password.current = watch('password', '')

  const request = (data) => {
    registerAsync(data)
    .then(() => setIsLoading(false));
  }

  const onSubmit = (data) => {
    const registerModel = {
      email: data.email,
      username: data.username,
      password: data.password,
    }

    setIsLoading(true);
    request(registerModel);
  }

  const validatePassword = value => 
  value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/) ? true : 
  '*Пароль должен содержать минимум 8 символов, хотя бы одну большую букву, одну маленькую букву, один знак и только латинские буквы';

  return (
    <section className="register">
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
              <Button title={isLoading ? "Отправка..." : "Зарегистрироваться"} disabled={isLoading} />
              <Links title='Уже есть аккаунт?'>
                <LinkItem to="log" name='Войти'/>
              </Links>
            </Buttons>
          </Form>
    </section>
  );
};

export default Register;
