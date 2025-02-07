import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setPosition } from "../redux/slices/positionSlice";
import { addPokemon, removePokemon } from "../redux/slices/LineupSlice";

const PokemonCard = ({ pokemon, action = null, type = null }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const gotoDetails = (e) => {
    const id = e.currentTarget.getAttribute("data-pokemon-id");
    const position = window.scrollY;
    dispatch(setPosition(position));
    navigate(`/details/${id}`);
  };

  const clickAction = (e) => {
    e.stopPropagation();
    switch (action) {
      case "ADD":
        dispatch(addPokemon(pokemon));
        return;
      case "REMOVE":
        dispatch(removePokemon(pokemon.id));
        return;
      default:
        return;
    }
  };

  return (
    <CardBox onClick={gotoDetails} data-pokemon-id={pokemon.id} type={type}>
      <Img src={pokemon.img_url} alt="Pokemon" />
      <Info>
        NO.{pokemon.id.toString().padStart(3, "0")}
        <br />
        {pokemon.korean_name}
      </Info>
      {<ActionBtn onClick={clickAction}>{BtnName[action]}</ActionBtn>}
    </CardBox>
  );
};

const BtnName = {
  ADD: "추가하기",
  REMOVE: "삭제하기",
};

const CardBox = styled.div`
  cursor: pointer;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: ${(props) => {
      switch (props.type) {
        case "PokemonList":
          return "translateY(-20px)";
        // return "scale(1.55)";
        case "Dashboard":
          return "translateY(-10px)";
        default:
          return "none";
      }
    }};

    box-shadow: ${(props) => {
      switch (props.type) {
        case "PokemonList":
          return "10px 10px 10px 1px rgba(0, 0, 0, 0.5)";
        // return " 0 6px 10px rgba(0, 0, 0, 0.5)";
        case "Dashboard":
          return "5px 5px 5px 1px rgba(0, 0, 0, 0.5)";
        default:
          return "none";
      }
    }};
    transition: 0.5s;
  }

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
  margin: ${(props) => {
    switch (props.type) {
      case "PokemonList":
        return "20px 10px 20px 10px";
      case "Dashboard":
        return "none";
      default:
        return "none";
    }
  }};

  background-color: white;
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
