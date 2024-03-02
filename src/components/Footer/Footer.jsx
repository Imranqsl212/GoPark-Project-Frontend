import React from 'react';
import '../Footer/Footer.scss'
import  Face  from '../../assets/images/footer/ic_baseline-facebook.svg';
import  Inst  from '../../assets/images/footer/ant-design_instagram-filled.svg';
import  Tele  from '../../assets/images/footer/ic_baseline-telegram.svg';
import Logo from '../../assets/images/footer/Frame 10.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer__box">
                  <div className="footer__text">
                    <img src={Logo} alt="" />
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
                    <img src={Face} alt="" />
                    <img src={Inst} alt="" />
                    <img src={Tele} alt="" />
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;