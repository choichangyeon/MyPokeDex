import { configureStore } from "@reduxjs/toolkit";
import Lineup from "@slices/LineupSlice";
import position from "@slices/PositionSlice";

const store = configureStore({
  reducer: { Lineup: Lineup, position: position },
});

export default store;
