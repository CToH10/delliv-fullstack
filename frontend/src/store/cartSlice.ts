import { createSlice } from "@reduxjs/toolkit";
import { CartStoreTypes } from "./storeType";

const initialState: CartStoreTypes = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, product) => {
      const exists = state.cart.findIndex(
        (prod) => prod.id === product.payload.id
      );

      const newCart = () => {
        state.cart[exists].quantity = state.cart[exists].quantity + 1;

        state.cart[exists].total =
          state.cart[exists].price * state.cart[exists].quantity;
      };

      exists !== -1
        ? newCart()
        : (state.cart = [
            ...state.cart,
            { ...product.payload, quantity: 1, total: product.payload.price },
          ]);
    },
    removeFromCart: (state, product) => {
      const exists = state.cart.findIndex(
        (prod) => prod.id === product.payload.id
      );

      const removeOne = () => {
        state.cart[exists].quantity = state.cart[exists].quantity - 1;
        state.cart[exists].total =
          state.cart[exists].price * state.cart[exists].quantity;
      };

      if (exists !== -1) {
        state.cart[exists].quantity - 1 > 0
          ? removeOne()
          : state.cart.splice(exists, 1);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
