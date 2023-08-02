import { Link } from "react-router-dom";
import "./Header.css"
import "../../index.css";

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <section className="header__auth">
        {/* <p className="header__auth-email">{props.userEmail}</p> */}
        <Link
          to={props.route}
          className="header__auth-text"
          onClick={props.onSignOut}
        >
          {/* {props.text} */}
          Регистрация
        </Link>
        <Link
        //   to={props.route}
          className="header__auth-btn"
        //   onClick={props.onSignOut}
        >
          {/* {props.text} */}
          Войти
        </Link>
      </section>
    </header>
  );
};

export default Header;