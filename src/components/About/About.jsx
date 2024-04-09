import React from "react";
import { NavLink } from "react-router-dom";
import arrow from "../../images/arrow.svg";
import image from "../../images/about-bg.webp";
import style from "./Aboute.module.scss";

const About = React.forwardRef(({ ...props }, forwardedRef) => {
  return (
    <section className={style["about"]} ref={forwardedRef}>
      <div className={`${style["about__container"]} container`}>
        <h2 className={`${style["about__title"]} title`}>Лаборатория</h2>
        <img className={style["about__img"]} src={image} alt="arrow" />
        <p className={`${style["about__text"]} text`}>
          Наша лаборатория предлагает широкий спектр медицинских исследований,
          проводимых опытными капибарами-лаборантами. Мы специализируемся на
          анализе биоматериалов, микробиологических исследованиях, генетической
          диагностике и многом другом.
        </p>
        <p className={`${style["about__text"]} text`}>
          Мы используем современное оборудование и методики и гарантируем
          точность и надежность результатов.
        </p>
        <NavLink className={style["btn"]} to="/requestRef">
          <span className={style["btn__text"]}>Оставить заявку</span>
          <img className={style["btn__arrow"]} src={arrow} alt="arrow" />
        </NavLink>
      </div>
    </section>
  );
});

export default About;
