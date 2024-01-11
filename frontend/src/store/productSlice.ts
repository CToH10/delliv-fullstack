import { createSlice } from "@reduxjs/toolkit";
import { ProductStoreTypes } from "./storeType";

const initialState: ProductStoreTypes = {
  productsInfo: { count: 0, previousPage: null, nextPage: null, data: [] },
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductList: (state, products) => {
      state.productsInfo = products.payload;
    },
  },
});

export const { setProductList } = productSlice.actions;

export default productSlice.reducer;
