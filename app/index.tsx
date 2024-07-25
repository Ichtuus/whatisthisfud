import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";

import { cameraStore } from "./features/foodScanner/store/camera.store";

import Router from "./router";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#764abc",
    secondary: "yellow",
  },
};

export default function App() {
  const queryClient = new QueryClient();

  return (
    <View style={styles.container}>
      <QueryClientProvider client={queryClient}>
        <Provider store={cameraStore}>
          <PaperProvider theme={theme}>
            <Router />
          </PaperProvider>
        </Provider>
      </QueryClientProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
