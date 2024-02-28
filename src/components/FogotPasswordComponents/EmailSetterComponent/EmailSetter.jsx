import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

import Notification from "../../../components/Notification/Notifications.jsx";
import { delay } from "../../../additionals/delay.js";
import { Buttons, Button, Form, Input, LinkItem } from "../../common";

import './EmailSetter.scss'

const EmailSubmission = ({ apiEndpoint }) => {
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);
  const [key, setKey] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode: 'onChange'});

  const onSubmit = async (data) => {

    try {
      const response = await axios.post(apiEndpoint, data);

      if (response.status === 200) {
        localStorage.setItem("email", data);
        setNotification({
          type: "success",
          text: "Email entered successfully!",
        });

        delay(navigate, "/otp", 900);
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      setNotification({
        type: "error",
        text: "Invalid email entered",
      });

      setKey(key + 1);
    }
  };

  return (
    <section className="forgot">
      {notification && (<Notification type={notification.type} text={notification.text} count={key} />)}
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
          <Button title="Сбросить пароль?" />
          <LinkItem to="log" name='Войти' styleItem="enter" />
        </Buttons>
      </Form>
  </section>
  );
};

export default EmailSubmission;
