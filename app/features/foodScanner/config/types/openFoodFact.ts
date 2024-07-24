export interface ImageSize {
  h: number;
  w: number;
}

export interface Image {
  sizes: {
    "100": ImageSize;
    "400": ImageSize;
    full: ImageSize;
  };
  uploaded_t: number;
  uploader: string;
}

export interface FrontImage {
  angle: number;
  coordinates_image_size: string;
  geometry: string;
  imgid: string;
  normalize: any;
  rev: string;
  sizes: {
    "100": ImageSize;
    "200": ImageSize;
    "400": ImageSize;
    full: ImageSize;
  };
  white_magic: any;
  x1: string;
  x2: string;
  y1: string;
  y2: string;
}

export interface Images {
  [key: string]: Image | FrontImage;
}

export interface SelectedImages {
  front: {
    display: {
      en: string;
    };
    small: {
      en: string;
    };
    thumb: {
      en: string;
    };
  };
}

export interface Adjustment {
  epi_score: number;
  origin: string;
  percent: number;
  transportation_score: number | null;
}

export interface OriginsOfIngredients {
  aggregated_origins: Adjustment[];
  epi_score: number;
  epi_value: number;
  origins_from_categories: string[];
  origins_from_origins_field: string[];
  transportation_score: number;
  transportation_scores: { [key: string]: number };
  transportation_value: number;
  transportation_values: { [key: string]: number };
  value: number;
  values: { [key: string]: number };
  warning: string;
}

export interface Packaging {
  non_recyclable_and_non_biodegradable_materials: number;
  value: number;
  warning: string;
}

export interface ProductionSystem {
  labels: string[];
  value: number;
  warning: string;
}

export interface ThreatenedSpecies {
  warning: string;
}

export interface EcoscoreData {
  adjustments: {
    origins_of_ingredients: OriginsOfIngredients;
    packaging: Packaging;
    production_system: ProductionSystem;
    threatened_species: ThreatenedSpecies;
  };
  agribalyse: { warning: string };
  missing: {
    categories: number;
    ingredients: number;
    labels: number;
    origins: number;
    packagings: number;
  };
  missing_agribalyse_match_warning: number;
  missing_key_data: number;
  scores: any;
  status: string;
}

export interface Product {
  _id: string;
  _keywords: string[];
  added_countries_tags: string[];
  allergens: string;
  allergens_from_ingredients: string;
  allergens_from_user: string;
  allergens_hierarchy: string[];
  allergens_tags: string[];
  brands: string;
  brands_tags: string[];
  categories_properties: any;
  categories_properties_tags: string[];
  checkers_tags: string[];
  code: string;
  codes_tags: string[];
  complete: number;
  completeness: number;
  correctors_tags: string[];
  countries: string;
  countries_hierarchy: string[];
  countries_lc: string;
  countries_tags: string[];
  created_t: number;
  creator: string;
  data_quality_bugs_tags: string[];
  data_quality_errors_tags: string[];
  data_quality_info_tags: string[];
  data_quality_tags: string[];
  data_quality_warnings_tags: string[];
  ecoscore_data: EcoscoreData;
  ecoscore_grade: string;
  ecoscore_tags: string[];
  editors_tags: string[];
  entry_dates_tags: string[];
  food_groups_tags: string[];
  id: string;
  image_front_small_url: string;
  image_front_thumb_url: string;
  image_front_url: string;
  image_small_url: string;
  image_thumb_url: string;
  image_url: string;
  images: Images;
  informers_tags: string[];
  interface_version_created: string;
  interface_version_modified: string;
  lang: string;
  languages: { [key: string]: number };
  languages_codes: { [key: string]: number };
  languages_hierarchy: string[];
  languages_tags: string[];
  last_edit_dates_tags: string[];
  last_editor: string;
  last_image_dates_tags: string[];
  last_image_t: number;
  last_modified_by: string;
  last_modified_t: number;
  last_updated_t: number;
  lc: string;
  main_countries_tags: string[];
  max_imgid: string;
  misc_tags: string[];
  nova_group_debug: string;
  nova_group_error: string;
  nova_groups_tags: string[];
  nutrient_levels: any;
  nutrient_levels_tags: string[];
  nutriments: any;
  nutriscore: any;
  nutriscore_2021_tags: string[];
  nutriscore_2023_tags: string[];
  nutriscore_grade: string;
  nutriscore_tags: string[];
  nutriscore_version: string;
  nutrition_data_per: string;
  nutrition_data_prepared_per: string;
  nutrition_grade_fr: string;
  nutrition_grades: string;
  nutrition_grades_tags: string[];
  nutrition_score_beverage: number;
  nutrition_score_debug: string;
  nutrition_score_warning_no_fiber: number;
  nutrition_score_warning_no_fruits_vegetables_nuts: number;
  packaging_materials_tags: string[];
  packaging_recycling_tags: string[];
  packaging_shapes_tags: string[];
  packagings: any[];
  packagings_materials: any;
  photographers_tags: string[];
  pnns_groups_1: string;
  pnns_groups_1_tags: string[];
  pnns_groups_2: string;
  pnns_groups_2_tags: string[];
  popularity_key: number;
  popularity_tags: string[];
  product_name: string;
  product_name_en: string;
  removed_countries_tags: string[];
  rev: number;
  scans_n: number;
  selected_images: SelectedImages;
  serving_quantity: string;
  serving_size: string;
  states: string;
  states_hierarchy: string[];
  states_tags: string[];
  traces: string;
  traces_from_ingredients: string;
  traces_from_user: string;
  traces_hierarchy: string[];
  traces_tags: string[];
  unique_scans_n: number;
  unknown_nutrients_tags: string[];
  update_key: string;
  weighers_tags: string[];
}

export interface RootObject {
  code: string;
  product: Product;
  status: number;
  status_verbose: string;
}
