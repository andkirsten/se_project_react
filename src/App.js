import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div>
      <header className="header">
        <div className="header__group">
          <div className="header__logo">
            <img src={logo} alt="WTWR logo" />
          </div>
          <div>Date</div>
        </div>
        <div className="header__group">
          <div>
            <button type="text">Add New Clothes</button>
          </div>
          <div>Name</div>
          <div>
            <img href="/images/avatar.svg" alt="avatar" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
