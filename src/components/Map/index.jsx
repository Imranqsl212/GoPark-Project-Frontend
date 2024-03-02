import carImg from '../../assets/images/car.svg';
import pinImg from '../../assets/images/ic-pin.svg';
import filterImg from '../../assets/images/filter-Icon.svg'

import './map.scss';

const MapAdasd = () => {
  return (
    <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.811877100249!2d74.58258377634903!3d42.855705271151216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9d3088356eb%3A0xb6b7beaa1240556a!2z0JDQt9C40Y8g0JzQvtC70Ls!5e0!3m2!1sru!2skg!4v1709390867646!5m2!1sru!2skg" referrerpolicy="no-referrer-when-downgrade" className='map__iframe'>
      </iframe>
    </div>
  )
}

const Map = () => {
  return (
    <>
      <MapAdasd />
      <section className='car'>
        <div className='car__block'>
          <div className='car__input-wrapper'>
            <input className='car__input' type="text" placeholder='Введите адрес' />
            <button type="button" className="car__input-btn">
                <img src={filterImg} alt='filter image' width={24} height={24} />
            </button>
          </div>
          <ul className='car__list'>
            <li className='car__item'>
              <div className='car__item-descr'>
                <img src={carImg} alt='car image' width={48} height={20} />
                <div>
                  <div className='car__destination'>
                    <img src={pinImg} alt='pin image' width={12} height={16} />
                    <p className='car__item-title'>Азия Молл</p>
                  </div>
                  <p className='car__item-subtitle'>1.5 км</p>
                </div>
              </div>
              <div>
                <p className='car__item-title'>250 сом</p>
                <p className='car__item-subtitle'>2 места</p>
              </div>
            </li>
            <li className='car__item'>
              <div className='car__item-descr'>
                <img src={carImg} alt='car image' width={48} height={20} />
                <div>
                  <div className='car__destination'>
                    <img src={pinImg} alt='pin image' width={12} height={16} />
                    <p className='car__item-title'>Политех</p>
                  </div>
                  <p className='car__item-subtitle'>1.5 км</p>
                </div>
              </div>
              <div>
                <p className='car__item-title'>250 сом</p>
                <p className='car__item-subtitle'>2 места</p>
              </div>
            </li>
            <li className='car__item'>
              <div className='car__item-descr'>
                <img src={carImg} alt='car image' width={48} height={20} />
                <div>
                  <div className='car__destination'>
                    <img src={pinImg} alt='pin image' width={12} height={16} />
                    <p className='car__item-title'>Орто-Сай р-к</p>
                  </div>
                  <p className='car__item-subtitle'>1.5 км</p>
                </div>
              </div>
              <div>
                <p className='car__item-title'>250 сом</p>
                <p className='car__item-subtitle'>2 места</p>
              </div>
            </li>
            <li className='car__item'>
              <div className='car__item-descr'>
                <img src={carImg} alt='car image' width={48} height={20} />
                <div>
                  <div className='car__destination'>
                    <img src={pinImg} alt='pin image' width={12} height={16} />
                    <p className='car__item-title'>Дордой рынок</p>
                  </div>
                  <p className='car__item-subtitle'>1.5 км</p>
                </div>
              </div>
              <div>
                <p className='car__item-title'>250 сом</p>
                <p className='car__item-subtitle'>2 места</p>
              </div>
            </li>
            <li className='car__item'>
              <div className='car__item-descr'>
                <img src={carImg} alt='car image' width={48} height={20} />
                <div>
                  <div className='car__destination'>
                    <img src={pinImg} alt='pin image' width={12} height={16} />
                    <p className='car_item-title'>Т-Молдо</p>
                  </div>
                  <p className='car__item-subtitle'>1.5 км</p>
                </div>
              </div>
              <div>
                <p className='car__item-title'>250 сом</p>
                <p className='car__item-subtitle'>2 места</p>
              </div>
            </li>
            <li className='car__item'>
              <div className='car__item-descr'>
                <img src={carImg} alt='car image' width={48} height={20} />
                <div>
                  <div className='car__destination'>
                    <img src={pinImg} alt='pin image' width={12} height={16} />
                    <p className='car__item-title'>Бишкек парк</p>
                  </div>
                  <p className='car__item-subtitle'>1.5 км</p>
                </div>
              </div>
              <div>
                <p className='car__item-title'>250 сом</p>
                <p className='car__item-subtitle'>2 места</p>
              </div>
            </li>
            <li className='car__item'>
              <div className='car__item-descr'>
                <img src={carImg} alt='car image' width={48} height={20} />
                <div>
                  <div className='car__destination'>
                    <img src={pinImg} alt='pin image' width={12} height={16} />
                    <p className='car__item-title'>Филармония</p>
                  </div>
                  <p className='car__item-subtitle'>1.5 км</p>
                </div>
              </div>
              <div>
                <p className='car__item-title'>250 сом</p>
                <p className='car__item-subtitle'>2 места</p>
              </div>
            </li>
            <li className='car__item'>
              <div className='car__item-descr'>
                <img src={carImg} alt='car image' width={48} height={20} />
                <div>
                  <div className='car__destination'>
                    <img src={pinImg} alt='pin image' width={12} height={16} />
                    <p className='car__item-title'>Асанбай мкр.</p>
                  </div>
                  <p className='car__item-subtitle'>1.5 км</p>
                </div>
              </div>
              <div>
                <p className='car__item-title'>250 сом</p>
                <p className='car__item-subtitle'>2 места</p>
              </div>
            </li>
            <li className='car__item'>
              <div className='car__item-descr'>
                <img src={carImg} alt='car image' width={48} height={20} />
                <div>
                  <div className='car__destination'>
                    <img src={pinImg} alt='pin image' width={12} height={16} />
                    <p className='car__item-title'>Ахунбаева 104</p>
                  </div>
                  <p className='car__item-subtitle'>1.5 км</p>
                </div>
              </div>
              <div>
                <p className='car__item-title'>250 сом</p>
                <p className='car__item-subtitle'>2 места</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Map;