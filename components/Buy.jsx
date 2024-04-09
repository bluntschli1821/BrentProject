import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Buy() {
  return (
    <View style={styles.container}>


      <Text style={styles.trnx}>
        Transactions
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#000",
    paddingTop: 100,
    height: "100%",
  },
  trnx: {
    fontSize: 20,
    color: "#fff",
  },
});
