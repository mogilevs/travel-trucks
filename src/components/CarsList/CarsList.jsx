import { useSelector } from "react-redux";
import { selectCars } from "../../redux/selectors";
import css from "./CarsList.module.css";
import CarItem from "../CarItem/CarItem.jsx";

export default function CarsList() {
  const cars = useSelector(selectCars);
  console.log("cars", cars);
  return (
    <>
      <ul className={css.list}>
        {cars.map((item) => (
          <li className={css.item} key={item.id}>
            <CarItem item={item} />
          </li>
        ))}
      </ul>
      <button className={css.button}>Load more</button>
    </>
  );
}
