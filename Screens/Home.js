import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Categories from "../Components/Categories";
import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";

const Home = () => {
  return (
    <SafeAreaView>
      <Header />
      <SearchBar />
      <Categories />
    </SafeAreaView>
  );
};

export default Home;
