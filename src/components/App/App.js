import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";

function App() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
