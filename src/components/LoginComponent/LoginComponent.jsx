import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import useAuthService from "../../services/authService.js";
import Notification from "../../components/Notification/Notifications.jsx";
import { Buttons, Button, Form, Input, PasswordInput, LinkItem } from "../common";

import "./LoginComponent.scss";

const Login = () => {
  const [notification, setNotification] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { loginAsync } = useAuthService();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode: 'onChange'});

  const onGetNotification = useCallback((notification) => setNotification(notification), []);

  const onRequets = (data) => {
    loginAsync(data)
    .then(onGetNotification)
    .then(() => setIsLoading(false));
  }

  const onSubmit = (data) => {
    setIsLoading(true);
    onRequets(data);
  }

  return (
    <section className="login">
      {notification && (<Notification type={notification.type} text={notification.text} count={notification.key} />)}
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
          <Button title={isLoading ? 'Загрузка' : 'Войти'} disabled={isLoading} />
          <LinkItem to="forgot" name='Забыли пароль?' styleItem="forgot"/>
          <LinkItem to="reg" name='Регистрация' styleItem="register" />
        </Buttons>
      </Form>
    </section>
  );
};

export default Login;
