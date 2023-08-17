import "./Header.css";
import logoImage from "../../logo.png";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const Header = ({ location, onAddClick, date, isLogged, setActiveModal }) => {
  const currentUser = useContext(CurrentUserContext);

  const onLoginClick = () => {
    setActiveModal("login");
  };

  const onRegisterClick = () => {
    setActiveModal("register");
  };

  return (
    <>
      <header className="header">
        <div className="header__group">
          <div className="header__logo">
            <img src={logoImage} alt="WTWR logo" />
          </div>
          <div className="header__date">
            {date}, {location}
          </div>
        </div>
        {!isLogged ? (
          <div className="header__group">
            <div>
              <ToggleSwitch />
            </div>
            <button
              onClick={onRegisterClick}
              className="header__btn"
              type="text"
            >
              Sign up
            </button>
            <button onClick={onLoginClick} className="header__btn" type="text">
              Log in
            </button>
          </div>
        ) : (
          <div className="header__group">
            <div>
              <ToggleSwitch />
            </div>
            <div>
              <button onClick={onAddClick} className="header__btn" type="text">
                + Add Clothes
              </button>
            </div>
            <Link to="/profile" className="header__username">
              {currentUser?.data?.name}
            </Link>
            <div>
              <img
                className="header__avatar"
                src={currentUser?.data?.avatar}
                alt="avatar"
              />
            </div>
            <div className="header__logout">
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.reload();
                }}
                className="header__logout-btn"
                type="text"
              >
                Log out
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
