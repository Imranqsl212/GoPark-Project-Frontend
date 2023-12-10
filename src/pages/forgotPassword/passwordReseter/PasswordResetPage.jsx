import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PasswordResetPage = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const email = localStorage.getItem("email");
      const response = await axios.post(
        "https://defteam.onrender.com/api-auth/reset_password/",
        {
          email: email,
          new_password: newPassword,
        }
      );
      if (response.status === 200) {
        console.log(response.data.message);
        localStorage.removeItem("email");
        return navigate("/log");
      }
    } catch (error) {
      console.error("Error resetting password:", error);
    }
  };

  return (
    <div>
      <h1>Password Reset</h1>
      <form onSubmit={handleSubmit}>
        <label>New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default PasswordResetPage;
