import { Field, Form, Formik } from "formik";
import { useId } from "react";
import css from "./SearchForm.module.css";
import { useDispatch } from "react-redux";
import { getAllCars } from "../../redux/operations.js";
import VehicleList from "../VehicleList/VehicleList.jsx";
import Icons from "../../images/sprite.svg";

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
    dispatch(getAllCars({ ...filteredParams }));
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
          <div className={css.locationWrapper}>
            <Field
              className={css.input}
              name="location"
              type="text"
              placeholder="Kyiv, Ukraine"
              id={locationFieldId}
            />

            <svg className={css.iconLocation} width="20" height="20">
              <use href={`${Icons}#icon-location1`}></use>
            </svg>
          </div>

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
                <svg className={css.iconEquipment} width="32" height="32">
                  <use href={`${Icons}#icon-ac1`}></use>
                </svg>
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
                <svg className={css.iconEquipment} width="32" height="32">
                  <use href={`${Icons}#icon-automatic1`}></use>
                </svg>
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
                <svg className={css.iconEquipment} width="32" height="32">
                  <use href={`${Icons}#icon-kitchen1`}></use>
                </svg>
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
                <svg className={css.iconEquipment} width="32" height="32">
                  <use href={`${Icons}#icon-tv1`}></use>
                </svg>
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
                <svg className={css.iconEquipment} width="32" height="32">
                  <use href={`${Icons}#icon-bath1`}></use>
                </svg>
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
                  <svg className={css.iconType} width="32" height="32">
                    <use href={`${Icons}#icon-bi_grid-1x21`}></use>
                  </svg>
                  <span className={css.typeText}>Van</span>
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
                  <svg className={css.iconType} width="32" height="32">
                    <use href={`${Icons}#icon-bi_grid1`}></use>
                  </svg>
                  <span className={css.typeText}>Fully Integrated</span>
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
                  <svg className={css.iconType} width="32" height="32">
                    <use href={`${Icons}#icon-bi_grid-3x3-gap1`}></use>
                  </svg>
                  <span className={css.typeText}>Alcove</span>
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
