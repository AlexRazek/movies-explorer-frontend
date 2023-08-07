// import { Link } from "react-router-dom";
import "./Footer.css"
import "../../index.css";

const Footer = (props) => {
  return (
    <section className="footer">
        <h3 className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className="footer__container">
            <p className="footer__copyright">© 2023</p>
            <nav className="footer__link-container">
                <a href="https://github.com/" className="footer__link link__hover">Яндекс.Практикум</a>
                <a href="https://github.com/" className="footer__link link__hover">Github</a> 
            </nav>
        </div>
    </section>
  )};


  export default Footer;