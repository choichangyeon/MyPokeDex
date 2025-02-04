import React from "react";
import styled from "styled-components";

const PokemonCard = ({ pokemon }) => {
  const CardBox = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 220px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px 0 10px 0;
  `;
  const Img = styled.img`
    object-position: center;
    object-fit: cover;
  `;
  const Info = styled.div`
    width: 100px;
    text-align: center;
  `;
  const AddBtn = styled.button`
    background-color: green;
  `;
  return (
    <CardBox>
      <Img src={pokemon.img_url} alt="Pokemon" />
      <Info>
        NO.{pokemon.id.toString().padStart(3, "0")}
        <br />
        {pokemon.korean_name}
      </Info>
      <AddBtn onClick={testBtn} value={pokemon.id}>
        추가하기
      </AddBtn>
    </CardBox>
  );
};

const testBtn = (e) => {};

export default PokemonCard;
