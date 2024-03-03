import React, { useState } from "react";
import pinImg from "../../../assets/images/ic-pin.svg";
import filterImg from "../../../assets/images/search.svg";
import proka1 from "../../../assets/images/probka1.png";
import proka2 from "../../../assets/images/probka2.png";
import proka3 from "../../../assets/images/probka3.png";
import "./cars.scss";

const Cars = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleCarItemClick = (image, index) => {
    setBackgroundImage(image);
    setSelectedCardIndex(index);
  };

  return (
    <section className="car">
      <div className="car__block">
        <div className="car__input-wrapper">
          <input
            className="car__input"
            type="text"
            placeholder="Введите адрес"
          />
          <button type="button" className="car__input-btn">
            <img src={filterImg} alt="filter image" width={24} height={24} />
          </button>
        </div>
        <ul className="car__list">
          {[
            {
              title: "Азия Молл",
              distance: "1.5 км",
              price: "Платно",
              seats: "Заполнено",
              image: proka1,
            },
            {
              title: "Политех",
              distance: "1.5 км",
              price: "Бесплатно",
              seats: "Заполнено",
              image: proka2,
            },
            {
              title: "Орто-Сай р-к",
              distance: "1.5 км",
              price: "250 сом",
              seats: "90 мест свободных",
              image: proka3,
            },
          ].map((car, index) => (
            <li
              key={index}
              className={`car__item ${
                selectedCardIndex === index ? "car__item--selected" : ""
              }`}
              onClick={() => handleCarItemClick(car.image, index)}
            >
              <div className="car__item-descr">
                <div>
                  <div className="car__destination">
                    <img src={pinImg} alt="pin image" width={12} height={16} />
                    <p className="car__item-title">{car.title}</p>
                  </div>
                  <p className="car__item-subtitle">{car.distance}</p>
                </div>
              </div>
              <div>
                <p className="car__item-title">{car.price}</p>
                <p className="car__item-subtitle">{car.seats}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="background-div"
      ></div>
    </section>
  );
};

export default Cars;
