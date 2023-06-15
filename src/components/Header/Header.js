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
        <div>{currentDate}</div>
      </div>
      <div className="header__group">
        <div>
          <button type="text">+ Add Clothes</button>
        </div>
        <div>Terrence Tegegne</div>
        <div>
          <img src="/images/avatar.svg" alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
