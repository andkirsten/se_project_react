import React, { useState } from "react";

const ModalWithForm = ({ isOpen, closeModal, handleSubmit }) => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [option, setOption] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit({ name, link, option });
    setName("");
    setLink("");
    setOption("");
    closeModal();
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h2>Create Item</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              placeholder="Name"
              onChange={handleNameChange}
              required
            />
          </div>
          <div>
            <label htmlFor="link">Image:</label>
            <input
              type="text"
              id="link"
              value={link}
              placeholder="Image URL"
              onChange={handleLinkChange}
              required
            />
          </div>
          <div>
            <label>Select the weather type:</label>
            <div>
              <label>
                <input
                  type="radio"
                  value="Hot"
                  checked={option === "Hot"}
                  onChange={handleOptionChange}
                />
                Hot
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="Warm"
                  checked={option === "Warm"}
                  onChange={handleOptionChange}
                />
                Warm
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="Cold"
                  checked={option === "Cold"}
                  onChange={handleOptionChange}
                />
                Cold
              </label>
            </div>
          </div>
          <button type="submit">Add Garment</button>
        </form>
        <button className="modal__close-btn" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalWithForm;
