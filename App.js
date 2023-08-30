import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import NewAtomicComponent from "./src/components/atoms/NewAtomicComponent/NewAtomicComponent";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import StackRoutes from "./src/routes/StackRoutes/StackRoutes";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight,
  },
  childContainerOne: {
    backgroundColor: "yellow",
  },
  childContainerTwo: {
    backgroundColor: "red",
  },

  insideParentContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "flex-start",
    width: "100%",
  },
});
