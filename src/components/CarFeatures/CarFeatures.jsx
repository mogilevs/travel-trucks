import { useSelector } from "react-redux";
import VehicleDetail from "../VehicleDetail/VehicleDetail.jsx";
import css from "./CarFeatures.module.css";
import { selectOneCar } from "../../redux/selectors.js";
import Features from "../Features/Features.jsx";

export default function CarFeatures() {
  const car = useSelector(selectOneCar);
  return (
    <>
      {Object.keys(car).length && (
        <div className={css.featuresContainer}>
          <ul className={css.featuresList}>
            <li>
              <p className={css.featuresItem}>{car.engine}</p>
            </li>
            <li>
              <p className={css.featuresItem}>{car.transmission}</p>
            </li>
            <Features feature="kitchen" car={car} />
            <Features feature="AC" car={car} />
            <Features feature="radio" car={car} />
            <Features feature="bathroom" car={car} />
            <Features feature="refrigerator" car={car} />
            <Features feature="microwave" car={car} />
            <Features feature="gas" car={car} />
            <Features feature="water" car={car} />
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
