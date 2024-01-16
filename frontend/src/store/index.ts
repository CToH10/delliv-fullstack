import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./loadingSlice";
import productSlice from "./productSlice";
import userSlice from "./userSlice";
import cartSlice from "./cartSlice";
import modalSlice from "./modalSlice";

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    products: productSlice,
    user: userSlice,
    cart: cartSlice,
    modal: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
