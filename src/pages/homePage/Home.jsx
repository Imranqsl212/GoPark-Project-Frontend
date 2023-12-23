import useAuthentication from "../../additionals/CheckAuth.js";
import Notification from "../../components/Notification/Notifications.jsx";
import { useState } from "react";

const Home = () => {
  const { checkAuthentication } = useAuthentication();
  const [notification, setNotification] = useState(null);
  const logout = async () => {
    localStorage.removeItem("tokens");
    localStorage.removeItem("userDetails");
    setNotification({
      type: "success",
      text: "Logged out successful!",
    });

    await new Promise((resolve) => setTimeout(resolve, 866)); 

    checkAuthentication();
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
