import "./Header.css";

const Header = () => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__group">
        <div className="header__logo">
          <img src="/images/logo.png" alt="WTWR logo" />
        </div>
        <div className="header__date">{currentDate}, Location</div>
      </div>
      <div className="header__group">
        <div>
          <button className="header__add-btn" type="text">
            + Add Clothes
          </button>
        </div>
        <div className="header__username">Terrence Tegegne</div>
        <div>
          <img
            className="header__avatar"
            src="/images/avatar.svg"
            alt="avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
