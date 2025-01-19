import css from "./CarDetails.module.css";
import Icons from "../../images/sprite.svg";

export default function CarDetails({ car }) {
  const formattedPrice = car.price.toLocaleString("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  });
  const reversedLocation = car.location.split(", ").reverse().join(", ");

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>{car.name}</h2>

      <div className={css.ratingWrapper}>
        <svg width="16" height="16" className={css.iconStar}>
          <use href={`${Icons}#icon-star1`}></use>
        </svg>
        <p
          className={css.rating}
        >{`${car.rating}(${car.reviews.length} Reviews)`}</p>

        <svg width="16" height="16" className={css.iconEmpty}>
          <use href={`${Icons}#icon-location1`}></use>
        </svg>
        <p className={css.location}>{reversedLocation}</p>
      </div>
      <p className={css.price}>{formattedPrice}</p>
      <ul className={css.list}>
        {car.gallery.map((image, index) => {
          return (
            <li className={css.item} key={`keyId+${index}`}>
              <img src={image.original} className={css.image} />
            </li>
          );
        })}
      </ul>
      <p className={css.description}>{car.description}</p>
    </div>
  );
}
