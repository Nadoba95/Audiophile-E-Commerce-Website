import { createSlice } from "@reduxjs/toolkit";

type UI = {
  navIsVisible: boolean;
};

const initialUiState: UI = { navIsVisible: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggle(state) {
      state.navIsVisible = !state.navIsVisible;
    },

    close(state) {
      if (state.navIsVisible) {
        state.navIsVisible = false;
      }
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
