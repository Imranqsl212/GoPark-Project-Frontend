import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import useAuthentication from "../../additionals/CheckAuth.js";

const Login = () => {
  const navigate = useNavigate();
  const { checkAuthentication } = useAuthentication();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://defteam.onrender.com/api-auth/login/', formData);

      // Login successful
      const tokens = {
        access: response.data.access,
        refresh: response.data.refresh,
      };

      localStorage.setItem('tokens', JSON.stringify(tokens));
      checkAuthentication()
      return navigate('/')
    } catch (error) {
      console.error('Error during login:', error.response.data);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
        <button onClick={()=>{navigate('/reg');}} >Register</button>
        <button
          onClick={() => {
            navigate("/email");
          }}
        >
          Forgot
        </button>
      </form>
    </div>
  );
};

export default Login;
