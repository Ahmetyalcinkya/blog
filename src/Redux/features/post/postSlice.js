import { createSlice } from "@reduxjs/toolkit";
import { fetchStates } from "../global/globalSlice";

const initialState = {
  posts: [],
  fetchStates: fetchStates.not_fetched,
};

export const postSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setPost: (state, action) => {
      return {
        ...state,
        posts: [...action.payload],
      };
    },
    changeFetchStates: (state, action) => {
      state.fetchStates = action.payload;
    },
  },
});

export const { setPost, changeFetchStates } = postSlice.actions;

export default postSlice.reducer;
