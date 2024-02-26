import  { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import Login from "./pages/LoginPage/LoginPage.jsx";
import useAuthentication from "./additionals/CheckAuth.js";
import ChangePassword from "./pages/ChangePasswordPage/ChangePasswordPage.jsx";

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
        <Route path="/reg" element={<RegisterPage />} />
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
