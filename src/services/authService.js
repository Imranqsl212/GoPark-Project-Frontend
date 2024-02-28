import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthHttp } from "../hooks/authHttp.hook"
import { delay } from "../additionals/delay";

const useAuthService = () => {
    const navigate = useNavigate();
    const [notification, setNotification] = useState(null);
    const [key, setKey] = useState(1);
    const { request } = useAuthHttp();
    const _apiBase = 'https://defteam.onrender.com/api-auth';

    const loginAsync = async (data) => {
        const response = await request(`${_apiBase}/login/`, data);

        if(!response.ok) {
            console.log('here')
            setKey(key => key + 1);

            setNotification({
                type: "error",
                text: "Имя пользователя или пароль недействительны, попробуйте ещё раз.",
                key: key,
            });

            return notification;
        }

        const tokens = {
            access: response.data.access,
            refresh: response.data.refresh,
        };

        setNotification({
            type: "success",
            text: "Авторизация прошла успешно!",
            key: key,
        });

        localStorage.setItem("tokens", JSON.stringify(tokens));
        delay(navigate, "/", 1000);
        return notification;
    }

    return {
        notification, setNotification,
        loginAsync,
    }
}

export default useAuthService;