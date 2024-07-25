import { RootObject as ProductI } from "../config/types/openFoodFact";

export const fetchProductByBarCode = async (barcode: string) => {
  const response = await fetch(
    `https://world.openfoodfacts.net/api/v2/product/${barcode}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data: ProductI = await response.json();
  return data.product;
};
