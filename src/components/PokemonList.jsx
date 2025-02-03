import React from "react";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../constants/MOCK_DATA";

const PokemonList = () => {
  const pokemonList = MOCK_DATA;
  return (
    <>
      {pokemonList.map((pokemon) => {
        return <PokemonCard pokemon={pokemon}></PokemonCard>;
      })}
    </>
  );
};

export default PokemonList;
