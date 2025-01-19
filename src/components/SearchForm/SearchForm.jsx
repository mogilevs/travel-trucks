import { Field, Form, Formik } from "formik";
import { useId } from "react";
import css from "./SearchForm.module.css";
import { useDispatch } from "react-redux";
import { getAllCars } from "../../redux/operations.js";
import VehicleList from "../VehicleList/VehicleList.jsx";

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
        <Form>
          <label className={css.label} htmlFor={locationFieldId}>
            Location
          </label>
          <Field
            className={css.input}
            name="location"
            type="text"
            placeholder="Kyiv, Ukraine"
            id={locationFieldId}
          />

          <label className={css.label}>filters</label>
          <VehicleList title="Vehicle Equipment">
            <li>
              <Field
                className={css.hidden}
                type="checkbox"
                name="AC"
                id={acFieldId}
              />
              <label className={css.equipmentItem} htmlFor={acFieldId}>
                AC
              </label>
            </li>
            <li>
              <Field
                className={css.hidden}
                type="checkbox"
                name="automatic"
                id={automaticFieldId}
              />
              <label className={css.equipmentItem} htmlFor={automaticFieldId}>
                Automatic
              </label>
            </li>
            <li>
              <Field
                className={css.hidden}
                type="checkbox"
                name="kitchen"
                id={kitchenFieldId}
              />
              <label className={css.equipmentItem} htmlFor={kitchenFieldId}>
                Kitchen
              </label>
            </li>
            <li>
              <Field
                className={css.hidden}
                type="checkbox"
                name="TV"
                id={tvFieldId}
              />
              <label className={css.equipmentItem} htmlFor={tvFieldId}>
                TV
              </label>
            </li>
            <li>
              <Field
                className={css.hidden}
                type="checkbox"
                name="bathroom"
                id={bathroomFieldId}
              />
              <label className={css.equipmentItem} htmlFor={bathroomFieldId}>
                Bathroom
              </label>
            </li>
          </VehicleList>
          <div>
            <VehicleList title="Vehicle Type">
              <li>
                <Field
                  className={css.hidden}
                  type="radio"
                  name="form"
                  value="van"
                  id={vanFieldId}
                />
                <label className={css.typeItem} htmlFor={vanFieldId}>
                  Van
                </label>
              </li>
              <li>
                <Field
                  className={css.hidden}
                  type="radio"
                  name="form"
                  value="fullyIntegrated"
                  id={fullyIntegratedFieldId}
                />
                <label
                  className={css.typeItem}
                  htmlFor={fullyIntegratedFieldId}
                >
                  Fully Integrated
                </label>
              </li>
              <li>
                <Field
                  className={css.hidden}
                  type="radio"
                  name="form"
                  value="alcove"
                  id={alcoveFieldId}
                />
                <label className={css.typeItem} htmlFor={alcoveFieldId}>
                  Alcove
                </label>
              </li>
            </VehicleList>

            <button className={css.button} type="submit">
              Search
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
