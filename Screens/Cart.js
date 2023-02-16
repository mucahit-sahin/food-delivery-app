import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import { colors } from "../assets/colors/colors";
import BasketIcon from "../assets/icons/Basket";
import RemoveIcon from "../assets/icons/Remove";
import AddIcon from "../assets/icons/Add";
import { addToCart, removeFromCart } from "../Redux/Slices/cartSlice";

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const [totalPrice, setTotalPrice] = useState(
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );

  useEffect(() => {
    setTotalPrice(
      cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
  }, [cart]);

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
          <BasketIcon />
        </TouchableOpacity>
      </View>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>My Order</Text>
      </View>
      {cart.length > 0 ? (
        <FlatList
          data={cart}
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
                    borderRadius: 30,
                  }}
                />
              </View>
              <View style={{ flexDirection: "column", flex: 1 }}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 20, fontFamily: "Poppins" }}>
                    {item.name.length > 15
                      ? item.name.slice(0, 15) + "..."
                      : item.name}
                  </Text>
                </View>
                <View
                  style={{ flexDirection: "row", justifyContent: "center" }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      onPress={() => dispatch(removeFromCart(item))}
                    >
                      <RemoveIcon />
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 20,
                        fontFamily: "Poppins",
                        paddingHorizontal: 10,
                      }}
                    >
                      {item.quantity}
                    </Text>
                    <TouchableOpacity onPress={() => dispatch(addToCart(item))}>
                      <AddIcon />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      marginLeft: "auto",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ fontSize: 20, fontFamily: "Poppins" }}>
                      {"$" + item.price}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontFamily: "Poppins" }}>
            You don't have any items in your cart yet.
          </Text>
        </View>
      )}

      {/*Total price*/}
      {cart.length > 0 && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontFamily: "Poppins" }}>Total:</Text>
          <Text style={{ fontSize: 16, fontFamily: "Poppins" }}>
            {"$" + totalPrice}
          </Text>
        </View>
      )}
      {/*checkout*/}
      <TouchableOpacity
        style={{
          margin: 10,
          backgroundColor: colors.secondary,
          padding: 10,
          borderRadius: 30,
        }}
        onPress={() => cart.length === 0 && navigation.replace("Home")}
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
          {cart.length > 0 ? "Checkout" : "Back to the main menu"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Cart;
