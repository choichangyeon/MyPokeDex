import React from "react";
import styled from "styled-components";
import pokemon_ball from "@image/Dex/PokemonBall.png";

const EmptyPokemon = () => {
  return (
    <EmptyBox>
      <PokemonBall src={pokemon_ball} />
    </EmptyBox>
  );
};

const EmptyBox = styled.div`
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
export default React.memo(EmptyPokemon);
