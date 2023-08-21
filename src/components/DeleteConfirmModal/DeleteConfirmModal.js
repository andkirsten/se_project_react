import React from "react";
import "./DeleteConfirmModal.css";

const DeleteConfirmModal = ({ handleDeleteItem, onClose }) => {
  return (
    <div className={`delete`}>
      <div className="delete__content">
        <p className="delete__text">
          Are you sure you want to delete this item?
        </p>
        <p className="delete__text">This action is irreversible.</p>
        <button
          className="delete__close"
          type="button"
          aria-label="close"
          onClick={onClose}
        ></button>
        <button className="delete__btn" onClick={handleDeleteItem}>
          Yes, delete item
        </button>
        <button className="delete__btn" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
