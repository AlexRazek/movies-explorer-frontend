import "../../index.css";
import "../Register/Register.css";
import React from "react";
import { Link } from "react-router-dom";
import { namePattern, emailPattern } from "../../utils/constants";
import useFormWithValidation from "../../hook/useFormValid";
import Preloader from "../Preloader/Preloader";

const Register = (props) => {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onRegister(values.name, values.email, values.password);
  };

  return (
    <>
      {props.isPreloader ? (
        <Preloader />
      ) : (
        <div className="register">
          <Link to="/" className="register__logo"></Link>
          <h2 className="register__welcome">{props.welcomeReg}</h2>
          <form onSubmit={handleSubmit} className="register__form">
            <label htmlFor="nameRegister" className="register__label">
              {props.labelName}
            </label>
            <input
              id="nameRegister"
              className="register__input"
              name="name"
              type="text"
              value={values.name || ""}
              onChange={handleChange}
              minLength="3"
              pattern={namePattern}
              maxLength="30"
              autoFocus
              required
            />
            <span
              id="register__input-error"
              className={`register__input-error ${
                !isValid
                  ? "register__input-error_active"
                  : "register__input-error"
              }`}
            >
              {errors.name}
            </span>
            <label htmlFor="emailRegister" className="register__label">
              {props.labelEmail}
            </label>
            <input
              id="emailRegister"
              className="register__input"
              name="email"
              type="email"
              value={values.email || ""}
              onChange={handleChange}
              pattern={emailPattern}
              minLength="5"
              maxLength="30"
              autoFocus
              required
            />
            <span
              id="register__input-error"
              className={`register__input-error ${
                !isValid
                  ? "register__input-error_active"
                  : "register__input-error"
              }`}
            >
              {errors.email}
            </span>
            <label htmlFor="passwordRegister" className="register__label">
              {props.labelPassword}
            </label>
            <input
              id="passwordRegister"
              className="register__input"
              name="password"
              type="password"
              value={values.password || ""}
              onChange={handleChange}
              minLength="6"
              maxLength="30"
              autoFocus
              required
            />
            <span
              id="register__input-error"
              className={`register__input-error ${
                !isValid
                  ? "register__input-error_active"
                  : "register__input-error"
              }`}
            >
              {errors.password}
            </span>
            <div className="register__button-container">
              <span
                id="register__text-error"
                className={`${
                  props.errorText
                    ? "register__text-error_active"
                    : "register__text-error"
                }`}
              >
                {props.errorText}
              </span>
              <button
                id="register__button"
                type="submit"
                onSubmit={handleSubmit}
                className={`register__button ${
                  !isValid ? "register__button_disabled" : " "
                }`}
                disabled={!isValid}
              >
                {props.textReg}
              </button>
            </div>
          </form>
          <p className="register__signin">
            {props.questionReg}
            <Link to="/signin" className="register__login-link">
              {props.titleReg}
            </Link>
          </p>
        </div>
      )}
    </>
  );
};

export default Register;
