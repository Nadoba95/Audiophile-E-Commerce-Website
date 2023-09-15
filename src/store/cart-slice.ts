import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import CartItem from "../models/cartItem";

const SHIPPING = 50;

type Cart = {
  items: CartItem[];
  totalPrice: number;
  vatPrice: number;
  grandTotal: number;
};

const initialState: Cart = {
  items: [],
  totalPrice: 0,
  vatPrice: 0,
  grandTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const updatedTotalPrice = state.totalPrice + action.payload.amount * action.payload.price;
      const updatedVatPrice = updatedTotalPrice * 0.2;
      const updatedGrandTotal = updatedTotalPrice + updatedVatPrice + SHIPPING;

      const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      const existingItem = state.items[existingItemIndex];

      let updatedItems;

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + action.payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload);
      }

      return {
        items: updatedItems,
        totalPrice: updatedTotalPrice,
        vatPrice: updatedVatPrice,
        grandTotal: updatedGrandTotal,
      };
    },

    removeItem: (state, action: PayloadAction<CartItem>) => {
      const updatedTotalPrice = state.totalPrice - action.payload.amount * action.payload.price;
      const updatedVatPrice = updatedTotalPrice * 0.2;
      const updatedGrandTotal = updatedTotalPrice + updatedVatPrice + SHIPPING;

      const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      const existingItem = state.items[existingItemIndex];

      let updatedItems;

      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.payload.id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - action.payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
        totalPrice: updatedTotalPrice,
        vatPrice: updatedVatPrice,
        grandTotal: updatedGrandTotal,
      };
    },

    removeAll: () => initialState,
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
