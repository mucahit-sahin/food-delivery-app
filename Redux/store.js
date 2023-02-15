import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import homeReducer from "./Slices/homeSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    home: homeReducer,
  },
});
