import React from "react";
import styled from "styled-components";
import pokemon_ball from "/src/assets/PokemonBall.png";

const Dashboard = ({ Lineup }) => {
  return (
    <BorderBox>
      <EmptyPokemon>
        <PokemonBall src={pokemon_ball}></PokemonBall>
      </EmptyPokemon>
      <EmptyPokemon>
        <PokemonBall src={pokemon_ball}></PokemonBall>
      </EmptyPokemon>
      <EmptyPokemon>
        <PokemonBall src={pokemon_ball}></PokemonBall>
      </EmptyPokemon>
      <EmptyPokemon>
        <PokemonBall src={pokemon_ball}></PokemonBall>
      </EmptyPokemon>
      <EmptyPokemon>
        <PokemonBall src={pokemon_ball}></PokemonBall>
      </EmptyPokemon>
      <EmptyPokemon>
        <PokemonBall src={pokemon_ball}></PokemonBall>
      </EmptyPokemon>
    </BorderBox>
  );
};

const BorderBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 200px;
  border: 2px blue solid;
  margin-bottom: 20px;
`;

const EmptyPokemon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 180px;
  border: 1px dashed black;
  border-radius: 10px;
`;

const PokemonBall = styled.img`
  width: 80px;
  object-position: center;
  object-fit: cover;
`;
export default Dashboard;
