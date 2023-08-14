import "./Header.css";
import logoImage from "../../logo.png";
import avatarImage from "../../images/avatar.svg";

const Header = ({ date, onAddClick }) => {
  return (
    <>
      <header className="header">
        <div className="header__group">
          <div className="header__logo">
            <img src={logoImage} alt="WTWR logo" />
          </div>
          <div className="header__date">{date}, Location</div>
        </div>
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
          <div className="header__username">Calvin Morris</div>
          <div>
            <img className="header__avatar" src={avatarImage} alt="avatar" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
