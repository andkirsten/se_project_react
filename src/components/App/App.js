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

  return (
    <div className="page">
      <Header location={location} onAddClick={handleAddGarmentModal} />
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
          title="New Garment"
          name="new-garment"
          buttonText="Add Garment"
        >
          <NewGarmentForm />
        </ModalWithForm>
      )}
      {activeModal === "item-preview" && (
        <ItemModal item={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
