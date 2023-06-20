import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";

const Main = ({ weather, temp, onSelectedCard, onPreviewClick }) => {
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

  const filteredItems = defaultClothingItems.filter(
    (item) => item.weather === weatherType
  );

  return (
    <main className="main">
      <WeatherCard temp={temp} day={true} type={weather} />
      <p>Today is {temp}°F / You may want to wear:</p>
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
