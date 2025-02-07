import { configureStore } from "@reduxjs/toolkit";
import Lineup from "/src/redux/slices/LineupSlice";
import position from "/src/redux/slices/PositionSlice";

const store = configureStore({
  reducer: { Lineup: Lineup, position: position },
});

export default store;
