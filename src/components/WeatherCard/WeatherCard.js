import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ temp, day, type }) => {
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
      <div className="weather__temp">{temp}°F</div>
    </div>
  );
};

export default WeatherCard;
