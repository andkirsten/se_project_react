import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <header className="header">
        <div className="header__group">
          <div className="header__logo">
            <img
              src={require("../../images/logo.png").require}
              alt="WTWR logo"
            />
          </div>
          <div className="header__date">{currentDate}, Location</div>
        </div>
        <div className="header__group">
          <div>
            <button
              onClick={handleAddClick}
              className="header__add-btn"
              type="text"
            >
              + Add Clothes
            </button>
          </div>
          <div className="header__username">Terrence Tegegne</div>
          <div>
            <img
              className="header__avatar"
              src={require("../../images/avatar.svg").require}
              alt="avatar"
            />
          </div>
        </div>
      </header>
      {isModalOpen && <ModalWithForm />}
    </>
  );
};

export default Header;
