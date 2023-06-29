import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContext";
import React from "react";

const Main = ({
  weather,
  temp,
  onSelectedCard,
  onPreviewClick,
  clothingItems,
}) => {
  const { currentTempUnit } = React.useContext(CurrentTempUnitContext);
  const getWeatherType = () => {
    if (temp >= 86) {
      return "hot";
    } else if (temp >= 66 && temp <= 85) {
      return "warm";
    } else if (temp <= 65) {
      return "cold";
    }
  };

  const weatherType = getWeatherType();

  const filteredItems = clothingItems.filter(
    (item) => item.weather === weatherType
  );

  const tempCelcius = Math.ceil((temp - 32) / 1.8);

  return (
    <main className="main">
      <WeatherCard
        tempCelcius={tempCelcius}
        temp={temp}
        day={true}
        type={weather}
      />
      <p>
        Today is {currentTempUnit === "F" ? `${temp}°F` : `${tempCelcius}°C`} /
        You may want to wear:
      </p>
      <section className="main__item-cards">
        {filteredItems.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            onSelectedItem={onSelectedCard}
            onPreviewClick={onPreviewClick}
          />
        ))}
      </section>
    </main>
  );
};

export default Main;
