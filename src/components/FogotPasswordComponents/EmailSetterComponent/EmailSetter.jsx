import  { useState } from "react";
import axios from "axios";
import Notification from "../../../components/Notification/Notifications.jsx";
import { delay } from "../../../additionals/delay.js";
import { useNavigate } from "react-router-dom";

const EmailSubmission = ({ apiEndpoint }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [notification, setNotification] = useState(null);
  const [key, setKey] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(apiEndpoint, {
        email,
      });

      if (response.status === 200) {
        localStorage.setItem("email", email);
        setNotification({
          type: "success",
          text: "Email entered successfully!",
        });

        delay(navigate, "/otp", 900);
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      setNotification({
        type: "error",
        text: "Invalid email entered",
      });

      setKey(key + 1);
    }
  };

  return (
    <div>
      {notification && (
        <Notification
          type={notification.type}
          text={notification.text}
          count={key}
        />
      )}
      <h1>Email Submission</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button onClick={handleSubmit} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmailSubmission;
