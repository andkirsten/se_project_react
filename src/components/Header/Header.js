import "./Header.css";
import logoImage from "../../logo.png";
import avatarImage from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const Header = ({ location, date, onAddClick }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <div className="header__group">
        <div className="header__logo">
          <img src={logoImage} alt="WTWR logo" />
        </div>
        <div className="header__date">
          {currentDate}, {location}
        </div>
      </div>
      <div className="header__group">
        <div>
          <ToggleSwitch />
        </div>
        <div>
          <button onClick={onAddClick} className="header__add-btn" type="text">
            + Add Clothes
          </button>
        </div>
        <div className="header__username">Terrence Tegegne</div>
        <div>
          <img className="header__avatar" src={avatarImage} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
