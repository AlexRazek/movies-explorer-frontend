import "../../index.css";
import React from "react";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs"; 
import "./Main.css"
// import Profile from "../Profile/Profile";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
// import Header from "../Header/Header";

// import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
//   const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
        <main>
            <Promo/>
            <AboutProject/>
            <Techs/>
            <AboutMe/>
            <Portfolio/>
        </main>
    </>
  );
}

export default Main;
