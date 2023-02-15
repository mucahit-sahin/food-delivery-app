import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../assets/colors/colors";
import Basket from "../assets/icons/Basket";
import specials from "../assets/data/specials";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/Slices/cartSlice";
import RemoveIcon from "../assets/icons/Remove";
import AddIcon from "../assets/icons/Add";

const Details = ({ route, navigation }) => {
  const { id } = route.params;
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const [data] = useState(specials.find((item) => item.id === id));
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.secondary }}>
      {/*header*/}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={24} color={colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Basket />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          marginTop: 150,
          backgroundColor: colors.background,
          borderTopStartRadius: 35,
          borderTopEndRadius: 35,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Image
            source={data.icon}
            style={{
              marginTop: -125,
              width: 250,
              height: 250,
              borderRadius: 125,
            }}
          />
        </View>
        {/*details */}
        <View style={{ padding: 10 }}>
          <Text
            style={{ fontSize: 13, textAlign: "center", fontFamily: "Poppins" }}
          >
            {data.description}
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              fontFamily: "Poppins",
              marginTop: 10,
            }}
          >
            {data.name}
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 15, fontFamily: "Poppins" }}>
              300g/530 kcal
            </Text>
            <Text style={{ fontSize: 15, fontFamily: "Poppins" }}>
              1 portion
            </Text>
          </View>
        </View>
        {/*add to cart button view */}
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
            marginTop: "auto",
            marginBottom: 10,
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 13, fontFamily: "Poppins" }}>Price:</Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                fontFamily: "Poppins",
              }}
            >
              {"$" + data.price}
            </Text>
          </View>
          {cart.find((item) => item.id === id) ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 10,
                paddingHorizontal: 10,
                backgroundColor: colors.secondary,
                borderRadius: 30,
              }}
            >
              <TouchableOpacity onPress={() => dispatch(removeFromCart(data))}>
                <RemoveIcon />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Poppins",
                  paddingHorizontal: 20,
                }}
              >
                {cart.find((item) => item.id === id).quantity}
              </Text>
              <TouchableOpacity onPress={() => dispatch(addToCart(data))}>
                <AddIcon />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colors.secondary,
                borderRadius: 30,
                paddingVertical: 10,
                paddingHorizontal: 20,
              }}
              onPress={() => {
                dispatch(addToCart(data));
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  color: "white",
                  marginRight: 20,
                  fontFamily: "Poppins",
                }}
              >
                Add to cart
              </Text>
              <Ionicons name="add-circle-outline" size={24} color="white" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;
