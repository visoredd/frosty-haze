import { configureStore } from "@reduxjs/toolkit";
import chartSlice from "./reducers/chartSlice";
export const store = configureStore({
  reducer: {
    chartSlice: chartSlice,
  },
});
