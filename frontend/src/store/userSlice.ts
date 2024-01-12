import { createSlice } from "@reduxjs/toolkit";
import { UserStoreTypes } from "./storeType";

const initialState: UserStoreTypes = { token: localStorage.getItem("user.token") };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserToken: (state, data) => {
      state.token = data.payload;
    },
  },
});

export const { setUserToken } = userSlice.actions;

export default userSlice.reducer;
