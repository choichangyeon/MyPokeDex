import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import pokemon_logo from "@image/Home/Pokemon.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeLayout>
      <PokemonLogo src={pokemon_logo}></PokemonLogo>
      <StartBtn onClick={() => navigate("/dex")}>포켓몬 도감 시작하기</StartBtn>
    </HomeLayout>
  );
};

const HomeLayout = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const PokemonLogo = styled.img`
  margin: 100px 0 40px 0;
  width: 500px;
  &:hover {
    animation: ${bounce} 0.5s ease infinite;
  }
`;

const StartBtn = styled.div`
  cursor: pointer;
  width: 200px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid black;
  border-radius: 10px;

  background-color: #ffcc1e;

  &:hover {
    background: #306cb4;
    color: white;
    transition: 0.5s;
  }
`;
export default Home;
