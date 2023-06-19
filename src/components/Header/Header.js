import "./Header.css";

const Header = ({ onAddClick }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <header className="header">
        <div className="header__group">
          <div className="header__logo">
            <img
              src={require("../../images/logo.png").require}
              alt="WTWR logo"
            />
          </div>
          <div className="header__date">{currentDate}, Location</div>
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
          <div className="header__username">Terrence Tegegne</div>
          <div>
            <img
              className="header__avatar"
              src={require("../../images/avatar.svg").require}
              alt="avatar"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
