import React from 'react';
import '../AboutUsPage/AboutUsPage.scss'
import Rich from '../../assets/images/about/rich.png' 

function AboutUsPage(props) {
    return (
        <div className='AboutUs'>
            <div className="about-us-complete-mode">
                <div className="About-content">
                    <div className="about-block">
                        <h2 className="about-block-title">
                            GoPark - платформа для попуток и для оптимизации парковки.
                        </h2>
                        <p className="about-block-subtitle">
                            Она предоставляет информацию о наличии свободных парковочных мест и помогает найти попутчиков, делая акцент на безопасности и устойчивости.
                        </p>
                        <button className="about-block-btn">
                            Искать попутчика
                        </button>
                    </div>
                </div>
                <div className="About-content-part">
                    <div className="about-content-mission">
                        <div className="about-mission-img">
                            <img src={Rich} alt="" />
                        </div>
                        <div className="about-mission">
                            <h2 className="about-mission__title">
                                Миссия и видение Gopark
                            </h2>
                            <p className="about-mission__subtitle">
                                Стремимся создать города, в которых каждая поездка - это возможность <br /> сэкономить время, ресурсы и сделать окружающую среду более <br />  устойчивой. Мы видим будущее, где транспорт станет более умным <br /> и доступным, а города - более дружелюбными и экологически <br /> ответственными.
                            </p>
                            <p className="about-mission__percent">
                                <div className="about-mission__percent-block">
                                    <h2 className="about-mission__percent-block_title">
                                        200+
                                    </h2>
                                    <p className="about-mission__percent-block_subtitle">
                                        Водителей
                                    </p>
                                </div>
                                <div className="about-mission__percent-block">
                                    <h2 className="about-mission__percent-block_title">
                                        10000
                                    </h2>
                                    <p className="about-mission__percent-block_subtitle">
                                        Более поездок за год 
                                    </p>
                                </div>
                                <div className="about-mission__percent-block">
                                    <h2 className="about-mission__percent-block_title">
                                        15%
                                    </h2>
                                    <p className="about-mission__percent-block_subtitle">
                                        Всего при регистрации
                                    </p>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUsPage;