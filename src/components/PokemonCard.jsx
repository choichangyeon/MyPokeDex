import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PokemonContext } from "../PokemonContextProvider";
import { useDispatch, useSelector } from "react-redux";
import { setPosition } from "../redux/slices/positionSlice";

const PokemonCard = ({ pokemon = null, action = null, type = null }) => {
  const navigate = useNavigate();
  const { addPokemon, removePokemon } = useContext(PokemonContext);
  const dispatch = useDispatch();

  const gotoDetails = (e) => {
    const id = e.currentTarget.getAttribute("data-pokemon-id");
    const position = window.scrollY;
    console.log(position);
    dispatch(setPosition({ position }));
    navigate(`/details/${id}`);
  };

  const clickAction = (e) => {
    e.stopPropagation();
    switch (action) {
      case "ADD":
        // addPokemon(pokemon);
        dispatch(addPokemon({ payload: pokemon }));
        return;
      case "REMOVE":
        // removePokemon(pokemon);
        dispatch(removePokemon({ payload: pokemon }));
        return;
      default:
        return;
    }
  };

  return (
    pokemon && (
      <CardBox onClick={gotoDetails} data-pokemon-id={pokemon.id} type={type}>
        <Img src={pokemon.img_url} alt="Pokemon" />
        <Info>
          NO.{pokemon.id.toString().padStart(3, "0")}
          <br />
          {pokemon.korean_name}
        </Info>
        {<ActionBtn onClick={clickAction}>{BtnName[action]}</ActionBtn>}
      </CardBox>
    )
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

  box-shadow: ${(props) => {
    switch (props.type) {
      case "PokemonList":
        return "10px 10px 10px 1px rgba(0, 0, 0, 0.5)";
      case "Dashboard":
        return "none";
      default:
        return "none";
    }
  }};

  &:hover {
    transform: ${(props) => {
      switch (props.type) {
        case "PokemonList":
          return "translateY(-20px)";
        case "Dashboard":
          return "none";
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
