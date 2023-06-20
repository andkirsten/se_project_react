import React from "react";
import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  title,
  name,
  buttonText = "Submit",
  onClose,
  handleSubmit,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          className="modal__close"
          type="button"
          aria-label="close"
          onClick={onClose}
        ></button>
        <form>
          {children}
          <button
            className="modal__submit"
            type="submit"
            onSubmit={handleSubmit}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
