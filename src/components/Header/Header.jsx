import "../../index.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router";
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
          {/* <p className="header__auth-email">{props.userEmail}</p> */}
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
          //   onClick={props.onSignOut}
          >
            {props.textEntrance}
          </Link>
        </section>
        </header>
      // </section>
     ) : ( 
      <header className="header">
        {/* <p className="header__auth-email">{props.userEmail}</p> */}
        <Link 
          to="/"
          className="header__logo">
        </Link>
        <NavLink
          to={props.routeMovies}
          className={`header__movies ${location.pathname === "/movies" &&
          "header__choise"}`}
          // onClick={props.onSignOut}
        >
          {props.textMovies}
        </NavLink>
        <NavLink
          to={props.routeSaveMovies}
          className={`header__saved-movies ${location.pathname === "/saved-movies" &&
          "header__choise"}`}
        //   onClick={props.onSignOut}
        >
          {props.textSaveMovies}
        </NavLink>
        <NavLink
          to={props.routeAccount}
          className={`header__accaunt ${location.pathname === "/profile" &&
          "header__choise"}`}
        //   onClick={props.onSignOut}
        >
          {/* {props.textAccount} */}
        </NavLink>
        </header>
    )
    }
   </> 
  )}
  

export default Header;