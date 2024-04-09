import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React from "react";
import { useAtom } from "jotai";
import { useNavigation } from "@react-navigation/native";
import { FormDataAtom } from "../theAtom/FormAtom";
import Edit from "@expo/vector-icons/Feather";

export default function ProfileScreen() {
  const Navigation = useNavigation(true);
  const [formData] = useAtom(FormDataAtom);
  const handleEdit = () => {
    Navigation.navigate("Edit");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.ftxt}>Profile</Text>
      <View style={styles.edit}>
        <View style={styles.editV}>
          <Edit
            name="edit"
            style={styles.icon}
            onPress={() =>
              Alert.alert("This function is not available right now")
            }
          />
          <Image
            source={require("../assets/catPhoto.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.editV1}>
          <Text style={styles.editI}>Full Name</Text>
          <Text style={styles.editVt}>
            {formData.firstName} {""}
            {formData.lastName}
          </Text>
          <Text style={styles.editI}>User Name</Text>
          <Text style={styles.editVt}>{formData.userName}</Text>
          <Text style={styles.editI}>Phone Number</Text>
          <Text style={styles.editVt}>{formData.phone}</Text>
          <Text style={styles.editI}>Email Address</Text>
          <Text style={styles.editVt}>{formData.email}</Text>
          <Text style={styles.editI}>Country</Text>
          <Text style={styles.editVt}>{formData.country}</Text>
          <Text style={styles.editI}>State</Text>
          <Text style={styles.editVt}>{formData.state}</Text>
          <Text style={styles.editI}>City</Text>
          <Text style={styles.editVt}>{formData.city}</Text>
          <Text style={styles.editI}>Zip Code</Text>
          <Text style={styles.editVt}>{formData.zip}</Text>
          <Text style={styles.editI}>Your Address</Text>
          <Text style={styles.editVt}>{formData.address}</Text>
          <TouchableOpacity style={styles.touch} onPress={handleEdit}>
            <Text style={styles.touchtxt}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#000",
    gap: 5,
    height: "100%",
    paddingTop: 40,
  },
  ftxt: {
    fontSize: 25,
    color: "white",
    marginBottom: 30,
  },
  touch: {
    height: 40,
    borderColor: "gray",
    width: "50%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    marginTop: 15,
  },
  touchtxt: {
    fontSize: 14,
    color: "white",
  },
  edit: {
    width: "100%",
    paddingVertical: 10,
    flexDirection: "row",
    gap: 5,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 50,
    alignItems: "center",
  },
  editV: {
    width: 120,
    height: 120,
    padding: 10,
  },
  editV1: {
    width: "70%",
    height: "100%",
    alignItems: "center",
    paddingRight: 20,
    borderLeftWidth: 1,
    borderLeftColor: "grey",
  },
  editI: {
    color: "grey",
    fontSize: 15,
  },
  editVt: {
    color: "white",
    fontSize: 16,
    marginBottom: 10,
  },
  icon: {
    position: "absolute",
    fontSize: 30,
    color: "grey",
    top: 10,
    right: 10,
    zIndex: 1,
  },
});
