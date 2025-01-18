import css from "./VehicleDetail.module.css";

export default function VehicleDetail({ car, detail }) {
  return (
    <div className={css.rowWrapper}>
      <p>{detail}</p>
      <p>{car[detail]}</p>
    </div>
  );
}
