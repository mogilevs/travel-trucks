import { useDispatch, useSelector } from "react-redux";
import css from "./CarItem.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { addFavourite, removeFavourite } from "../../redux/favouritesSlice.js";
import Icons from "../../images/sprite.svg";
import { selectFavourites } from "../../redux/selectors.js";

export default function CarItem({ item }) {
  const favourites = useSelector(selectFavourites);
  const storedElem = favourites.find((elem) => elem.id === item.id) || {};
  const storedisFavourite = item.id === storedElem.id;
  const [isFavourite, setIsFavourite] = useState(storedisFavourite);
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
              <use href={`${Icons}#icon-favourite1`}></use>
            </svg>
          </div>
        </div>
        <div className={css.secondRow}>
          <svg width="16" height="16" className={css.iconStar}>
            <use href={`${Icons}#icon-star1`}></use>
          </svg>
          <p
            className={css.rating}
          >{`${item.rating}(${item.reviews.length} Reviews)`}</p>

          <svg width="16" height="16" className={css.iconEmpty}>
            <use href={`${Icons}#icon-location1`}></use>
          </svg>
          <p className={css.location}>{reversedLocation}</p>
        </div>
        <p className={css.description}>{formattedDescription}</p>
        <ul className={css.featuresList}>
          <li>
            <p className={css.featuresItem}>
              <svg className={css.iconEquipment} width="20" height="20">
                <use href={`${Icons}#icon-automatic1`}></use>
              </svg>
              {item.transmission}
            </p>
          </li>
          <li>
            <p className={css.featuresItem}>
              <svg className={css.iconEquipment} width="20" height="20">
                <use href={`${Icons}#icon-fuel`}></use>
              </svg>
              {item.engine}
            </p>
          </li>
          <li>
            {item.kitchen && (
              <p className={css.featuresItem}>
                <svg className={css.iconEquipment} width="20" height="20">
                  <use href={`${Icons}#icon-kitchen1`}></use>
                </svg>
                kitchen
              </p>
            )}
          </li>
          <li>
            {item.AC && (
              <p className={css.featuresItem}>
                <svg className={css.iconEquipment} width="20" height="20">
                  <use href={`${Icons}#icon-ac1`}></use>
                </svg>
                AC
              </p>
            )}
          </li>
        </ul>
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
