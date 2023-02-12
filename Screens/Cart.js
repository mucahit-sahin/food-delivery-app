import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../assets/colors/colors";
import BasketIcon from "../assets/icons/Basket";
import RemoveIcon from "../assets/icons/Remove";
import AddIcon from "../assets/icons/Add";

import specials from "../assets/data/specials";

const Cart = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*header*/}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={24} color={"black"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <BasketIcon basket={5} />
        </TouchableOpacity>
      </View>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>My Order</Text>
      </View>
      <FlatList
        data={specials}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", { id: item.id })}
            style={{
              padding: 10,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                backgroundColor: colors.primary,
                borderRadius: 20,
                width: 100,
                height: 80,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 10,
              }}
            >
              <Image
                source={item.icon}
                style={{
                  width: 60,
                  height: 60,
                }}
              />
            </View>
            <View style={{}}>
              <Text style={{ fontSize: 20, fontFamily: "Poppins" }}>
                {item.name}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity>
                  <RemoveIcon />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "Poppins",
                    paddingHorizontal: 10,
                  }}
                >
                  1
                </Text>
                <TouchableOpacity>
                  <AddIcon />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                marginLeft: "auto",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 20, fontFamily: "Poppins" }}>
                {item.price}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
      {/*checkout*/}
      <TouchableOpacity
        style={{
          margin: 10,
          backgroundColor: colors.secondary,
          padding: 10,
          borderRadius: 30,
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins",
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Checkout
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Cart;
