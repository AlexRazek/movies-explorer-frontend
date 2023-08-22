import "../../index.css";
import "../Login/Login.css";
import React from "react";
import { Link } from "react-router-dom";
import useFormWithValidation from "../../hook/useFormValid";
import { emailPattern } from "../../utils/constants";
import Preloader from "../Preloader/Preloader";

const Login = (props) => {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onLogin(values.email, values.password);
    // setFormValue({ email: "", password: "" });
  };

  return (
    <>
      {props.isPreloader ? (
        <Preloader />
      ) : (
        <div className="login">
          <Link to="/" className="login__logo"></Link>
          <h2 className="login__welcome">{props.welcomeLogin}</h2>
          <form onSubmit={handleSubmit} className="login__form">
            <label htmlFor="emailLogin" className="login__label">
              {props.labelEmail}
            </label>
            <input
              id="emailLogin"
              className="login__input"
              // placeholder="Email"
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
              id="login__input-error"
              className={`login__input-error ${
                !isValid ? "login__input-error_active" : "login__input-error"
              }`}
            >
              {errors.email}
            </span>
            <label htmlFor="passwordLogin" className="login__label">
              {props.labelPassword}
            </label>
            <input
              id="passwordlogin"
              className="login__input"
              // placeholder="Пароль"
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
              id="login__input-error"
              className={`login__input-error ${
                !isValid ? "login__input-error_active" : "login__input-error"
              }`}
            >
              {errors.password}
            </span>
            <div className="login__button-container">
              <span
                id="login__text-error"
                className={`${
                  props.errorText
                    ? "login__text-error_active"
                    : "login__text-error"
                }`}
              >
                {props.errorText}
              </span>
              <button
                id="login__button"
                type="submit"
                onSubmit={handleSubmit}
                className={`login__button ${
                  !isValid ? "login__button_disabled" : " "
                }`}
                disabled={!isValid}
              >
                {props.textLog}
              </button>

              {/* <button type="submit" onSubmit={handleSubmit} className="login__button">{props.textLog}</button> */}
              <p className="login__signin">
                {props.questionLog}
                <Link to="/signup" className="login__login-link">
                  {props.titlelog}
                </Link>
              </p>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
