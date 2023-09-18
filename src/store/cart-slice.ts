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
  initialState: JSON.parse(localStorage.getItem("cart")!) || initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const updatedTotalPrice = state.totalPrice + action.payload.amount * action.payload.price;
      const updatedVatPrice = Math.round(updatedTotalPrice * 0.2);
      const updatedGrandTotal = updatedTotalPrice + updatedVatPrice + SHIPPING;

      const existingItemIndex = state.items.findIndex((item: CartItem) => item.id === action.payload.id);
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

      const cart = {
        items: updatedItems,
        totalPrice: updatedTotalPrice,
        vatPrice: updatedVatPrice,
        grandTotal: updatedGrandTotal,
      };

      localStorage.setItem("cart", JSON.stringify(cart));

      return cart;
    },

    removeItem: (state, action: PayloadAction<CartItem>) => {
      const updatedTotalPrice = state.totalPrice - action.payload.amount * action.payload.price;
      const updatedVatPrice = Math.round(updatedTotalPrice * 0.2);
      const updatedGrandTotal = updatedTotalPrice + updatedVatPrice + SHIPPING;

      const existingItemIndex = state.items.findIndex((item: CartItem) => item.id === action.payload.id);
      const existingItem = state.items[existingItemIndex];

      let updatedItems;

      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item: CartItem) => item.id !== action.payload.id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - action.payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      }

      const cart = {
        items: updatedItems,
        totalPrice: updatedTotalPrice,
        vatPrice: updatedVatPrice,
        grandTotal: updatedGrandTotal,
      };

      localStorage.setItem("cart", JSON.stringify(cart));

      return cart;
    },

    clear: () => {
      localStorage.setItem("cart", JSON.stringify(initialState));
      return initialState;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
