import { type BarcodeScanningResult } from "expo-camera";
// import { useDispatch } from "react-redux";
// const dispatch = useDispatch();

export function getBarCode(scanningResult: BarcodeScanningResult) {
  console.log("OUAAAAAAAAAIS ", scanningResult);
  if (scanningResult.data) {
    // do smoething else
    // dispatch({
    //   type: "barcode/getBarCodeData",
    //   payload: scanningResult.data,
    // });
  }
}
