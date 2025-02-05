import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PokemonCard = ({ pokemon, action = null, type = "PokemonList" }) => {
  const navigate = useNavigate();
  const gotoDetails = (e) => {
    const id = e.currentTarget.getAttribute("data-pokemon-id");
    navigate(`/details/${id}`);
  };

  const clickAction = (e) => {
    e.stopPropagation();
    action(pokemon);
  };

  return (
    <CardBox onClick={gotoDetails} data-pokemon-id={pokemon.id} type={type}>
      <Img src={pokemon.img_url} alt="Pokemon" />
      <Info>
        NO.{pokemon.id.toString().padStart(3, "0")}
        <br />
        {pokemon.korean_name}
      </Info>
      {action && (
        <ActionBtn onClick={clickAction}>{BtnName[action.name]}</ActionBtn>
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

export default PokemonCard;
