import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const PositionSlice = createSlice({
  name: "position",
  initialState,
  reducers: {
    setPosition: (state, action) => action.payload,
  },
});

export const { setPosition } = PositionSlice.actions;
export default PositionSlice.reducer;
