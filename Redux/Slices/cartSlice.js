import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.cart.find((item) => item.id === action.payload.id)) {
        state.cart.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity += 1;
          }
        });
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      if (state.cart.find((item) => item.id === action.payload.id)) {
        state.cart.map((item) => {
          if (item.id === action.payload.id) {
            if (item.quantity > 1) {
              item.quantity -= 1;
            } else {
              state.cart.splice(state.cart.indexOf(item), 1);
            }
          }
        });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
