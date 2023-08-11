import "../../index.css";
import "../NotFoundPage/NotFoundPage.css"
import React from 'react';
import {Link } from 'react-router-dom';

// import { CurrentUserContext } from "../contexts/CurrentUserContext";

function NotFoundPage(props) {
//   const currentUser = React.useContext(CurrentUserContext);

return (
    <>
    <section className="notfoundpage">
        <h2 className="notfoundpage__title">{props.notFound}</h2>
        <p className="notfoundpage__text">{props.text}</p>
        <Link 
            to="/" 
            className="notfoundpage__link link__hover">{props.titleLink}
        </Link> 
    </section>
    </>
  );
}

export default NotFoundPage;
