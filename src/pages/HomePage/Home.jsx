import homeImg from '../../assets/images/poputka.jpg';
import { Link } from "react-router-dom";

import './Home.scss'

const Home = () => {


  return (
    <div>
      <div className="home">
          <div className="home__text">
            <h3 className="home__title">GoPark - платформа для попуток и для оптимизации парковки.</h3>
            <p className="home__subtitle">Она предоставляет информацию о наличии свободных парковочных мест и помогает найти попутчиков-водителей, делая акцент на безопасности и устойчивости.</p>
            <Link to="/poputka"><button className="home__btn">Искать Водителя</button></Link>
          </div>
          <img className="home__img" src={homeImg} alt=""/>
      </div>
    </div>
  );
}

export default Home;
