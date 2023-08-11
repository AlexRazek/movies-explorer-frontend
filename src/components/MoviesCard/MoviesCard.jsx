import "../../index.css";
import "./MoviesCard.css";
import { React, useState } from "react";
import { useLocation } from "react-router";


// import React, { useContext } from "react";

function MoviesCard(props) {


  const [isLiked, setIsLiked] = useState(false);
  const location = useLocation();
    
  function handleLike() {
    setIsLiked(true)
  };

  // const cardLikeButtonClassName = `element__like ${
  //   isLiked ? "element__like_active" : "element__like"
  // }`;

  const cardLikeButtonClassName = `element__like ${
    isLiked && "element__like_active"
  }`;

  return (
    <>
    <div className="element" key={props._id}>
        <img src = {props.image} className="element__image" alt="картинка"/>
        <div className="element__title-container">
            <h2 className="element__title">{props.nameRU}</h2>
            { location.pathname === "/movies" ? 
            (<button
            type="button"
            aria-label="добавление фильма в сохраненные"
            className={cardLikeButtonClassName}
            onClick={handleLike}
          />)
          :  
            (<button
            type="button"
            aria-label="удаление фильма из сохраненных"
            className={"element__save-delete"}
          />)
            }
        </div>
        {/* <p className="element__like-counter">{props.likes}</p> */}
        <p className="element__title-duration">{props.duration}</p>
    </div>
    </>
  );
}

export default MoviesCard;
