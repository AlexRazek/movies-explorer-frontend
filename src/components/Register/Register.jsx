import "../../index.css";
import "../Register/Register.css"
import React, {useState} from 'react';
import {Link } from 'react-router-dom';

const Register = (props) => {
  const [formValue, setFormValue] = useState({
    name: 'Виталий',
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
    // props.onRegister(formValue.name, formValue.email, formValue.password);
    setFormValue({ name: "", email: "", password: "" });
  }

  return (
    <div className="register">
        <Link to="/" className="register__logo"></Link>
        <h2 className="register__welcome">
        {props.welcomeReg}
        </h2>
        <form onSubmit={handleSubmit} className="register__form">
            <label htmlFor="nameRegister" className="register__label">
            {props.labelName}
            </label>
            <input 
                id="nameRegister" 
                className="register__input"
                // placeholder="Имя"
                name="name" 
                type="text"
                value={formValue.name} 
                onChange={handleChange} 
                minLength="5"
                maxLength="30"
                autoFocus
                required
                />
            <span className="register__imput-error nameRegister-input-error">Что-то пошло не так...</span>
            <label htmlFor="emailRegister" className="register__label">
                {props.labelEmail}
            </label> 
            <input 
                id="emailRegister" 
                className="register__input"
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
            <span className="register__imput-error emailRegister-input-error">Что-то пошло не так...</span>
            <label htmlFor="passwordRegister" className="register__label">
                {props.labelPassword} 
            </label>
            <input 
                id="passwordRegister" 
                className="register__input"
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
             <span className="register__imput-error passwordRegister-input-error">Что-то пошло не так...</span>
        <div className="register__button-container">
          <button type="submit" onSubmit={handleSubmit} className="register__button">{props.textReg}</button>
        </div>
      </form>
        <p className="register__signin">{props.questionReg}<Link to="/signin" className="register__login-link">{props.titleReg}</Link></p>
    </div>
  );
}

export default Register;