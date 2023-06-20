import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import defaultClothingItems from "../../utils/constants";

const Main = ({ weather, temp, onSelectedCard, onPreviewClick }) => {
  return (
    <main className="main">
      <WeatherCard temp={temp} day={true} type={weather} />
      <p>Today is {temp}°F / You may want to wear:</p>
      <section className="main__item-cards">
        {defaultClothingItems.map((item) => (
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
