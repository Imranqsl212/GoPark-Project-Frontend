import React, { useState } from 'react';
import axios from 'axios';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('tokens')); 
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
    } catch (error) {
      console.error('Error changing password:', error.response.data.detail);
    }
  };

  return (
    <div>
      <label>
        Old Password:
        <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
      </label>
      <br />
      <label>
        New Password:
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleChangePassword}>Change Password</button>
    </div>
  );
};

export default ChangePassword;
