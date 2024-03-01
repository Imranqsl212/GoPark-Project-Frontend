import toast, { Toaster } from "react-hot-toast";
import  { useContext, useEffect } from "react";
import { NotificationContext } from '../../contexts/notificationContext'

const Notification = ({ type, text, count = 0 }) => {
  const { notification, resetNotification } = useContext(NotificationContext);

  const showToast = () => {
    switch (notification.type) {
      case "success":
        toast.success(notification.text);
        break;
      case "error":
        toast.error(notification.text);
        break;
      default:
        toast.success(notification.text);
    }
  };

  useEffect(() => {
    showToast();

    const resetNotificationTimer = setTimeout(() => {
      resetNotification();
    }, 8000);

    return () => {
      clearTimeout(resetNotificationTimer);
    };

  }, [type, text, count]);

  return <Toaster position="top-right" />;
};

export default Notification;
