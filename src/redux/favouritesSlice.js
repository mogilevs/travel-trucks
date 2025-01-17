import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: { items: [] },
  reducers: {
    addFavourite: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    removeFavourite(state, action) {
      return {
        ...state,
        items: state.items.filter((contact) => contact.id !== action.payload),
      };
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;
export const favouritesReducer = favouritesSlice.reducer;
