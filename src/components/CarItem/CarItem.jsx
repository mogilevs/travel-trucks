import { useDispatch } from "react-redux";
import css from "./CarItem.module.css";
import { Link } from "react-router-dom";
import Features from "../Features/Features.jsx";
import { useState } from "react";
import { addFavourite, removeFavourite } from "../../redux/favouritesSlice.js";

export default function CarItem({ item }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const dispatch = useDispatch();
  const formattedPrice = item.price.toLocaleString("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  });
  const reversedLocation = item.location.split(", ").reverse().join(", ");
  const formattedDescription = item.description.slice(0, 65) + "...";

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
          <div className={css.priceWrapper}>
            <p className={css.price}>{formattedPrice}</p>
            <svg
              width="26"
              height="24"
              onClick={toggleFavourites}
              className={isFavourite ? css.iconFilled : css.iconEmpty}
            >
              <use></use>
            </svg>
          </div>
        </div>
        <div className={css.secondRow}>
          <p
            className={css.rating}
          >{`${item.rating}(${item.reviews.length} Reviews)`}</p>
          <p className={css.location}>{reversedLocation}</p>
        </div>
        <p className={css.description}>{formattedDescription}</p>
        <div className={css.featuresList}>
          <Features feature="automatic" car={item} />
          <Features feature="engine" car={item} />
          <Features feature="kitchen" car={item} />
          <Features feature="AC" car={item} />
          {/* <Features feature="radio" car={item} />
          <Features feature="transmission" car={item} />
          <Features feature="bathroom" car={item} />
          <Features feature="refrigerator" car={item} />
          <Features feature="microwave" car={item} />
          <Features feature="gas" car={item} />
          <Features feature="water" car={item} /> */}
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
