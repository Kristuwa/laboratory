import React from "react";
import { NavLink } from "react-router-dom";
import arrow from "../../images/arrow.svg";
import image from "../../images/about-bg.webp";

const About = React.forwardRef(({ ...props }, aboutRef) => {
  return (
    <section className="about" ref={aboutRef}>
      <div className="container">
        <h2 className="about__title title">Лаборатория</h2>
        <img className="about__img" src={image} alt="arrow" />
        <p className="about__text text">
          Наша лаборатория предлагает широкий спектр медицинских исследований,
          проводимых опытными капибарами-лаборантами. Мы специализируемся на
          анализе биоматериалов, микробиологических исследованиях, генетической
          диагностике и многом другом.
        </p>
        <p className="about__text text">
          Мы используем современное оборудование и методики и гарантируем
          точность и надежность результатов.
        </p>
        <NavLink className="btn" to="/requestRef">
          <span className="btn__text">Оставить заявку</span>
          <img className="btn__arrow" src={arrow} alt="arrow" />
        </NavLink>
      </div>
    </section>
  );
});

export default About;
