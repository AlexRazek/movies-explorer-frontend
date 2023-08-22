import "../../index.css";
import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList"; 
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { cardsShort } from "../../utils/constants";
import Preloader from "../Preloader/Preloader"

// import { CurrentUserContext } from "../contexts/CurrentUserContext";

function SavedMovies(props) {
//   const currentUser = React.useContext(CurrentUserContext);

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
      {props.isPreloader ? <Preloader/> :
        <main className="movies">
            <SearchForm text={"Найти"}/>
            <MoviesCardList 
                cards={cardsShort} 
            />
            <div className="saveddevider">
            </div> 
        </main> 
      }
      <Footer/>
    </>
  );
}

export default SavedMovies;