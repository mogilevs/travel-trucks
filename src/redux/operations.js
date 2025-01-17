import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const getAllCars = createAsyncThunk(
  "cars/getAll",
  async (params, thunkApi) => {
    try {
      const response = await axios.get("/campers", params);
      return response.data.items;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getOneCar = createAsyncThunk(
  "cars/getOne",
  async (id, thunkApi) => {
    try {
      const response = await axios.get("/campers/:id");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
