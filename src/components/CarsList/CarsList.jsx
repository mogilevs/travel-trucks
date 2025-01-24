import { useSelector } from "react-redux";
import { selectCars, selectIsLoading } from "../../redux/selectors";
import css from "./CarsList.module.css";
import CarItem from "../CarItem/CarItem.jsx";

export default function CarsList({ page, setPage }) {
  const isLoading = useSelector(selectIsLoading);
  const cars = useSelector(selectCars);
  function handleClick() {
    setPage((page += 1));
  }
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

      <button className={css.button} onClick={handleClick} type="button">
        Load more
      </button>
    </div>
  );
}
