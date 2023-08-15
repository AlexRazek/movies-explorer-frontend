import "../../index.css";
// import React, { useEffect, useState } from "react";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import { Route, Routes, Navigate, useNavigate} from "react-router-dom";
// import ProtectedRouteElement from "./ProtectedRoute.js";
import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Popup from "../Popup/Popup";
import * as auth from "../../utils/auth";
import api from "../../utils/Api";

import { CurrentUserContext } from "../../contexts/CurrentUserContext"
import Footer from "../Footer/Footer";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // const [isRegister, setisRegister] = useState(false);

  // const navigate = useNavigate();


    // обновление данных пользователя
  function handleUpdateUser(users) {
      api
        .editUserInfo(users)
        .then((user) => {
          setCurrentUser(user);
          // closeAllPopups();
        })
        .catch((err) => {
          console.log(`Ошибка при обновлении данных пользователя: ${err}`); // выведем ошибку в консоль
        });
    }

  function openPopup() {
    setIsPopupOpen(true);
    }

  function closePopup() {
      setIsPopupOpen(false);
    }
  
  function outLogged () {
      auth.registerOut()
        .then(() => {
          setLoggedIn(false);
        })
        .catch((err) => {
          console.log(`Ошибка при выходе из аккаунта: ${err}`); // выведем ошибку в консоль
      })
    }


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
              <>
                <Header
                    loggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
                    textReg={"Регистрация"}
                    textEntrance={"Войти"}
                    isOpen={openPopup}
                    onClose={closePopup}
                    textMovies={"Фильмы"}
                    textSaveMovies={"Сохранённые фильмы"}
                    routeMain={"/"}
                    routeMovies={"/movies"}
                    routeSaveMovies={"/saved-movies"}
                    routeAccount={"/profile"}
                    routeReg={"/signup"}
                    routeEntrance={"/signin"}
                  />
                <Main/> 
                <Footer/> 
              </>
            }
          />
          <Route
            exact
            path="/movies"
            element={
              <>
               <Header
                    loggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
                    isOpen={openPopup}
                    onClose={closePopup}
                    textMovies={"Фильмы"}
                    routeMovies={"/movies"}
                    textSaveMovies={"Сохранённые фильмы"}
                    routeSaveMovies={"/saved-movies"}
                    textAccount={"Аккаунт"}
                    routeAccount={"/profile"}
                  />
                <Movies
                  textMore={"Ещё"}
                />
                <Footer/>
              </>
            }
          />
          <Route
            exact
            path="/saved-movies"
            element={
              <>
                <Header
                    loggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
                    isOpen={openPopup}
                    onClose={closePopup}
                    textMovies={"Фильмы"}
                    textSaveMovies={"Сохранённые фильмы"}
                    routeMovies={"/movies"}
                    routeSaveMovies={"/saved-movies"}
                    textAccount={"Аккаунт"}
                    routeAccount={"/profile"}
                  />
                <SavedMovies/>
                <Footer/>
              </>
            }
          />
           <Route
            exact
            path="/profile"
            element={
              <>
                <Header
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                  onSignOut={outLogged}
                  textMovies={"Фильмы"}
                  textSaveMovies={"Сохранённые фильмы"}
                  routeMovies={"/movies"}
                  routeSaveMovies={"/saved-movies"}
                  textAccount={"Аккаунт"}
                />
                <Profile
                  labelName={"Имя"}
                  labelEmail={"E-mail"}
                  buttonTitle={"Редактировать"}
                  buttonText={"Выйти из аккаунта"}
                  onSignOut={outLogged}
                  loggedIn={loggedIn}
                  onUpdateUser={handleUpdateUser}
                />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                {/* <Header text={"Войти"} route={"/signin"} /> */}
                <Register
                  labelName={"Имя"}
                  labelEmail={"E-mail"}
                  labelPassword={"Пароль"}
                  welcomeReg={"Добро пожаловать!"}
                  questionReg={"Уже зарегистрированы?"}
                  textReg={"Зарегистрироваться"}
                  titleReg={"Войти"}
                />
              </>
            }
          />
          <Route
            path="/signin"
            element={
              <>
                <Login
                  // handleLoginSet={handleLoginSet}
                  // onLogin={handleLogin}
                  loggedIn={loggedIn}
                  labelEmail={"E-mail"}
                  labelPassword={"Пароль"}
                  welcomeLogin={"Рады видеть!"}
                  questionLog={"Ещё не зарегистрированы?"}
                  textLog={"Войти"}
                  titlelog={"Регистрация"}
                  //// setisRegister={setisRegister}
                  //// setisInfoTooltipOpen={setisInfoTooltipOpen}
                />
              </>
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
