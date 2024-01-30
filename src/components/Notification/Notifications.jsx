import toast, { Toaster } from "react-hot-toast";
import  { useEffect } from "react";

const Notification = ({ type, text, count = 0 }) => {
  useEffect(() => {
    const showToast = async () => {
      switch (type) {
        case "success":
          toast.success(text);
          break;
        case "error":
          toast.error(text);
          break;
        default:
          toast.success(text);
      }
    };
    showToast();
  }, [type, text, count]);

  return <Toaster position="top-right" />;
};

export default Notification;
