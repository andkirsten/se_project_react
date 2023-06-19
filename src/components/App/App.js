import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";
import NewGarmentForm from "../NewGarmentForm/NewGarmentForm";
import ItemModal from "../ItemModal/ItemModal";

function App() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const [activeModal, setActiveModal] = useState("");
  const handleAddGarmentModal = () => {
    setActiveModal("new-garment");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handlePreviewModal = () => {
    setActiveModal("item-preview");
  };

  const [selectedCard, setSelectedCard] = useState(null);
  const handleSelectedCard = (card) => {
    setSelectedCard(card);
  };
  console.log(selectedCard);
  return (
    <div>
      <Header onAddClick={handleAddGarmentModal} />
      <Main
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
