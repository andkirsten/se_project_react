import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { useEffect, useState, useContext } from "react";
import AddItemModal from "../AddItemModal/AddItemModal";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import ItemModal from "../ItemModal/ItemModal";
import getWeather, {
  parseTemp,
  parseWeather,
  parseLocation,
} from "../../utils/weatherApi";
import avatar from "../../images/avatar.svg";
import { Route, Switch } from "react-router-dom";
import Profile from "../Profile/Profile";
import api from "../../utils/api";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import RegisterModal from "../RegisterModal/RegisterModal";
import EditProfileModal from "../../EditProfileModal/EditProfileModal";
import LoginModal from "../LoginModal/LoginModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const currentUser = useContext(CurrentUserContext);
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const [token, setToken] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [temp, setTemp] = useState(0);
  const [weather, setWeather] = useState("Clear");
  const [location, setLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const handleAddGarmentModal = () => {
    setActiveModal("new-garment");
  };

  useEffect(() => {
    api
      .getGarments()
      .then((res) => {
        setClothingItems(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getWeather()
      .then((res) => {
        const temperature = parseTemp(res);
        setTemp(temperature);
        const weatherName = parseWeather(res);
        setWeather(weatherName);
        const loc = parseLocation(res);
        setLocation(loc);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const login = async (email, password) => {
    try {
      const res = await api.login(email, password);
      if (res.token) {
        setToken(res.token);
        localStorage.setItem("token", res.token);
        return res;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const register = async (email, password) => {
    try {
      const res = await api.register(email, password);
      if (res.token) {
        setToken(res.token);
        localStorage.setItem("token", res.token);
        return res;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddItem = (item) => {
    api
      .createGarment({
        name: item.name,
        weather: item.temperature,
        imageUrl: item.image,
      })
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        setActiveModal("");
      })
      .catch((err) => console.log(err));
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handlePreviewModal = () => {
    setActiveModal("item-preview");
  };

  const handleSelectedCard = (card) => {
    setSelectedCard(card);
  };

  const handleDeleteItem = () => {
    api
      .deleteGarment(selectedCard.id)
      .then((res) => {
        setClothingItems(
          clothingItems.filter((item) => item.id !== selectedCard.id)
        );
        setActiveModal("");
      })
      .catch((err) => console.log(err));
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{
            currentTemperatureUnit,
            handleToggleSwitchChange,
          }}
        >
          <Header
            avatar={avatar}
            location={location}
            onAddClick={handleAddGarmentModal}
            date={date}
            login={login}
            register={register}
          />
          <Switch>
            <ProtectedRoute token={token}>
              <Route exact path="/profile">
                <Profile
                  name="Terrence Tegegne"
                  avatar={avatar}
                  onPreviewClick={handlePreviewModal}
                  onSelectedCard={handleSelectedCard}
                  clothingItems={clothingItems}
                  onAddItem={handleAddGarmentModal}
                />
              </Route>
            </ProtectedRoute>
            <Route exact path="/">
              <Main
                weather={weather}
                temp={temp}
                onPreviewClick={handlePreviewModal}
                onSelectedCard={handleSelectedCard}
                clothingItems={clothingItems}
              />
            </Route>
          </Switch>
          <Footer />
          {activeModal === "new-garment" && (
            <AddItemModal
              onClose={handleCloseModal}
              title="New garment"
              modalName="new-garment"
              buttonText="Add Garment"
              handleSubmit={handleAddItem}
            />
          )}
          {activeModal === "item-preview" && (
            <ItemModal
              item={selectedCard}
              onClose={handleCloseModal}
              handleDeleteItem={handleDeleteItem}
            />
          )}
          {activeModal === "registration" && (
            <RegisterModal onClose={handleCloseModal} register={register} />
          )}
          {activeModal === "edit-profile" && (
            <EditProfileModal onClose={handleCloseModal} />
          )}
          {activeModal === "login" && (
            <LoginModal onClose={handleCloseModal} login={login} />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
