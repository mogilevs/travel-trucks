import { configureStore } from "@reduxjs/toolkit";
import { favouritesReducer } from "./favouritesSlice.js";
import { carsReducer } from "./carSlice.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "favourites",
  storage,
};

const rootReducer = {
  cars: carsReducer,
  favourites: persistReducer(persistConfig, favouritesReducer),
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
