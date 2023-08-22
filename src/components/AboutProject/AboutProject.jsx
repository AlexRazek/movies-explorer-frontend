// import { Link } from "react-router-dom";
import "./AboutProject.css";
import "../../index.css";

const AboutProject = (props) => {
  return (
    <section className="aboutproject">
      <h2 className="aboutproject__about">О проекте</h2>
      <div className="aboutproject__description">
        <div>
          <h3 className="aboutproject__description-text">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="aboutproject__description-subtext">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div>
          <h3 className="aboutproject__description-text">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="aboutproject__description-subtext">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="aboutproject__timeline">
        <div>
          <h3 className="aboutproject__timeline-text timeline_color_change">
            1 неделя
          </h3>
          <p className="aboutproject__timeline-subtext">Back-end</p>
        </div>
        <div>
          <h3 className="aboutproject__timeline-text timeline_width_big">
            4 недели
          </h3>
          <p className="aboutproject__timeline-subtext timeline_width_big">
            Front-end
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
