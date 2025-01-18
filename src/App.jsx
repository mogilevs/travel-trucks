import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout.jsx";
import CarFeatures from "./components/CarFeatures/CarFeatures.jsx";
import CarReviews from "./components/CarReviews/CarReviews.jsx";
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CarPage = lazy(() => import("./pages/CarPage/CarPage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));

export default function App() {
  return (
    <>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CarPage />}>
              <Route path="features" element={<CarFeatures />} />
              <Route path="reviews" element={<CarReviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}
