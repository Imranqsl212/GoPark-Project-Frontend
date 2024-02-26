import EmailSubmissionPage from "../../../components/FogotPasswordComponents/EmailSetterComponent/EmailSetter";

const MyEmailSubmissionPage = () => {
  return (
    <EmailSubmissionPage
      apiEndpoint="https://defteam.onrender.com/api-auth/send_email/"
    />
  );
};

export default MyEmailSubmissionPage;
