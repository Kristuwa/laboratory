import "./Hero.module.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero__title">
          <span className="accent--violet">точные результаты</span>
          <span className="accent--violet-light">точно в срок</span>
        </h1>
        <p className="hero__text">
          Добро пожаловать в медицинскую лабораторию KapibaraLab, где работают
          исключительно капибары — ваш надежный партнер в обеспечении
          качественной и точной диагностики!
        </p>
      </div>
    </section>
  );
};

export default Hero;
