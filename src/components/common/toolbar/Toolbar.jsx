import { Link } from 'react-router-dom';

import activeImg from '../../../assets/images/toolbar/toolbar-active.svg';
import disavleImg from '../../../assets/images/toolbar/toolbar-disable.svg';
import profileImg from '../../../assets/images/user.svg';

import './toolbar.scss';

//TODO: Рефакторинг, и добавить логику переклучения стилей при нажатии
const Toolbar = () => {
  return (
    <section className="toolbar">
        <div className='toolbar__wrapper'>
            <Link className='toolbar__link'>
                <img src={activeImg} alt="active link image" className='toolbar__img' />
                <p className='toolbar__active'>Главная</p>
            </Link>
            <Link className='toolbar__link'>
                <img src={disavleImg} alt="disable link image" className='toolbar__img' />
                <p className='toolbar__disable'>Попутка</p>
            </Link>
            <Link className='toolbar__link'>
                <img src={disavleImg} alt="disable link image" className='toolbar__img'  />
                <p className='toolbar__disable'>Пробки</p>
            </Link>
            <Link className='toolbar__link'>
                <img src={profileImg} alt="profile image" className='toolbar__img' />
                <p className='toolbar__disable'>Профиль</p>
            </Link>
        </div>
    </section>
  )
}

export default Toolbar;