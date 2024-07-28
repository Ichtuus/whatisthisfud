// src/store/product.reducer.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../config/types/openFoodFact";
import { fetchProduct } from "../actions/barcode";

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    resetStore: (state) => {
      state.products = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProduct.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.loading = false;
          resetStore();
          state.products.push(action.payload);
        }
      )
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetStore } = productSlice.actions;

export default productSlice.reducer;
