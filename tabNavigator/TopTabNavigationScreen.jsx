import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Buy from "../components/Buy";
import Sell from "../components/Sell";
import React from "react";

export default function TopTabNavigationScreen() {
  const Top = createMaterialTopTabNavigator();
  return (
    <Top.Navigator
      initialRouteName="Buy"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarStyle: styles.tabBarStyle,
        tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
      }}
      tabBarInactiveTintColor={"#052341"}
    >
      <Top.Screen name="Ongoing" component={Buy} />
      <Top.Screen name="Completed" component={Sell} />
    </Top.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    top: 30,
    height: 50,
    position: "absolute",
    backgroundColor: "#000",
    width: "100%",
    elevation: 0,
  },
  tabBarLabelStyle: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  tabBarIndicatorStyle: {
    textTransform: "capitalize",
    height: 3,
    tabBarInactiveTintColor: "white",
  },
});
