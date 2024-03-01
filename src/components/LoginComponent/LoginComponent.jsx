import { useState } from "react";
import { useForm } from "react-hook-form";

import useAuthService from "../../services/authService.js";
import { Buttons, Button, Form, Input, PasswordInput, LinkItem } from "../common";

import "./LoginComponent.scss";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { loginAsync } = useAuthService();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode: 'onChange'});

  const onRequets = async (data) => {
    await loginAsync(data)
    .then(() => setIsLoading(false));
  }

  const onSubmit = (data) => {
    setIsLoading(true);
    onRequets(data);
  }

  return (
    <section className="login">
      <Form onSubmit={handleSubmit(onSubmit)} title='Вход'>
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
        />
        <Buttons>
          <Button title={isLoading ? 'Отправка...' : 'Войти'} disabled={isLoading} />
          <LinkItem to="forgot" name='Забыли пароль?' styleItem="primary"/>
          <LinkItem to="reg" name='Регистрация' styleItem="secondary" />
        </Buttons>
      </Form>
    </section>
  );
};

export default Login;
