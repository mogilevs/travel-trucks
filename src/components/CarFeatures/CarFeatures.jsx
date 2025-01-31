import { useSelector } from "react-redux";
import VehicleDetail from "../VehicleDetail/VehicleDetail.jsx";
import css from "./CarFeatures.module.css";
import { selectOneCar } from "../../redux/selectors.js";
import Icons from "../../images/sprite.svg";

export default function CarFeatures() {
  const car = useSelector(selectOneCar);

  return (
    <>
      {Object.keys(car).length && (
        <div className={css.featuresContainer}>
          <ul className={css.featuresList}>
            <li>
              <p className={css.featuresItem}>
                <svg className={css.iconEquipment} width="20" height="20">
                  <use href={`${Icons}#icon-fuel`}></use>
                </svg>
                {car.engine}
              </p>
            </li>
            <li>
              <p className={css.featuresItem}>
                <svg className={css.iconEquipment} width="20" height="20">
                  <use href={`${Icons}#icon-automatic1`}></use>
                </svg>
                {car.transmission}
              </p>
            </li>
            <li>
              {car.kitchen && (
                <p className={css.featuresItem}>
                  <svg className={css.iconEquipment} width="20" height="20">
                    <use href={`${Icons}#icon-kitchen1`}></use>
                  </svg>
                  kitchen
                </p>
              )}
            </li>
            <li>
              {car.AC && (
                <p className={css.featuresItem}>
                  <svg className={css.iconEquipment} width="20" height="20">
                    <use href={`${Icons}#icon-ac1`}></use>
                  </svg>
                  AC
                </p>
              )}
            </li>
            <li>
              {car.radio && (
                <p className={css.featuresItem}>
                  <svg className={css.iconEquipment} width="20" height="20">
                    <use href={`${Icons}#icon-radio`}></use>
                  </svg>
                  radio
                </p>
              )}
            </li>

            <li>
              {car.bathroom && (
                <p className={css.featuresItem}>
                  <svg className={css.iconEquipment} width="20" height="20">
                    <use href={`${Icons}#icon-bath1`}></use>
                  </svg>
                  bathroom
                </p>
              )}
            </li>

            <li>
              {car.refrigerator && (
                <p className={css.featuresItem}>
                  <svg className={css.iconEquipment} width="20" height="20">
                    <use href={`${Icons}#icon-refridge1`}></use>
                  </svg>
                  refrigerator
                </p>
              )}
            </li>

            <li>
              {car.microwave && (
                <p className={css.featuresItem}>
                  <svg className={css.iconEquipment} width="20" height="20">
                    <use href={`${Icons}#icon-microwave1`}></use>
                  </svg>
                  microwave
                </p>
              )}
            </li>

            <li>
              {car.gas && (
                <p className={css.featuresItem}>
                  <svg className={css.iconEquipment} width="20" height="20">
                    <use href={`${Icons}#icon-gas1`}></use>
                  </svg>
                  gas
                </p>
              )}
            </li>

            <li>
              {car.water && (
                <p className={css.featuresItem}>
                  <svg className={css.iconEquipment} width="20" height="20">
                    <use href={`${Icons}#icon-water1`}></use>
                  </svg>
                  water
                </p>
              )}
            </li>
          </ul>
          <h3 className={css.detailsTitle}>Vehicle details</h3>
          <ul className={css.detailsWrapper}>
            <VehicleDetail car={car} detail="form" />
            <VehicleDetail car={car} detail="length" />
            <VehicleDetail car={car} detail="width" />
            <VehicleDetail car={car} detail="height" />
            <VehicleDetail car={car} detail="tank" />
            <VehicleDetail car={car} detail="consumption" />
          </ul>
        </div>
      )}
    </>
  );
}
