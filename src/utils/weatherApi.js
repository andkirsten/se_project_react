import { APIkey, latitude, longitude } from "./constants";

const getWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    })
    .then((data) => {
      return data;
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

export { parseTemp };
export default getWeather;
export { parseWeather };
export { parseLocation };
