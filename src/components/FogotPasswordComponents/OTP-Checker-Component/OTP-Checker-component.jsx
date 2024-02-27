import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Notification from "../../../components/Notification/Notifications.jsx";
import { delay } from "../../../additionals/delay.js";
import Input from "../../common/input";

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

  const onSubmit = async (data) => {
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
  };

  return (
    <section className="otp">
      {notification && (<Notification type={notification.type} text={notification.text} count={key} />)}
      <div className="form__wrapper">
        <div className="form__logo"></div>
        <div className="form__main">
          <div className="form__header"> 
            <h1 className="form__title">Верификация</h1>
            <p className="form__descr">Мы отправили код подтверждение на ваш email.</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <div className="form__footer">  
              <button className="button__submit" type="submit">Отправить</button>
              <div className="form__forgot">
                <p>Не пришел код?</p>
                <Link to="/forgot">Отправить повторно</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OTPVerification;
