import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding1 from "../screens/onBoarding-Screens/OnBoarding1";
import OnBoarding2 from "../screens/onBoarding-Screens/OnBoarding2";
import OnBoarding3 from "../screens/onBoarding-Screens/OnBoarding3";
import OnBoarding4 from "../screens/onBoarding-Screens/OnBoarding4";

export default function OnBoarding() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Onboarding1"
      screenOptions={{
        animation: "slide_from_right",
        headerShown: false,
        statusBarTranslucent: true,
      }}
    >
      <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
      <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
      <Stack.Screen name="OnBoarding3" component={OnBoarding3} />
      <Stack.Screen name="OnBoarding4" component={OnBoarding4} />
    </Stack.Navigator>
  );
}
