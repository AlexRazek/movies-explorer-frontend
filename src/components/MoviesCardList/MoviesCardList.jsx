import "../../index.css";
import React, {useState} from "react";
// import Preloader from "../Preloader/Preloader";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";

import MoviesCard from "../MoviesCard/MoviesCard";
import { useMediaQuery } from "../../hook/useMediaQuery";

import {
  LARGE_ROW_CARD_COUNT,
  MIDLE_ROW_CARD_COUNT,
  SMALL_ROW_CARD_COUNT,
  LARGE_INITIAL_CARD_COUNT,
  MIDLE_INITIAL_CARD_COUNT,
  SMALL_INITIAL_CARD_COUNT,
} from "../../utils/constants";

// import { CurrentUserContext } from "../contexts/CurrentUserContext";
function MoviesCardList(props) {
  //   const currentUser = React.useContext(CurrentUserContext);

  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const isTablet = useMediaQuery("(min-width: 768px)");

  const cardColumnCount = isDesktop
    ? LARGE_ROW_CARD_COUNT
    : isTablet
    ? MIDLE_ROW_CARD_COUNT
    : SMALL_ROW_CARD_COUNT;

  const initialCardCount = isDesktop
    ? LARGE_INITIAL_CARD_COUNT
    : isTablet
    ? MIDLE_INITIAL_CARD_COUNT
    : SMALL_INITIAL_CARD_COUNT;

  const [visibleCardCount, setVisibleCardCount] =
    useState(initialCardCount);

  const roundedVisibleCardCount =
    Math.floor(visibleCardCount / cardColumnCount) * cardColumnCount;

  const handleClick = () => {
    calculateCardCount();
  };

  const calculateCardCount = () => {
    if (isDesktop) {
      return setVisibleCardCount(visibleCardCount + LARGE_ROW_CARD_COUNT);
    }

    if (isTablet) {
      return setVisibleCardCount(visibleCardCount + MIDLE_ROW_CARD_COUNT);
    }

    setVisibleCardCount(visibleCardCount + SMALL_ROW_CARD_COUNT);
  };

  const limitForButtonMore = () => {
    if (props.cards.length <= roundedVisibleCardCount) {
      return false;
    } 
      return true;
  };

  return (
    <>
      {props.isPreloader ? (
        <Preloader />
      ) : (
      <ul className="elements" aria-label="элементы">
        {props.cards?.slice(0, roundedVisibleCardCount).map((card) => (
          <MoviesCard
            key={card.id || card._id}
            id={card._id}
            onLikeMovies={props.onLikeMovies}
            onDeleteSavedMovies={props.onDeleteSavedMovies}
            nameRU={card.nameRU}
            image={card.image}
            duration={card.duration}
            trailerLink={card.trailerLink}
            card={card}
            savedMovies={props.savedMovies}
          />
        ))}
      </ul>
      )} 
      <div
          id="elements__input-error"
          className={`elements__input-error ${
            props.cards.length === 0
              ? "elements__input-error_active"
              : "elements__input-error"
          }`}>
          Ничего не найдено
      </div>
      <div className="elements__more-container">
        <button
          type="button"
          id="moreButton"
          className={`${
            limitForButtonMore() ? "elements__more" : "elements__more_disabled"
          }`}
          onClick={handleClick}
        >
          {props.textMore || "Ещё"}
        </button>
      </div>
    </>
  );
}

export default MoviesCardList;
