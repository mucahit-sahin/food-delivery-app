import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";

const Home = () => {
  return (
    <SafeAreaView>
      <Header />
      <SearchBar />
    </SafeAreaView>
  );
};

export default Home;
