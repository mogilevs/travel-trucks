import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Suspense, useEffect, useRef } from "react";
// import css from "./MovieDetailsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getOneCar } from "../../redux/operations.js";
import { selectOneCar } from "../../redux/selectors.js";
import CarDetails from "../../components/CarDetails/CarDetails.jsx";

export default function CarPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id, "id");
  //   const location = useLocation();
  //   const backLinkHref = useRef(location.state ?? "/catalog");

  useEffect(() => {
    dispatch(getOneCar(id));
  }, [id, dispatch]);

  const car = useSelector(selectOneCar);

  return (
    <>
      {/* {error && <p>Something went wrong! Please try again later.</p>}
      {loading && <p>Loading...</p>} */}
      {Object.keys(car).length && <CarDetails car={car} />}

      <ul>
        <li>
          <Link to="features">Features</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<p>Loading details...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
}
