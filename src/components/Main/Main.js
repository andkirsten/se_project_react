import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import defaultClothingItems from "../../utils/defaultClothing";

const Main = ({ onSelectedCard, onPreviewClick }) => {
  return (
    <main className="main">
      <WeatherCard day={true} type="fog" />
      <p>Today is 75 F / You may want to wear:</p>
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
