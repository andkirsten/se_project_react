import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import AddItemModal from "../AddItemModal/AddItemModal";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import ItemModal from "../ItemModal/ItemModal";
import getWeather, {
  parseTemp,
  parseWeather,
  parseLocation,
} from "../../utils/weatherApi";
import { Route, Switch } from "react-router-dom";
import Profile from "../Profile/Profile";
import api from "../../utils/api";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import RegisterModal from "../RegisterModal/RegisterModal";
import EditProfileModal from "../../EditProfileModal/EditProfileModal";
import LoginModal from "../LoginModal/LoginModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { registerUser, loginUser, verifyToken } from "../../utils/auth";

function App() {
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
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

  const handleLogin = ({ email, password }) => {
    loginUser(email, password)
      .then((res) => {
        if (res && res.token) {
          localStorage.setItem("token", res.token);
          const userInfo = verifyToken(res.token);
          setToken(res.token);
          console.log(res);
          return userInfo;
        } else {
          console.log(res);
        }
      })
      .then((userInfo) => {
        console.log(userInfo);
        setCurrentUser({
          data: {
            name: userInfo.name,
            avatar: userInfo.avatar,
            _id: userInfo._id,
          },
        });
        setIsLogged(true);
        setActiveModal("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRegister = async ({ name, avatar, email, password }) => {
    try {
      const res = await registerUser({ name, avatar, email, password });
      if (res.user) console.log(res.user, "registration success");
      if (res.token) {
        console.log(res.token, "registration success");

        setIsLogged(true);
        setCurrentUser(res.user);
        localStorage.setItem("token", res.token);
        setActiveModal("");
      } else {
        console.log(res, "registration error");
      }
    } catch (err) {
      console.log(err, "registration error");
    }
  };

  const handleAddItem = (item) => {
    api
      .createGarment(
        {
          name: item.name,
          weather: item.temperature,
          imageUrl: item.image,
        },
        token
      )
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

  useEffect(() => {
    const jwt = localStorage.getItem("token");
    if (jwt) {
      verifyToken(jwt).then((res) => {
        setToken(jwt);
        setCurrentUser({
          data: {
            name: res.name,
            avatar: res.avatar,
            _id: res._id,
          },
        });
        setIsLogged(true);
      });
    }
  }, []);

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
            location={location}
            onAddClick={handleAddGarmentModal}
            date={date}
            isLogged={isLogged}
            setIsLogged={setIsLogged}
            setActiveModal={setActiveModal}
          />
          <Switch>
            <ProtectedRoute token={token}>
              <Route exact path="/profile">
                <Profile
                  onPreviewClick={handlePreviewModal}
                  onSelectedCard={handleSelectedCard}
                  clothingItems={clothingItems}
                  onAddItem={handleAddGarmentModal}
                />
              </Route>
              <Route exact path="/">
                <Main
                  weather={weather}
                  temp={temp}
                  onPreviewClick={handlePreviewModal}
                  onSelectedCard={handleSelectedCard}
                  clothingItems={clothingItems}
                />
              </Route>
            </ProtectedRoute>
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
          {activeModal === "register" && (
            <RegisterModal
              onClose={handleCloseModal}
              handleRegister={handleRegister}
              setActiveModal={setActiveModal}
            />
          )}
          {activeModal === "edit-profile" && (
            <EditProfileModal onClose={handleCloseModal} />
          )}
          {activeModal === "login" && (
            <LoginModal
              onClose={handleCloseModal}
              handleLogin={handleLogin}
              setActiveModal={setActiveModal}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
