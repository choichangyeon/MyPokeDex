import React from "react";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../constants/MOCK_DATA";
import styled from "styled-components";

const PokemonList = () => {
  const pokemonList = MOCK_DATA;
  const ListBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
  `;
  return (
    <ListBox>
      {pokemonList.map((pokemon) => {
        return <PokemonCard pokemon={pokemon}></PokemonCard>;
      })}
    </ListBox>
  );
};

export default PokemonList;
