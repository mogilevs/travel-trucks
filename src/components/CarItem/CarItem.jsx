import { useDispatch } from "react-redux";
import css from "./CarItem.module.css";
import { Link } from "react-router-dom";
import Features from "../Features/Features.js";
import { useState } from "react";
import { addFavourite, removeFavourite } from "../../redux/favouritesSlice.js";

export default function CarItem({ item }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const dispatch = useDispatch();
  function toggleFavourites() {
    if (isFavourite) {
      dispatch(removeFavourite(item.id));
    } else {
      dispatch(addFavourite(item));
    }
    setIsFavourite(!isFavourite);
  }

  return (
    <div className={css.wrapper}>
      <img src={item.gallery[0].thumb} className={css.image} />
      <div className={css.rightPart}>
        <div className={css.firstRow}>
          <h2 className={css.title}>{item.name}</h2>
          <div>
            <p className={css.price}>{item.price}</p>
            <svg
              onClick={toggleFavourites}
              className={isFavourite ? css.iconFilled : css.iconEmpty}
            >
              <use></use>
            </svg>
          </div>
        </div>
        <div className={css.secondRow}>
          <p className={css.rating}>{item.rating}</p>
          <p className={css.location}>{item.location}</p>
        </div>
        <p>{item.description}</p>
        <div className={css.featuresList}>
          <Features feature="automatic" car={item} />
          <Features feature="engine" car={item} />
          <Features feature="kitchen" car={item} />
          <Features feature="AC" car={item} />
          <Features feature="radio" car={item} />
          <Features feature="transmission" car={item} />
          <Features feature="bathroom" car={item} />
          <Features feature="refrigerator" car={item} />
          <Features feature="microwave" car={item} />
          <Features feature="gas" car={item} />
          <Features feature="water" car={item} />
        </div>
        <Link
          to={`/catalog/${item.id}`}
          className={css.showButton}
          target="_blank"
        >
          Show more
        </Link>
      </div>
    </div>
  );
}
