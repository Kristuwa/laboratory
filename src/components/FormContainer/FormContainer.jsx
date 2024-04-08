import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import checkmark from "../../images/checkmark.svg";

const FormSchema = Yup.object().shape({
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  surname: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
});

const FormContainer = ({setIsOpenModal}) => {

  const handleSubmit = (values, {resetForm}) => {
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
        <Form className="form">
          <Field className="form__input" name="lastName" placeholder="Фамилия" />
          <ErrorMessage className="form__error" name="lastName" />
          <Field className="form__input" name="firstName" placeholder="Имя" />
          <ErrorMessage className="form__error" name="firstName" />
          <Field className="form__input" name="surname" placeholder="Отчество" />
          <ErrorMessage className="form__error" name="surname" />
          <button className="form__btn" type="submit">
            Отправить
            <img className="form__img" src={checkmark} alt="checkmark" />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormContainer;
