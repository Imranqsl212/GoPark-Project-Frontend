import { useCallback } from "react";
import axios from "axios";

export const useAuthHttp = () => {
    const request = useCallback(
        async(url, body) => {
            try {
                const response = await axios.post(url, body);
                return response;
            } catch (error) {
                console.log(error);
                return error;
            }
    }, [])

    return { request }
}