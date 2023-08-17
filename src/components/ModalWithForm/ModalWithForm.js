import React from "react";
import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  title,
  modalName,
  buttonText = "Submit",
  onClose,
  handleSubmit,
  setActiveModal,
}) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  const onLoginClick = () => {
    setActiveModal("login");
  };

  const onRegisterClick = () => {
    setActiveModal("register");
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
          {modalName === "register" && (
            <span onClick={onLoginClick} className="modal__sub-btn">
              or Log in
            </span>
          )}
          {modalName === "login" && (
            <span onClick={onRegisterClick} className="modal__sub-btn">
              or Sign up
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
