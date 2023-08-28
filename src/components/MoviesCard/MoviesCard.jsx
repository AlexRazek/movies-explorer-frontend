import "../../index.css";
import "./MoviesCard.css";
import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import { moviesURL } from "../../utils/constants"

function MoviesCard(props) {

  const location = useLocation();
  const userMoviesUrl = `${moviesURL}${props.image.url}`;


  const savedUserMovies = JSON.parse(localStorage.getItem("userMovies"))
    .find((item) => item.nameRU === props.card.nameRU
  );

  const [isLiked, setIsLiked] = useState(savedUserMovies);

  function handleLike() {
    if(!isLiked){
    props.onLikeMovies(props.card);
    setIsLiked(true);
    } else {
      props.onDeleteSavedMovies(savedUserMovies._id);
      setIsLiked(false)
    }
  };

  function handleDelete() {
    props.onDeleteSavedMovies(props.card._id);
  };

  const convertTime = (duration) => {
    var mins = duration % 60;
    var hours = (duration - mins) / 60;
      if (mins < 10) mins = '0' + mins
      if (hours < 10) hours = '0' + hours
    return hours + ':' + mins; 
  };

  const cardLikeButtonClassName = `element__like ${
    isLiked && "element__like_active"
  }`;

  return (
    <>
      <div className="element" key={props.id}>
        <a className="element__image-trailer" href={props.trailerLink} target="_blank" rel="noreferrer">
          <img 
            className="element__image" 
            src={location.pathname === "/movies"? userMoviesUrl
            : props.image}
            alt={props.nameRU}
            />
        </a>
        <div className="element__title-container">
          <h2 className="element__title">{props.nameRU}</h2>
          {location.pathname === "/movies" ? (
            <button
              type="button"
              aria-label="добавление фильма в сохраненные"
              className={cardLikeButtonClassName}
              onClick={handleLike}
            />
          ) : (
            <button
              type="button"
              aria-label="удаление фильма из сохраненных"
              className="element__save-delete"
              onClick={handleDelete}
            />
          )}
        </div>
        <p className="element__title-duration">{convertTime(props.duration)}</p>
      </div>
    </>
  );
}

export default MoviesCard;
