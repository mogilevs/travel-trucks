import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { notifyError } from "../services/notification.js";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const getAllCars = createAsyncThunk(
  "cars/getAll",
  async (params, thunkApi) => {
    try {
      const response = await axios.get("/campers", { params });
      console.log(response);
      return response.data.items;
    } catch (error) {
      console.log(error);
      if (error.response?.status === 404) {
        notifyError("Nothing found");
      } else {
        notifyError("An error happened");
      }
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getOneCar = createAsyncThunk(
  "cars/getOne",
  async (id, thunkApi) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
