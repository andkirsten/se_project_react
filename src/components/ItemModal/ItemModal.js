import React from "react";
import "./ItemModal.css";

const ItemModal = ({ item, onClose }) => {
  console.log(item);
  return (
    <div className={`modal`}>
      <div className="modal-content">
        <button
          className="modal__close-btn"
          type="button"
          aria-label="close"
          onClick={onClose}
        ></button>
        <img className="modal__image" src={item.link} alt={item.name} />
        <h2 className="modal__title">Name: {item.name}</h2>
        <p className="modal__type">Weather: {item.weather}</p>
      </div>
    </div>
  );
};

export default ItemModal;
