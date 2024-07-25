import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

export type CameraSliceState = { isDisplayCamera: boolean };
const initialState: CameraSliceState = { isDisplayCamera: false };
const rootReducer = combineReducers({})
export type IRootState = ReturnType<typeof rootReducer>

export const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers: {
    updateDisplayCamera: (state, action) => {
      state.isDisplayCamera = action.payload;
    },
  },
});

export const cameraStore = configureStore({
  reducer: {
    camera: cameraSlice.reducer,
  },
});
