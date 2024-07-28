import { Dispatch } from "redux";
import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  ProductActionTypes,
  ProductProps,
} from "../../config/types/productStore.type";

export const fetchProductByBarCode = (barcode: string) => {
  return async (dispatch: Dispatch<ProductActionTypes>) => {
    dispatch({ type: FETCH_PRODUCT_REQUEST });

    try {
      const response = await fetch(
        `https://world.openfoodfacts.net/api/v2/product/${barcode}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const product: ProductProps = {
        _id: data.product._id,
        code: data.product.code,
        product_name: data.product.product_name,
        brands: data.product.brands,
        product_name_en: data.product.product_name_en,
        image_url: data.product.image_url,
        image_thumb_url: data.product.image_thumb_url,
        image_front_url: data.product.image_front_url,
        nutriscore_grade: data.product.nutriscore_grade,
        nutrition_grade_fr: data.product.nutrition_grade_fr,
        nutrient_levels_tags: data.product.nutrient_levels_tags,
        nutriments: data.product.nutriments,
        allergens: data.product.allergens,
        traces: data.product.traces,
        ecoscore_grade: data.product.ecoscore_grade,
        ecoscore_data: data.product.ecoscore_data,
        countries: data.product.countries,
        serving_size: data.product.serving_size,
        serving_quantity: data.product.serving_quantity,
        categories_properties_tags: data.product.categories_properties_tags,
        popularity_key: data.product.popularity_key,
        pnns_groups_1: data.product.pnns_groups_1,
        pnns_groups_2: data.product.pnns_groups_2,
      };

      dispatch({
        type: FETCH_PRODUCT_SUCCESS,
        payload: product,
      });
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCT_FAILURE,
        payload: (error as any).message,
      });
    }
  };
};
