import { useState, useContext, useEffect } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const { currentTemperatureUnit, setCurrentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );
  const [checked, setChecked] = useState(currentTemperatureUnit === "F");
  useEffect(() => {
    setChecked(currentTemperatureUnit === "F");
  }, [currentTemperatureUnit]);

  return (
    <div className="switch">
      <label className="switch__label">
        <input
          className="switch__input"
          type="checkbox"
          checked={checked}
          onChange={setCurrentTemperatureUnit}
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
