import  { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home.jsx";
import Register from "./pages/RegisterPage/RegisterPage.jsx";
import Login from "./pages/LoginPage/LoginPage.jsx";
import useAuthentication from "./additionals/CheckAuth.js";
import ChangePassword from "./pages/ChangePasswordPage/ChangePasswordPage.jsx";

import EmailSubmissionPage from "./pages/ForgotPassword/emailSetter/EmailSubmissionPage.jsx";
import OTPVerificationPage from "./pages/ForgotPassword/otpChecker/OTPVerificationPage.jsx";
import PasswordResetPage from "./pages/ForgotPassword/passwordReseter/PasswordResetPage.jsx";

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
        <Route path="/forgot" element={<EmailSubmissionPage />} />
        <Route path="/otp" element={<OTPVerificationPage />} />
        <Route path="/reset-password" element={<PasswordResetPage />} />
      </Routes>
    </div>
  );
}

export default App;
