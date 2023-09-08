import "../../index.css";
import "../NotFoundPage/NotFoundPage.css";
import React from "react";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";

function NotFoundPage(props) {
  //   const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      <section className="notfoundpage">
        <h2 className="notfoundpage__title">{props.notFound}</h2>
        <p className="notfoundpage__text">{props.text}</p>
        <button className="notfoundpage__btn" onClick={props.goBack}>
          {props.titleLink}
        </button>
      </section>
    </>
  );
}

export default NotFoundPage;
