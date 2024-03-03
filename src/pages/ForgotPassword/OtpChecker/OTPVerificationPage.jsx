import OTPVerification from "../../../components/FogotPasswordComponents/OTP-Checker-Component/OTP-Checker-component";

const MyOTPVerificationComponent = () => {
  return (
    <OTPVerification
      apiEndpoint="https://defteam.onrender.com/api-auth/check_otp/"
    />
  );
};

export default MyOTPVerificationComponent;
