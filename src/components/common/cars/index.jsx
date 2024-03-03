import carImg from '../../../assets/images/car.svg';
import pinImg from '../../../assets/images/ic-pin.svg';
import filterImg from '../../../assets/images/search.svg'

import './cars.scss';

const Cars = ({for_probki}) => {
    return (
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
    )
}

export default Cars;