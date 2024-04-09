import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Icon from "@expo/vector-icons/MaterialIcons";
import HomeScreen from "../screens/HomeScreen";
import SupportScreen from "../screens/SupportScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TopTabNavigationScreen from "./TopTabNavigationScreen";

export default TabNavigationScreen = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={30}
              color={focused ? "#006eff" : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={30}
              color={focused ? "#006eff" : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={TopTabNavigationScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? "currency-exchange" : "currency-exchange"}
              size={30}
              color={focused ? "#006eff" : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Support"
        component={SupportScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "help-circle" : "help-circle-outline"}
              size={40}
              color={focused ? "#006eff" : "grey"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 90,
    position: "absolute",
    backgroundColor: "#191919",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: "100%",
    elevation: 0,
    borderTopWidth: 0,
    borderTopColor: "transparent",
  },
  tabBarLabelStyle: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
