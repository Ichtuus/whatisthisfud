import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductByBarCode } from "../../services/openFoodFact";

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async (barcode: string, thunkAPI) => {
    console.log("WHY");
    try {
      const product = await fetchProductByBarCode(barcode);

      return product;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
