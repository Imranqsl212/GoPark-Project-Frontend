import { useState } from "react";
import { useForm } from "react-hook-form";

import { Buttons, Button, Form, Input, Links, LinkItem } from "../../common";
import { useAuthService } from '../../../services/authService';

import './OTP-Checker-component.scss'

const OTPVerification = () => {
  const [isLoading, setLoading] = useState(false);
  const { sendOtpVerificationAsync } = useAuthService();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode: 'onChange'});

  const request = (data) => {
    sendOtpVerificationAsync(data)
    .then(() => setLoading(false))
  }

  const onSubmit = () => {
    setLoading(true);
    request(data);
  };

  return (
    <section className="otp">
      <Form 
        onSubmit={handleSubmit(onSubmit)} 
        title='Верификация' 
        descr='Мы отправим код подтверждение на ваш email.'
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
          <Button title={ isLoading ? `Отправка...` : "Отправить"} disabled={isLoading}/>
          <Links title='Не пришел код?'>
            <LinkItem to='forgot' name='Отправить повторно' />
          </Links>
        </Buttons>
      </Form>
    </section>
  );
};

export default OTPVerification;
