import "../../index.css";
import "../Login/Login.css"
import React, {useState} from 'react';
import {Link } from 'react-router-dom';

const Login = (props) => {
  const [formValue, setFormValue] = useState({
    email: 'pochta@yandex.ru',
    password: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value

    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // props.onLogin(formValue.email, formValue.password);
    setFormValue({ email: "", password: "" });
  }

  return (
    <div className="login">
        <Link to="/" className="login__logo"></Link>
        <h2 className="login__welcome">
        {props.welcomeLogin}
        </h2>
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
                value={formValue.email} 
                onChange={handleChange} 
                minLength="5"
                maxLength="30"
                autoFocus
                required
                />
            <span className="login__imput-error emailLogin-input-error">Что-то пошло не так...</span>
            <label htmlFor="passwordLogin" className="login__label">
                {props.labelPassword} 
            </label>
            <input 
                id="passwordlogin" 
                className="login__input"
                // placeholder="Пароль"
                name="password" 
                type="password"
                value={formValue.password} 
                onChange={handleChange}
                minLength="6"
                maxLength="30"
                autoFocus
                required
                />
             <span className="login__imput-error passwordlogin-input-error">Что-то пошло не так...</span>
        <div className="login__button-container">
          <button type="submit" onSubmit={handleSubmit} className="login__button">{props.textLog}</button>
          <p className="login__signin">{props.questionLog}<Link to="/signup" className="login__login-link">{props.titlelog}</Link></p>
        </div>
      </form>
    </div>
  );
}

export default Login;