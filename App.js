import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./Navigations/HomeStack";

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
