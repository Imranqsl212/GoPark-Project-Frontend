import { ReactComponent as Logo } from '../../assets/images/logo2.svg';
import { ReactComponent as User } from '../../assets/images/user.svg';
import { ReactComponent as Search } from '../../assets/images/search.svg';
import { ReactComponent as Exit } from '../../assets/images/exit.svg';

import useAuthService from '../../services/authService';

import './Header.scss'


const Header = () => {
  const { logout } = useAuthService();

  return (
    <header className='header'>    
      <div className="header__box">
        <Logo />
        <div className="header__nav">
          <ul className="header__ul">
              <li key={1} className="header__li" >Попутка</li>
              <li key={2} className="header__li" >Пробки</li>
              <li key={3} className="header__li" >О нас</li>
              <li key={4} className="header__li" >Контакты</li>
          </ul>
          <Search/>
          <User/>
          <button onChange={logout}>
            <Exit/>
          </button>
        </div>
      </div>    
    </header>
  );
};

export default Header;