import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthHttp } from "../hooks/authHttp.hook";
import { NotificationContext } from "../contexts/notificationContext";

const useAuthService = () => {
    const navigate = useNavigate();
    const { request } = useAuthHttp();
    const { setErrorNotification, setSuccessNotification } = useContext(NotificationContext);
    const _apiBase = 'https://defteam.onrender.com/api-auth';

    const registerAsync = async (data) => {
        const response = await request(`${_apiBase}/register/`, data);
        
        if (!response.ok && response.status !== 201) {
            setErrorNotification("Имя пользователя или почта уже существуют. Попробуйте ещё раз!");
            return;
        }

        const tokens = {
            access: response.data.access,
            refresh: response.data.refresh,
        };

        localStorage.setItem("tokens", JSON.stringify(tokens));
        setSuccessNotification("Регистрация прошла успешно!");
        navigate('/');
    }

    const loginAsync = async (data) => {
        const response = await request(`${_apiBase}/login/`, data);

        if(response.status !== 200) {
            setErrorNotification("Имя пользователя или пароль недействительны, попробуйте ещё раз.");
            return;
        }

        const tokens = {
            access: response.data.access,
            refresh: response.data.refresh,
        };
        
        localStorage.setItem("tokens", JSON.stringify(tokens));
        setSuccessNotification("Авторизация прошла успешно!");
        navigate('/');
    }

    const logout = () => {
        localStorage.removeItem("tokens");
        localStorage.removeItem("userDetails");
        navigate("/log");
    };

    const resetPasswordEmailAsync = async (data) => {
        const response = await request(`${_apiBase}/send_email/`, data);

        if (response.status !== 200) {
            setErrorNotification("Введен неверный адрес электронной почты!");
            return;
        }

        localStorage.setItem("email", data.email);
        setSuccessNotification("Электронная почта введена успешно!");
        navigate("/otp");
    }

    const sendOtpVerificationAsync = async(data) => {
        const email = localStorage.getItem("email");
        const response = await request(`${_apiBase}/send_email/`, {
          email: email,
          otp: data.otp,
        });
  
        if (response.status === 200) {
            setSuccessNotification("Код подтверждения принят!");
            navigate("/reset-password");
            return;
        }

        setErrorNotification("Введен неверный код подтверждения!");
    }

    return {
        loginAsync,
        registerAsync,
        logout,
        resetPasswordEmailAsync,
        sendOtpVerificationAsync,
    }
}

export default useAuthService;