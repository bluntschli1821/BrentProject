import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default SupportScreen = () => {
  const Navigation = useNavigation(true);
  return (
    <View style={styles.container}>
      <Text style={styles.stxt}>Support</Text>

      <Image
        source={require("./../assets/support1.1.1.png")}
        style={styles.image}
      />
      <View style={styles.vCont}>
        <Text style={styles.vtxt}>Brent Support</Text>
        <Text style={styles.vstxt}>
          Our dedicated team is here to assist you with any questions or issues
          reated to our App & Services
        </Text>
      </View>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => Alert.alert("Coming Soon!")}
      >
        <Ionicons name="chatbubble" style={styles.cbbl} />
        <Text style={styles.ttxt}>WhatsApp Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Alert.alert("Coming Soon!")}
        style={styles.touch1}
      >
        <Ionicons name="chatbubble" style={styles.cbbl} />
        <Text style={styles.ttxt}>InApp Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    paddingTop: 40,
    height: "100%",
    paddingHorizontal: 10,
  },
  cbbl: {
    color: "white",
    fontSize: 25,
  },
  stxt: {
    color: "white",
    alignSelf: "center",
    fontSize: 25,
  },
  ttxt: {
    color: "white",
    alignSelf: "center",
    fontSize: 16,
  },
  image: {
    resizeMode: "contain",
    width: 200,
    height: 200,
    alignSelf: "center",
    marginVertical: 30,
  },
  vCont: {
    padding: 20,
  },
  vtxt: {
    color: "white",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  vstxt: {
    color: "grey",
    fontSize: 14,
    textAlign: "center",
  },
  touch: {
    backgroundColor: "#006eff",
    width: "90%",
    height: 50,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 20,
    marginTop: 30,
    paddingVertical: 10,
  },
  touch1: {
    borderColor: "#006eff",
    borderWidth: 1,
    width: "90%",
    height: 50,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 20,
    marginTop: 30,
    paddingVertical: 10,
  },
});
