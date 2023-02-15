import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";

import categories from "../assets/data/categories";
import { colors } from "../assets/colors/colors";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../Redux/Slices/homeSlice";

const Categories = () => {
  const { selectedCategory } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  return (
    <FlatList
      style={{
        flexDirection: "row",
      }}
      data={categories}
      renderItem={({ item }) => (
        <TouchableOpacity
          key={item.id}
          style={{
            margin: 10,
            alignItems: "center",
          }}
          onPress={() => dispatch(setSelectedCategory(item.id))}
        >
          <View
            style={{
              backgroundColor:
                item.id == selectedCategory ? colors.tertiary : colors.primary,
              padding: 10,
              borderRadius: 15,
              width: 50,
              alignItems: "center",
            }}
          >
            {item.icon}
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "normal",
              textAlign: "center",
              fontFamily: "Poppins",
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => index}
      horizontal
      scrollEnabled
    />
  );
};

export default Categories;
