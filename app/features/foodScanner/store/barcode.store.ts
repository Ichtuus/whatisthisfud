import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useGetProductByBarCodeQuery } from "../services/openFoodFact";

const barcodeDataSlice = createSlice({
  name: "barcode",
  initialState: {},
  reducers: {
    getBarCodeData: (state, action) => {
      const { data, error, isLoading } = useGetProductByBarCodeQuery(
        action.payload
      );
      console.log("DAAAAATA ", data);
      state = data;
    },
  },
});

export const barCodeStore = configureStore({
  reducer: {
    barcode: barcodeDataSlice.reducer,
  },
});
