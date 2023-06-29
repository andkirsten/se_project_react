import "./Header.css";
import logoImage from "../../logo.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

const Header = ({ location, onAddClick, avatar }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <div className="header__group">
        <Link to="/">
          <div className="header__logo">
            <img src={logoImage} alt="WTWR logo" />
          </div>
        </Link>
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
        <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>
          <div className="header__username">Terrence Tegegne</div>
        </Link>
        <div>
          <Link to="/profile">
            <img className="header__avatar" src={avatar} alt="avatar" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
