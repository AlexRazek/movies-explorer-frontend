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
          // navigate('/saved-movies');
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
      mainApi
        .getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
          // localStorage.setItem('userData', JSON.stringify({name:userData.name, email:userData.email}))
        })
        .catch((err) => {
          console.log(`Ошибка при загрузке информации о пользователе: ${err}`); // выведем ошибку в консоль
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    if(loggedIn) {
      mainApi
        .getAllCards()
        .then((cardsData) => {
          setCards(cardsData);
          // localStorage.setItem('cards', JSON.stringify(cardsData))
        })
        .catch((err) => {
          console.log(`Ошибка при загрузке карточек: ${err}`); // выведем ошибку в консоль
        });
      }   
  }, [loggedIn]);

    // обновление данных пользователя
  function handleUpdateUser(name, email) {
    mainApi
        .updateUserInfo(name, email)
        .then((user) => {
          setCurrentUser(user);
          // closeAllPopups();
        })
        .catch((err) => {
          setIsErrorText('При обновлении профиля произошла ошибка.');
          console.log(`Ошибка при обновлении данных пользователя: ${err}`); // выведем ошибку в консоль
        });
    }

   // регистрация
  function handleRegister ( name, email, password ) {
    if (password){
      auth.register
      (
        name,
        email, 
        password
      )
      .then(() => {
        // setisRegister(true);
        // setisInfoTooltipOpen(true);
        // setnoticeMassage({image: auth_success, text: "Вы успешно зарегистрировались!"});
        navigate('/signin');
        setIsErrorText('');
        // outLogged({ name, email })

        })
      .catch((err) => {
        setIsErrorText('Пользователь с таким email уже существует.');
        console.log(`Ошибка при регистрации: ${err}`); // выведем ошибку в консоль

        // setnoticeMassage({image: auth_error, text: "Что-то пошло не так! Попробуйте ещё раз."});
        // setisInfoTooltipOpen(true) 
      });
    }
  }

  function handleLogin(email, password) {
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
      // const returnUserData =JSON.parse(localStorage.getItem("userData"));
      // localStorage.setItem('userData', JSON.stringify({name:userData.name, email:userData.email}))
      // const name = localStorage.getItem('userData', {name});
      // const email = localStorage.getItem({name:userData.name}); 
      auth
        .registerOut()
      // auth.registerOut({name:returnUserData.name, email:returnUserData.email })
        .then(() => {
          // if(data) {
            setLoggedIn(false);
            localStorage.removeItem('userData');
            setCurrentUser({});
            localStorage.clear();
            navigate("/");
          // }
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
