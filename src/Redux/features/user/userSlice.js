import { createSlice } from "@reduxjs/toolkit";
import { fetchStates } from "../global/globalSlice";

const initialState = {
  user: {
    name: "",
    surname: "",
    email: "",
    profilePicture: "",
    role: "",
    token: "",
  },
  fetchStates: fetchStates.not_fetched,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, user: { ...action.payload } };
    },
    changeFetchStates: (state, action) => {
      state.fetchStates = action.payload;
    },
  },
});

export const { setUser, changeFetchStates } = userSlice.actions;

export default userSlice.reducer;
