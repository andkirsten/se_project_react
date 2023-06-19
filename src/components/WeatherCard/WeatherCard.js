import "./WeatherCard.css";

const weatherOptions = [
  { url: "/images/weather/sunny.svg", day: true, type: "sunny" },
  { url: "/images/weather/cloudy.svg", day: true, type: "cloudy" },
  { url: "/images/weather/fog.svg", day: true, type: "fog" },
  { url: "/images/weather/rain.svg", day: true, type: "rain" },
  { url: "/images/weather/snow.svg", day: true, type: "snow" },
  { url: "/images/weather/storm.svg", day: true, type: "storm" },
  { url: "/images/weather/n_sunny.svg", day: false, type: "sunny" },
  { url: "/images/weather/n_cloudy.svg", day: false, type: "cloudy" },
  { url: "/images/weather/n_fog.svg", day: false, type: "fog" },
  { url: "/images/weather/n_rain.svg", day: false, type: "rain" },
  { url: "/images/weather/n_snow.svg", day: false, type: "snow" },
  { url: "/images/weather/n_storm.svg", day: false, type: "storm" },
];

const WeatherCard = ({ day, type }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  return (
    <>
      <div className="weather">
        <img
          src={imageSrc[0].url}
          className="weather__image"
          alt="weather"
        ></img>
        <div className="weather__temp">75°F</div>
      </div>
    </>
  );
};

export default WeatherCard;
