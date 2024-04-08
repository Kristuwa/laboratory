import style from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={style["hero"]}>
      <div className="container">
        <h1 className={style["hero__title"]}>
          <span className={style["hero__title--violet"]}>
            точные результаты
          </span>
          <span className={style["hero__title--violet-light"]}>
            точно в срок
          </span>
        </h1>
        <p className={style["hero__text"]}>
          Добро пожаловать в медицинскую лабораторию KapibaraLab, где работают
          исключительно капибары — ваш надежный партнер в обеспечении
          качественной и точной диагностики!
        </p>
      </div>
    </section>
  );
};

export default Hero;
