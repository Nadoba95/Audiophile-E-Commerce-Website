import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import CartItem from "../models/cartItem";

type Cart = {
  items: CartItem[];
  totalPrice: number;
  totalPriceWithVAT: number;
};

const initialState: Cart = {
  items: [],
  totalPrice: 0,
  totalPriceWithVAT: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const updatedTotalPrice = state.totalPrice + action.payload.amount * action.payload.price + 50;
      const updatedTotalPriceWithVAT = updatedTotalPrice * 0.2;

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
        totalPriceWithVAT: updatedTotalPriceWithVAT,
      };
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
