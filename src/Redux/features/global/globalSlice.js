import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setLanguage, setCategory } = globalSlice.actions;

export default globalSlice.reducer;
