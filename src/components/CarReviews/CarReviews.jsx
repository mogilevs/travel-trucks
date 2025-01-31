import { useSelector } from "react-redux";
import css from "./CarReviews.module.css";
import Icons from "../../images/sprite.svg";

export default function CarReviews() {
  const car = useSelector(selectOneCar);

  const { reviews } = car;
  const stars = [];
  for (let i = 1; i < 5; i += 1) {
    stars[i] = i + 1;
  }

  return (
    <>
      {Object.keys(car).length && reviews.length === 0 ? (
        <p>We don&apos;t have any reviews for this car</p>
      ) : (
        <ul className={css.reviewsList}>
          {reviews.map(({ reviewer_name, comment, reviewer_rating }, index) => {
            return (
              <li key={`review+${index}`} className={css.reviewItem}>
                <div className={css.topWrapper}>
                  <span className={css.firstLetter}>{reviewer_name[0]}</span>
                  <div className={css.nameWrapper}>
                    <h3 className={css.name}>{reviewer_name}</h3>
                    <ul className={css.starsList}>
                      {stars.map((star) => (
                        <li key={`star+${star}`}>
                          <svg
                            width="16"
                            height="16"
                            className={
                              reviewer_rating > star
                                ? css.filledStar
                                : css.emptyStar
                            }
                          >
                            <use href={`${Icons}#icon-star1`}></use>
                          </svg>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className={css.review}>{comment}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
