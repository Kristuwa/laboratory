import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import phone from "../../images/phone.svg";
import "./Header.module.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <NavLink className="headerLogo" to="/">
            <img src={logo} alt="kapibaralab logo" />
            Современные методики диагностики
          </NavLink>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink className="nav__link" to="/aboutRef">
                Лаборатория
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/galleryRef">
                Галерея
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/requestRef">
                Оставить заявку
              </NavLink>
            </li>
          </ul>
        </nav>
        <a className="link-phone" href="tel:71234567890">
          <img className="link-phone__img" src={phone} alt="laboratory" />
          <span className="link-phone__number">+7 123 456 7890</span>
          <span className="link-phone__text">Звонок бесплатный</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
