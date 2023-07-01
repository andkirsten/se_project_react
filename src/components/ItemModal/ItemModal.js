import React from "react";
import "./ItemModal.css";

const ItemModal = ({ item, onClose, handleDeleteItem }) => {
  return (
    <div className={`item_modal`}>
      <div className="item_modal-content">
        <button
          className="item_modal__close-btn"
          type="button"
          aria-label="close"
          onClick={onClose}
        ></button>
        <img
          className="item_modal__image"
          src={item.imageUrl}
          alt={item.name}
        />
        <div className="item_modal__label">
          <div className="item_modal__label-top">
            <h2 className="item_modal__title">{item.name}</h2>
            <button
              className="item_modal__delete"
              type="button"
              onClick={handleDeleteItem}
            >
              Delete item
            </button>
          </div>
          <p className="item_modal__type">Weather: {item.weather}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
