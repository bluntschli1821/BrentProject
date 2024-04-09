import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function OnBoarding1({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Group 1436.png")}
        style={styles.image}
      />
      <Image
        source={require("../../assets/logo-color1.png")}
        style={styles.logo}
      />
      <TouchableOpacity
        style={styles.touch}
        onPress={() => navigation.navigate("OnBoarding2")}
      >
        <Text>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#000",
    flex: 1,
    height: "100%",
  },
  image: {
    width: "100%",
    height: 585,
    resizeMode: "cover",
    marginBottom: 10,
  },
  logo: {
    width: 300,
    height: 150,
  },
  touch: {
    width: 300,
    height: 50,
    borderRadius: 20,
    backgroundColor: "#1a7dff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
