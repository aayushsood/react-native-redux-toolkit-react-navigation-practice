import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  apiDataOne: {
    userData: [],
    dataStatus: "ideal",
  },
};

const fetchUsers = createAsyncThunk("userData/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return data;
});

const showHideDivSlice = createSlice({
  name: "showHideADiv",
  initialState: {
    value: true,
    apiDataOne: {
      userData: [],
      dataStatus: "ideal",
    },
  },
  reducers: {
    showHideDiv: (state) => {
      state.value = !state.value;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.apiDataOne.dataStatus = "Loading...";
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.apiDataOne.userData = action.payload;
      state.apiDataOne.dataStatus = "Succeded";
    });

    builder.addCase(fetchUsers.rejected, (state, payload) => {
      state.apiDataOne.dataStatus = payload.error.message;
    });
  },
});

export const { showHideDiv } = showHideDivSlice.actions;

export { fetchUsers };

export default showHideDivSlice.reducer;
