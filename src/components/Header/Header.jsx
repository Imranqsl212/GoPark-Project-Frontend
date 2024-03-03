import { ReactComponent as Logo } from "../../assets/images/logo2.svg";
import { ReactComponent as User } from "../../assets/images/user.svg";
import { ReactComponent as Search } from "../../assets/images/search.svg";
import { ReactComponent as Exit } from "../../assets/images/exit.svg";
import useAuthService from "../../services/authService";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import "./Header.scss";

const Header = () => {
  const { logout } = useAuthService();

  return (
    <header className="header">
      <div className="header__box">
        <Link to="/">
          <Logo />
        </Link>

        <div className="header__nav">
          <ul className="header__ul">
            <li key={1} className="header__li">
              <Link to="/poputka">Попутка</Link>
            </li>
            <li key={2} className="header__li">
              <Link to="/probki">Пробки</Link>
            </li>
            <li key={3} className="header__li">
              <Link to="/about-us">О нас</Link>
            </li>
            <li key={4} className="header__li">
              <ScrollLink to="contacts" smooth={true} duration={500}>Контакты</ScrollLink>
            </li>
          </ul>
          <Search />
          <User />
          <button onClick={logout}>
            <Exit />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
