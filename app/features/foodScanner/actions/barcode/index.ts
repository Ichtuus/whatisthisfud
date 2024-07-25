import { fetchProductByBarCode } from "../../services/openFoodFact";

export async function getBarCode(scanningResult: string) {
  if (scanningResult) {
    const product = await fetchProductByBarCode(scanningResult);
    return product;
  }
}
