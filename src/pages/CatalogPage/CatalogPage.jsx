import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import CarstList from "../../components/CarsList/CarsList.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCars } from "../../redux/operations.js";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <SearchForm />
      <CarstList />
    </div>
  );
}
