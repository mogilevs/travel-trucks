import css from "./VehicleDetail.module.css";

export default function VehicleDetail({ car, detail }) {
  return (
    <li className={css.rowWrapper}>
      <p className={css.text}>{detail}</p>
      <p className={css.text}>{car[detail]}</p>
    </li>
  );
}
