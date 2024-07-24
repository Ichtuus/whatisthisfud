// import { useDispatch, useSelector } from "react-redux";
// import { getBarCode } from "../actions/barcode";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { CameraView } from "expo-camera";

export function ShowCamera() {
  // const cameraState = useSelector((state) => state.camera);
  // const dispatch = useDispatch();

  function test() {
    console.log("fired");
    // dispatch({
    //   type: "camera/updateDisplayCamera",
    //   payload: true,
    // });
  }

  // console.log("cameraState", cameraState.isDisplayCamera);
  // if (cameraState.isDisplayCamera) {
  //   return (
  //     <CameraView
  //       style={styles.camera}
  //       onBarcodeScanned={(barcode) => getBarCode(barcode)}
  //     >
  //       <View style={styles.buttonContainer}>
  //         <Button
  //           title="Cancel"
  //           onPress={() =>
  //             dispatch({
  //               type: "camera/updateDisplayCamera",
  //               payload: false,
  //             })
  //           }
  //         />

  //         <TouchableOpacity style={styles.button}>
  //           <Text style={styles.text}>Flip Camera</Text>
  //         </TouchableOpacity>
  //       </View>
  //     </CameraView>
  //   );
  // }
  return (
    <TouchableOpacity
      style={{ backgroundColor: "red", padding: 20 }}
      onPress={() => {
        console.log("does not work");
      }}
    >
      <Text>X</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
