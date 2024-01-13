import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./loadingSlice";
import productSlice from "./productSlice";
import userSlice from "./userSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    products: productSlice,
    user: userSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
