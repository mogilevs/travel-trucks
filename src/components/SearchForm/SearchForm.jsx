import { Field, Form, Formik } from "formik";
import { useId } from "react";
import css from "./SearchForm.module.css";
import { useDispatch } from "react-redux";
import { getAllCars } from "../../redux/operations.js";

export default function SearchForm() {
  const locationFieldId = useId();
  const acFieldId = useId();
  const automaticFieldId = useId();
  const kitchenFieldId = useId();
  const bathroomFieldId = useId();
  const tvFieldId = useId();
  const vanFieldId = useId();
  const fullyIntegratedFieldId = useId();
  const alcoveFieldId = useId();

  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    const { location } = values;
    const filteredParams = Object.fromEntries(
      Object.entries(values).filter(([key, value]) => {
        if (typeof value === "boolean") return value;
        return value && value.trim() !== "";
      })
    );

    if (filteredParams.location) {
      filteredParams.location = location.split(", ").reverse().join(", ");
    }
    dispatch(getAllCars(filteredParams));
  };
  return (
    <div className={css.formContainer}>
      <Formik
        initialValues={{
          location: "",
          AC: false,
          TV: false,
          automatic: false,
          bathroom: false,
          kitchen: false,
          form: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label} htmlFor={locationFieldId}>
            Location
            <Field
              name="location"
              type="text"
              placeholder="Kyiv, Ukraine"
              id={locationFieldId}
            />
          </label>

          <label className={css.label}>
            Vehicle Equipment
            <div className={css.formGroup}>
              <div>
                <Field type="checkbox" name="AC" id={acFieldId} />
                <label htmlFor={acFieldId}>AC</label>
              </div>
              <div>
                <Field type="checkbox" name="automatic" id={automaticFieldId} />
                <label htmlFor={automaticFieldId}>Automatic</label>
              </div>
              <div>
                <Field type="checkbox" name="kitchen" id={kitchenFieldId} />
                <label htmlFor={kitchenFieldId}>Kitchen</label>
              </div>
              <div>
                <Field type="checkbox" name="TV" id={tvFieldId} />
                <label htmlFor={tvFieldId}>TV</label>
              </div>
              <div>
                <Field type="checkbox" name="bathroom" id={bathroomFieldId} />
                <label htmlFor={bathroomFieldId}>Bathroom</label>
              </div>
            </div>
          </label>

          <label className={css.label}>
            Vehicle Type
            <div>
              <Field type="radio" name="form" value="van" id={vanFieldId} />
              <label htmlFor={vanFieldId}>Van</label>
            </div>
            <div>
              <Field
                type="radio"
                name="form"
                value="fullyIntegrated"
                id={fullyIntegratedFieldId}
              />
              <label htmlFor={fullyIntegratedFieldId}>Fully Integrated</label>
            </div>
            <div>
              <Field
                type="radio"
                name="form"
                value="alcove"
                id={alcoveFieldId}
              />
              <label htmlFor={alcoveFieldId}>Alcove</label>
            </div>
          </label>

          <button className={css.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
}
