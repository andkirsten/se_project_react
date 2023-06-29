import { useState, useContext, useEffect } from "react";
import CurrentTempUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const { currentTempUnit, setCurrentTempUnit } = useContext(
    CurrentTempUnitContext
  );
  const [checked, setChecked] = useState(currentTempUnit === "F");
  useEffect(() => {
    setChecked(currentTempUnit === "F");
  }, [currentTempUnit]);

  return (
    <div className="switch">
      <label className="switch__label">
        <input
          className="switch__input"
          type="checkbox"
          checked={checked}
          onChange={setCurrentTempUnit}
          value={currentTempUnit}
        />
        <span
          className={
            currentTempUnit === "F"
              ? "switch__slider switch__slider-F"
              : "switch__slider switch__slider-C"
          }
        ></span>
        <p
          className={`switch__temp-F ${
            currentTempUnit === "F" && "switch__active"
          }`}
        >
          F
        </p>
        <p
          className={`switch__temp-C ${
            currentTempUnit === "C" && "switch__active"
          }`}
        >
          C
        </p>
      </label>
    </div>
  );
};

export default ToggleSwitch;
