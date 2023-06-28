import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContext";
import React from "react";

const WeatherCard = ({ tempCelcius, temp, day, type }) => {
  const { currentTempUnit } = React.useContext(CurrentTempUnitContext);
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
        {currentTempUnit === "F" ? `${temp}°F` : `${tempCelcius}°C`}
      </div>
    </div>
  );
};

export default WeatherCard;
