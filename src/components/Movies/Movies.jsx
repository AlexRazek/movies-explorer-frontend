import "../../index.css";
import React, { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { moviesApi } from "../../utils/MoviesApi";

// import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Movies(props) {
  // const currentUser = React.useContext(CurrentUserContext);
  const [serverMovies, setServerMovies] = useState(localStorage.getItem("serverMovies") 
    ? JSON.parse(localStorage.getItem("serverMovies")) : []);

  const [viewServerMovies, setViewServerMovies] = useState([]);


  const searchMovie = JSON.parse(localStorage.getItem("searchMoviesFromServer"));

  const handleSearchMovies = (searchStrings) => {
    const requestToSearch = (request) => {
      const viewServerMovies = props.filterAllMovies(request, searchStrings);

      if (viewServerMovies.length !== 0) {
        localStorage.setItem("serverMovies", JSON.stringify(viewServerMovies));
        localStorage.setItem("searchMoviesFromServer", JSON.stringify(searchStrings));
        setServerMovies(JSON.parse(localStorage.getItem("serverMovies")));
      } else {
        setServerMovies([]);
      }
    };

    if (viewServerMovies.length === 0) {
      moviesApi
        .getAllMovies()
        .then((items) => {
          requestToSearch(items);
          setViewServerMovies(items);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      requestToSearch(viewServerMovies);
    }
  };

  const [isShort, setIsShort] = useState(
    JSON.parse(localStorage.getItem("serverCheckBoxMovies"))
  );

  const filterCheckMovies = (moviesDuration) => {
    return moviesDuration.filter(({ duration }) => duration <= 40);
  };

  const handleCheckToggler = () => {
    setIsShort(!isShort);
    localStorage.setItem("serverCheckBoxMovies", JSON.stringify(!isShort));
  };

  useEffect(() => {
    if (isShort) {
      if (filterCheckMovies(serverMovies).length !== 0) {
        setViewServerMovies(filterCheckMovies(serverMovies));
      } else {
        setViewServerMovies([]);
      }
    }
  }, [serverMovies, isShort]);

  return (
    <>
      <Header
        loggedIn={props.loggedIn}
        isOpen={props.isOpen}
        onClose={props.onClose}
        textMovies={"Фильмы"}
        textSaveMovies={"Сохранённые фильмы"}
        textAccount={"Аккаунт"}
      />
      <main className="movies">
        <SearchForm
          text={"Найти"}
          handleSearchMovies={handleSearchMovies} 
          handleCheckToggler={handleCheckToggler} 
          isShort={isShort}
          searchMovie={searchMovie}
        />
        <MoviesCardList
          cards={isShort ? viewServerMovies : serverMovies}
          isPreloader={props.isPreloader}
          savedMovies={props.savedMovies}
          onLikeMovies={props.onLikeMovies}
          onDeleteSavedMovies={props.onDeleteSavedMovies}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
