import React, { useState } from "react";
import Notification from "../../components/Notification/Notifications.jsx";
import axios from "axios";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [notification, setNotification] = useState(null);

  const handleChangePassword = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("tokens"));
      const response = await axios.post(
        "https://defteam.onrender.com/api-auth/change-password/",
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
    } catch (error) {
      console.error("Error changing password:", error.response.data.detail);
      setNotification({
        type: "error",
        text: "Error changing password",
      });
    }
  };

  return (
    <div>
      {notification && (
        <Notification type={notification.type} text={notification.text} />
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
