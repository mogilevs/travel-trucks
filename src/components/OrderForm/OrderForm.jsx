import { Field, Form, Formik } from "formik";
import { useId } from "react";
import css from "./OrderForm.module.css";
import * as Yup from "yup";
import { notifySuccess } from "../../services/notification.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function OrderForm() {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const dateFieldId = useId();
  const commentFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log("Order", values);
    notifySuccess("Your order is received!");
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    date: Yup.date().required("Required"),
    comment: Yup.string(),
  });
  return (
    <div className={css.formContainer}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          date: "",
          comment: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        {({ setFieldValue }) => (
          <Form className={css.form}>
            <div className={css.inputWrapper}>
              <label className={css.label} htmlFor={nameFieldId}>
                Name*
              </label>
              <Field
                className={css.input}
                name="name"
                type="text"
                id={nameFieldId}
              />
            </div>
            <div className={css.inputWrapper}>
              <label className={css.label} htmlFor={emailFieldId}>
                Email*
              </label>
              <Field
                className={css.input}
                name="email"
                type="email"
                id={emailFieldId}
              />
            </div>
            <div className={css.inputWrapper}>
              <label className={css.label} htmlFor={dateFieldId}>
                Date*
              </label>
              <Field name="date" type="text" id={dateFieldId}>
                {({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={(date) => setFieldValue("date", date)}
                    dateFormat="dd/MM/yyyy"
                    className={css.input}
                  />
                )}
              </Field>
            </div>
            <div className={css.inputWrapper}>
              <label className={css.label} htmlFor={commentFieldId}>
                Comment
              </label>
              <Field
                as="textarea"
                className={css.comment}
                name="comment"
                type="text"
                id={commentFieldId}
              />
            </div>
            <button className={css.button} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
