import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
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
  },
});

export const { setPost } = postSlice.actions;

export default postSlice.reducer;
