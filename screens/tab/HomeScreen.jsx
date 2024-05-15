import {
  Text,
  View,
  Alert,
  Image,
  Modal,
  Pressable,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";

// Sample product data
const productsData = [
  {
    id: 1,
    name: "Product 1",
    category: "House",
    image: require("../../assets/House1.1.png"), // Example image import
    location: "New York, NY",
    price: "10",
    description: "Description of Product 1",
  },
  {
    id: 2,
    name: "Product 2",
    category: "Office",
    image: require("../../assets/house2.png"), // Example image import
    location: "Location 2",
    price: "20",
    description: "Description of Product 2",
  },
  {
    id: 3,
    name: "Product 3",
    category: "House",
    image: require("../../assets/house3.png"), // Example image import
    location: "Location 3",
    price: "30",
    description: "Description of Product 3",
  },
  {
    id: 4,
    name: "Product 4",
    category: "Land",
    image: require("../../assets/house4.png"), // Example image import
    location: "Location 4",
    price: "40",
    description: "Description of Product 4",
  },
  {
    id: 5,
    name: "Product 5",
    category: "Land",
    image: require("../../assets/house5.png"), // Example image import
    location: "Location 5",
    price: "40",
    description: "Description of Product 5",
  },
  {
    id: 6,
    name: "Product 6",
    category: "Office",
    image: require("../../assets/house6.png"), // Example image import
    location: "Location 6",
    price: "40",
    description: "Description of Product 6",
  },
  {
    id: 7,
    name: "Product 7",
    category: "Office",
    image: require("../../assets/house6.png"), // Example image import
    location: "Location 7",
    price: "40",
    description: "Description of Product 7",
  },
  {
    id: 8,
    name: "Product 8",
    category: "House",
    image: require("../../assets/house6.png"), // Example image import
    location: "Location 8",
    price: "40",
    description: "Description of Product 8",
  },
  {
    id: 9,
    name: "Product 9",
    category: "House",
    image: require("../../assets/house6.png"), // Example image import
    location: "Location 9",
    price: "40",
    description: "Description of Product 9",
  },
  // Add more products as needed
];

export default HomeScreen = ({ navigation }) => {
  // Searching for products
  const [searchQuerry, setSearchQuerry] = useState("");
  //Search Function
  const handleSearchFilter = (text) => {
    setSearchQuerry(text);
    console.log(`Searching...`);
  };

  // Filtering out products with categories

  const categories = ["All", "House", "Office", "Land"];
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default category set to 'All'
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  const filteredProducts = productsData.filter((products) => {
    return (
      (products.location.toLowerCase().includes(searchQuerry.toLowerCase()) ||
        products.category.toLowerCase().includes(searchQuerry.toLowerCase()) ||
        products.description
          .toLowerCase()
          .includes(searchQuerry.toLowerCase()) ||
        products.name.toLowerCase().includes(searchQuerry.toLowerCase())) &&
      (selectedCategory === "All" || products.category === selectedCategory)
    );
  });

  // Products Details
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const handleProductDetails = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
    console.log(`Product Details: ${product}`);
    // Alert.alert(`Product Details: ${product.name}`);
    // navigation.navigate("");
  };

  // Return Statement for the App View
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* Main View */}
      <View style={styles.mainContainer}>
        {/* Main / Header Section */}
        <View style={styles.ftView}>
          <Text style={styles.ftext}>
            Let's Find Your <Text style={styles.ftext1}>Favorite Home</Text>
          </Text>

          <Image
            source={require("../../assets/catPhoto.jpg")}
            style={styles.fimg}
          />
        </View>
        {/* Search Section / Search Bar */}
        <View style={styles.search}>
          <View style={styles.searchV}>
            <Ionicons
              name="search"
              size={30}
              color={searchQuerry.length > 0 ? "white" : "grey"}
            />
            <TextInput
              style={styles.searchInp}
              placeholder="Search..."
              placeholderTextColor="grey"
              placeholderTextSize="12"
              color={searchQuerry.length > 0 ? "white" : "grey"}
              onChangeText={handleSearchFilter}
              value={searchQuerry}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <Pressable onPress={() => Alert.alert("Coming Soon!")}>
            <Image source={require("../../assets/Frame 4.png")} />
          </Pressable>
        </View>

        {/* Category Scroller */}

        <View style={styles.catView}>
          <Text style={styles.catTxt}> Categories</Text>
          <ScrollView
            horizontal
            style={styles.containerStyle}
            keyboardDismissMode="on-drag"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.categoryContainerStyle}
            height={55}
          >
            {categories.map((category) => (
              <TouchableOpacity
                onPress={() => handleCategoryChange(category)}
                key={category}
                style={{
                  backgroundColor:
                    selectedCategory === category ? "transparent" : "#3d3d3d",
                  borderRadius: 15,
                  height: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  width: "22%",
                  borderBottomColor:
                    selectedCategory === category ? "blue" : "transparent",
                  borderBottomWidth: selectedCategory === category ? 1 : 0,
                  height: 35,
                }}
              >
                <Text
                  style={{
                    color: selectedCategory === category ? "blue" : "white",
                    fontWeight:
                      selectedCategory === category ? "bold" : "regular",
                  }}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Product list */}
        <View style={styles.pdView}>
          <ScrollView
            keyboardDismissMode="on-drag"
            style={styles.productsContainer}
            contentContainerStyle={styles.productsContainerStyle}
          >
            {filteredProducts.map((product) => (
              <TouchableOpacity
                key={product.id}
                style={styles.pView}
                onPress={() => handleProductDetails(product)}
              >
                <View style={styles.Icont}>
                  <Image source={product.image} style={styles.cImage} />
                </View>
                <View style={styles.inner}>
                  <Text style={styles.iTxt}>{product.name}</Text>
                  <Text style={styles.iTxt}>{product.location}</Text>
                  <Text style={styles.iTxt}>${product.price}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <Modal
          transparent={true}
          visible={showModal}
          animationType="slide_from_bottom"
        >
          <View
            style={{
              alignItems: "center",
              padding: 20,
              backgroundColor: "#3d3d3d",
              position: "absolute",
              width: "100%",
              height: "80%",
              top: "20%",
              borderRadius: 10,
              backfaceVisibility: "visible",
            }}
          >
            <View style={styles.mICont}>
              <Image source={selectedProduct.image} style={styles.cImage} />
            </View>
            <View style={styles.mInner}>
              <Text style={styles.mSubTxt}>{selectedProduct.name}</Text>
              <Text style={styles.mSubTxt}>{selectedProduct.location}</Text>
              <Text style={styles.mSubTxt}>
                Price: ${selectedProduct.price}
              </Text>
              <Text style={styles.mSubTxt}>{selectedProduct.category}</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 50 }}>
              <TouchableOpacity
                onPress={() => Alert.alert("Comming Soon")}
                style={styles.mTouch}
              >
                <Text style={styles.mTxt}>Buy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setShowModal(false)}
                style={styles.cTouch}
              >
                <Text style={styles.cTxt}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
    height: 50,
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
    width: "100%",
    height: "100%",
  },
  productsContainer: {
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "50%",
  },
  categoryContainerStyle: {
    position: "absolute",
    flexDirection: "row",
    gap: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  productsContainerStyle: {
    borderRadius: 20,
    position: "absolute",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    padding: 10,
  },
  pView: {
    width: "48%",
    borderRadius: 10,
    height: 220,
    backgroundColor: "#3d3d3d",
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
  Icont: {
    width: "100%",
    height: "70%",
    borderRadius: 10,
  },
  mICont: {
    width: "100%",
    height: "50%",
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
  mInner: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  catView: {
    height: "auto",
    justifyContent: "center",
  },
  catTxt: {
    fontSize: 20,
    marginLeft: 10,
    color: "#3d3d3d",
    marginVertical: 10,
    fontWeight: "bold",
  },
  pdView: {
    top: 0,
  },
  mTxt: {
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
  },
  mSubTxt: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  cTxt: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
  },
  mTouch: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    borderRadius: 10,
    borderBottomColor: "blue",
    borderBottomWidth: 2,
  },
  cTouch: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    borderRadius: 10,
    borderBottomColor: "red",
    borderBottomWidth: 2,
  },
});
