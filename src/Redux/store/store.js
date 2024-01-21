import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

export const store = configureStore({
  reducer: {},
  middleware: [thunk, logger],
});
