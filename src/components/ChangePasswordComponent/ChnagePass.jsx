import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import Notification from "../../components/Notification/Notifications";
import { delay } from "../../additionals/delay.js";
import axios from "axios";
import './ChngePass.css'

const ChangePassword = (props) => {
  const { apiEndpoint } = props;

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);
  const [key, setKey] = useState(1);

  const handleChangePassword = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("tokens"));
      const response = await axios.post(
        apiEndpoint,
        {
          old_password: oldPassword,
          new_password: newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token.access}`,
          },
        }
      );

      console.log(response.data.detail);
      setNotification({
        type: "success",
        text: "Changed password successful!",
      });
      delay(navigate, "/", 900);
    } catch (error) {
      console.error("Error changing password:", error.response.data.detail);
      setNotification({
        type: "error",
        text: "Error changing password",
      });
      setKey(key + 1);
    }
  };

  return (
    <div>
      {notification && (
        <Notification type={notification.type} text={notification.text} count={key} />
      )}

      <label>
        Old Password:
        <input
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
      </label>
      <br />
      <label>
        New Password:
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleChangePassword}>Change Password</button>
    </div>
  );
};

export default ChangePassword;
