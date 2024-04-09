import { NavLink, useParams } from "react-router-dom";
import logo from "../../images/logo.svg";
import phone from "../../images/phone.svg";
import style from "./Header.module.scss";

const Header = () => {
	const params = useParams();
	
  return (
    <header className={style.header}>
      <div className={`container ${style["header__container"]}`}>
        <nav className={style.nav}>
          <NavLink className={style["header-logo"]} to="/">
            <img className={style["header-logo__img"]} src={logo} alt="kapibaralab logo" />
            <span className={style["header-logo__text"]}>Современные методики диагностики</span>
          </NavLink>
          <ul className={style.nav__list}>
            <li className={style.nav__item}>
              <NavLink className={`${params.block==="aboutRef" ? style["nav__link--active"] : style["nav__link"]}`} to="/aboutRef">
                Лаборатория
              </NavLink>
            </li>
            <li className={style.nav__item}>
              <NavLink className={`${params.block==="galleryRef" ? style["nav__link--active"] : style["nav__link"]}`} to="/galleryRef">
                Галерея
              </NavLink>
            </li>
            <li className={style.nav__item}>
              <NavLink className={`${params.block==="requestRef" ? style["nav__link--active"] : style["nav__link"]}`} to="/requestRef">
                Оставить заявку
              </NavLink>
            </li>
          </ul>
        </nav>
        <a className={style["link-phone"]} href="tel:71234567890">
          <img className={style["link-phone__img"]} src={phone} alt="laboratory" />
          <span className={style["link-phone__container"]}>
				<span className={style["link-phone__number"]}>+7 123 456 7890</span>
          	<span className={style["link-phone__text"]}>Звонок бесплатный</span></span>
        </a>
      </div>
    </header>
  );
};

export default Header;
