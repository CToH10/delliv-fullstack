import { createSlice } from "@reduxjs/toolkit";
import { StoreTypes } from "./storeType";

const initialState: StoreTypes = { loading: false, userInfo: undefined };

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    toggleLoading: (state) => {
      state.loading = !state.loading;
    },

    setUserInfo: (state, info) => {
      state.userInfo = info.payload;
    },
  },
});

export const { toggleLoading, setUserInfo } = loadingSlice.actions;

export default loadingSlice.reducer;
