import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Lineup: [],
};
const LineupSlice = createSlice({
  name: "Lineup",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      const pokemon = action.payload;
      if (state.Lineup.length === 6) {
        alert("라인업이 이미 완성되어있습니다!");
        return;
      }
      if (state.Lineup.find((poke) => poke.id === pokemon.id)) {
        alert("라인업에 존재하는 포켓몬입니다.");
        return;
      }
      alert(`${pokemon.korean_name}을 라인업에 추가했습니다!`);
      state.Lineup.push(pokemon);
    },

    removePokemon: (state, action) => {
      const pokemon = action.payload;
      state.Lineup = state.Lineup.filter((poke) => poke.id !== pokemon.id);
    },
  },
});

export const { addPokemon, removePokemon } = LineupSlice.actions;
export default LineupSlice.reducer;
