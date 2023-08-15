// import { Link } from "react-router-dom";
import "../../index.css";
import "./Portfolio.css";
import arrow from "../../images/icon-arrow.svg"

const Portfolio = (props) => {
  return (
    <section className="portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__items">
            <li className="portfolio__item">
                <a 
                href="https://github.com/AlexRazek/how-to-learn" className="portfolio__link border__bottom" target="_blank" rel="noreferrer">
                <p className="portfolio__text link__hover">Статичный сайт</p>
                <img src={arrow} className="portfolio__link-arrow link__hover" alt="ссылка на статичный сайт"/> 
                </a>
            </li>
            <li className="portfolio__item">
                <a 
                href="https://github.com/AlexRazek/russian-travel" className="portfolio__link border__bottom" target="_blank" rel="noreferrer">
                <p className="portfolio__text link__hover">Адаптивный сайт</p>
                <img src={arrow} className="portfolio__link-arrow link__hover" alt="ссылка на адаптивный сайт"/> 
                </a>
            </li>
            <li className="portfolio__item">
                <a 
                href="https://github.com/AlexRazek/react-mesto-api-full-gha" className="portfolio__link" target="_blank" rel="noreferrer">
                <p className="portfolio__text link__hover">Одностраничное приложение</p>
                <img src={arrow} className="portfolio__link-arrow link__hover" alt="ссылка на одностраничное приложение"/> 
                </a>
            </li>
        </ul>    
    </section>
  )};

  export default Portfolio;