import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { View } from "react-native";
import DrawerScreenOne from "../../components/pages/DrawerScreenOne";
import DrawerScreenTwo from "../../components/pages/DrawerScreenTwo";

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Drawer Screen One" component={DrawerScreenOne} />
      <Drawer.Screen name="Drawer Screen Two" component={DrawerScreenTwo} />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
