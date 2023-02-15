import All from "../icons/All";
import Italian from "../icons/Italian";
import Thai from "../icons/Thai";
import Asian from "../icons/Asian";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const categories = [
  {
    id: 1,
    name: "All",
    icon: <All />,
  },
  {
    id: 2,
    name: "Pizza",
    icon: <Italian />,
  },

  {
    id: 3,
    name: "Chicken",
    icon: (
      <MaterialCommunityIcons
        name="food-drumstick-outline"
        size={24}
        color="black"
      />
    ),
  },
  {
    id: 4,
    name: "Pasta",
    icon: <Asian />,
  },
  {
    id: 5,
    name: "Burger",
    icon: <MaterialCommunityIcons name="hamburger" size={24} color="white" />,
  },
];

export default categories;
