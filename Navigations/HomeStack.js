import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import Details from "../Screens/Details";
import Basket from "../Screens/Basket";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Basket" component={Basket} />
    </Stack.Navigator>
  );
};

export default HomeStack;
