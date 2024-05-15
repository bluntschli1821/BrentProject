import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const category = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Houses",
  },
  {
    id: 3,
    name: "Offices",
  },
  {
    id: 4,
    name: "Lands",
  },
];

export default function Categories() {
  // const [selectedCategory, setSelectedCategory] = useState("All"); // Default category set to 'All'
  // // const handleSelectedCategory = () => {
  // //   setSelectedCategory(selectedCategory);
  // // };
  // const HandlePressed = (category) => {
  //   console.log("pressed " + category.name);
  //   console.log("filtering categories");
  //   // onPress = () => {
  //   //   setSelectedCategory(item.name);
  //   //   console.log(item.name);
  //   //   console.log(selectedCategory);
  //   // };
  // };
  return (

      {/* Category filter buttons */}
      // <ScrollView horizontal>
      //   <TouchableOpacity onPress={() => setSelectedCategory('All')} style={{ marginRight: 10 }}>
      //     <Text style={{ padding: 10, backgroundColor: selectedCategory === 'All' ? 'blue' : 'transparent', borderRadius: 5, color: selectedCategory === 'All' ? 'white' : 'black' }}>All</Text>
      //   </TouchableOpacity>
      //   <TouchableOpacity onPress={() => setSelectedCategory('Houses')} style={{ marginRight: 10 }}>
      //       <Text style={{ padding: 10, backgroundColor: selectedCategory === 'Category A' ? 'blue' : 'transparent', borderRadius: 5, color: selectedCategory === 'Category A' ? 'white' : 'black' }}>Houses</Text>
      //     </TouchableOpacity>
      //     <TouchableOpacity onPress={() => setSelectedCategory('Offices')} style={{ marginRight: 10 }}>
      //       <Text style={{ padding: 10, backgroundColor: selectedCategory === 'Category B' ? 'blue' : 'transparent', borderRadius: 5, color: selectedCategory === 'Category B' ? 'white' : 'black' }}>Offices</Text>
      //     </TouchableOpacity>
      //     <TouchableOpacity onPress={() => setSelectedCategory('Category C')}>
      //       <Text style={{ padding: 10, backgroundColor: selectedCategory === 'Lands' ? 'blue' : 'transparent', borderRadius: 5, color: selectedCategory === 'Category C' ? 'white' : 'black' }}>Lands</Text>
      //     </TouchableOpacity>
      // </ScrollView>

  )
}

const styles = StyleSheet.create({
  catView: {
    width: "22%",
    height: 35,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "gray",
    justifyContent: "center",
  },
});
