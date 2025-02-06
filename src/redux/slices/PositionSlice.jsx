import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  position: 0,
};
const PositionSlice = createSlice({
  name: "position",
  initialState,
  reducers: {
    saveScroll: (state, action) => {
      setPosition(window.scrollY);
    },
  },
});

export const { addPokemon, removePokemon } = LineupSlice.actions;
export default LineupSlice.reducer;
