import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = [];

const LineupSlice = createSlice({
  name: "Lineup",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      const Pokemon = action.payload;
      if (state.length === 6) {
        toast("라인업이 이미 완성되어있습니다!");
        return;
      }
      if (state.find((pokemon) => pokemon.id === Pokemon.id)) {
        toast.warn("라인업에 존재하는 포켓몬입니다.");
        return;
      }

      toast.success(`${Pokemon.korean_name}을(를) 파티에 추가했습니다!`, {
        icon: <img src={Pokemon.img_url} width="35px" />,
      });
      state.push(Pokemon);
    },

    removePokemon: (state, action) => {
      const Pokemon = action.payload;
      toast.error(`${Pokemon.korean_name}을(를) 파티에서 삭제했습니다!`, {
        icon: <img src={Pokemon.img_url} width="35px" />,
      });
      return state.filter((pokemon) => pokemon.id !== Pokemon.id);
    },
  },
});

export const { addPokemon, removePokemon } = LineupSlice.actions;
export default LineupSlice.reducer;
