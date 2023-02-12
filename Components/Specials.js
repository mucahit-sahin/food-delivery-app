import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import specials from "../assets/data/specials";
import { colors } from "../assets/colors/colors";
import ArrowRight from "../assets/icons/ArrowRight";
import { useNavigation } from "@react-navigation/native";

const Specials = () => {
  const navigation = useNavigation();
  return (
    <View style={{}}>
      {/*Title */}
      <View style={{ marginHorizontal: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Specials</Text>
      </View>
      <FlatList
        data={specials}
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
              }}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {item.name}
            </Text>
            <Text style={{ fontSize: 16 }}>{item.price}</Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 13 }}>See details</Text>
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
