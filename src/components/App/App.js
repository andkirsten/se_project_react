import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import NewGarmentModal from "../NewGarmentModal/NewGarmentModal";
import CurrentTempUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import ItemModal from "../ItemModal/ItemModal";
import getWeather, {
  parseTemp,
  parseWeather,
  parseLocation,
} from "../../utils/weatherApi";
import avatar from "../../images/avatar.svg";
import { Route, Switch } from "react-router-dom";
import Profile from "../Profile/Profile";
import api from "../../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [temp, setTemp] = useState(0);
  const [weather, setWeather] = useState("Clear");
  const [location, setLocation] = useState("");
  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const handleAddGarmentModal = () => {
    setActiveModal("new-garment");
  };

  useEffect(() => {
    api
      .getGarments()
      .then((res) => {
        setClothingItems(res);
      })
      .catch((err) => {
        console.log(err);
      });

    getWeather()
      .then((res) => {
        const temperature = parseTemp(res);
        setTemp(temperature);
        const weatherName = parseWeather(res);
        setWeather(weatherName);
        const loc = parseLocation(res);
        setLocation(loc);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleAddItemSubmit = (e) => {
    e.preventDefault();
    api
      .createGarment({
        name: e.target.name.value,
        weather: e.target.temperature.value,
        imageUrl: e.target.image.value,
      })
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        setActiveModal("");
      })
      .catch((err) => console.log(err));
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handlePreviewModal = () => {
    setActiveModal("item-preview");
  };

  const handleSelectedCard = (card) => {
    setSelectedCard(card);
  };

  const handleDeleteItem = () => {
    api
      .deleteGarment(selectedCard.id)
      .then((res) => {
        setClothingItems(
          clothingItems.filter((item) => item.id !== selectedCard.id)
        );
        setActiveModal("");
      })
      .catch((err) => console.log(err));
  };

  const handleToggleSwitch = () => {
    currentTempUnit === "F" ? setCurrentTempUnit("C") : setCurrentTempUnit("F");
  };

  return (
    <div className="page">
      <CurrentTempUnitContext.Provider
        value={{
          currentTempUnit,
          setCurrentTempUnit: handleToggleSwitch,
        }}
      >
        <Header
          avatar={avatar}
          location={location}
          onAddClick={handleAddGarmentModal}
        />
        <Switch>
          <Route exact path="/profile">
            <Profile
              name="Terrence Tegegne"
              avatar={avatar}
              onPreviewClick={handlePreviewModal}
              onSelectedCard={handleSelectedCard}
              clothingItems={clothingItems}
            />
          </Route>
          <Route exact path="/">
            <Main
              weather={weather}
              temp={temp}
              onPreviewClick={handlePreviewModal}
              onSelectedCard={handleSelectedCard}
              clothingItems={clothingItems}
            />
          </Route>
        </Switch>

        <Footer />
        {activeModal === "new-garment" && (
          <NewGarmentModal
            onClose={handleCloseModal}
            title="New Garment"
            modalName="new-garment"
            buttonText="Add Garment"
            handleSubmit={handleAddItemSubmit}
          />
        )}
        {activeModal === "item-preview" && (
          <ItemModal
            item={selectedCard}
            onClose={handleCloseModal}
            handleDeleteItem={handleDeleteItem}
          />
        )}
      </CurrentTempUnitContext.Provider>
    </div>
  );
}

export default App;
