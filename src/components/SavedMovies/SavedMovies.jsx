import "../../index.css";
import React, { useState, useEffect, useCallback } from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

function SavedMovies(props) {
  // const [viewMovies, setViewMovies] = useState([]);
  const [viewSavedMovies, setViewSavedMovies] = useState(localStorage.getItem("userMovies")
      ? JSON.parse(localStorage.getItem("userMovies"))
      : []
  );

  const [viewMovies, setViewMovies] = useState([]);

  const handleSearchSavedMovies = (searchStrings) => {
    const isSaved = JSON.parse(localStorage.getItem("userMovies"));
    const viewSavedMovies = props.filterAllMovies(isSaved, searchStrings);

    if (viewSavedMovies.length !== 0) {
      localStorage.setItem("userMovies", JSON.stringify(viewSavedMovies));
      localStorage.setItem("searchTextMoviesFromSaved", JSON.stringify(searchStrings));
      setViewSavedMovies(JSON.parse(localStorage.getItem("userMovies")));
    } else {
      props.setSavedMovies([]);
    }
  };

  const [isShort, setIsShort] = useState(
    JSON.parse(localStorage.getItem("savedCheckBoxMovies"))
  );

  const searchSavedMovie = JSON.parse(localStorage.getItem("searchTextMoviesFromSaved"));

  const filterCheckMovies = (moviesDuration) => {
    return moviesDuration.filter(({ duration }) => duration <= 40);
  };

  const handleCheckToggler = () => {
    setIsShort(!isShort);
    localStorage.setItem("savedCheckBoxMovies", JSON.stringify(!isShort));
  };

  const searchInSavedShortMovies = useCallback(() => {
    if (searchSavedMovie) {
      setViewMovies(filterCheckMovies(viewSavedMovies));
    } else {
      setViewMovies(filterCheckMovies(props.savedMovies));
    }
  }, [searchSavedMovie, props.savedMovies, viewSavedMovies]);

  const searchInSavedMovies = useCallback(() => {
    if (searchSavedMovie) {
      setViewMovies(viewSavedMovies);
    } else {
      setViewMovies(props.savedMovies);
    }
  }, [searchSavedMovie, props.savedMovies, viewSavedMovies]);

  useEffect(() => {
    if (isShort) {
      searchInSavedShortMovies();
    } else {
      searchInSavedMovies();
    }
  }, [isShort, searchInSavedShortMovies, searchInSavedMovies]);

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
      {props.isPreloader ? (
        <Preloader />
      ) : (
        <main className="movies">
          <SearchForm
            text={"Найти"}
            handleSearchMovies={handleSearchSavedMovies}
            handleCheckToggler={handleCheckToggler}
            isShort={isShort}
            // searchMovie={searchSavedMovie}
          />
          <MoviesCardList
            cards={viewMovies}
            onDeleteSavedMovies={props.onDeleteSavedMovies}
          />
          <div className="saveddevider"></div>
        </main>
      )}
      <Footer />
    </>
  );
}

export default SavedMovies;
