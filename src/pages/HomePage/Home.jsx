import Notification from "../../components/Notification/Notifications.jsx";
import { useState } from "react";
import { delay } from "../../additionals/delay.js";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);
  const logout = async () => {
    localStorage.removeItem("tokens");
    localStorage.removeItem("userDetails");
    setNotification({
      type: "success",
      text: "Logged out successful!",
    });

    delay(navigate, "/log", 866);
  };

  return (
    <div>
      {notification && (
        <Notification type={notification.type} text={notification.text} />
      )}
      <h1>Home</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
