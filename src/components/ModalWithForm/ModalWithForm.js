import React from "react";
import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  title,
  modalName,
  buttonText = "Submit",
  onClose,
  handleSubmit,
}) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };


  return (
    <div className={`modal modal_type_${modalName}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          className="modal__close"
          type="button"
          aria-label="close"
          onClick={onClose}
        ></button>
        <form onSubmit={handleFormSubmit}>
          {children}
          <button className="modal__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
