import React, { useState } from "react";
import "./NewGarmentModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function NewGarmentModal({
  title,
  modalName,
  buttonText = "Submit",
  onClose,
  handleSubmit,
}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [temperature, setTemperature] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleImageChange = (e) => {
    setImage(e.target.value);
  };
  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value);
  };

  return (
    <div>
      <ModalWithForm
        handleSubmit={() => handleSubmit({ name, image, temperature })}
        title={title}
        modalName={modalName}
        onClose={onClose}
        buttonText={buttonText}
      >
        <div className="input__group">
          <label className="input__label" htmlFor="name">
            Name:
          </label>
          <input
            className="input__input"
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Name"
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="input__group">
          <label className="input__label" htmlFor="image">
            Image URL:
          </label>
          <input
            className="input__input"
            type="url"
            id="image"
            name="image"
            value={image}
            placeholder="Image URL"
            onChange={handleImageChange}
            required
          />
        </div>
        <div>
          <label className="input__label">Temperature:</label>
        </div>
        <div>
          <input
            className="input__radio"
            type="radio"
            id="hot"
            name="temperature"
            value="hot"
            checked={temperature === "hot"}
            onChange={handleTemperatureChange}
            required
          />
          <label htmlFor="hot">Hot</label>
        </div>
        <div>
          <input
            className="input__radio"
            type="radio"
            id="warm"
            name="temperature"
            value="warm"
            checked={temperature === "warm"}
            onChange={handleTemperatureChange}
            required
          />
          <label htmlFor="warm">Warm</label>
        </div>
        <div>
          <input
            className="input__radio"
            type="radio"
            id="cold"
            name="temperature"
            value="cold"
            checked={temperature === "cold"}
            onChange={handleTemperatureChange}
            required
          />
          <label htmlFor="cold">Cold</label>
        </div>
      </ModalWithForm>
    </div>
  );
}

export default NewGarmentModal;
