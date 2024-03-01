import React from 'react';
import './Header.scss'
import { ReactComponent as Logo } from '../../assets/images/logo2.svg';
import { ReactComponent as User } from '../../assets/images/user.svg';
import { ReactComponent as Search } from '../../assets/images/search.svg';
import { ReactComponent as Exit } from '../../assets/images/exit.svg';
import { useState } from "react";
import { delay } from "../../additionals/delay.js";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();
    const [notification, setNotification] = useState(null);
    const logout = async () => {
      localStorage.removeItem("tokens");
      localStorage.removeItem("userDetails");
      setNotification({
        type: "success",
        text: "Logged out successful!",
      });
  
      delay(navigate, "/log", 866);
    };
    return (
        <header className='header'>    
            <div className="header__box">
                     <Logo />
                <div className="header__nav">
                     <ul className="header__ul">
                         <li className="header__li" >Попутка</li>
                         <li className="header__li" >Пробки</li>
                         <li className="header__li" >О нас</li>
                         <li className="header__li" >Контакты</li>
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