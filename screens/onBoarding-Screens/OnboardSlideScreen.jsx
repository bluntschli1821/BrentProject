import { StyleSheet, Text, View } from "react-native";
import React from "react";

const slides = [
  {
    id: 1,
    // image: require("../assets/onboarding1.png"),
    text: "Welcome to Property Management",
    backgroundColor: "#4630eb",
  },
  {
    id: 2,
    // image: require("../assets/onboarding2.png"),
    text: "Discover our properties",
    backgroundColor: "#34c759",
  },
  {
    id: 3,
    // image: require("../assets/onboarding3.png"),
    text: "Book your next property",
    backgroundColor: "#f4511e",
  },
  {
    id: 4,
    // image: require("../assets/onboarding4.png"),
    text: "Get updates on your bookings",
    backgroundColor: "#ff9f43",
  },
  // more slides...
];

export default function OnboardSlideScreen() {
  return (
    <View>
      <Text>OnboardSlideScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
