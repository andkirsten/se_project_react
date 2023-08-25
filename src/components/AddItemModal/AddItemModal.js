import React from "react";
import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";

function AddItemModal({
  title,
  modalName,
  onClose,
  handleSubmit,
  error,
  isLoading,
}) {
  const { values, handleChange } = useForm({
    name: "",
    image: "",
    temperature: "",
  });

  const handleAddSubmit = () => {
    handleSubmit({
      name: values.name,
      image: values.image,
      temperature: values.temperature,
    });
  };

  return (
    <ModalWithForm
      handleSubmit={handleAddSubmit}
      title={title}
      modalName={modalName}
      onClose={onClose}
      buttonText={isLoading ? "Saving..." : "Add Garment"}
    >
      <div className="input__group">
        <label className="input__label" htmlFor="name">
          Name:
        </label>
        <input
          className="input__input"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
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
          placeholder="Image URL"
          value={values.image}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="input__label">Select the weather type:</label>
      </div>
      <div>
        <input
          className="input__radio"
          type="radio"
          id="hot"
          name="temperature"
          value="hot"
          onChange={handleChange}
          required
        />
        <label className="radio__label" htmlFor="hot">
          Hot
        </label>
      </div>
      <div>
        <input
          className="input__radio"
          type="radio"
          id="warm"
          name="temperature"
          value="warm"
          onChange={handleChange}
          required
        />
        <label className="radio__label" htmlFor="warm">
          Warm
        </label>
      </div>
      <div>
        <input
          className="input__radio"
          type="radio"
          id="cold"
          name="temperature"
          value="cold"
          onChange={handleChange}
          required
        />
        <label className="radio__label" htmlFor="cold">
          Cold
        </label>
      </div>
      <div className="modal__error">{error}</div>
    </ModalWithForm>
  );
}

export default AddItemModal;
