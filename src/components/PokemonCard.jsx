import React from "react";
import styled from "styled-components";

const PokemonCard = ({ pokemon }) => {
  const CardBox = styled.div`
    width: 160px;
    height: 220px;
    border: 1px solid black;
    border-radius: 10px;
  `;
  const Img = styled.img`
    object-position: center;
    object-fit: cover;
  `;
  const Info = styled.div`
    width: 100px;
  `;
  return (
    <CardBox>
      <Img src={pokemon.img_url} alt="Pokemon" />
      <Info>
        {pokemon.id}, {pokemon.korean_name}
      </Info>
    </CardBox>
  );
};

export default PokemonCard;
