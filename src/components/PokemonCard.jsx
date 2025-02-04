import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PokemonCard = ({ pokemon, action = null, type = "PokemonList" }) => {
  const navigate = useNavigate();
  const test = (e) => {
    const id = e.currentTarget.getAttribute("data-pokemon-id");
    navigate(`/details/${id}`);
  };

  const clickAction = (e) => {
    // const target = e.currentTarget.getAttribute("data-pokemon");
    e.stopPropagation();
    action(pokemon);
  };

  return (
    <CardBox onClick={test} data-pokemon-id={pokemon.id} type={type}>
      <Img src={pokemon.img_url} alt="Pokemon" />
      <Info>
        NO.{pokemon.id.toString().padStart(3, "0")}
        <br />
        {pokemon.korean_name}
      </Info>
      {action && (
        <AddBtn onClick={clickAction} data-pokemon={pokemon}>
          {BtnName[action.name]}
        </AddBtn>
      )}
    </CardBox>
  );
};

const BtnName = {
  addPokemon: "추가하기",
  removePokemon: "삭제하기",
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
