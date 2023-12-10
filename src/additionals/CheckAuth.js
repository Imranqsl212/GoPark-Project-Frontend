import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const useAuthentication = () => {
  const navigate = useNavigate();

  const checkAuthentication = () => {
    const token = JSON.parse(localStorage.getItem("tokens"));
    if (token) {
      console.log("registered");
      const decodedInfo = jwtDecode(token.access);
      console.log(decodedInfo);
      localStorage.setItem("userDetails", JSON.stringify(decodedInfo));
    } else {
      console.log("not registered");
      navigate("/log");
    }
  };

  return {
    checkAuthentication,
  };
};

export default useAuthentication;
