export interface EcoscoreData {
  grade: string;
  score: number;
  status: string;
  agribalyse: {
    warning: string;
    co2_total: number;
    co2_food: number;
  };
}

// Définition du type ProductProps
export interface ProductProps {
  _id: string; // Identifiant unique du produit
  code: string; // Code-barres du produit
  product_name: string; // Nom du produit
  brands: string; // Marque du produit
  product_name_en: string; // Nom du produit en anglais

  // Images
  image_url: string; // URL de l'image principale du produit
  image_thumb_url: string; // URL de la miniature de l'image
  image_front_url: string; // URL de l'image avant du produit

  // Informations nutritionnelles
  nutriscore_grade: string; // Nutriscore du produit
  nutrition_grade_fr: string; // Nutriscore en version française
  nutrient_levels_tags: string[]; // Tags de niveaux de nutriments
  nutriments: any; // Détails sur les nutriments

  // Informations sur les allergènes
  allergens: string; // Liste des allergènes
  traces: string; // Traces d'allergènes

  // Informations écologiques
  ecoscore_grade: string; // Score écologique
  ecoscore_data: EcoscoreData; // Données détaillées sur le score écologique

  // Informations géographiques
  countries: string; // Pays de vente

  // Autres informations
  serving_size: string; // Taille de la portion
  serving_quantity: string; // Quantité par portion
  categories_properties_tags: string[]; // Catégories du produit
  popularity_key: number; // Indice de popularité
  pnns_groups_1: string; // Premier groupe alimentaire
  pnns_groups_2: string; // Deuxième groupe alimentaire
}

// Action Types
export const FETCH_PRODUCT_REQUEST = "FETCH_PRODUCT_REQUEST";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE";

// Action Interfaces
interface FetchProductRequestAction {
  type: typeof FETCH_PRODUCT_REQUEST;
}

interface FetchProductSuccessAction {
  type: typeof FETCH_PRODUCT_SUCCESS;
  payload: ProductProps;
}

interface FetchProductFailureAction {
  type: typeof FETCH_PRODUCT_FAILURE;
  payload: string;
}

// Combiner les actions dans un type unifié
export type ProductActionTypes =
  | FetchProductRequestAction
  | FetchProductSuccessAction
  | FetchProductFailureAction;

// État initial pour le store
export interface ProductState {
  product: ProductProps | null;
  loading: boolean;
  error: string | null;
}
