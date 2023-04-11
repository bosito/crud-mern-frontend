import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./app/store/store";
import Navigation from "./app/navigation/navigation";
import "react-native-gesture-handler";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
