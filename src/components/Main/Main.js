import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import React from "react";

const Main = ({
  weather,
  temp,
  onSelectedCard,
  onPreviewClick,
  clothingItems,
  setActiveModal,
  handleLikeClick,
}) => {
  const { currentTemperatureUnit } = React.useContext(
    CurrentTemperatureUnitContext
  );
  const getWeatherType = () => {
    if (temp >= 83) {
      return "hot";
    } else if (temp >= 66 && temp <= 82) {
      return "warm";
    } else if (temp <= 65) {
      return "cold";
    }
  };

  const weatherType = getWeatherType();

  const filteredItems = clothingItems.filter(
    (item) => item.weather === weatherType
  );

  const offset = 32;
  const ratio = 1.8;

  const tempCelcius = Math.ceil((temp - offset) / ratio);

  return (
    <main className="main">
      <WeatherCard
        tempCelcius={tempCelcius}
        temp={temp}
        day={true}
        type={weather}
      />
      <p>
        Today is{" "}
        {currentTemperatureUnit === "F" ? `${temp}°F` : `${tempCelcius}°C`} /
        You may want to wear:
      </p>
      <section className="main__item-cards">
        {filteredItems.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onSelectedCard={onSelectedCard}
            onPreviewClick={onPreviewClick}
            setActiveModal={setActiveModal}
            handleLikeClick={handleLikeClick}
          />
        ))}
      </section>
    </main>
  );
};

export default Main;
