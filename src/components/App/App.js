import "./App.css";
import Header from "../Header/Header";

function App() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
