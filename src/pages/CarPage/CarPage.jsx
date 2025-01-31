import { NavLink, Outlet, useParams } from "react-router-dom";
import { Suspense, useEffect } from "react";
import css from "./CarPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getOneCar } from "../../redux/operations.js";
import { selectIsLoading, selectOneCar } from "../../redux/selectors.js";
import CarDetails from "../../components/CarDetails/CarDetails.jsx";
import OrderForm from "../../components/OrderForm/OrderForm.jsx";
import Loader from "../../components/Loader/Loader.jsx";

export default function CarPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const loading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(getOneCar(id));
  }, [id, dispatch]);

  const car = useSelector(selectOneCar);
  if (loading) {
    return <Loader />;
  }

  return (
    <div className={css.container}>
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
      <div className={css.bottomPart}>
        <OrderForm />
        <Suspense fallback={<p>Loading details...</p>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
