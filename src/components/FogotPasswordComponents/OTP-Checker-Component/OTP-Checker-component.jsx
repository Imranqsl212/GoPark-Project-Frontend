import { useCallback, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Notification from "../../../components/Notification/Notifications.jsx";
import { delay } from "../../../additionals/delay.js";
import { Buttons, Button, Form, Input, Links, LinkItem } from "../../common";

import './OTP-Checker-component.scss'

const OTPVerification = ({ apiEndpoint }) => {
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);
  const [key, setKey] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode: 'onChange'});

  const onSubmit = useCallback(async (data) => {
    try {
      const email = localStorage.getItem("email");
      const response = await axios.post(apiEndpoint, {
        email: email,
        otp: data.otp,
      });

      if (response.status === 200) {
        setNotification({
          type: "success",
          text: "Код подтверждения принят!",
        });

        delay(navigate, "/reset-password", 900);
      }
    } catch (error) {
      setNotification({
        type: "error",
        text: "Введен неверный код подтверждения!",
      });

      setKey(key + 1);
    }
  }, []);

  return (
    <section className="otp">
      {notification && (<Notification type={notification.type} text={notification.text} count={key} />)}
      <Form 
        onSubmit={handleSubmit(onSubmit)} 
        title='Верификация' 
        descr='Мы отправили код подтверждение на ваш email.'
      >
        <Input 
          label='Введите код подтверждение '
          name="otp"
          type="number"
          required
          register={register}
          placeholder="0000"
          validate={value => value.length < 5 || '*Укажите четыре цифры'}
          error={errors.otp}
        />
        <Buttons>  
          <Button title="Отправить"/>
          <Links title='Не пришел код?'>
            <LinkItem to='forgot' name='Отправить повторно' />
          </Links>
        </Buttons>
      </Form>
    </section>
  );
};

export default OTPVerification;
