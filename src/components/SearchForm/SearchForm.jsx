// import { Link } from "react-router-dom";
import React from "react";
import "../../index.css";
import "./SearchForm.css";

import searching_icon from "../../images/searching-icon.svg";
import FilterCheckbox from "../SearchForm/FilterCheckbox/FilterCheckbox"
// import AddParts from "../AddParts";

const SearchForm = (props) => {
  return (
    <section className="searchform border__bottom">
        <div className="searchform__container">
          <form className="searchform__form">
           <img src={searching_icon} className="searchform__icon" alt="лупа" /> 
           <input
              required
              id="search__film"
              className="searchform__input"
              placeholder="Фильм"
              name="search"
              type="text"
              // value={formValue.email}
              // onChange={handleChange}
              minLength="1"
              maxLength="220"
            />
            <button type="submit" className="searchform__button">
                {props.text}
            </button> 
          </form>
          <FilterCheckbox text={"Короткометражки"}/>
        </div>
    </section>
  )};

  export default SearchForm;


  // <form onSubmit={handleSubmit} className="auth__form">
  //       <input
  //         required
  //         id="email"
  //         className="auth__input"
  //         placeholder="Email"
  //         name="email"
  //         type="email"
  //         value={formValue.email}
  //         onChange={handleChange}
  //         minLength="5"
  //         maxLength="30"
  //       />
  //       <input
  //         required
  //         id="password"
  //         className="auth__input"
  //         placeholder="Пароль"
  //         name="password"
  //         type="password"
  //         value={formValue.password}
  //         onChange={handleChange}
  //         minLength="6"
  //         maxLength="30"
  //       />
  //       <div className="auth__button-container">
  //         <button type="submit" className="auth__link">
  //           Войти
  //         </button>
  //       </div>
  //     </form>