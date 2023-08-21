import "./Header.css";
import logoImage from "../../logo.png";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const Header = ({ location, onAddClick, date, isLogged, setActiveModal }) => {
  const currentUser = useContext(CurrentUserContext);

  const avatarLetter = currentUser?.data?.name?.charAt(0);

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
            <Link to="/">
              <img src={logoImage} alt="WTWR logo" />
            </Link>
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
              {!currentUser.data.avatar && (
                <span className="header__avatar-placeholder">
                  {avatarLetter}
                </span>
              )}
              {currentUser.data.avatar && (
                <img
                  className="header__avatar"
                  src={currentUser?.data?.avatar}
                  alt="avatar"
                />
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
