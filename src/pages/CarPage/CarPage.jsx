import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { Suspense, useEffect, useRef } from "react";
import css from "./CarPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getOneCar } from "../../redux/operations.js";
import { selectOneCar } from "../../redux/selectors.js";
import CarDetails from "../../components/CarDetails/CarDetails.jsx";

export default function CarPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneCar(id));
  }, [id, dispatch]);

  const car = useSelector(selectOneCar);

  return (
    <div className={css.container}>
      {/* {error && <p>Something went wrong! Please try again later.</p>}
      {loading && <p>Loading...</p>} */}
      {Object.keys(car).length && <CarDetails car={car} />}

      <ul className={css.list}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${css.link} ${css.active}` : `${css.link}`
            }
            to="features"
          >
            Features
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${css.link} ${css.active}` : `${css.link}`
            }
            to="reviews"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<p>Loading details...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
