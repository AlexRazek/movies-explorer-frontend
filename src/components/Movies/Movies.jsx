import "../../index.css";
import React from "react";
import SearchForm from "../SearchForm/SearchForm";
// import Preloader from "../Preloader/Preloader";
// import MoviesCardList from "../MoviesCardList/MoviesCardList"; 
// import MoviesCard from "../MoviesCard/MoviesCard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Movies(props) {
//   const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
        <Header/>
        <SearchForm/>
        {/* <Preloader/>
        <MoviesCardList/>
        <MoviesCard/> */}
        <Footer/>
    </>
  );
}

export default Movies;