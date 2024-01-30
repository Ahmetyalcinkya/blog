import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

export const fetchStates = {
  not_fetched: "NOT_FETCHED",
  fetching: "FETCHING",
  fetched: "FETCHED",
  fetch_failed: "FAILED",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.categories = action.payload;
    },
    changeFetchStates: (state, action) => {
      state.fetchStates = action.payload;
    },
  },
});

export const { setCategory, changeFetchStates } = globalSlice.actions;

export default globalSlice.reducer;
