import React from "react";
import styled from "styled-components";

const PokemonCard = ({ pokemon, action = null, type = "PokemonList" }) => {
  const clickAction = () => {
    action(pokemon);
  };

  return (
    <CardBox type={type}>
      <Img src={pokemon.img_url} alt="Pokemon" />
      <Info>
        NO.{pokemon.id.toString().padStart(3, "0")}
        <br />
        {pokemon.korean_name}
      </Info>
      {action && (
        <AddBtn onClick={clickAction} value={pokemon}>
          {btnName[action.name]}
        </AddBtn>
      )}
    </CardBox>
  );
};

const btnName = {
  pokemonSelect: "추가하기",
  pokemonDelete: "삭제하기",
};

const CardBox = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: ${(props) => {
    switch (props.type) {
      case "PokemonList":
        return "160px";
      case "Dashboard":
        return "140px";
      default:
        return "100px";
    }
  }};
  height: ${(props) => {
    switch (props.type) {
      case "PokemonList":
        return "220px";
      case "Dashboard":
        return "180px";
      default:
        return "100px";
    }
  }};
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

export default PokemonCard;
