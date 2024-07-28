// État initial de la caméra
export interface CameraState {
  isDisplayCamera: boolean;
}

// Actions Types pour la caméra
export const UPDATE_DISPLAY_CAMERA = "UPDATE_DISPLAY_CAMERA";

interface UpdateDisplayCameraAction {
  type: typeof UPDATE_DISPLAY_CAMERA;
  payload: boolean;
}

// Types d'actions pour le reducer
export type CameraActionTypes = UpdateDisplayCameraAction;
