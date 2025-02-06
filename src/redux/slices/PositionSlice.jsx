import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  position: 0,
};
const PositionSlice = createSlice({
  name: "position",
  initialState,
  reducers: {
    setPosition: (state, action) => {
      state.position = action.payload;
    },
  },
});

export const { setPosition } = PositionSlice.actions;
export default PositionSlice.reducer;
