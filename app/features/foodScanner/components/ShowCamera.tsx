import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";

import { useDispatch, useSelector } from "react-redux";
import { useQuery, useQueryClient } from "react-query";
import {
  CameraType,
  CameraView,
  type BarcodeScanningResult,
} from "expo-camera";

import { getBarCode } from "../actions/barcode";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { useCameraMode } from "./hooks/cameraMode";
import { IRootState } from "../store/camera.store";

interface FetchError extends Error {
  message: string;
}

export function ShowCamera() {
  const isDisplayCamera = useSelector<IRootState, boolean>(
    (state) => state.camera.isDisplayCamera
  );
  const dispatch = useDispatch();
  const [scannedBarcode, setScannedBarcode] = useState<string>(
    null as unknown as string
  );
  const [cameraMode, toggleCameraMode] = useCameraMode();

  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery(
    ["barcodeKey", scannedBarcode],
    async () => await getBarCode(scannedBarcode),
    {
      enabled: !!scannedBarcode,
    }
  );

  const handleBarcodeScanned = ({ data }: BarcodeScanningResult) => {
    console.log("barcode scanned :", data);
    setScannedBarcode(data);
    dispatch({
      type: "camera/updateDisplayCamera",
      payload: false,
    });
  };

  if (isDisplayCamera) {
    return (
      <CameraView
        facing={cameraMode as CameraType}
        style={styles.camera}
        onBarcodeScanned={(barcode) => handleBarcodeScanned(barcode)}
      >
        <View style={styles.container}>
          <Button
            mode="text"
            onPress={() =>
              dispatch({
                type: "camera/updateDisplayCamera",
                payload: false,
              })
            }
          >
            Cancel
          </Button>

          <Button mode="contained" onPress={() => toggleCameraMode}>
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
              dispatch({
                type: "camera/updateDisplayCamera",
                payload: true,
              });
            }}
          >
            Activate
          </Button>
        </TouchableOpacity>

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
        {data && (
          <View style={styles.containerProduct}>
            <Text>Name of product: {data.product_name || "Inconnu"}</Text>
            <Text>brands: {data.brands || "Inconnue"}</Text>
          </View>
        )}
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
