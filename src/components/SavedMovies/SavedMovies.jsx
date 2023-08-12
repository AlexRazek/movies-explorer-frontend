import "../../index.css";
import React from "react";

import "./SavedMovies.css";
// import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList"; 
import SearchForm from "../SearchForm/SearchForm";
import { cardsShort } from "../../utils/constants";


// import { CurrentUserContext } from "../contexts/CurrentUserContext";

function SavedMovies(props) {
//   const currentUser = React.useContext(CurrentUserContext);

  return (
    <section className="movies">
        {/* <Preloader/> */}
        <SearchForm text={"Найти"}/>
        <MoviesCardList 
            cards={cardsShort} 
        />
        <div className="saveddevider">
        </div> 
    </section> 
  );
}

export default SavedMovies;