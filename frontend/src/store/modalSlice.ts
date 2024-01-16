import { createSlice } from "@reduxjs/toolkit";
import { ModalStoreTypes } from "./storeType";

const initialState: ModalStoreTypes = { modal: false, content: "" };

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openCart: (state) => {
      state.content = "cart";
      state.modal = true;
    },
    closeModal: (state) => {
      state.modal = false;
    },
  },
});

export const { openCart, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
