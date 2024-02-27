import  { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import Notification from "../../../components/Notification/Notifications.jsx";
import { delay } from "../../../additionals/delay.js";
import { useNavigate } from "react-router-dom";
import Input from "../../common/input/index.jsx";
import './EmailSetter.scss'

const EmailSubmission = ({ apiEndpoint }) => {
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);
  const [key, setKey] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
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
    <div className="form__wrapper">
      <div className="form__logo"></div>
      <div className="form__main">
        <div className="form__header">
          <h1 className="form__title">Сброс пароля</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
          <Input 
            label='Введите адрес электронной почты'
            name="email"
            type="email"
            required
            register={register}
            placeholder="akylai@gmail.com"
            error={errors.email}
          />
          <div className="form__footer">
            <button className="button__submit" type="submit" disabled={isLoading}>
              Сбросить пароль?
            </button>
            <Link to="/log" className="forgot__enter">
              Войти
            </Link>
          </div>
        </form>
      </div>
    </div>
  </section>
  );
};

export default EmailSubmission;
