import "../../index.css";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  // const loggedIn = props.loggedIn
  const location = useLocation();

  return (
    <>
      {!props.loggedIn ? (
        <header className="header header_color-firstpage">
          <Link to="/" className="header__logo"></Link>
          <section className="header__auth">
            <Link
              to="/signup"
              className="header__auth-text"
              onClick={props.onSignOut}
            >
              {props.textReg}
            </Link>
            <Link to="/signin" className="header__auth-btn">
              {props.textEntrance}
            </Link>
          </section>
        </header>
      ) : (
        // <header className="header" >
        <header
          className={
            location.pathname === "/"
              ? "header header_color-firstpage"
              : "header"
          }
        >
          <Link to="/" className="header__logo"></Link>
          <NavLink
            to="/movies"
            className={`header__movies ${
              location.pathname === "/movies" && "header__choise"
            }`}
          >
            {props.textMovies}
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={`header__saved-movies ${
              location.pathname === "/saved-movies" && "header__choise"
            }`}
          >
            {props.textSaveMovies}
          </NavLink>
          <NavLink
            to="/profile"
            className={`header__accaunt ${
              location.pathname === "/profile" && "header__choise"
            }`}
            //   onClick={props.onSignOut}
          ></NavLink>
          <button
            type="button"
            onClick={props.isOpen}
            className="header__burger-menu"
          ></button>
        </header>
      )}
    </>
  );
};

export default Header;
