import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// ... (other imports)

const EmailSubmissionPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null); // Add state to handle errors

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://defteam.onrender.com/api-auth/send_email/", {
        email,
      });

      if (response.status === 200) {
        localStorage.setItem("email", email);
        return navigate("/otp");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div>
      <h1>Email Submission</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmailSubmissionPage;
