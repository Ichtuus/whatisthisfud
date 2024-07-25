import { CameraType } from "expo-camera";
import { useState } from "react";

const CAMERA_MODES = {
  BACK: "back" as CameraType,
  FRONT: "front" as CameraType,
};

export function useCameraMode(initialMode = CAMERA_MODES.BACK) {
  const [cameraMode, setCameraMode] = useState<CameraType>(initialMode);

  const toggleCameraMode = () => {
    setCameraMode((prevMode) =>
      prevMode === CAMERA_MODES.BACK ? CAMERA_MODES.FRONT : CAMERA_MODES.BACK
    );
  };

  return [cameraMode, toggleCameraMode];
}
