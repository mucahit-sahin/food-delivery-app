import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import specials from "../assets/data/specials";
import { colors } from "../assets/colors/colors";
import ArrowRight from "../assets/icons/ArrowRight";

const Specials = () => {
  const navigation = useNavigation();
  const { selectedCategory } = useSelector((state) => state.home);
  const [data, setData] = useState([]);

  useEffect(() => {
    // get includes selected category
    setData([]);
    specials.forEach((item) => {
      item.categories.includes(selectedCategory) &&
        setData((prev) => [...prev, item]);
    });
  }, [selectedCategory]);

  return (
    <View style={{}}>
      {/*Title */}
      <View style={{ marginHorizontal: 20 }}>
        <Text
          style={{ fontSize: 20, fontWeight: "bold", fontFamily: "Poppins" }}
        >
          Specials
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              borderRadius: 30,
              paddingHorizontal: 10,
              paddingVertical: 20,
              margin: 10,
              marginTop: 20,
              marginLeft: 20,
              width: 150,
              height: 250,
              justifyContent: "space-between",
            }}
            onPress={() => navigation.navigate("Details", { id: item.id })}
          >
            <Image
              source={item.icon}
              style={{
                width: 100,
                height: 100,
                marginLeft: -30,
                marginTop: -20,
                borderRadius: 50,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                fontFamily: "Poppins",
              }}
            >
              {item.name.length > 20
                ? item.name.slice(0, 20) + "..."
                : item.name}
            </Text>
            <Text style={{ fontSize: 16, fontFamily: "Poppins" }}>
              {"$" + item.price}
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 13, fontFamily: "Poppins" }}>
                See details
              </Text>
              <ArrowRight />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        scrollEnabled={true}
        horizontal={true}
      />
    </View>
  );
};

export default Specials;
