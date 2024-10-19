import React, { useEffect, useState } from "react";
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
  KeyboardAvoidingView,
} from "react-native";
import Person from "@expo/vector-icons/Octicons";
import Email from "@expo/vector-icons/Entypo";
import Key from "@expo/vector-icons/Ionicons";
import Eye from "@expo/vector-icons/Ionicons";
import { app } from "../../FirebaseConfig";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
//   auth,
// } from "firebase/auth";

export default SignUp = ({
  email,
  setEmail,
  name,
  setName,
   
  isSignup,
  setIsSignup,
  password,
  setPassword,
  errorMessage,
  setErrorMessage,
}) => {
  // Authentication
  // const auth = getAuth(app);
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged((auth, user) => {
  //     setUserId(user);
  //   });
  //   return unsubscribe();
  // }, [auth]);

  // Handling authentication

  // const handleAuthentication = async () => {
  //   try {
  //     if (user) {
  //       console.log("Successfull signout");
  //       await signOut(auth);
  //     } else {
  //       if (isSignup) {
  //         await createUserWithEmailAndPassword(auth, email, password);
  //         console.log("Successfull Signup");
  //       }
  //     }
  //   } catch (error) {
  //     console.error(`Authentication failed` + error.message);
  //   }
  // };

  const Navigation = useNavigation();
  const [passwordShown, setPasswordShown] = useState(false);
  const toggleShowPassword = () => {
    setPasswordShown(!passwordShown);
    console.log("See Your Password");
  };
  const handleNavigation = () => {
    Navigation.navigate("SignIn");
    console.log("SignIn");
  };
  const [formData, setFormData] = useAtom(FormDataAtom);
  const handleSignUp = () => {
    Navigation.navigate("HomeTab");
    console.log("A new SignUp");
  };
  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
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
      <KeyboardAvoidingView style={styles.signin} behavior="padding">
        <Text style={styles.text}>Sign Up</Text>

        <Text style={styles.txt}>User Name</Text>
        <View style={styles.tiView}>
          <Person name="person" style={styles.icon} />
          <TextInput
            placeholder="Username"
            placeholderTextColor="grey"
            style={styles.TextInput}
            keyboardType="default"
            value={formData.userName}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => handleChange("userName", text)}
          />
        </View>
        <Text style={styles.txt}>Email Adress</Text>
        <View style={styles.tiView}>
          <Email name="email" style={styles.icon} />
          <TextInput
            placeholder="Email Address"
            placeholderTextColor="grey"
            style={styles.TextInput}
            secureTextEntry={!passwordShown}
            onValueChange={setPassword}
            keyboardType="email-address"
            value={email}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={setEmail}
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
            onValueChange={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Eye
            name={passwordShown ? "eye" : "eye-off"}
            onPress={toggleShowPassword}
            style={styles.icon}
          />
        </View>
        <TouchableOpacity style={styles.touch} onPress={handleSignUp}>
          <Text style={styles.touchtext}>SignUp</Text>
        </TouchableOpacity>
        <Text style={styles.etxt}>
          Already a User?
          <Text style={styles.ltxt} onPress={handleNavigation}>
            {" "}
            SignIn
          </Text>
        </Text>
      </KeyboardAvoidingView>
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
