import css from "./CarDetails.module.css";

export default function CarDetails({ car }) {
  console.log(car);
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>{car.name}</h2>

      <div className={css.ratingWrapper}>
        <p className={css.rating}>{car.rating}</p>
        <p className={css.location}>{car.location}</p>
      </div>
      <p className={css.price}>{car.price}</p>
      <p>{car.description}</p>
      <ul className={css.list}>
        {car.gallery.map((image, index) => {
          return (
            <li className={css.item} key={`keyId+${index}`}>
              <img src={image.thumb} className={css.image} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
