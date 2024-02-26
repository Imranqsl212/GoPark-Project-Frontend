import PasswordReset from "../../../components/FogotPasswordComponents/Password-reset-component/Password-Reset-component";

const PasswordResetPage = () => {
  return (
    <PasswordReset
      apiEndpoint="https://defteam.onrender.com/api-auth/reset_password/"
    />
  );
};

export default PasswordResetPage;
