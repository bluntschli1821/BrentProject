import React, { useState } from "react";
import { useAtom } from "jotai";
import { FormDataAtom } from "../../theAtom/FormAtom";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Eye from "@expo/vector-icons/Ionicons";
import Key from "@expo/vector-icons/Ionicons";
import Person from "@expo/vector-icons/Octicons";

export default SignIn = () => {
  // This is for Navigation
  const Navigation = useNavigation();
  const handleNavigation = () => {
    Navigation.navigate("SignUp");
    console.log("SignUp");
  };
  //This is for Information
  const [formData, setFormData] = useAtom(FormDataAtom);
  const handleSignIn = () => {
    Navigation.navigate("HomeTab");
    console.log("A User Signed In");
  };
  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };
  //This is for Toggling Password
  const [passwordShown, setPasswordShown] = useState(false);
  const [password, setPassword] = useState();
  const toggleShowPassword = () => {
    setPasswordShown(!passwordShown);
    console.log("See Your Password");
  };

  return (
    <ScrollView
      scrollEnabled={false}
      style={styles.container}
      contentContainerStyle={styles.container1}
    >
      <Image
        source={require("../../assets/logo-color1.png")}
        style={styles.image}
      />
      <View style={styles.signin}>
        <Text style={styles.text}>Sign In</Text>

        <Text style={styles.txt}>User Name</Text>
        <View style={styles.tiView}>
          <Person name="person" style={styles.icon} />
          <TextInput
            placeholder="Username"
            placeholderTextColor="grey"
            style={styles.TextInput}
            value={formData.userName}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => handleChange("userName", text)}
          />
        </View>

        <Text style={styles.txt}>Password</Text>
        <View style={styles.tiView}>
          <Key name="key-outline" style={styles.icon} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="grey"
            style={styles.TextInput}
            secureTextEntry={!passwordShown}
            value={password}
            autoCapitalize="none"
            autoCorrect={false}
            onValueChange={setPassword}
          />
          <Eye
            name={passwordShown ? "eye" : "eye-off"}
            onPress={toggleShowPassword}
            style={styles.icon}
          />
        </View>
        <TouchableOpacity style={styles.touch} onPress={handleSignIn}>
          <Text style={styles.touchtext}>SignIn</Text>
        </TouchableOpacity>
        <Text style={styles.etxt}>
          Not a User?
          <Text style={styles.ltxt} onPress={handleNavigation}>
            {" "}
            SignUp
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 30,
    height: "100%",
  },
  container1: {
    alignItems: "center",
  },
  image: {
    marginTop: 100,
    marginBottom: 40,
    height: 100,
    width: 150 * 2,
  },
  signin: {
    width: "100%",
  },
  text: {
    color: "white",
    fontSize: 20,
    marginVertical: 10,
  },
  txt: {
    color: "white",
    fontSize: 12,
    marginVertical: 10,
  },
  tiView: {
    flexDirection: "row",
    width: "100%",
    gap: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "grey",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  icon: {
    color: "grey",
    fontSize: 25,
  },
  TextInput: {
    color: "grey",
    width: "70%",
    height: "100%",
  },
  touch: {
    backgroundColor: "#006eff",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    marginTop: 20,
    marginBottom: 3,
  },
  touchtext: {
    color: "white",
    fontSize: 15,
  },
  etxt: {
    color: "grey",
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
  },
  ltxt: { color: "#006eff" },
});
