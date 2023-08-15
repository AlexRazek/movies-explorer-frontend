import "../../index.css";
import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
// import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList"; 
// import MoviesCard from "../MoviesCard/MoviesCard";
// import Header from "../Header/Header";
import { cards } from "../../utils/constants";
// import Footer from "../Footer/Footer";

// import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Movies(props) {
//   const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="movies">
        <SearchForm text={"Найти"}/>
        <MoviesCardList cards={cards}/>
        <div className="elements__more-container">      
          <button 
            type="button" 
            className="elements__more">
            {props.textMore}
          </button> 
        </div>
    </main> 
  );
}

export default Movies;