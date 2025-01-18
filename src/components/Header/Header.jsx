import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <NavLink>TravelTrucks</NavLink>
      <nav className={css.navMenu}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${css.navLink} ${css.active}`
              : `${css.navLink} ${css.inactive}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            isActive
              ? `${css.navLink} ${css.active}`
              : `${css.navLink} ${css.inactive}`
          }
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}
