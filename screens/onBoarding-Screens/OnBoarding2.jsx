import React from "react";
import Icon from "@expo/vector-icons/Ionicons";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function OnBoarding2({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/AOboard.png")} style={styles.Img} />
      <Text style={styles.txt}>
        Find {""}
        <Text style={styles.stxt}>Your Perfect Home</Text> {""}
        With Us Today.
      </Text>
      <Text style={styles.stxt2}>Swift, Affordable And Hassle Free</Text>
      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.Icon}
          onPress={() => navigation.navigate("")}
        >
          <Icon name="arrow-forward-circle" size={50} color={"#3d7dfd"} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.touchtext}>SKIP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingVertical: 30,
    alignItems: "center",
    backgroundColor: "#000",
  },
  txt: {
    width: "80%",
    fontSize: 30,
    color: "#fff",
    marginVertical: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
  stxt: {
    color: "#246bfd",
  },
  Img: {
    alignSelf: "center",
    marginVertical: 30,
  },
  stxt2: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    fontWeight: "regular",
  },
  bottomView: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    marginTop: 200,
    borderRadius: 10,
    borderColor: "grey",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    alignContent: "center",
    // verticalAlign: "center",
  },
  Icon: {
    // right: "80%",
    // alignSelf: "flex-end",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "grey",
    width: 50,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  touch: {
    width: 60,
    height: 40,
    // borderWidth: 1,
    borderRadius: 15,
    alignItems: "center",
    // borderColor: "#3d7dfd",
    justifyContent: "center",
    marginTop: 15,
    left: "35%",
  },
  touchtext: {
    color: "#3d7dfd",
  },
});
