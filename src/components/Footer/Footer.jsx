import { NavLink } from "react-router-dom";
import logo from "../../images/logo-footer.svg";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style["footer"]}>
      <div className={`${style["footer-container"]} container`}>
        <NavLink className={style["footer__logo"]} to="/">
          <img src={logo} alt="kapibaralab logo" />
        </NavLink>
        <p className={style["footer__text"]}>
          Все права защищены Российской Ассоциацией Капибар
        </p>
      </div>
    </footer>
  );
};

export default Footer;
