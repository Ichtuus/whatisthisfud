// import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

// export type CameraSliceState = { isDisplayCamera: boolean };
// const initialState: CameraSliceState = { isDisplayCamera: false };
// const rootReducer = combineReducers({});
// export type IRootState = ReturnType<typeof rootReducer>;

// export const cameraSlice = createSlice({
//   name: "camera",
//   initialState,
//   reducers: {
//     updateDisplayCamera: (state, action) => {
//       state.isDisplayCamera = action.payload;
//     },
//   },
// });

// export const cameraStore = configureStore({
//   reducer: {
//     camera: cameraSlice.reducer,
//   },
// });

import {
  CameraState,
  CameraActionTypes,
  UPDATE_DISPLAY_CAMERA,
} from "../config/types/cameraStore.type";

// État initial pour la caméra
const initialCameraState: CameraState = {
  isDisplayCamera: false,
};

// Reducer pour gérer l'état de la caméra
const cameraReducer = (
  state = initialCameraState,
  action: CameraActionTypes
): CameraState => {
  switch (action.type) {
    case UPDATE_DISPLAY_CAMERA:
      return {
        ...state,
        isDisplayCamera: action.payload,
      };
    default:
      return state;
  }
};

export const updateDisplayCamera = (isDisplayCamera: boolean): CameraActionTypes => ({
  type: UPDATE_DISPLAY_CAMERA,
  payload: isDisplayCamera,
});

export default cameraReducer;
