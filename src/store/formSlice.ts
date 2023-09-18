import { createSlice } from "@reduxjs/toolkit";

type Form = {
  formIsChecked: boolean;
  formIsValid: boolean;
};

const initialState: Form = {
  formIsChecked: false,
  formIsValid: false,
};

const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    setFormIsChecked(state, action) {
      state.formIsChecked = action.payload;
    },

    setFormIsValid(state, action) {
      state.formIsValid = action.payload;
    },
  },
});

export const formActions = formSlice.actions;
export default formSlice;
