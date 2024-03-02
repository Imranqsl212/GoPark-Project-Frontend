import useAuthService from "../../services/authService.js";
import homeImg from '../../assets/images/poputka.jpg';

import './Home.scss'

const Home = () => {
  const { logout } = useAuthService();

  const onLogout = () => {
    logout();
  }

  return (
    <div>
      <div className="home">
          <div className="home__text">
            <h3 className="home__title">GoPark - платформа для попуток и для оптимизации парковки.</h3>
            <p className="home__subtitle">Она предоставляет информацию о наличии свободных парковочных мест и помогает найти попутчиков, делая акцент на безопасности и устойчивости.</p>
            <button className="home__btn">Искать попутчика</button>
          </div>
          <img className="home__img" src={homeImg} alt=""/>
      </div>
    </div>
  );
}

export default Home;
