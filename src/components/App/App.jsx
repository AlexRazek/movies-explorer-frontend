import "../../index.css";
// import React, { useEffect, useState } from "react";
import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
// import { Route, Routes, Navigate, useNavigate} from "react-router-dom";
// import ProtectedRouteElement from "./ProtectedRoute.js";
import * as auth from "../../utils/auth";
import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";

// import { CurrentUserContext } from "../../contexts/CurrentUserContext"
import Footer from "../Footer/Footer";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  // const [currentUser, setCurrentUser] = useState({});


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
    // <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <Routes>
          <Route
              path="*"
              element={
                loggedIn ? <Navigate to="/" /> : <Navigate to="/signin" />
              }
          />
          <Route
            exact
            path="/"
            element={
              <>
                <Header
                    loggedIn={loggedIn}
                    // userEmail={userEmail}
                    setLoggedIn={setLoggedIn}
                    onSignOut={outLogged}
                    textReg={"Регистрация"}
                    textEntrance={"Войти"}
                    // textMovies={"Фильмы"}
                    // textSaveMovies={"Сохранённые фильмы"}
                    routeMain={"/"}
                    routeReg={"/signup"}
                    routeEntrance={"/signin"}
                    // routeMovies={"/movies"}
                    // routeSaveMovies={"/saved-movies"}
                  />
                <Main/> 
                <Footer /> 
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
                    // userEmail={userEmail}
                    setLoggedIn={setLoggedIn}
                    onSignOut={outLogged}
                    textMovies={"Фильмы"}
                    routeMovies={"/movies"}
                    textSaveMovies={"Сохранённые фильмы"}
                    routeSaveMovies={"/saved-movies"}
                    textAccount={"Аккаунт"}
                    routeAccount={"/profile"}
                  />
                <Movies/>
                <Footer />
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
                    // userEmail={userEmail}
                    setLoggedIn={setLoggedIn}
                    onSignOut={outLogged}
                    textMovies={"Фильмы"}
                    textSaveMovies={"Сохранённые фильмы"}
                    routeMovies={"/movies"}
                    routeSaveMovies={"/saved-movies"}
                    textAccount={"Аккаунт"}
                    routeAccount={"/profile"}
                  />
                <SavedMovies/>
                <Footer />
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
                  // userEmail={userEmail}
                  setLoggedIn={setLoggedIn}
                  onSignOut={outLogged}
                  textMovies={"Фильмы"}
                  textSaveMovies={"Сохранённые фильмы"}
                  routeMovies={"/movies"}
                  routeSaveMovies={"/saved-movies"}
                  textAccount={"Аккаунт"}
                  // isOpen={isOpen}
                  // onClose={onClose}
                  // name={"profile"}
                  // type={"popup"}
                  // onSubmit={handleSubmit}
                />
                <Profile
                  labelName={"Имя"}
                  labelEmail={"Email"}
                  buttonTitle={"Редактировать"}
                  buttonText={"Выйти из аккаунта"}
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
                  //// setisRegister={setisRegister}
                  //// setisInfoTooltipOpen={setisInfoTooltipOpen}
                  // onRegister={handleRegister}
                />
              </>
            }
          />
          <Route
            path="/signin"
            element={
              <>
                {/* <Header text={"Регистрация"} route={"/signup"} /> */}
                <Login
                  // handleLoginSet={handleLoginSet}
                  // onLogin={handleLogin}
                  // loggedIn={loggedIn}
                  //// setisRegister={setisRegister}
                  //// setisInfoTooltipOpen={setisInfoTooltipOpen}
                />
              </>
            }
          />
        </Routes>
        </div>
    // </CurrentUserContext.Provider>
    );
  } 

export default App;

