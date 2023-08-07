import "../../index.css";
import React from "react";

import "./SavedMovies.css";
// import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList"; 
import SearchForm from "../SearchForm/SearchForm";
// import MoviesCard from "../MoviesCard/MoviesCard";
// import Header from "../Header/Header";
import { cardsShort } from "../../utils/constants";
// import Footer from "../Footer/Footer";

// import { CurrentUserContext } from "../contexts/CurrentUserContext";

function SavedMovies(props) {
//   const currentUser = React.useContext(CurrentUserContext);

  return (
    <section className="movies">
        <SearchForm text={"Найти"}/>
        <MoviesCardList 
            cards={cardsShort} 
            text={"Ещё"}
            />
    </section> 
  );
}

export default SavedMovies;