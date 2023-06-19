import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import defaultClothingItems from "../../utils/defaultClothing";

const Main = () => {
  const handleCardClick = () => {
    console.log("click");
  };

  return (
    <main className="main">
      <WeatherCard />
      <p>Today is 75 F / You may want to wear:</p>
      <section className="main__item-cards">
        {defaultClothingItems.map((item) => (
          <ItemCard
            key={item._id}
            imageSrc={item.link}
            title={item.name}
            handleCardClick={handleCardClick}
          />
        ))}
      </section>
    </main>
  );
};

export default Main;
