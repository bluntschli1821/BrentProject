import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState } from "react";

const searchFilter = (text) => {
  console.log(`Searching `);
};

export default HomeScreen = () => {
  const [searchText, setsearchText] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        {/* Header Section */}
        <View style={styles.ftView}>
          <Text style={styles.ftext}>
            Let's Find Your <Text style={styles.ftext1}>Favorite Home</Text>
          </Text>

          <Image
            source={require("../assets/catPhoto.jpg")}
            style={styles.fimg}
          />
        </View>
        {/* Search Section */}
        <View style={styles.search}>
          <View style={styles.searchV}>
            <Ionicons
              name="search"
              size={30}
              color={searchText.length > 0 ? "white" : "grey"}
              onPress={() => {
                searchFilter();
                Alert.alert(`Coming Soon!`);
              }}
            />
            <TextInput
              style={styles.searchInp}
              placeholder="Search by Address, City or ZIP"
              placeholderTextColor="grey"
              placeholderTextSize="10"
              color="#ffffff"
              onChangeText={(text) => {
                setsearchText(text);
                searchFilter(text);
              }}
              value={searchText}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <Pressable onPress={() => Alert.alert("Coming Soon!")}>
            <Image source={require("../assets/Frame 4.png")} />
          </Pressable>
        </View>

        {/* Category Scroller */}
        <ScrollView
          style={styles.scroller}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyboardDismissMode="on-drag"
          maxHeight={50}
        >
          <View style={styles.categoryF}>
            <TouchableOpacity style={styles.touch}>
              <Text style={styles.categoryTxt}>All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.category}>
            <TouchableOpacity style={styles.touch}>
              <Text style={styles.categoryTxt}>House</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.category}>
            <TouchableOpacity style={styles.touch}>
              <Text style={styles.categoryTxt}>Office</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.category}>
            <TouchableOpacity style={styles.touch}>
              <Text style={styles.categoryTxt}>Land</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Products Section */}
        <ScrollView
          style={styles.containerStyle}
          keyboardDismissMode="on-drag"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
        >
          <TouchableOpacity style={styles.pView}>
            <View style={styles.Icont}>
              <Image
                style={styles.cImage}
                source={require("../assets/House1.1.png")}
              />
            </View>
            <View style={styles.inner}>
              <Text style={styles.iTxt}>Lorem Ipsum</Text>
              <Text style={styles.iTxt}>NO. 3 Woji R0ad</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pView}>
            <View style={styles.Icont}>
              <Image
                style={styles.cImage}
                source={require("../assets/house2.png")}
              />
            </View>
            <View style={styles.inner}>
              <Text style={styles.iTxt}>Lorem Ipsum</Text>
              <Text style={styles.iTxt}>NO. 3 Woji R0ad</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pView}>
            <View style={styles.Icont}>
              <Image
                style={styles.cImage}
                source={require("../assets/house3.png")}
              />
            </View>

            <View style={styles.inner}>
              <Text style={styles.iTxt}>Lorem Ipsum</Text>
              <Text style={styles.iTxt}>NO. 3 Woji R0ad</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pView}>
            <View style={styles.Icont}>
              <Image
                style={styles.cImage}
                source={require("../assets/house4.png")}
              />
            </View>

            <View style={styles.inner}>
              <Text style={styles.iTxt}>Lorem Ipsum</Text>
              <Text style={styles.iTxt}>NO. 3 Woji R0ad</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pView}>
            <View style={styles.Icont}>
              <Image
                style={styles.cImage}
                source={require("../assets/house5.png")}
              />
            </View>

            <View style={styles.inner}>
              <Text style={styles.iTxt}>Lorem Ipsum</Text>
              <Text style={styles.iTxt}>NO. 3 Woji R0ad</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pView}>
            <View style={styles.Icont}>
              <Image
                style={styles.cImage}
                source={require("../assets/house6.png")}
              />
            </View>

            <View style={styles.inner}>
              <Text style={styles.iTxt}>Lorem Ipsum</Text>
              <Text style={styles.iTxt}>NO. 3 Woji R0ad</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pView}>
            <View style={styles.Icont}>
              <Image
                style={styles.cImage}
                source={require("../assets/house7.png")}
              />
            </View>

            <View style={styles.inner}>
              <Text style={styles.iTxt}>Lorem Ipsum</Text>
              <Text style={styles.iTxt}>NO. 3 Woji R0ad</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pView}>
            <View style={styles.Icont}>
              <Image
                style={styles.cImage}
                source={require("../assets/house8.png")}
              />
            </View>

            <View style={styles.inner}>
              <Text style={styles.iTxt}>Lorem Ipsum</Text>
              <Text style={styles.iTxt}>NO. 3 Woji R0ad</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pView}>
            <View style={styles.Icont}>
              <Image
                style={styles.cImage}
                source={require("../assets/House1.1.png")}
              />
            </View>

            <View style={styles.inner}>
              <Text style={styles.iTxt}>Lorem Ipsum</Text>
              <Text style={styles.iTxt}>NO. 3 Woji R0ad</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pView}>
            <View style={styles.Icont}>
              <Image
                style={styles.cImage}
                source={require("../assets/House1.1.png")}
              />
            </View>

            <View style={styles.inner}>
              <Text style={styles.iTxt}>Lorem Ipsum</Text>
              <Text style={styles.iTxt}>NO. 3 Woji R0ad</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
    height: "100%",
  },
  mainContainer: {
    flex: 1,
    gap: 30,
    paddingTop: 50,
    flexGrow: 1,
  },
  ftView: {
    flexDirection: "row",
    gap: 100,
    width: "100%",
  },
  ftext: {
    fontSize: 18,
    color: "#fff",
    width: 200,
  },
  ftext1: {
    fontSize: 25,
    color: "#ffff",
    fontWeight: "bold",
  },
  fimg: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  searchV: {
    flexDirection: "row",
    gap: 10,
    width: "75%",
    padding: 10,
    backgroundColor: "#3d3d3d",
    height: 60,
    alignItems: "center",
    borderRadius: 15,
  },
  search: {
    flexDirection: "row",
    gap: 20,
    width: "100%",
    height: 60,
  },
  touch: {
    backgroundColor: "#3d3d3d",
    alignItems: "center",
    justifyContent: "center",
  },
  categoryF: {
    width: 50,
    height: 35,
    backgroundColor: "#3d3d3d",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginHorizontal: 5,
  },
  category: {
    width: 100,
    height: 35,
    backgroundColor: "#3d3d3d",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginHorizontal: 5,
  },
  categoryTxt: {
    fontSize: 14,
    color: "#fff",
  },
  searchInp: {
    fontSize: 10,
    color: "#fff",
    width: 200,
    borderRadius: 5,
    height: "100%",
    flex: 1,
    padding: 5,
  },
  containerStyle: {
    top: -15,
    width: "100%",
    flex: 1,
  },
  contentContainerStyle: {
    borderRadius: 20,
    position: "absolute",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    paddingBottom: 70,
  },
  pView: {
    width: "48%",
    borderRadius: 10,
    height: 250,
    color: "gray",
    backgroundColor: "gray",
    // zIndex: 1,
  },
  cImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  Icont: {
    width: "100%",
    height: "70%",
    borderRadius: 10,
  },
  iTxt: {
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
  },
  inner: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});
