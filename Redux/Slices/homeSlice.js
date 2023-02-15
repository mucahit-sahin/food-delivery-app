import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: 1,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedCategory } = homeSlice.actions;

export default homeSlice.reducer;
