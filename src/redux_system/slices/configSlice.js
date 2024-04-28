import { createSlice } from "@reduxjs/toolkit";

const data = {
  theme: true,
};

const configSlice = createSlice({
  name: "config",
  initialState: data,
  reducers: {
    setTheme: (state, { payload }) => {
      state.theme = payload;
    },
  },
});

export const config = configSlice.reducer;
export const { setTheme } = configSlice.actions;
