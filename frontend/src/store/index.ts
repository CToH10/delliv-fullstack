import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./loadingSlice";
import productSlice from "./productSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    products: productSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
