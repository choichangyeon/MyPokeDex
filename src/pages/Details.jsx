import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "@constants/MOCK_DATA";
import { addPokemon, removePokemon } from "@slices/LineupSlice";
import Type from "@components/Type";

const Details = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const param = useParams();
  const Lineup = useSelector((state) => state.Lineup);
  const pokemon = setPokemon(param.id);
  const types = pokemon.types;
  const action = Lineup.some((poke) => poke.id === pokemon.id)
    ? "REMOVE"
    : "ADD";

  const clickAction = (e) => {
    e.stopPropagation();
    switch (action) {
      case "ADD":
        dispatch(addPokemon(pokemon));
        return;
      case "REMOVE":
        dispatch(removePokemon(pokemon));
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
      <TypesLayout>
        {types.map((type, idx) => (
          <Type key={idx} type={type} page="Details"></Type>
        ))}
      </TypesLayout>
      <Img src={pokemon.img_url} alt="Pokemon" />
      <Info>
        NO.{pokemon.id.toString().padStart(3, "0")}
        <br />
        {pokemon.korean_name}
        <br />
        {pokemon.description}
      </Info>
      <BtnsLayout>
        <ActionBtn onClick={clickAction}>{BtnName[action]}</ActionBtn>
        <PokemonBackBtn onClick={backDex}>뒤로 가기</PokemonBackBtn>
      </BtnsLayout>
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

const TypesLayout = styled.div`
  display: flex;
  gap: 20px;
  margin: 0 0 30px 0;
`;

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
  font-size: 22px;
  /* background-color: green; */
`;

const BtnsLayout = styled.div`
  display: flex;
  gap: 50px;
`;

const ActionBtn = styled.button`
  width: 100px;
  height: 50px;

  border: none;
  border-radius: 10px;
  margin: 5px 0 0 0;
  background-color: #ee3f35;
  color: white;

  font-size: 20px;

  &:hover {
    transform: scale(1.15);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.5);
    background-color: #3db128;
    transition: 0.3s;
  }
`;

const PokemonBackBtn = styled.button`
  width: 100px;
  height: 50px;

  border: none;
  border-radius: 10px;
  margin: 5px 0 0 0;
  background-color: black;
  color: white;

  font-size: 20px;

  &:hover {
    transform: scale(1.15);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.5);
    background-color: #306cb4;
    transition: 0.3s;
  }
`;

export default Details;
