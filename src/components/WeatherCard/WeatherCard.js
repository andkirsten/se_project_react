import "./WeatherCard.css";

const weatherOptions = [
  {
    url: require("../../images/weather/sunny.svg").default,
    day: true,
    type: "Clear",
  },
  {
    url: require("../../images/weather/cloudy.svg").default,
    day: true,
    type: "Clouds",
  },
  {
    url: require("../../images/weather/fog.svg").default,
    day: true,
    type: "Fog",
  },
  {
    url: require("../../images/weather/rain.svg").default,
    day: true,
    type: "Rain",
  },
  {
    url: require("../../images/weather/snow.svg").default,
    day: true,
    type: "Snow",
  },
  {
    url: require("../../images/weather/storm.svg").default,
    day: true,
    type: "Thunderstorm",
  },
  {
    url: require("../../images/weather/n_sunny.svg").default,
    day: false,
    type: "Clear",
  },
  {
    url: require("../../images/weather/n_cloudy.svg").default,
    day: false,
    type: "Clouds",
  },
  {
    url: require("../../images/weather/n_fog.svg").default,
    day: false,
    type: "Fog",
  },
  {
    url: require("../../images/weather/n_rain.svg").default,
    day: false,
    type: "Rain",
  },
  {
    url: require("../../images/weather/n_snow.svg").default,
    day: false,
    type: "Snow",
  },
  {
    url: require("../../images/weather/n_storm.svg").default,
    day: false,
    type: "Thunderstorm",
  },
];

const WeatherCard = ({ temp, day, type }) => {
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
        <div className="weather__temp">{temp}°F</div>
      </div>
    </>
  );
};

export default WeatherCard;
