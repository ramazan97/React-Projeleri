import { createSlice } from "@reduxjs/toolkit";

export const site = createSlice({
  name: "counter",
  initialState: {
    dark: false,
    language: "tr",
  },
  reducers: {
    setDarkMode: (state) => {
      state.dark = !state.dark;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDarkMode, setLanguage } = site.actions;

export default site.reducer;
