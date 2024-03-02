import  { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage/Home.jsx";
import Map from './components/Map';
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import Login from "./pages/LoginPage/LoginPage.jsx";
import useAuthentication from "./additionals/CheckAuth.js";
import ChangePassword from "./pages/ChangePasswordPage/ChangePasswordPage.jsx";
import EmailSubmissionPage from "./pages/ForgotPassword/EmailSetter/EmailSubmissionPage.jsx";
import OTPVerificationPage from "./pages/ForgotPassword/OtpChecker/OTPVerificationPage.jsx";
import PasswordResetPage from "./pages/ForgotPassword/PasswordReseter/PasswordResetPage.jsx";
import Toolbar from "./components/common/toolbar/Toolbar.jsx";
import Header from "./components/Header/Header.jsx";
import About from "./pages/AboutUsPage/AboutUsPage"
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";

function App() {
  const { checkAuthentication } = useAuthentication();

  // useEffect(() => {
  //    checkAuthentication();
  // }, []);

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/reg" element={<RegisterPage />} />
        <Route path="/reg" element={<RegisterPage />} />
        <Route path="/log" element={<Login />} />
        <Route path="/change" element={<ChangePassword />} />
        <Route path="/forgot" element={<EmailSubmissionPage />} />
        <Route path="/otp" element={<OTPVerificationPage />} />
        <Route path="/reset-password" element={<PasswordResetPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
      <Toolbar />
    </>
  );
}

export default App;
