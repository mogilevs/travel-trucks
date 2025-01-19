import { useSelector } from "react-redux";
import { selectCars, selectIsLoading } from "../../redux/selectors";
import css from "./CarsList.module.css";
import CarItem from "../CarItem/CarItem.jsx";

export default function CarsList() {
  const isLoading = useSelector(selectIsLoading);
  const cars = useSelector(selectCars);

  return (
    <div>
      {cars ? (
        <ul className={css.list}>
          {cars.map((item) => (
            <li className={css.item} key={item.id}>
              <CarItem item={item} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Nothing found</p>
      )}

      <button className={css.button}>Load more</button>
    </div>
  );
}
