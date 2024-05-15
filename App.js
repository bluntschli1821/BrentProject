import Navigator from './navigator/Navigator';
import { View, StyleSheet } from "react-native"

export default function App() {
  return (
    < Navigator />
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#000",
    paddingTop: 100,
    height: "100%",
  },
});
