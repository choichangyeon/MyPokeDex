import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = [];

const LineupSlice = createSlice({
  name: "Lineup",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      const pokemon = action.payload;
      if (state.length === 6) {
        toast("라인업이 이미 완성되어있습니다!");
        return;
      }
      if (state.find((poke) => poke.id === pokemon.id)) {
        // alert();
        toast.warn("라인업에 존재하는 포켓몬입니다.");
        return;
      }
      // alert();
      toast.success(`${pokemon.korean_name}을 라인업에 추가했습니다!`);
      state.push(pokemon);
    },

    removePokemon: (state, action) => {
      const PokemonId = action.payload;
      return state.filter((pokemon) => pokemon.id !== PokemonId);
    },
  },
});

export const { addPokemon, removePokemon } = LineupSlice.actions;
export default LineupSlice.reducer;
