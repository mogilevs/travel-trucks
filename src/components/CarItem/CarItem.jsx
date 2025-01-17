import { useDispatch } from "react-redux";
import css from "./CarItem.module.css";
import { Link } from "react-router-dom";

export default function CarItem({ item }) {
  // const dispatch = useDispatch();
  // function toggleFavourites() {
  //   dispatch(addFavourite(item));
  //   dispatch(removeFavourite(id));
  // }

  return (
    <div className={css.wrapper}>
      <img src={item.gallery[0].thumb} className={css.image}></img>
      <div className={css.rightPart}>
        <div className={css.firstRow}>
          <h2 className={css.title}>{item.name}</h2>
          <p className={css.price}>{item.price}</p>
        </div>
        <div className={css.secondRow}>
          <p className={css.rating}>{item.rating}</p>
          <p className={css.location}>{item.location}</p>
        </div>
        <p>{item.description}</p>
        <div className={css.featuresList}>
          {item.automatic && <p className={css.featuresItem}>Automatic</p>}
          <p className={css.featuresItem}>{item.engine}</p>
          {item.kitchen && <p className={css.featuresItem}>Kitchen</p>}
          {item.AC && <p className={css.featuresItem}>AC</p>}
        </div>
        <Link
          to={`/campers/${item.id}`}
          className={css.showButton}
          target="_blank"
        >
          Show more
        </Link>
      </div>
    </div>
  );
}
