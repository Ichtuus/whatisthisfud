import { configureStore, createSlice } from "@reduxjs/toolkit";

const cameraSlice = createSlice({
  name: "cameraa",
  initialState: {
    isDisplayCamera: false,
  },
  reducers: {
    updateDisplayCamera: (state, action) => {
      console.log("state camera");
      state.isDisplayCamera = action.payload;
    },
  },
});

export const cameraStore = configureStore({
  reducer: {
    camera: cameraSlice.reducer,
  },
});
