import { createSlice } from "@reduxjs/toolkit";

type UI = {
  navIsVisible: boolean;
  cartIsVisible: boolean;
  checkoutModalIsVisible: boolean;
};

const initialUiState: UI = {
  navIsVisible: false,
  cartIsVisible: false,
  checkoutModalIsVisible: false,
};

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

    openCheckoutModal(state) {
      state.checkoutModalIsVisible = true;
    },

    closeCheckoutModal(state) {
      state.checkoutModalIsVisible = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
