// import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: [],
    prices: [],
    displayItem: false,
  },

  reducers: {
    //   add item
    addToCart: (state, action) => {
      const product = { ...action.payload };
      const found = state.carts.findIndex((item) => item.id === product.id);
      if (found !== -1) {
        state.carts[found].quantity += 1;
      } else {
        product.quantity = 1;
        state.carts.push(product);
      }
      state.displayItem = true;

      state.prices.push(product);

      //   state.carts.push(action.payload);
    },

    removeFromCart: (state, action) => {
      state.carts = state.carts.filter((item) => item.id !== action.payload.id);
      state.prices = state.prices.filter(
        (item) => item.id !== action.payload.id
      );
    },

    toggleCart: (state) => {
      state.displayItem = !state.displayItem;
    },

    increaseQuantity: (state, action) => {
      const product = { ...action.payload };
      const found = state.carts.findIndex((item) => item.id === product.id);
      if (found !== -1) {
        state.carts[found].quantity += 1;
        state.prices.push(product);
      }
    },

    decreaseQuantity: (state, action) => {
      const product = { ...action.payload };
      const found = state.carts.findIndex((item) => item.id === product.id);
      if (found !== -1) {
        state.carts[found].quantity -= 1;
        // state.prices.push(product);
      }
    },

  },
});

export const {
  addToCart,
  removeFromCart,
  toggleCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export const selectCart = (state) => state.cart.carts;

export const displayCart = (state) => state.cart.displayItem;
export const subTotal = (state) => state.cart.prices;

export default cartSlice.reducer;
