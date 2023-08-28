// import { Link } from "react-router-dom";
import React from "react";
import "../../../index.css";
import "../FilterCheckbox/FilterCheckbox.css";

const FilterCheckbox = (props) => {
  return (
    <form className="filtercheckbox">
      <input 
        className="filtercheckbox__input" 
        type="checkbox" 
        id="checkbox" 
        checked={props.isShort}
        onChange={props.handleCheckToggler} 
      />
      <label className="filtercheckbox__label" htmlFor="checkbox"></label>
      <span className="filtercheckbox__text">{props.text}</span>
    </form>
  );
};

export default FilterCheckbox;
