import { View, Text, Image } from "react-native";
import React from "react";
import Menu from "../assets/icons/Menu";
import Basket from "../assets/icons/Basket";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
      }}
    >
      <Menu />
      <Basket basket={5} onPress={() => navigation.navigate("Cart")} />
    </View>
  );
};

export default Header;
