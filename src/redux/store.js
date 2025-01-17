import { configureStore } from "@reduxjs/toolkit";
import { favouritesReducer } from "./favouritesSlice.js";
import { carsReducer } from "./carSlice.js";

const rootReducer = {
  cars: carsReducer,
  favourites: favouritesReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});
