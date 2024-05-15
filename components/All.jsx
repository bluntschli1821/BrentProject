import React from "react";
import Lands from "./Lands";
import Houses from "./Houses";
import Offices from "./Offices";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function All() {
  return (
    <ScrollView style={styles.All}>
      <Houses />
      <Offices />
      <Lands />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  All: {
    width: "100%",
    top: 40,
    backgroundColor: "gray",
  },
});
