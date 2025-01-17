import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import CarstList from "../../components/CarsList/CarsList.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCars } from "../../redux/operations.js";

export default function CatalogPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <div>
      <SearchForm />
      <CarstList />
    </div>
  );
}
