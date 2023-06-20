import { APIkey, latitude, longitude } from "./constants";

const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

const getWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  )
    .then(processServerResponse)
    .catch((err) => {
      console.log(err);
    });
  return weatherApi;
};

const parseTemp = (data) => {
  const temp = Math.ceil(data.main.temp);
  return temp;
};

const parseWeather = (data) => {
  const weather = data.weather[0].main;
  return weather;
};

const parseLocation = (data) => {
  const city = data.name;
  return city;
};

export default getWeather;
export { parseWeather, parseLocation, parseTemp };
