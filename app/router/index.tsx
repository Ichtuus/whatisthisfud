import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import FoodScanner from "../features/foodScanner/views/FoodScanner";

export type RootStackParamList = {
  FoodScanner: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function Router() {
  return (
    <NavigationContainer independent>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FoodScanner" component={FoodScanner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
