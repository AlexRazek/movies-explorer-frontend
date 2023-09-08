import "../../index.css";
import "../Popup/Popup.css";
import React from "react";
import { Link } from "react-router-dom";

function Popup(props) {
  return (
    <section className={`popup ${props.isOpen ? "popup_opened" : " "}`}>
      <div className="popup__container">
        <button
          type="button"
          onClick={props.onClose}
          aria-label="закрыть"
          className="popup__closed"
        />
        <div className="popup__menu">
          <Link to="/" className="popup__link" onClick={props.onClose}>
            {props.textMain}
          </Link>
          <Link to="/movies" className="popup__link" onSubmit={props.onClose}>
            {props.textMovies}
          </Link>
          <Link
            to="/saved-movies"
            className="popup__link"
            onClick={props.onClose}
          >
            {props.textSaveMovies}
          </Link>
          <Link
            to="/profile"
            className="popup__accaunt"
            onClick={props.onClose}
            //   onClick={props.onSignOut}
          ></Link>
        </div>
      </div>
    </section>
  );
}

export default Popup;
