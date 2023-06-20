import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import NewGarmentForm from "../NewGarmentForm/NewGarmentForm";
import ItemModal from "../ItemModal/ItemModal";
import getWeather, {
  parseTemp,
  parseWeather,
  parseLocation,
} from "../../utils/weatherApi";

function App() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [temp, setTemp] = useState(0);
  const [weather, setWeather] = useState("Clear");
  const [location, setLocation] = useState("");
  const handleAddGarmentModal = () => {
    setActiveModal("new-garment");
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

  useEffect(() => {
    getWeather().then((res) => {
      const temperature = parseTemp(res);
      setTemp(temperature);
      const weatherName = parseWeather(res);
      setWeather(weatherName);
      const loc = parseLocation(res);
      setLocation(loc);
    });
  }, []);

  return (
    <div>
      <Header
        location={location}
        date={currentDate}
        onAddClick={handleAddGarmentModal}
      />
      <Main
        weather={weather}
        temp={temp}
        onPreviewClick={handlePreviewModal}
        onSelectedCard={handleSelectedCard}
      />
      <Footer />
      {activeModal === "new-garment" && (
        <ModalWithForm
          onClose={handleCloseModal}
          children={<NewGarmentForm />}
          title="New Garment"
          name="new-garment"
          buttonText="Add Garment"
        />
      )}
      {activeModal === "item-preview" && (
        <ItemModal item={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
