// import { Link } from "react-router-dom";
import "./AboutMe.css";
import "../../index.css";
import photo from "../../images/foto.jpeg";


const AboutMe = (props) => {
  return (
    <section className="aboutMe">
      <h2 className="aboutMe__about">Студент</h2>
      <div className="aboutMe__container">
        <div className="aboutMe__description">
          <h3 className="aboutMe__description-name">Александр</h3>
          <h4 className="aboutMe__description-title">
            Фронтенд-разработчик
          </h4>
          <p className="aboutMe__description-subtitle">
            Я закончил технологический факультет СибГИУ.
            Несколько лет назад решил реализовть свою давнюю цель, стать разработчиком.
            И для этого окончил ряд курсов по программированию, в том числе Веб-разработка
            от Яндекс-практикум. 
            До этого работал менеджером по крупным проектам. 
            После того, как прошёл курс по веб-разработке, начал заниматься 
            фриланс-заказами и ушёл с постоянной работы.
            Я люблю слушать музыку,  изучать психологию, а ещё увлекаюсь
            футболом и баскетболом.
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
        <img src={photo} alt="фотография" className="aboutMe__photo"></img>
      </div>
    </section>
  );
};

export default AboutMe;
