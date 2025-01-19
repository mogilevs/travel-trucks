import css from "./VehicleList.module.css";

export default function VehicleList({ children, title }) {
  return (
    <>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.equipmentList}>{children}</ul>
    </>
  );
}
