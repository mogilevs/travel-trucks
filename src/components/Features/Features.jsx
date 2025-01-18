import css from "./Features.module.css";
export default function Features({ car, feature }) {
  return <>{car[feature] && <p className={css.featuresItem}>{feature}</p>}</>;
}
