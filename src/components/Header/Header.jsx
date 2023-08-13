import "../../index.css";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css"

const Header = (props) => {
  const loggedIn = props.loggedIn
  const location = useLocation();


  return (
    <>
    { 
      !loggedIn ? (
      <header className="header header__color-firstpage">
        <Link 
          to="/"
          className="header__logo">
        </Link>
        <section className="header__auth">
          <Link
            to={props.routeReg}
            className="header__auth-text link__hover"
            onClick={props.onSignOut}
          >
            {props.textReg}
          </Link>
          <Link
            to={props.routeEntrance}
            className="header__auth-btn button__hover"
          >
            {props.textEntrance}
          </Link>
        </section>
        </header>
     ) : ( 
      // <header className="header" >
      <header className={location.pathname === "/" ? "header header__color-firstpage" : "header"}>  
        <Link 
          to="/"
          className="header__logo">
        </Link>
        <NavLink
          to={props.routeMovies}
          className={`header__movies ${location.pathname === "/movies" &&
          "header__choise"}`}
        >
          {props.textMovies}
        </NavLink>
        <NavLink
          to={props.routeSaveMovies}
          className={`header__saved-movies ${location.pathname === "/saved-movies" &&
          "header__choise"}`}
        >
          {props.textSaveMovies}
        </NavLink>
        <NavLink
          to={props.routeAccount}
          className={`header__accaunt ${location.pathname === "/profile" &&
          "header__choise"}`}
        //   onClick={props.onSignOut}
        >
        </NavLink>
        <button onClick={props.isOpen} className="header__burger-menu"></button> 
        </header>
    )
    }
   </> 
  )}
  

export default Header;