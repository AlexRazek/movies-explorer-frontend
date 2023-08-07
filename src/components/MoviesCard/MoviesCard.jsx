import "../../index.css";
import "./MoviesCard.css";
import { React } from "react";
// import React, { useContext } from "react";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext"

function MoviesCard(props) {
    // const isOwn = true;
//   const currentUser = useContext(CurrentUserContext)

  // Определяем, являемся ли мы владельцем текущей карточки
//   const isOwn = props.card.owner._id === currentUser._id;
//   const isOwn = props.card.owner === currentUser._id;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
//   const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
//   const isLiked = (props.card.likes || []).some((i) => i === currentUser._id);
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  // const cardLikeButtonClassName = `element__like ${
  //   isLiked && "element__like_active"
  // }`;

//   function handleClick() {
//     props.onCardClick(props.card);
//   }

//   function handleDeleteClick() {
//     props.onCardDelete(props.card);
//   }

//   function handleLike() {
//     props.onCardLike(props.card);
//   }

  return (
    <>
    <div className="element" key={props._id}>
        {/* <img onClick={ handleClick } src = {props.link}  className="element__image" alt="картинка"/> */}
        <img src = {props.image} className="element__image" alt="картинка"/>
        <div className="element__title-container">
            <h2 className="element__title">{props.nameRU}</h2>
            <button type="button" aria-label="нравится" className="element__like" />
        </div>
        {/* <p className="element__like-counter">{props.likes}</p> */}
        <p className="element__title-duration">{props.duration}</p>
    </div>
        {/* Далее в разметке используем переменную для условного рендеринга */}
        {/* {isOwn && (
          <button
            type="button"
            className="element__trash"
            onClick={handleDeleteClick}
            aria-label="корзина"
          />
        )} */}
        {/* <button type="button" aria-label="корзина" className="element__trash" /> */}
        {/* <div className="element__like-container">
          <button
            type="button"
            aria-label="нравится"
            className={cardLikeButtonClassName}
            onClick={handleLike}
          /> */}  
         
        {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default MoviesCard;
