import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./loadingSlice";
import productSlice from "./productSlice";

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    products: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
