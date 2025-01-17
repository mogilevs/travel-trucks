import { createSlice } from "@reduxjs/toolkit";
import { getAllCars, getOneCar } from "./operations.js";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carSlice = createSlice({
  name: "cars",
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCars.pending, handlePending)
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.items = action.payload;
      })
      .addCase(getAllCars.rejected, handleRejected)
      .addCase(getOneCar.pending, handlePending)
      .addCase(getOneCar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.items = action.payload;
      })
      .addCase(getOneCar.rejected, handleRejected);
  },
});

export const carsReducer = carSlice.reducer;
