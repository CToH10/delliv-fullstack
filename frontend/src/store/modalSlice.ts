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
    openEditUser: (state) => {
      state.content = "editUser";
      state.modal = true;
    },
  },
});

export const { openCart, closeModal, openEditUser } = modalSlice.actions;

export default modalSlice.reducer;
