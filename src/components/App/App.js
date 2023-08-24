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
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import LoginModal from "../LoginModal/LoginModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {
  registerUser,
  loginUser,
  verifyToken,
  updateUser,
} from "../../utils/auth";
import DeleteConfirmModal from "../DeleteConfirmModal/DeleteConfirmModal";

function App() {
  const date = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    loginUser(email, password)
      .then((res) => {
        if (res && res.token) {
          localStorage.setItem("localStorageToken", res.token);
          const userInfo = verifyToken(res.token).catch((err) =>
            console.log(err)
          );
          setToken(res.token);

          return userInfo;
        } else {
          setError(res.message);
        }
      })
      .then((userInfo) => {
        setCurrentUser({
          data: {
            name: userInfo.name,
            avatar: userInfo.avatar,
            _id: userInfo._id,
          },
        });
        setIsLogged(true);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRegister = async (data) => {
    setIsLoading(true);
    try {
      const res = await registerUser(data);
      if (res) {
        handleLogin(data);
      } else {
        setError(res.message);
      }
    } catch (err) {
      console.log(err, "registration error");
    }
  };

  const handleUpdateUser = (data) => {
    setIsLoading(true);
    updateUser(data, token)
      .then((res) => {
        setCurrentUser({
          data: {
            name: res.name,
            avatar: res.avatar,
            _id: res._id,
          },
        });
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    localStorage.removeItem("localStorageToken");
    setToken(null);
    setIsLogged(false);
    setCurrentUser(null);
  };

  const handleAddItem = (item) => {
    setIsLoading(true);
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
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleCloseModal = () => {
    setActiveModal("");
    setError(null);
    setIsLoading(false);
  };

  const handlePreviewModal = () => {
    setActiveModal("item-preview");
  };

  const handleSelectedCard = (card) => {
    setSelectedCard(card);
  };

  const handleDeleteItem = () => {
    const id = selectedCard._id;
    api
      .deleteGarment(id, token)
      .then((res) => {
        setClothingItems(clothingItems.filter((item) => item._id !== id));
        setSelectedCard(null);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteConfirm = () => {
    setActiveModal("delete");
  };

  const handleLikeClick = ({ id, isLiked }) => {
    const token = localStorage.getItem("localStorageToken");
    !isLiked
      ? api
          .addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? updatedCard : c))
            );
          })
          .catch((err) => console.log(err))
      : api
          .removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? updatedCard : c))
            );
          })
          .catch((err) => console.log(err));
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  useEffect(() => {
    const jwt = localStorage.getItem("localStorageToken");
    if (jwt) {
      verifyToken(jwt)
        .then((res) => {
          setToken(jwt);
          setCurrentUser({
            data: {
              name: res.name,
              avatar: res.avatar,
              _id: res._id,
            },
          });
          setIsLogged(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setIsLogged(false);
      setToken(null);
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

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

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
            <Route exact path="/profile">
              <ProtectedRoute token={token}>
                <Profile
                  onPreviewClick={handlePreviewModal}
                  onSelectedCard={handleSelectedCard}
                  clothingItems={clothingItems}
                  onAddItem={handleAddGarmentModal}
                  handleLogout={handleLogout}
                  handleDeleteConfirm={handleDeleteConfirm}
                  handleLikeClick={handleLikeClick}
                  setActiveModal={setActiveModal}
                />
              </ProtectedRoute>
            </Route>

            <Route exact path="/">
              <Main
                weather={weather}
                temp={temp}
                onPreviewClick={handlePreviewModal}
                onSelectedCard={handleSelectedCard}
                clothingItems={clothingItems}
                handleDeleteConfirm={handleDeleteConfirm}
                handleLikeClick={handleLikeClick}
              />
            </Route>
          </Switch>
          <Footer />
          {activeModal === "new-garment" && (
            <AddItemModal
              onClose={handleCloseModal}
              title="New garment"
              modalName="new-garment"
              handleSubmit={handleAddItem}
              error={error}
              isLoading={isLoading}
            />
          )}
          {activeModal === "item-preview" && (
            <ItemModal
              item={selectedCard}
              onClose={handleCloseModal}
              handleDeleteItem={handleDeleteItem}
              setActiveModal={setActiveModal}
            />
          )}
          {activeModal === "register" && (
            <RegisterModal
              onClose={handleCloseModal}
              handleRegister={handleRegister}
              setActiveModal={setActiveModal}
              error={error}
              isLoading={isLoading}
            />
          )}

          {activeModal === "login" && (
            <LoginModal
              onClose={handleCloseModal}
              handleLogin={handleLogin}
              setActiveModal={setActiveModal}
              error={error}
              isLoading={isLoading}
            />
          )}
          {activeModal === "delete" && (
            <DeleteConfirmModal
              modalName="delete"
              onClose={handleCloseModal}
              handleDeleteItem={handleDeleteItem}
              isLoading={isLoading}
            />
          )}
          {activeModal === "edit-profile" && (
            <EditProfileModal
              modalName="edit-profile"
              onClose={handleCloseModal}
              handleUpdateUser={handleUpdateUser}
              error={error}
              isLoading={isLoading}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
