import { createSlice } from "@reduxjs/toolkit";

const countWithAdditionalPrameter = createSlice({
  name: "paremeter counter",
  initialState: {
    value: 0,
    id: 1,
  },

  reducers: {
    addParamToTheValue: (state, action) => {
      state.value += action.payload.value;
    },
  },
});

export const { addParamToTheValue } = countWithAdditionalPrameter.actions;

export default countWithAdditionalPrameter.reducer;
