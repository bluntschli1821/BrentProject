import React from "react";
import Icon from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function OnBoarding3({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Frame 6.png")}
        style={styles.image}
      />
      <Text style={styles.text}>
        <Text style={styles.color}>Book Appointments {""}</Text>
        To View Potential Properties
      </Text>
      <Text style={styles.stxt2}>Swift, Affordable And Hassle Free</Text>
      <View style={styles.view}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-circle-outline" size={40} color={"#3d7dfd"} />
        </TouchableOpacity>
        <View style={styles.view1}></View>
        <TouchableOpacity
          style={styles.Icon}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Icon name="arrow-forward-circle" size={40} color={"#3d7dfd"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 20,
    alignItems: "center",
    backgroundColor: "#000",
  },
  text: {
    width: "85%",
    fontSize: 30,
    color: "#fff",
    marginVertical: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
  view: {
    width: "100%",
    height: 80,
    marginTop: 200,
    // borderWidth: 1,
    borderColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
  },
  view1: {
    width: "60%",
    // borderWidth: 1,
    borderColor: "#fff",
  },
  color: {
    color: "#3d7dfd",
  },
  stxt2: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    fontWeight: "regular",
  },
});
