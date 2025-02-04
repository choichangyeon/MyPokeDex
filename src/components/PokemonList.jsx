import React from "react";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../constants/MOCK_DATA";
import styled from "styled-components";

const PokemonList = ({ select }) => {
  const pokemonList = MOCK_DATA;

  return (
    <ListBox>
      {pokemonList.map((pokemon) => {
        return (
          <PokemonCard
            pokemon={pokemon}
            select={select}
            key={pokemon.id}
          ></PokemonCard>
        );
      })}
    </ListBox>
  );
};

const ListBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
`;

export default PokemonList;
