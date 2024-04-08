import React from "react";
import FormContainer from "../FormContainer/FormContainer";
import style from "./Request.module.scss";

const Request = React.forwardRef(({ ...props }, requestRef) => {
  return (
    <section className={style["request"]} ref={requestRef}>
      <div className="container">
        <h2 className={`${style["request__title"]} title`}>
          Заявка на диагностику
        </h2>
        <p className={`${style["request__text"]} text`}>
          Доверьте свои медицинские исследования надежным капибарам-лаборантам и
          получите качественные результаты в кратчайшие сроки!
        </p>
        <FormContainer setIsOpenModal={props} />
      </div>
    </section>
  );
});

export default Request;
