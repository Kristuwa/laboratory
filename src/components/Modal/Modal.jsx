import check from "../../images/checkmark.svg";
import style from "./Modal.module.scss";

const Modal = ({ setIsOpen }) => {
  return (
    <div className={style["backdrop"]}>
      <div className={style["modal"]} onClick={() => setIsOpen(false)}>
        <img className={style["modal__img"]} src={check} alt="check" />
        <p className={style["modal__text"]}>
          Спасибо за предоставленную информацию, мы свяжемсяс вами в ближайшее
          время.
        </p>
      </div>
    </div>
  );
};

export default Modal;
