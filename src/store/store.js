import { combineReducers, configureStore } from "@reduxjs/toolkit";
import showHideDivSlice from "../slices/showADivSlice/showADivSlice";
import incrementCountByValue from "../slices/incrementCountByValue/incrementCountByValue";

export const store = configureStore({
  reducer: {
    showDiv: showHideDivSlice,
    incrementValues: incrementCountByValue,
  },
});
