import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

const productsData = [
  {
    houseLocation: "Abujah",
    houseAmount: 2000,
    houseDescription: "House description",
    image: require("../assets/House1.1.png"),
  },
  {
    houseLocation: "Abujah",
    houseAmount: 2000,
    houseDescription: "House description",
    image: require("../assets/House1.1.png"),
  },
  {
    houseLocation: "Abujah",
    houseAmount: 2000,
    houseDescription: "House description",
    image: require("../assets/House1.1.png"),
  },
  {
    Location: "Abujah",
    Amount: 2000,
    Description: "House description",
    image: require("../assets/House1.1.png"),
  },
];

const Houses = () => {
  return (
    <ScrollView>
      {productsData.map((item, index) => (
        <View key={index}>
          <Image source={item.image} style={{ width: 150, height: 150 }} />
          <Text>{item.Location}</Text>
          <Text>₦{item.Amount}</Text>
          <Text>{item.Description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Houses;

const styles = StyleSheet.create({});
