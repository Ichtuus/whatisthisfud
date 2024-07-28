import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ActivityIndicator, Button, MD2Colors, Text } from "react-native-paper";

import { useDispatch, useSelector } from "react-redux";
import {
  CameraType,
  CameraView,
  type BarcodeScanningResult,
} from "expo-camera";

import { useCameraMode } from "./hooks/cameraMode";
// import { IRootState } from "../store/camera.store";
import { Product } from "./product";
import { updateDisplayCamera } from "../store/camera.reducer";
import { type Product as ProductType } from "../config/types/openFoodFact";
import { fetchProduct } from "../actions/barcode";

interface FetchError extends Error {
  message: string;
}

export function ShowCamera() {
  const dispatch = useDispatch();

  const isDisplayCamera = useSelector<any, boolean>(
    (state) => state.camera.isDisplayCamera
  );

  const products = useSelector<any, ProductType[]>(
    (state) => state?.product?.products
  );

  const loading = useSelector<any, boolean>((state) => state.product.loading);

  const error = useSelector<any, string | null>((state) => state.product.error);

  const [scannedBarcode, setScannedBarcode] = useState<string>(
    null as unknown as string
  );
  const [cameraMode, toggleCameraMode] = useCameraMode();

  const handleBarcodeScanned = ({ data }: BarcodeScanningResult) => {
    console.log("barcode scanned :", data);
    setScannedBarcode(data);
    dispatch(fetchProduct(data));
    console.log;
    toggleCamera();
  };

  const toggleCamera = () => {
    dispatch(updateDisplayCamera(!isDisplayCamera) as any);
  };

  if (isDisplayCamera) {
    return (
      <CameraView
        facing={cameraMode as CameraType}
        style={styles.camera}
        onBarcodeScanned={(barcode) => handleBarcodeScanned(barcode)}
      >
        <View style={styles.container}>
          <Button mode="text" onPress={() => toggleCamera()}>
            Cancel
          </Button>

          <Button mode="contained" onPress={toggleCameraMode as () => void}>
            Flip the camera
          </Button>
        </View>
      </CameraView>
    );
  }

  if (!isDisplayCamera) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Button
            style={styles.button}
            icon="camera"
            onPress={() => {
              toggleCamera();
            }}
          >
            Activate
          </Button>
        </TouchableOpacity>

        {loading && (
          <View style={styles.container}>
            <ActivityIndicator animating={true} color={MD2Colors.red800} />
          </View>
        )}

        {error && (
          <View>
            <Text>Error: {error}</Text>
          </View>
        )}

        {products &&
          products.map((product, index) => (
            <Product key={index} product={product} />
          ))}

        {/* 
        {isLoading && (
          <View style={styles.container}>
            <ActivityIndicator animating={true} color={MD2Colors.red800} />
          </View>
        )}
        {(error as FetchError) && (
          <View>
            <Text>Error: {(error as FetchError).message}</Text>
          </View>
        )}
        {data && <Product product={data} />} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column-reverse",
  },
  camera: {
    flex: 1,
  },
  containerProduct: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "transparent",
  },
});
