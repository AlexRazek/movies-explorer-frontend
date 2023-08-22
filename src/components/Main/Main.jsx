import "../../index.css";
import React from "react";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import "./Main.css";
// import Profile from "../Profile/Profile";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  //   const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      <Header
        loggedIn={props.loggedIn}
        // setLoggedIn={setLoggedIn}
        isOpen={props.isOpen}
        onClose={props.onClose}
        textMovies={"Фильмы"}
        textSaveMovies={"Сохранённые фильмы"}
        textReg={"Регистрация"}
        textEntrance={"Войти"}
        // routeMain={"/"}
        // routeMovies={"/movies"}
        // routeSaveMovies={"/saved-movies"}
        // routeAccount={"/profile"}
        // routeReg={"/signup"}
        // routeEntrance={"/signin"}
      />
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
