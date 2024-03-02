import React from 'react';
import './Footer.scss'
import { ReactComponent as Face } from '../../assets/images/ic_baseline-facebook.svg';
import { ReactComponent as Inst } from '../../assets/images/ant-design_instagram-filled.svg';
import { ReactComponent as Tele } from '../../assets/images/ic_baseline-telegram.svg';
import { ReactComponent as Logo } from '../../assets/images/logo2.svg';

import {tele} from '../../assets/images/ant-design_instagram-filled.svg';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer__box">
                  <div className="footer__text">
                    <Logo/>
                    <h1 className='footer__title'>Группа компаний «GoPark»</h1>
                    <h3 className='footer__book'>+ +996550578150</h3>
                    <h3 className='footer__subtitle'>support@gmail.com</h3>
                    <p  className='footer__p'>© 2024 GOPARK GROUP. Все права защищены</p>
                  </div>  

                  <ul className="footer__ul">
                    <li className="footer__li">О нас</li>
                    <li className="footer__li">Создать поездку</li>
                    <li className="footer__li">Пробки</li>
                    <li className="footer__li">Связаться с нами</li>
                  </ul> 

                  <div className="footer__icons">
                    <Face/>
                    <Inst/>
                    <Tele/>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;