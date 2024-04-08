import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import check from "../../images/check.svg";
import style from "./FormContainer.module.scss";

const FormSchema = Yup.object().shape({
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("All inputs is required"),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("All inputs is required"),
  surname: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("All inputs is required"),
});

const FormContainer = ({ setIsOpenModal }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    setIsOpenModal(true);
    setTimeout(() => {
      setIsOpenModal(false);
    }, 2000);
  };

  return (
    <Formik
      initialValues={{
        lastName: "",
        firstName: "",
        surname: "",
      }}
      validationSchema={FormSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className={style["form"]}>
          <div className={style["form-container"]}>
            <Field
              className={`${
                errors.lastName
                  ? style["form__input-error"]
                  : style["form__input"]
              }`}
              name="lastName"
              placeholder="Фамилия"
            />
            <ErrorMessage
              component="div"
              className={style["form__error"]}
              name="lastName"
            />
            <Field
              className={`${
                errors.firstName
                  ? style["form__input-error"]
                  : style["form__input"]
              }`}
              name="firstName"
              placeholder="Имя"
            />
            <ErrorMessage
              component="div"
              className={style["form__error"]}
              name="firstName"
            />
            <Field
              className={`${
                errors.surname
                  ? style["form__input-error"]
                  : style["form__input"]
              }`}
              name="surname"
              placeholder="Отчество"
            />
            <ErrorMessage
              component="div"
              className={style["form__error"]}
              name="surname"
            />
          </div>
          <button className={style["form__btn"]} type="submit">
            Отправить
            <img className={style["form__img"]} src={check} alt="check" />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormContainer;
