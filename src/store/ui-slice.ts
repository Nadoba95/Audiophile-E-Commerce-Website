import { createSlice } from "@reduxjs/toolkit";

type UI = {
  navIsVisible: boolean;
  cartIsVisible: boolean;
};

const initialUiState: UI = { navIsVisible: false, cartIsVisible: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggleNav(state) {
      state.navIsVisible = !state.navIsVisible;
      state.cartIsVisible = false;
    },

    closeNav(state) {
      state.navIsVisible = false;
    },

    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
      state.navIsVisible = false;
    },

    closeCart(state) {
      state.cartIsVisible = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
