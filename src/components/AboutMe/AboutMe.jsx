// import { Link } from "react-router-dom";
import "./AboutMe.css";
import "../../index.css";

const AboutMe = (props) => {
  return (
    <section className="aboutMe">
      <h2 className="aboutMe__about">Студент</h2>
      <div className="aboutMe__container">
        <div className="aboutMe__description">
          <h3 className="aboutMe__description-name">Виталий</h3>
          <h4 className="aboutMe__description-title">
            Фронтенд-разработчик, 30 лет
          </h4>
          <p className="aboutMe__description-subtitle">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            href="https://github.com/AlexRazek"
            className="aboutMe__description-link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src="#" alt="фотография" className="aboutMe__photo"></img>
      </div>
    </section>
  );
};

export default AboutMe;
