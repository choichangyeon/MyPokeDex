import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled, { keyframes, css } from "styled-components";
import { setPosition } from "@slices/positionSlice";
import { addPokemon, removePokemon } from "@slices/LineupSlice";

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
        dispatch(removePokemon(pokemon));
        return;
      default:
        return;
    }
  };

  return (
    <CardBox onClick={gotoDetails} data-pokemon-id={pokemon.id} type={type}>
      <Img src={pokemon.img_url} alt="Pokemon" />
      <Info type={type}>
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

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const CardBox = styled.div`
  cursor: pointer;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  ${(props) => {
    switch (props.type) {
      case "PokemonList":
        return css`
          width: 160px;
          height: 220px;
          margin: 20px 10px 20px 10px;
        `;
      case "Dashboard":
        return css`
          width: 140px;
          height: 180px;
        `;
      default:
        return css`
          width: 100px;
          height: 100px;
        `;
    }
  }};

  &:hover {
    ${(props) => {
      switch (props.type) {
        case "PokemonList":
          return css`
            transform: scale(1.4);
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.5);
          `;
        case "Dashboard":
          return css`
            animation: ${bounce} 0.5s ease infinite;
            box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.5);
          `;
        default:
          return "";
      }
    }};
    transition: 0.5s;
  }

  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
`;
const Img = styled.img`
  object-position: center;
  object-fit: cover;
`;
const Info = styled.div`
  width: 100px;
  text-align: center;
  font-size: ${(props) => {
    switch (props.type) {
      case "PokemonList":
        return `18px`;
      case "Dashboard":
        return `16px`;
      default:
        return `15px`;
    }
  }};
`;
const ActionBtn = styled.button`
  width: 80px;
  height: 30px;

  border: none;
  border-radius: 10px;
  margin: 5px 0 0 0;
  background-color: #ee3f35;
  color: white;

  font-size: 15px;

  &:hover {
    background-color: #3db128;
    transition: 0.3s;
  }
`;

export default PokemonCard;
