import { Image, ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import type { EcoscoreData, Product } from "../config/types/openFoodFact";
import { ProductProps } from "../config/types/productStore.type";

export function Product({ product }: ProductProps) {
  return (
    <ScrollView style={styles.container}>
      {/* Affichage de l'image du produit */}
      <Image source={{ uri: product.image_url }} style={styles.productImage} />

      {/* Nom et marque du produit */}
      <Text style={styles.productName}>{product.product_name}</Text>
      <Text style={styles.productBrand}>Marque: {product.brands}</Text>

      {/* Code-barres */}
      <Text style={styles.productInfo}>Code-barres: {product.code}</Text>

      {/* Nutriscore */}
      <Text style={styles.productInfo}>
        Nutriscore: {product?.nutriscore_grade?.toUpperCase()}
      </Text>

      {/* Score Écologique */}
      <Text style={styles.productInfo}>
        Score Écologique: {product?.ecoscore_grade?.toUpperCase()}
      </Text>

      {/* Allergènes */}
      <Text style={styles.productInfo}>
        Allergènes: {product.allergens || "Aucun"}
      </Text>

      {/* Traces d'Allergènes */}
      <Text style={styles.productInfo}>
        Traces: {product.traces || "Aucune"}
      </Text>

      {/* Informations Nutritionnelles */}
      <Text style={styles.productInfo}>
        Taille de la Portion: {product.serving_size || "Non spécifiée"}
      </Text>
      <Text style={styles.productInfo}>
        Quantité par Portion: {product.serving_quantity || "Non spécifiée"}
      </Text>

      {/* Pays de Vente */}
      <Text style={styles.productInfo}>
        Pays de Vente: {product.countries || "Non spécifiés"}
      </Text>

      {/* Catégories */}
      <Text style={styles.productInfo}>
        Catégories:{" "}
        {product?.categories_properties_tags?.join(", ") || "Aucune"}
      </Text>

      {/* Popularité */}
      <Text style={styles.productInfo}>
        Popularité: {product.popularity_key}
      </Text>

      {/* Groupes Alimentaires */}
      <Text style={styles.productInfo}>
        Groupe Alimentaire 1: {product.pnns_groups_1 || "Non spécifié"}
      </Text>
      <Text style={styles.productInfo}>
        Groupe Alimentaire 2: {product.pnns_groups_2 || "Non spécifié"}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  productImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productBrand: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productInfo: {
    fontSize: 16,
    marginBottom: 8,
  },
});
