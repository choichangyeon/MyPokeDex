import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../constants/MOCK_DATA";
import styled from "styled-components";
import { useContext } from "react";
import { PokemonContext } from "../PokemonContextProvider";

const Details = () => {
  const navigate = useNavigate();
  const param = useParams();
  const { Lineup, addPokemon, removePokemon } = useContext(PokemonContext);

  const pokemon = setPokemon(param.id);
  let action = Lineup.some((poke) => poke.id === pokemon.id) ? "REMOVE" : "ADD";

  const clickAction = (e) => {
    e.stopPropagation();
    switch (action) {
      case "ADD":
        addPokemon(pokemon);
        return;
      case "REMOVE":
        removePokemon(pokemon);
        return;
      default:
        return;
    }
  };

  const backDex = () => {
    navigate("/dex");
  };

  return (
    <DetailsLayout>
      <Img src={pokemon.img_url} alt="Pokemon" />
      <Info>
        NO.{pokemon.id.toString().padStart(3, "0")}
        <br />
        {pokemon.korean_name}
        <br />
        {pokemon.description}
      </Info>
      <button onClick={backDex}>뒤로 가기</button>
      <ActionBtn onClick={clickAction}>{BtnName[action]}</ActionBtn>
    </DetailsLayout>
  );
};

const setPokemon = (id) => {
  return MOCK_DATA.find((pokemon) => pokemon.id === Number(id));
};

const BtnName = {
  ADD: "추가하기",
  REMOVE: "삭제하기",
};

const DetailsLayout = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  margin: 100px 0 0 0;
  /* background-color: green; */
`;
const Img = styled.img`
  width: 200px;
  object-position: center;
  object-fit: cover;
`;
const Info = styled.div`
  width: 500px;

  text-align: center;
  margin: 0 0 20px 0;

  line-height: 180%;
  /* background-color: green; */
`;

const ActionBtn = styled.button`
  width: 80px;
  height: 30px;

  border: none;
  border-radius: 10px;
  margin: 5px 0 0 0;
  background-color: #ee3f35;

  &:hover {
    background-color: #3db128;
    color: white;
    transition: 0.3s;
  }
`;

export default Details;
