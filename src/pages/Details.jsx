import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "@constants/MOCK_DATA";
import { addPokemon, removePokemon } from "@slices/LineupSlice";

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

  // console.log(svgModules);

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
          <Type key={idx} src={matchingFiles(type)}></Type>
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

// const matchingFiles = (type) => {
//   const value = Object.keys(svgModules).find((key) => {
//     const fileName = key.split("/").pop().split(".")[0];
//     return fileName === TypeName[type];
//   });
//   return value;
// };

const matchingFiles = (type) => `/image/${TypeName[type]}.svg`;

// const svgModules = import.meta.glob("/src/assets/image/Details/*.svg", {
//   eager: true,
//   query: "?url",
//   import: "default",
// });

const BtnName = {
  ADD: "추가하기",
  REMOVE: "삭제하기",
};

const TypeName = {
  노말: "normal",
  드래곤: "dragon",
  불꽃: "fire",
  물: "water",
  전기: "electric",
  풀: "grass",
  얼음: "ice",
  격투: "fighting",
  독: "poison",
  땅: "ground",
  비행: "flying",
  에스퍼: "psychic",
  벌레: "bug",
  바위: "rock",
  고스트: "ghost",
  강철: "steel",
};

const TypesLayout = styled.div`
  display: flex;
  gap: 20px;
  margin: 0 0 30px 0;
`;

const Type = styled.img`
  width: 60px;
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
