import React from 'react';
import '../AboutUsPage/AboutUsPage.scss'

function AboutUsPage(props) {
    return (
        <div className='AboutUs'>
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
        </div>
    );
}

export default AboutUsPage;