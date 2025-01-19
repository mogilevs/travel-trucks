import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import Icons from "../../images/sprite.svg";

export default function Header() {
  return (
    <header className={css.header}>
      <NavLink to="/">
        <svg width="136" height="16">
          <use href={`${Icons}#icon-Logo`}></use>
        </svg>
      </NavLink>
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
