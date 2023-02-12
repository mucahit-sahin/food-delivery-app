import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Categories from "../Components/Categories";
import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import Specials from "../Components/Specials";

const Home = () => {
  return (
    <SafeAreaView>
      <Header />
      <SearchBar />
      <Categories />
      <Specials />
    </SafeAreaView>
  );
};

export default Home;
