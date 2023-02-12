import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import categories from "../assets/data/categories";
import { colors } from "../assets/colors/colors";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {categories.map((category, index) => (
        <TouchableOpacity
          key={category.id}
          style={{
            margin: 10,
          }}
          onPress={() => setSelectedCategory(index)}
        >
          <View
            style={{
              backgroundColor:
                index == selectedCategory ? colors.tertiary : colors.primary,
              padding: 10,
              borderRadius: 15,
            }}
          >
            {category.icon}
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "normal",
              textAlign: "center",
              fontFamily: "Poppins",
            }}
          >
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Categories;
