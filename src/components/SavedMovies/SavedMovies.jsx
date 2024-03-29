import "../../index.css";
import React, { useState, useEffect, useCallback } from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import { useFormWithValidation } from "../../hook/useFormValid";

function SavedMovies(props) {
  const [isShort, setIsShort] = useState(JSON.parse(localStorage.getItem("savedCheckBoxMovies")));
  const [viewSavedMovies, setViewSavedMovies] = useState(localStorage.getItem("userSavedMovies")
      ? JSON.parse(localStorage.getItem("userSavedMovies"))
      : []
  );
  const { resetForm } = useFormWithValidation();
  
  useEffect(() => {
    let watchSavedMovies = JSON.parse(localStorage.getItem("userSavedMovies"));
    let watchSavedCheck = JSON.parse(localStorage.getItem("savedCheckBoxMovies"));
    if (watchSavedMovies || watchSavedCheck) {
      localStorage.removeItem("searchTextMoviesFromSaved");
      localStorage.getItem("userMovies");
      resetForm();
      setIsShort(false);
    }
    }, [props.savedMovies, resetForm, setIsShort]);


  const [viewMovies, setViewMovies] = useState([]);

  const searchSavedMovie = JSON.parse(localStorage.getItem("searchTextMoviesFromSaved"));

  const handleSearchSavedMovies = (searchStrings) => {
    const isSaved = JSON.parse(localStorage.getItem("userMovies"));
    const viewSavedMovies = props.filterAllMovies(isSaved, searchStrings);

    if (viewSavedMovies.length !== 0) {
      localStorage.setItem("userSavedMovies", JSON.stringify(viewSavedMovies));
      localStorage.setItem("searchTextMoviesFromSaved", JSON.stringify(searchStrings));
      setViewSavedMovies(JSON.parse(localStorage.getItem("userSavedMovies")));
    } else {
      // props.setSavedMovies([]);
      localStorage.setItem("userSavedMovies", JSON.stringify(viewSavedMovies));
      localStorage.setItem("searchTextMoviesFromSaved", JSON.stringify(searchStrings));
      setViewSavedMovies(JSON.parse(localStorage.getItem("userSavedMovies")));
    }
  };


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
