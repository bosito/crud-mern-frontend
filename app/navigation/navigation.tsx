import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { IStackNavigation } from "./core/interface/navigation-interfaces";
import { Alert } from "../components";
import EditScreen from "../screens/EditScreen";
import AddScreen from "../screens/AddScreen";

const Stack = createNativeStackNavigator<IStackNavigation>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          navigationBarColor: "white",
          statusBarColor: "white",
          statusBarStyle: "dark",
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="EditScreen" component={EditScreen} />
        <Stack.Screen name="AddScreen" component={AddScreen} />
        <Stack.Group
          screenOptions={{
            animation: "fade",
            presentation: "containedTransparentModal",
            headerShown: false,
            contentStyle: { backgroundColor: "rgba(32, 34, 35, 0.59)" },
            statusBarColor: "transparent",
            statusBarStyle: "light",
            navigationBarColor: "transparent",
          }}
        >
          <Stack.Screen name="Alert" component={Alert} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
