import { useState, useContext, useEffect } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );
  const isChecked = currentTemperatureUnit === "F";

  return (
    <div className="switch">
      <label className="switch__label">
        <input
          className="switch__input"
          type="checkbox"
          checked={isChecked}
          onChange={handleToggleSwitchChange}
          value={currentTemperatureUnit}
        />
        <span
          className={
            currentTemperatureUnit === "F"
              ? "switch__slider switch__slider-F"
              : "switch__slider switch__slider-C"
          }
        ></span>
        <p
          className={`switch__temp-F ${
            currentTemperatureUnit === "F" && "switch__active"
          }`}
        >
          F
        </p>
        <p
          className={`switch__temp-C ${
            currentTemperatureUnit === "C" && "switch__active"
          }`}
        >
          C
        </p>
      </label>
    </div>
  );
};

export default ToggleSwitch;
