import "../../index.css";
import "./Profile.css";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { emailPattern, namePattern } from "../../utils/constants";
// import React, { useContext } from "react";

import Header from "../Header/Header";
import useFormWithValidation from "../../hook/useFormValid";
// import React, { useState, useEffect } from "react";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

//делаем через useState
function Profile(props) {
  // Подписка на контекст, а именно на юзера
  const currentUser = useContext(CurrentUserContext);
  const [isBlockForm, setIsBlockForm] = useState(false);

  // const [userName, setUserName] = useState({name:currentUser.name});
  // const [userEmail, setUserEmail] = useState({email:currentUser.email});
  const { values, setValues, handleChange, isValid, errors } = useFormWithValidation(); 


  useEffect(() => {
    if (currentUser) {
      setValues ({ 
        name:currentUser.name,
        email:currentUser.email,
      });
  }
  }, [currentUser, setValues]);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  const checkPossibleInput = useCallback(() => {
    if (currentUser.name !== values.name || currentUser.email !== values.email)
    {
      setIsBlockForm(true)
    }
    else {
      setIsBlockForm(false)
    }  
    }, [currentUser, values]);
  
  useEffect(() => {
    checkPossibleInput();
  }, [checkPossibleInput]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
      e.preventDefault();
      props.onUpdateUser(values.name, values.email);
      setIsBlockForm(false);

    }

  //  нажимаем кнопку редактирования
  // function handleChangeSubmit(e) {
  //   // Запрещаем браузеру переходить по адресу формы
  //     e.preventDefault();
  //     setIsBlockForm(false)
  //   }

  // function handleName(e) {
  //   setName(e.target.value);
  // }

  // function handleEmail(e) {
  //   setEmail(e.target.value);
  // }

  return (
    <>
      <Header
          loggedIn={props.loggedIn}
          setLoggedIn={props.setLoggedIn}
          onSignOut={props.onSignOut}
          isOpen={props.isOpen}
          onClose={props.onClose}
          textMovies={"Фильмы"}
          textSaveMovies={"Сохранённые фильмы"}
          textAccount={"Аккаунт"}
      />
      <section className="profile">
          <h2 className="profile__name">Привет, {currentUser.name}!</h2>
          <form action={values.toString()} id="forminput_profile" className="profile__form">
              <label htmlFor="nameProfile" className="profile__label">
              {props.labelName}
              <input
                  id="nameProfile"
                  className="profile__input"
                  name="name"
                  type="text"
                  value={values.name || ''}
                  onChange={handleChange}
                  
                  pattern={namePattern}
                  required
                  minLength="2"
                  maxLength="30"
              />
              </label>
              <div className="profile__border-bottom"></div>
              <span 
                  id="profile__input-error"
                  className={`profile__input-error ${!isValid ? "profile__input-error_active" : "profile__input-error"
                      }`}>{errors.name}
              </span>
              <label htmlFor="emailProfile" className="profile__label">
                  {props.labelEmail}
              <input
                  type="text"
                  id="emailProfile"
                  name="email"
                  value={values.email || '' }
                  onChange={handleChange}
                  className="profile__input"
                  pattern={emailPattern}
                  required
                  minLength="2"
                  maxLength="25"
              />
              </label>
              <span 
                  id="profile__input-error"
                  className={`profile__input-error ${!isValid ? "profile__input-error_active" : "profile__input-error"
                      }`}>{errors.email}
              </span>
          <div className="profile__btn-container">
            <span 
              id="profile__text-error"
              className={`${props.errorText ? "profile__text-error_active" : "profile__text-error"
                      }`}>{props.errorText}
            </span>
              <button
                  type="submit"
                  onClick={handleSubmit}
                  aria-label="редактировать профиль"
                  className={`profile__submit-btn ${!isBlockForm || !isValid ? "profile__submit-btn_disabled" : " "
                  }`}
              >
                  {props.buttonTitle}
              </button>
              <button
                  type="button"
                  id="btn-logout"
                  onClick={props.onSignOut}
                  aria-label="выйти из аккаунта"
                  className="profile__logout"
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