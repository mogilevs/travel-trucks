export const selectCars = (state) => state.cars.items;

export const selectOneCar = (state) => state.cars.currentCar;

export const selectIsLoading = (state) => state.cars.isLoading;

export const selectError = (state) => state.cars.error;

export const selectFavourites = (state) => state.favourites.items;
