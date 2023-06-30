import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import React from "react";

const WeatherCard = ({ tempCelcius, temp, day, type }) => {
  const { currentTemperatureUnit } = React.useContext(
    CurrentTemperatureUnitContext
  );
  const weatherOption = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  return (
    <div className="weather">
      <img
        src={weatherOption.url}
        className="weather__image"
        alt="weather"
      ></img>
      <div className="weather__temp">
        {currentTemperatureUnit === "F" ? `${temp}°F` : `${tempCelcius}°C`}
      </div>
    </div>
  );
};

export default WeatherCard;
