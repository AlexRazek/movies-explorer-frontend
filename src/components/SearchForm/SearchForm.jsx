// import { Link } from "react-router-dom";
import React, {useEffect, useCallback} from "react";
// import React from "react";

import "../../index.css";
import "./SearchForm.css";
import { useFormWithValidation } from "../../hook/useFormValid";
import searching_icon from "../../images/searching-icon.svg";
import FilterCheckbox from "../SearchForm/FilterCheckbox/FilterCheckbox";

const SearchForm = (props) => {
  const { handleChange, values, resetForm} = useFormWithValidation();

  const searchMovies = useCallback(() => {
    return props.searchMovie;
  }, [props.searchMovie]);

  useEffect(() => {
    if (values.searchForm === "") {
      localStorage.removeItem("searchMoviesFromSaved");
      localStorage.removeItem("searchMoviesFromServer");
      searchMovies(" ");
      resetForm();
    }
  }, [searchMovies, resetForm, values.searchForm]);


  const handleSubmit = (e) => {
      e.preventDefault();
      props.handleSearchMovies(values.searchForm);
  }

  return (
    <section className="searchform searchform_border-bottom">
      <div className="searchform__container">
        <form className="searchform__form" onSubmit={handleSubmit}>
          <img src={searching_icon} className="searchform__icon" alt="лупа" />
          <input
            required
            id="search__film"
            className="searchform__input"
            placeholder="Фильм"
            name="searchForm"
            type="text"
            value={values.searchForm || ""} 
            onChange={handleChange} 
            minLength="1"
            maxLength="220"
          />
          <button type="submit" className="searchform__button">
            {props.text}
          </button>
        </form>
        <FilterCheckbox
          handleCheckToggler={props.handleCheckToggler} 
          isShort={props.isShort} 
          text={"Короткометражки"}
        />
      </div>
    </section>
  );
};

export default SearchForm;
