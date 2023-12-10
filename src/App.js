import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/Home.jsx";
import Register from "./pages/registerPage/Register.jsx";
import Login from "./pages/loginPage/Login.jsx";
import useAuthentication from "./additionals/CheckAuth.js";
import ChangePassword from "./pages/changePass/ChangePassword.jsx";
import EmailSubmissionPage from "./pages/forgotPassword/emailSetter/EmailSubmissionPage.jsx";
import OTPVerificationPage from "./pages/forgotPassword/otpChecker/OTPVerificationPage.jsx";
import PasswordResetPage from "./pages/forgotPassword/passwordReseter/PasswordResetPage.jsx";

function App() {
  const { checkAuthentication } = useAuthentication();

  useEffect(() => {
    checkAuthentication();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/log" element={<Login />} />
        <Route path="/change" element={<ChangePassword />} />
        <Route path="/email" element={<EmailSubmissionPage />} />
        <Route path="/otp" element={<OTPVerificationPage />} />
        <Route path="/reset-password" element={<PasswordResetPage />} />
      </Routes>
    </div>
  );
}

export default App;
