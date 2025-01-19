import css from "./Features.module.css";
export default function Features({ car, feature }) {
  return (
    <li>
      {car[feature] && <p className={css.featuresItem}>{feature}</p>}
      {feature === "engine" && (
        <p className={css.featuresItem}>{car[feature]}</p>
      )}
      {feature === "transmission" && (
        <p className={css.featuresItem}>{car[feature]}</p>
      )}
    </li>
  );
}
