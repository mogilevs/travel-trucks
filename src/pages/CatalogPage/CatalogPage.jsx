import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import CarstList from "../../components/CarsList/CarsList.jsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "../../redux/operations.js";
import css from "./CatalogPage.module.css";
import { selectIsLoading } from "../../redux/selectors.js";
import Loader from "../../components/Loader/Loader.jsx";

export default function CatalogPage() {
  const [page, setPage] = useState(1);
  const perPage = 4;
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAllCars({ page: 1, limit: perPage * page }));
  }, [page, dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={css.container}>
      <SearchForm />
      <CarstList page={page} setPage={setPage} />
    </div>
  );
}
