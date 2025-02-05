import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../constants/MOCK_DATA";
import styled from "styled-components";

const Details = () => {
  const navigate = useNavigate();
  const param = useParams();
  const pokemon = setPokemon(param.id);

  console.log(pokemon);

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
    </DetailsLayout>
  );
};

const setPokemon = (id) => {
  return MOCK_DATA.find((pokemon) => pokemon.id === Number(id));
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

export default Details;
