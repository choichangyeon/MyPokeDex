import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../constants/MOCK_DATA";

const Details = () => {
  const navigate = useNavigate();
  const param = useParams();
  const pokemon = setPokemon(param.id);

  const backDex = () => {
    navigate("/dex");
  };

  return (
    <>
      <div>Details</div>
      {/* <Img src={pokemon.img_url} alt="Pokemon" />
      <Info>
        NO.{pokemon.id.toString().padStart(3, "0")}
        <br />
        {pokemon.korean_name}
      </Info> */}
      <button onClick={backDex}>뒤로 가기</button>
    </>
  );
};

const setPokemon = (id) => {
  return MOCK_DATA.find((pokemon) => pokemon.id === Number(id));
};

export default Details;
