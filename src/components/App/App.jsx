import "../../index.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
// import { Route, Routes, Navigate, useNavigate} from "react-router-dom";
// import ProtectedRouteElement from "./ProtectedRoute.js";
import "./App.css";
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
import { filterAllMovies } from "../../utils/constants";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";

function App() {
  // const currentUser = useContext(CurrentUserContext);

  const [loggedIn, setLoggedIn] = useState(false);
  const [isPreloader, setIsPreloader] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isErrorText, setIsErrorText] = useState("");
  const [isSuccessText, setIsSuccessText] = useState("");
  const [savedMovies, setSavedMovies] = useState([]);

  const navigate = useNavigate();

  // проверка токена пользователя - куки
  useEffect(() => {
    auth
      .checkToken()
      .then((data) => {
        if (data) {
          setLoggedIn(true);
          setCurrentUser(data);
          // navigate("/saved-movies");
          // navigate("/");
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

  // подгружаем данные юзера
  useEffect(() => {
    if (loggedIn) {
      setIsPreloader(true);
      mainApi
        .getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
          localStorage.setItem("userData", JSON.stringify(userData));
        })
        .catch((err) => {
          console.log(`Ошибка при загрузке информации о пользователе: ${err}`); // выведем ошибку в консоль
        })
        .finally(() => {
          setIsPreloader(false);
        });
    }
  }, [loggedIn]);

  // получаем сохраненные карточки фильмов
  useEffect(() => {
    if (loggedIn) {
      setIsPreloader(true);
      mainApi
        .getSavedCards()
        .then((savedMoviesData) => {
          setSavedMovies(savedMoviesData);
          localStorage.setItem("userMovies", JSON.stringify(savedMoviesData));
        })
        .catch((err) => {
          console.log(`Ошибка при загрузке карточек: ${err}`); // выведем ошибку в консоль
        })
        .finally(() => {
          setIsPreloader(false);
        });
    }
  }, [loggedIn]);

  // обновление данных пользователя
  function handleUpdateUser(name, email) {
    setIsPreloader(true);
    mainApi
      .updateUserInfo(name, email)
      .then((user) => {
        setCurrentUser(user);
        setIsPreloader(false);
        setIsSuccessText("Данные успешно обновлены");
        setTimeout(() => {
          setIsSuccessText(false);
        }, 2000);
      }) //выставляем время показа сообщения
      .catch((err) => {
        setIsErrorText("При обновлении профиля произошла ошибка.");
        console.log(`Ошибка при обновлении данных пользователя: ${err}`); // выведем ошибку в консоль
      })
      .finally(() => {
        setIsPreloader(false);
      });
  }

  // регистрация
  function handleRegister(name, email, password) {
    setIsPreloader(true);
    if (password) {
      auth
        .register(name, email, password)
        .then(() => {
          setIsErrorText("");
          handleLogin(email, password);
          navigate("/movies");
        })
        .catch((err) => {
          setIsErrorText("При регистрации пользователя произошла ошибка");
          console.log(`Ошибка при регистрации: ${err}`); // выведем ошибку в консоль
        })
        .finally(() => {
          setIsPreloader(false);
        });
    }
  }

  function handleLogin(email, password) {
    setIsPreloader(true);
    if (!email || !password) {
      return;
    }
    auth
      .authorize(email, password)
      .then((data) => {
        if (data) {
          handleLoginSet();
          setIsErrorText("");
          setIsPreloader(false);
          navigate("/movies");
        }
      })
      .catch((err) => {
        setIsErrorText("Вы ввели неправильный логин или пароль");
        console.log(`Ошибка при регистрации: ${err}`);
      });
  }

  function openPopup() {
    setIsPopupOpen(true);
  }

  function closePopup() {
    setIsPopupOpen(false);
  }

  // выход из аккаунта
  function outLogged() {
    auth
      .registerOut()
      .then(() => {
        setCurrentUser({});
        setLoggedIn(false);
        localStorage.clear();
        localStorage.removeItem("savedМovies");
      })
      .catch((err) => {
        console.log(`Ошибка при выходе: ${err}`); // выведем ошибку в консоль
      });
  }

  // сохранение фильма из общего списка в сохраненные
  function handleLikeforSaveMovies(addedMovie) {
    const savedMovieItem = savedMovies.find(function (item) {
      return addedMovie.id === item.movieId;
    });
    if (savedMovieItem) {
      console.log("Попытка добавить сохраненный ранее фильм");
      return;
    }
    mainApi
      .addSavedCard(addedMovie)
      .then((addedItem) => {
        return [addedItem, ...savedMovies];
      })
      .then((item) => {
        setSavedMovies(item);
        localStorage.setItem("userMovies", JSON.stringify(item));
      })
      .catch((err) => {
        console.log(`Ошибка при сохранении фильма в сохраненные: ${err}`); // выведем ошибку в консоль
      });
  }

  // удаление фильма из сохраненных
  function handleDeleteSavedMovies(movie) {
    setIsPreloader(true);
    mainApi
      .deleteCard(movie)
      .then((movieForDelete) => {
        const savedList = savedMovies.filter(
          (itemMovie) => itemMovie._id !== movieForDelete.movie._id
        );
        localStorage.setItem("userMovies", JSON.stringify(savedList));
        setSavedMovies(savedList);
      })
      .catch((err) => {
        console.log(`Ошибка при удалении из сохраненных: ${err}`); // выведем ошибку в консоль
      })
      .finally(() => {
        setIsPreloader(false);
      });
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
                isPreloader={isPreloader}
                onLikeMovies={handleLikeforSaveMovies}
                onDeleteSavedMovies={handleDeleteSavedMovies}
                filterAllMovies={filterAllMovies}
                savedMovies={savedMovies}
              ></ProtectedRouteElement>
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
                onDeleteSavedMovies={handleDeleteSavedMovies}
                newAddMovies={savedMovies}
                filterAllMovies={filterAllMovies}
                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
              ></ProtectedRouteElement>
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
                successText={isSuccessText}
              ></ProtectedRouteElement>
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
