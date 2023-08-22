import "../../index.css";
import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
// import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList"; 
// import MoviesCard from "../MoviesCard/MoviesCard";
import Header from "../Header/Header";
import { cards } from "../../utils/constants";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader"

// import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Movies(props) {
  // const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      <Header
        loggedIn={props.loggedIn}
        // setLoggedIn={props.setLoggedIn}
        isOpen={props.isOpen}
        onClose={props.onClose}
        textMovies={"Фильмы"}
        // routeMovies={"/movies"}
        textSaveMovies={"Сохранённые фильмы"}
        // routeSaveMovies={"/saved-movies"}
        textAccount={"Аккаунт"}
        // routeAccount={"/profile"}
                    />
      {props.isPreloader ? <Preloader/> :          
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
      }
      <Footer/>
  
  </> 
  );
}

export default Movies;