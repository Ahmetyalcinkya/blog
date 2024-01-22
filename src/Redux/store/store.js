import { Tuple, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import globalReducer from "../features/global/globalSlice";

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
  middleware: () => new Tuple(thunk, logger),
});
