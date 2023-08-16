import "./Header.css";
import logoImage from "../../logo.png";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const Header = ({
  location,
  onAddClick,
  date,
  isLogged,
  setIsLogged,
  setActiveModal,
}) => {
  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser, "currentUser");
  const onLoginClick = () => {
    setActiveModal("login");
  };

  const onRegisterClick = () => {
    setActiveModal("register");
  };

  const onLogoutClick = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
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
            <button
              onClick={onRegisterClick}
              className="header__register-btn"
              type="text"
            >
              Sign up
            </button>
            <button
              onClick={onLoginClick}
              className="header__login-btn"
              type="text"
            >
              Log in
            </button>
          </div>
        ) : (
          <div className="header__group">
            <div>
              <button
                onClick={onAddClick}
                className="header__add-btn"
                type="text"
              >
                + Add Clothes
              </button>
            </div>
            <div className="header__username">{currentUser.data.name}</div>
            <div>
              <img
                className="header__avatar"
                src={currentUser.data.avatar}
                alt="avatar"
              />
            </div>
            <div className="header__login">
              <button
                onClick={onLogoutClick}
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
