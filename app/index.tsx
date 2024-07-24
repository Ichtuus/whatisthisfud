import { View } from "react-native";

import Router from "./router";
import { Provider } from "react-redux";
import { cameraStore } from "./features/foodScanner/store/camera.store";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={cameraStore}>
        <Router />
      </Provider>
    </View>
  );
}
