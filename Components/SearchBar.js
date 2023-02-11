import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

import SearchIcon from "../assets/icons/Search";
import { colors } from "../assets/colors/colors";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <View style={{ padding: 20 }}>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 32, fontWeight: "bold" }}>Hi James</Text>
        <Text style={{ fontSize: 12, fontWeight: "normal" }}>
          What do you want to order today?
        </Text>
      </View>

      <View
        style={{
          backgroundColor: colors.primary,
          alignItems: "center",
          flexDirection: "row",
          borderRadius: 20,
          padding: 10,
        }}
      >
        <SearchIcon style={{ width: "10%" }} />
        <TextInput
          placeholder="Search"
          style={{ marginLeft: 10, fontSize: 12, width: "90%" }}
          onChangeText={(text) => setSearch(text)}
        />
      </View>
    </View>
  );
};

export default SearchBar;
