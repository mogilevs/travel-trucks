import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <NavLink>TravelTrucks</NavLink>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
      </div>
    </div>
  );
}
