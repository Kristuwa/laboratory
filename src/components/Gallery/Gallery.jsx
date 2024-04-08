import React from "react";
import galleryImgOne from "../../images/gallery-01.webp";
import galleryImgTwo from "../../images/gallery-02.webp";
import galleryImgThree from "../../images/gallery-03.webp";
import galleryImgFour from "../../images/gallery-04.webp";
import galleryImgFive from "../../images/gallery-05.webp";
import galleryImgSix from "../../images/gallery-06.webp";
import galleryImgSeven from "../../images/gallery-07.webp";
import galleryImgMobOne from "../../images/gallery-mob-01.webp";
import galleryImgMobTwo from "../../images/gallery-mob-02.webp";
import galleryImgMobThree from "../../images/gallery-mob-03.webp";
import galleryImgMobFour from "../../images/gallery-mob-04.webp";
import { useMediaQuery } from "react-responsive";
import style from "./Gallery.module.scss";

const Gallery = React.forwardRef(({ ...props }, galleryRef) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 899px)",
  });

  return (
    <section className={style["gallery"]} ref={galleryRef}>
      <div className="container">
        <h2 className={`${style["gallery__title"]} title`}>Галерея</h2>
        {isMobile && (
          <ul className={style["gallery__list"]}>
            <li className={style["gallery__item"]}>
              <img
                className={style["gallery__img"]}
                src={galleryImgMobOne}
                alt="laboratory"
              />
            </li>
            <li className={style["gallery__item"]}>
              <img
                className={style["gallery__img"]}
                src={galleryImgMobTwo}
                alt="laboratory"
              />
            </li>
            <li className={style["gallery__item"]}>
              <img
                className={style["gallery__img"]}
                src={galleryImgMobThree}
                alt="laboratory"
              />
            </li>
            <li className={style["gallery__item"]}>
              <img
                className={style["gallery__img"]}
                src={galleryImgMobFour}
                alt="laboratory"
              />
            </li>
          </ul>
        )}
        {!isMobile && (
          <>
            <div className={style["container-top"]}>
              <img
                className={style["container-top__one"]}
                src={galleryImgOne}
                alt="laboratory"
              />
              <div className={style["container-top__right"]}>
                <img
                  className={style["container-top__two"]}
                  src={galleryImgTwo}
                  alt="laboratory"
                />
                <div className={style["container-top__bottom"]}>
                  <img
                    className={style["container-top__three"]}
                    src={galleryImgThree}
                    alt="laboratory"
                  />
                  <img
                    className={style["container-top__four"]}
                    src={galleryImgFour}
                    alt="laboratory"
                  />
                </div>
              </div>
            </div>
            <div className={style["container-bottom"]}>
              <img
                className={style["container-bottom__one"]}
                src={galleryImgFive}
                alt="laboratory"
              />
              <img
                className={style["container-bottom__two"]}
                src={galleryImgSix}
                alt="laboratory"
              />
              <img
                className={style["container-bottom__three"]}
                src={galleryImgSeven}
                alt="laboratory"
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
});

export default Gallery;
