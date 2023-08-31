import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Counter from "../../components/atoms/Counter/Counter";
import Home from "../../components/atoms/Home/Home";
import DrawerRoutes from "../DrawerRoutes/DrawerRoutes";

const Stack = createNativeStackNavigator();
const StackRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen options={{}} name="Counter" component={Counter} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Drawer"
        component={DrawerRoutes}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;
