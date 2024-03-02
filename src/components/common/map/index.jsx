import './map.scss';

const Map = () => {
  return (
    <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.811877100249!2d74.58258377634903!3d42.855705271151216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9d3088356eb%3A0xb6b7beaa1240556a!2z0JDQt9C40Y8g0JzQvtC70Ls!5e0!3m2!1sru!2skg!4v1709390867646!5m2!1sru!2skg" referrerpolicy="no-referrer-when-downgrade" className='map__iframe'>
      </iframe>
    </div>
  )
}

export default Map;