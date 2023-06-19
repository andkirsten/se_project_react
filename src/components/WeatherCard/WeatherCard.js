import "./WeatherCard.css";

const weatherOptions = [
  {
    url: require("../../images/weather/sunny.svg").default,
    day: true,
    type: "sunny",
  },
  {
    url: require("../../images/weather/cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("../../images/weather/fog.svg").default,
    day: true,
    type: "fog",
  },
  {
    url: require("../../images/weather/rain.svg").default,
    day: true,
    type: "rain",
  },
  {
    url: require("../../images/weather/snow.svg").default,
    day: true,
    type: "snow",
  },
  {
    url: require("../../images/weather/storm.svg").default,
    day: true,
    type: "storm",
  },
  {
    url: require("../../images/weather/n_sunny.svg").default,
    day: false,
    type: "sunny",
  },
  {
    url: require("../../images/weather/n_cloudy.svg").default,
    day: false,
    type: "cloudy",
  },
  {
    url: require("../../images/weather/n_fog.svg").default,
    day: false,
    type: "fog",
  },
  {
    url: require("../../images/weather/n_rain.svg").default,
    day: false,
    type: "rain",
  },
  {
    url: require("../../images/weather/n_snow.svg").default,
    day: false,
    type: "snow",
  },
  {
    url: require("../../images/weather/n_storm.svg").default,
    day: false,
    type: "storm",
  },
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
