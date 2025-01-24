import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import CarstList from "../../components/CarsList/CarsList.jsx";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllCars } from "../../redux/operations.js";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  const [page, setPage] = useState(1);
  const perPage = 4;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars({ page: 1, limit: perPage * page }));
  }, [page, dispatch]);
  console.log("page", page);

  return (
    <div className={css.container}>
      <SearchForm />
      <CarstList page={page} setPage={setPage} />
    </div>
  );
}
