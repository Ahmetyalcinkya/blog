import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import globalReducer from "../features/global/globalSlice";
import postReducer from "../features/post/postSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    global: globalReducer,
    post: postReducer,
    user: userReducer,
  },
  middleware: [thunk, logger],
});
