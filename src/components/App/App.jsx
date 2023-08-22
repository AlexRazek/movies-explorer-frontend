import "../../index.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
// import { Route, Routes, Navigate, useNavigate} from "react-router-dom";
// import ProtectedRouteElement from "./ProtectedRoute.js";
import './App.css';
// import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Popup from "../Popup/Popup";
import * as auth from "../../utils/auth";
import { mainApi } from "../../utils/MainApi";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
// import Footer from "../Footer/Footer";

function App() {
  // const currentUser = useContext(CurrentUserContext);

  const [loggedIn, setLoggedIn] = useState(false);
  const [isPreloader, serIsPreloader] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isErrorText, setIsErrorText] = useState('');
  // const [isRegister, setisRegister] = useState(false);

  

  const [cards, setCards] = useState([]);


  // const [isRegister, setisRegister] = useState(false);

  const navigate = useNavigate();

  // проверка токена пользователя - куки 
  useEffect(() => {
    // const jwt = localStorage.getItem("jwt");
    // if (jwt) {
    //   auth.checkToken(jwt)
      auth.checkToken()
      .then((data) => {
        if (data) {
          setLoggedIn(true);
          setCurrentUser(data);
          // setuserEmail(info.email);
          navigate('/saved-movies')
          ;
        }
      })
      .catch((err) => {
        setLoggedIn(false);
        console.log(`Ошибка при проверке токена: ${err}`); // выведем ошибку в консоль
      });
    // }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoginSet = () => {
    setLoggedIn(true);
  };

  useEffect(() => {
    if(loggedIn) {
      serIsPreloader(true)
      mainApi
        .getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
          // localStorage.setItem('userData', JSON.stringify({name:userData.name, email:userData.email}))
        })
        .catch((err) => {
          console.log(`Ошибка при загрузке информации о пользователе: ${err}`); // выведем ошибку в консоль
        })
        .finally(() => {
          serIsPreloader(false);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    // serIsPreloader(true)
    if(loggedIn) {
      serIsPreloader(true)
      mainApi
        .getAllCards()
        .then((cardsData) => {
          setCards(cardsData);
          localStorage.setItem('cards', JSON.stringify(cardsData))
        })
        .catch((err) => {
          console.log(`Ошибка при загрузке карточек: ${err}`); // выведем ошибку в консоль
        })
        .finally(() => {
          serIsPreloader(false);
        });
      }   
  }, [loggedIn]);

    // обновление данных пользователя
  function handleUpdateUser(name, email) {
    serIsPreloader(true)
    mainApi
        .updateUserInfo(name, email)
        .then((user) => {
          setCurrentUser(user);
          serIsPreloader(false)
          // closeAllPopups();
        })
        .catch((err) => {
          setIsErrorText('При обновлении профиля произошла ошибка.');
          console.log(`Ошибка при обновлении данных пользователя: ${err}`); // выведем ошибку в консоль
        })
        .finally(() => {
          serIsPreloader(false);
        });
    }

   // регистрация
  function handleRegister ( name, email, password ) {
    serIsPreloader(true);
    if (password){
      auth.register
      (
        name,
        email, 
        password
      )
      .then(() => {
        navigate('/signin');
        setIsErrorText('');
        })
      .catch((err) => {
        setIsErrorText('Пользователь с таким email уже существует.');
        console.log(`Ошибка при регистрации: ${err}`); // выведем ошибку в консоль
      })
      .finally(() => {
        serIsPreloader(false);
      });
    }
  }

  function handleLogin(email, password) {
    serIsPreloader(true)
    if (!email || !password) {
      return;
    }
    auth
      .authorize(email, password)
      .then((data) => {
        if (data) {
          // setuserEmail(email); 
          // localStorage.setItem("jwt", data.token);
          handleLoginSet();
          setIsErrorText('');
          serIsPreloader(false)
          navigate("/movies");
          
        }
      })
      .catch((err) => {
        setIsErrorText('Вы ввели неправильный логин или пароль');
        console.log(`Ошибка при регистрации: ${err}`);
        // setnoticeMassage({image: auth_error, text: "Что-то пошло не так! Попробуйте ещё раз."});
        // setisInfoTooltipOpen(true);
        // setisRegister(false);
      });
  };

  function openPopup() {
      setIsPopupOpen(true);
    };

  function closePopup() {
      setIsPopupOpen(false);
    };
  
  function outLogged() {
      auth
        .registerOut()
        .then(() => {
            setCurrentUser({});
        })
        .catch((err) => {
          console.log(`Ошибка при выходе: ${err}`); // выведем ошибку в консоль
      });
    };


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <Routes>
          <Route
              path="*"
              element={
                <NotFoundPage
                  notFound={"404"}
                  text={"Страница не найдена"}
                  titleLink={"Назад"}
                />
              }
          />
          <Route
            exact
            path="/"
            element={
                <Main
                  loggedIn={loggedIn}
                  isOpen={openPopup}
                  onClose={closePopup}
                />
            }
          />
          <Route
            exact
            path="/movies"
            element={
                <ProtectedRouteElement
                    element={Movies}
                    loggedIn={loggedIn}
                    isOpen={openPopup}
                    onClose={closePopup}
                    textMore={"Ещё"}
                    cards={cards}
                    isPreloader={isPreloader}
                    >
                </ProtectedRouteElement>
            }
          />
          <Route
            exact
            path="/saved-movies"
            element={
              <ProtectedRouteElement
                  element={SavedMovies}
                  loggedIn={loggedIn}
                  isOpen={openPopup}
                  onClose={closePopup}
                  isPreloader={isPreloader}
                >
              </ProtectedRouteElement>
            }
          />
           <Route
            exact
            path="/profile"
            element={
              <ProtectedRouteElement
                  element={Profile}
                  onSignOut={outLogged}
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                  onUpdateUser={handleUpdateUser}
                  isPreloader={isPreloader}
                  labelName={"Имя"}
                  labelEmail={"E-mail"}
                  buttonTitle={"Редактировать"}
                  buttonText={"Выйти из аккаунта"}
                  errorText={isErrorText}
                  >
              </ProtectedRouteElement>
            }
          />
          <Route
            path="/signup"
            element={
                <Register
                  labelName={"Имя"}
                  labelEmail={"E-mail"}
                  labelPassword={"Пароль"}
                  welcomeReg={"Добро пожаловать!"}
                  questionReg={"Уже зарегистрированы?"}
                  textReg={"Зарегистрироваться"}
                  titleReg={"Войти"}
                  onRegister={handleRegister}
                  errorText={isErrorText}
                  isPreloader={isPreloader}
                />
            }
          />
          <Route
            path="/signin"
            element={
                <Login
                  handleLoginSet={handleLoginSet}
                  onLogin={handleLogin}
                  loggedIn={loggedIn}
                  labelEmail={"E-mail"}
                  labelPassword={"Пароль"}
                  welcomeLogin={"Рады видеть!"}
                  questionLog={"Ещё не зарегистрированы?"}
                  textLog={"Войти"}
                  titlelog={"Регистрация"}
                  errorText={isErrorText}
                  isPreloader={isPreloader}
                  //// setisRegister={setisRegister}
                  //// setisInfoTooltipOpen={setisInfoTooltipOpen}
                />
            }
          />
        </Routes>
        <Popup 
          isOpen={isPopupOpen}
          onClose={closePopup}
          textMain={"Главная"}
          textMovies={"Фильмы"}
          textSaveMovies={"Сохранённые фильмы"}
          routeMain={"/"}
          routeMovies={"/movies"}
          routeSaveMovies={"/saved-movies"}
          textAccount={"Аккаунт"}
          routeAccount={"/profile"}
                    />
        </div>
    </CurrentUserContext.Provider>
    );
}

export default App;
