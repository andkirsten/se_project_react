import React, { useState } from "react";
import "./NewGarmentForm.css";

function NewGarmentForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [temperature, setTemperature] = useState("");

  return (
    <div>
      <div className="input__group">
        <label className="input__label" htmlFor="name">
          Name:
        </label>
        <input
          className="input__input"
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
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
          value={image}
          placeholder="Image URL"
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="input__label">Temperature:</label>
      </div>
      <div>
        <input
          className="input__radio"
          type="radio"
          id="hot"
          name="temperature"
          value="hot"
          checked={temperature === "hot"}
          onChange={(e) => setTemperature(e.target.value)}
          required
        />
        <label htmlFor="hot">Hot</label>
      </div>
      <div>
        <input
          className="input__radio"
          type="radio"
          id="warm"
          name="temperature"
          value="warm"
          checked={temperature === "warm"}
          onChange={(e) => setTemperature(e.target.value)}
          required
        />
        <label htmlFor="warm">Warm</label>
      </div>
      <div>
        <input
          className="input__radio"
          type="radio"
          id="cold"
          name="temperature"
          value="cold"
          checked={temperature === "cold"}
          onChange={(e) => setTemperature(e.target.value)}
          required
        />
        <label htmlFor="cold">Cold</label>
      </div>
    </div>
  );
}

export default NewGarmentForm;
