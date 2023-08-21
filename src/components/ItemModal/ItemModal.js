import React from "react";
import "./ItemModal.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const ItemModal = ({ item, onClose, setActiveModal }) => {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = item.owner === currentUser.data._id;

  const itemDeleteButtonClassName = `item_modal__delete ${
    isOwn ? "item_modal__delete_visible" : "item_modal__delete_hidden"
  }`;

  const onDeleteClick = () => {
    setActiveModal("delete");
  };

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
              className={itemDeleteButtonClassName}
              type="button"
              onClick={onDeleteClick}
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
