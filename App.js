import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { Categories, MealOverview } from "./src/screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer initialRouteName="MealCategories">
        <Stack.Navigator>
          <Stack.Screen name="MealCategories" component={Categories} />
          <Stack.Screen name="MealOverview" component={MealOverview} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
