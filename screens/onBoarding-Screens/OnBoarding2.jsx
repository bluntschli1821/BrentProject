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
        <TouchableOpacity>
          <Icon name="arrow-back-circle-outline" size={40} />
        </TouchableOpacity>
        <View style={styles.view}></View>
        <TouchableOpacity
          style={styles.Icon}
          onPress={() => navigation.navigate("OnBoarding3")}
        >
          <Icon name="arrow-forward-circle" size={40} color={"#3d7dfd"} />
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
    height: 60,
    width: "100%",
    marginTop: 200,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-evenly",
    // paddingHorizontal: 10,
  },
  Icon: {
    width: 50,
    height: "100%",
    alignItems: "center",
  },
  touch: {
    width: 60,
    height: 40,
    left: "37%",
    marginTop: 15,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  touchtext: {
    color: "#3d7dfd",
  },
  view: {
    width: "60%",
    // borderWidth: 1,
    height: "100%",
    borderRadius: 5,
    // borderColor: "#fff",
    alignItems: "center",
  },
});
