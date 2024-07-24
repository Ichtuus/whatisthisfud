import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootObject as ProductI } from "../config/types/openFoodFact";

export const openFoodFactApi = createApi({
  reducerPath: "openFoodFactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://world.openfoodfacts.net/api/v2/",
  }),
  endpoints: (builder) => ({
    getProductByBarCode: builder.query<ProductI, string>({
      query: (barcode) => `product/${barcode}`,
    }),
  }),
});

export const { useGetProductByBarCodeQuery } = openFoodFactApi;
