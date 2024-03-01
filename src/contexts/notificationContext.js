import { useState, createContext } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);
  const [key, setKey] = useState(1);

  const setErrorNotification = (message) => {
    setNotification(prevNotification => ({
      type: "error",
      text: message,
      key: prevNotification ? prevNotification.key + 1 : key,
    }));

    setKey(prevKey => prevKey + 1); 
  }

  const setSuccessNotification = (message) => {
    setNotification(prevNotification => ({
      type: "success",
      text: message,
      key: prevNotification ? prevNotification.key + 1 : key,
    }));

    setKey(prevKey => prevKey + 1); 
  }

  return (
    <NotificationContext.Provider
      value={{ notification, setErrorNotification, setSuccessNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
}