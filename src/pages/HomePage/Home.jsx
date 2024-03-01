import Notification from "../../components/Notification/Notifications.jsx";
import { useState } from "react";
import { delay } from "../../additionals/delay.js";
import { useNavigate } from "react-router-dom";
import homeImg from '../../assets/images/homeImg.png'
import './Home.scss'

const Home = () => {
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);

  const logout = async () => {
    localStorage.removeItem("tokens");
    localStorage.removeItem("userDetails");
    setNotification({
      type: "success",
      text: "Logged out successful!",
    });

  const onLogout = () => {
    logout();
  }

  return (
    <div>
      {notification && (
        <Notification type={notification.type} text={notification.text} />
      )}
      {/* <h1>Home</h1>
      <button onClick={logout}>Logout</button> */}
      <div className="home">
          <div className="home__text">
            <h3 className="home__title">GoPark - платформа для попуток и для оптимизации парковки.</h3>
            <p className="home__subtitle">Она предоставляет информацию о наличии свободных парковочных мест и помогает найти попутчиков, делая акцент на безопасности и устойчивости.</p>
            <button className="home__btn">Искать попутчика</button>
          </div>
          <div className="home__img">
          <img src={homeImg} alt=""/>
          </div>
      </div>
    </div>
  );
};

export default Home;
