// import { Link } from "react-router-dom";
import React from "react";
import "./Techs.css"
import "../../index.css";

const Techs = (props) => {
  return (
    <section className="techs">
    <h2 className="techs__about techs__about_margin-top">Технологии
    </h2>
    <div className="techs__description">
      <h3 className="techs__description-text">7 технологий
      </h3>
      <p className="techs__description-subtext">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
    </div>
    <ul className="techs__scills">
      <li className="techs__scills-name">HTML</li>
      <li className="techs__scills-name">CSS</li>
      <li className="techs__scills-name">JS</li>
      <li className="techs__scills-name">React</li>
      <li className="techs__scills-name">Git</li>
      <li className="techs__scills-name">Express.js</li>
      <li className="techs__scills-name">mongoDB</li>
    </ul>
    </section>
  )};

  export default Techs;