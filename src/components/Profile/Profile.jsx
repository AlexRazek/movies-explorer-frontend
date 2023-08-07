import "../../index.css";
import "./Profile.css";
// import React, { useContext, useState, useEffect } from "react";
import React, { useState, useEffect } from "react";

// import { CurrentUserContext } from "../contexts/CurrentUserContext";

//делаем через useState
function Profile(props) {
  // Подписка на контекст, а именно на юзера
//   const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("Василий");
  const [email, setEmail] = useState("pochta@pochta.ru");

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setName(name);
    setEmail(email);
  }, [email, name]);

  function handleName(e) {
    setName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

//   function handleSubmit(e) {
//     // Запрещаем браузеру переходить по адресу формы
//     e.preventDefault();
//     // Передаём значения управляемых компонентов во внешний обработчик
//     props.onUpdateUser({
//       name,
//       email,
//     });
//   }

  return (
    <>
     <section className="profile">
        <h2 className="profile__name">Привет, {name}!</h2>
        <form className="profile__form">
        <label for="nameProfile" className="profile__label">
            {props.labelName}
            <input
                type="text"
                id="nameProfile"
                name="nameProfile"
                placeholder="Имя"
                value={ name || ''}
                onChange={handleName}
                className="profile__input"
                required
                minLength="2"
                maxLength="40"
            />
            </label>
            <div className="profile__border-bottom"></div>
            <label for="emailProfile" className="profile__label">
                {props.labelEmail}
            <input
                type="text"
                id="emailProfile"
                name="emailProfile"
                placeholder="электронный адрес"
                value={ email || '' }
                onChange={handleEmail}
                className="profile__input"
                required
                minLength="2"
                maxLength="50"
            />
            </label>
        <div className="profile__btn-container">
            <button
                type="submit"
                // disabled={false}
                aria-label="редактировать профиль"
                className="profile__submit-btn"
            >
                {props.buttonTitle}
            </button>
            <button
                type="button"
                id="btn-logout"
                onClick={props.onSignOut}
                aria-label="выйти из аакаунта"
                className="profile__closed"
                >
                {props.buttonText || 'Выйти из аккаунта'}
            </button>    
        </div> 
        </form>   
      </section>
    </>
  );
}

export default Profile;