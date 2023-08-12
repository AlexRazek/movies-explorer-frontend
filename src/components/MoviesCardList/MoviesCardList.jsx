import "../../index.css";
import React from "react";
// import Preloader from "../Preloader/Preloader";
import "./MoviesCardList.css";

import MoviesCard from "../MoviesCard/MoviesCard";

// import { CurrentUserContext } from "../contexts/CurrentUserContext";

function MoviesCardList(props) {
//   const currentUser = React.useContext(CurrentUserContext);
  return (
    <>
    <section className="elements" aria-label="элементы">
        {/* <Preloader/> */}
        {props.cards.map((card) => (
          <MoviesCard
            key={card._id}
            card={card}
            // onCardClick={props.onCardClick}
            // onCardDelete={props.onCardDelete}
            // onCardLike={props.onCardLike}
            nameRU={card.nameRU}
            image={card.image}
            duration={card.duration}
            // likes={(card.likes || [] ).length} 
            // likes={card.likes.length}
          />
        ))}
    </section>
    </>
  );
}

export default MoviesCardList;