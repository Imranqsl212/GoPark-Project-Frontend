import  { useState, useContext } from "react";
import { useForm } from "react-hook-form";

import { Buttons, Button, Form, Input, LinkItem } from "../../common";
import useAuthService from "../../../services/authService.js";

import './EmailSetter.scss'

const EmailSubmission = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { resetPasswordEmailAsync } = useAuthService();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode: 'onChange'});

  const request = (data) => {
    resetPasswordEmailAsync(data)
    .then(() => setIsLoading(false));
  }

  const onSubmit = (data) => {
    setIsLoading(true);
    request(data);
  };

  return (
    <section className="forgot">
      <Form onSubmit={handleSubmit(onSubmit)} title='Сброс пароля'>
        <Input 
          label='Введите адрес электронной почты'
          name="email"
          type="email"
          required
          register={register}
          placeholder="akylai@gmail.com"
          error={errors.email}
        />
        <Buttons>
          <Button title={ isLoading ? 'Отправка...' : "Сбросить пароль?"} disabled={isLoading} />
          <LinkItem to="log" name='Войти' styleItem="secondary" />
        </Buttons>
      </Form>
  </section>
  );
};

export default EmailSubmission;
