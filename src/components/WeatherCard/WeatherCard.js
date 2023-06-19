import "./WeatherCard.css";

const WeatherCard = () => {
  return (
    <>
      <div className="weather">
        <img
          src="/images/weather/sunny.svg"
          className="weather__image"
          alt="weather"
        ></img>
        <div className="weather__temp">75°F</div>
      </div>
    </>
  );
};

export default WeatherCard;
