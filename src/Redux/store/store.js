import { Tuple, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import globalReducer from "../features/global/globalSlice";
import postReducer from "../features/post/postSlice";

export const store = configureStore({
  reducer: {
    global: globalReducer,
    post: postReducer,
  },
  middleware: () => new Tuple(thunk, logger),
});
