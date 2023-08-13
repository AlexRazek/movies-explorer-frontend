import "../../index.css";
import "../Popup/Popup.css"
import React from 'react';
import {Link } from 'react-router-dom';


function Popup(props) {
    return (
      <section
        className={`popup ${
          props.isOpen ? "popup_opened" : " "
        }`}
      >
        <div className="popup__container">
          <button
            type="button"
            onClick={props.onClose}
            aria-label="закрыть"
            className="popup__closed"
          />
            <div className="popup__menu">
                <Link 
                    to={props.routeMain}
                    className="popup__link"
                    onClick={props.onClose}
                    >
                    {props.textMain}
                </Link>
                <Link
                    to={props.routeMovies}
                    className="popup__link"
                    onSubmit={props.onClose}
                >
                    {props.textMovies}
                </Link>
                <Link
                    to={props.routeSaveMovies}
                    className="popup__link"
                    onClick={props.onClose}
                >
                {props.textSaveMovies}
                </Link>
                <Link
                    to={props.routeAccount}
                    className="popup__accaunt"
                    onClick={props.onClose}
                //   onClick={props.onSignOut}
                >
                </Link> 
            </div>
        </div>       
      </section>
    );
  }
  
  export default Popup;