import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useAtom } from "jotai";
import React from "react";
import { FormDataAtom } from "./../../theAtom/FormAtom";
import { useNavigation } from "@react-navigation/native";

export default HomeScreen = () => {
  const Navigation = useNavigation(true);
  const [formData, setFormData] = useAtom(FormDataAtom);
  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };
  const handleSubmit = () => {
    Navigation.navigate("Profile");
    console.log("The User Info: ", formData);
  };
  return (
    <ScrollView
    scrollEnabled={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardDismissMode="interactive"
    >
      <Text style={styles.ftxt}>Edit Profile</Text>
      <TextInput
        style={styles.textInput}
        placeholder="First Name"
        placeholderTextColor="gray"
        value={formData.firstName}
        onChangeText={(text) => handleChange("firstName", text)}
        
      />
      <TextInput
        style={styles.textInput}
        placeholder="Last Name"
        placeholderTextColor="gray"
        value={formData.lastName}
        onChangeText={(text) => handleChange("lastName", text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Phone Number"
        placeholderTextColor="gray"
        value={formData.phone}
        onChangeText={(Number) => handleChange("phone", Number)}
        keyboardType="number-pad"
        maxLength={11}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Email Adress"
        placeholderTextColor="gray"
        value={formData.email}
        onChangeText={(text) => handleChange("email", text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Country"
        placeholderTextColor="gray"
        value={formData.country}
        onChangeText={(text) => handleChange("country", text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="State"
        placeholderTextColor="gray"
        value={formData.state}
        onChangeText={(text) => handleChange("state", text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="City/Province"
        placeholderTextColor="gray"
        value={formData.city}
        onChangeText={(text) => handleChange("city", text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Zip Code"
        placeholderTextColor="gray"
        value={formData.zip}
        onChangeText={(Number) => handleChange("zip", Number)}
        maxLength={10}
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Address"
        placeholderTextColor="gray"
        value={formData.address}
        onChangeText={(text) => handleChange("address", text)}
      />
      <View style={styles.touchView}>
        <TouchableOpacity style={styles.touch} onPress={handleSubmit}>
          <Text style={styles.ttxt}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    gap: 5,
    height: "100%",
    paddingVertical: 20,
  },
  contentContainer: {
    alignItems: "center",
  },
  bck: {
    fontSize: 30,
    color: "white",
    padding: 10,
  },
  textInput: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    marginVertical: 5,
    padding: 10,
    color: "gray",
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 16,
  },
  touch: {
    height: 50,
    backgroundColor: "gray",
    width: "30%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  ftxt: {
    fontSize: 20,
    color: "#fff",
    marginVertical: 20,
  },
  touchView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    width: "100%",
  },
});
