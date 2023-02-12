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
    name: "Italian",
    icon: <Italian />,
  },

  {
    id: 3,
    name: "Thai",
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
    name: "Asian",
    icon: <Asian />,
  },
];

export default categories;
