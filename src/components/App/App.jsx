import "../../index.css";
// import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
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

// import { CurrentUserContext } from "../../contexts/CurrentUserContext"
import Footer from "../Footer/Footer";

function App() {
  // const [loggedIn, setLoggedIn] = useState(true);

  return (
    // <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <Routes>
          {/* <Route
              path="*"
              element={
                loggedIn ? <Navigate to="/" /> : <Navigate to="/signin" />
              }
          /> */}
          <Route
            exact
            path="/"
            element={
              <>
                <Main/>
              </>
            }
          />
          <Route
            exact
            path="/movies"
            element={
              <>
                <Movies/>
              </>
            }
          />
          <Route
            exact
            path="/saved-movies"
            element={
              <>
                <SavedMovies/>
              </>
            }
          />
           <Route
            exact
            path="/profile"
            element={
              <>
                <Profile/>
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
        <Footer />
        </div>
    // </CurrentUserContext.Provider>
    );
  } 

export default App;

