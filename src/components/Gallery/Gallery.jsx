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

const Gallery = React.forwardRef(({ ...props }, galleryRef) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 900px)",
  });

  return (
    <section className="gallery" ref={galleryRef}>
      <div className="container">
        <h2 className="gallery__title title">Галерея</h2>
        {isMobile && (
          <ul className="gallery__list">
            <li className="gallery__item">
              <img
                className="gallery__img"
                src={galleryImgMobOne}
                alt="laboratory"
              />
            </li>
            <li className="gallery__item">
              <img
                className="gallery__img"
                src={galleryImgMobTwo}
                alt="laboratory"
              />
            </li>
            <li className="gallery__item">
              <img
                className="gallery__img"
                src={galleryImgMobThree}
                alt="laboratory"
              />
            </li>
            <li className="gallery__item">
              <img
                className="gallery__img"
                src={galleryImgMobFour}
                alt="laboratory"
              />
            </li>
          </ul>
        )}
        {!isMobile && (
          <>
            <div className="container-top">
              <img
                className="container-top__one"
                src={galleryImgOne}
                alt="laboratory"
              />
              <div className="container-top__right">
                <img
                  className="container-top__two"
                  src={galleryImgTwo}
                  alt="laboratory"
                />
                <div className="container-top__bottom">
                  <img
                    className="container-top__three"
                    src={galleryImgThree}
                    alt="laboratory"
                  />
                  <img
                    className="container-top__four"
                    src={galleryImgFour}
                    alt="laboratory"
                  />
                </div>
              </div>
            </div>
            <div className="container-bottom">
              <img
                className="container-bottom__one"
                src={galleryImgFive}
                alt="laboratory"
              />
              <img
                className="container-bottom__two"
                src={galleryImgSix}
                alt="laboratory"
              />
              <img
                className="container-bottom__three"
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
