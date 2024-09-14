import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigationScreen from "../tabNavigator/TabNavigationScreen";
import SignIn from "../screens/auth-screens/SignIn";
import SignUp from "../screens/auth-screens/SignUp";
import OnBoarding from "./OnBoarding";
import EditDetails from "../screens/editInfo/EditDetails";


export default function Navigator() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          animation: "fade_from_bottom",
          headerShown: false,
        }}
      >
        <Stack.Screen name="Onboarding" component={OnBoarding} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="HomeTab" component={TabNavigationScreen} />
        <Stack.Screen name="Edit" component={EditDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
