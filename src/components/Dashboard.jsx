import styled from "styled-components";
import pokemon_ball from "/src/assets/PokemonBall.png";
import PokemonCard from "./PokemonCard";
import { useContext } from "react";
import { PokemonContext } from "../PokemonContextProvider";

const Dashboard = () => {
  const { Lineup } = useContext(PokemonContext);
  return (
    <DashboardLayout>
      <LineupTitle>나만의 포켓몬 파티</LineupTitle>
      <BorderBox>
        {Array.from({ length: 6 }, (_, index) => {
          return Lineup[index] ? (
            <PokemonCard
              pokemon={Lineup[index]}
              action="REMOVE"
              type="Dashboard"
              key={index}
            />
          ) : (
            <EmptyPokemon key={index}>
              <PokemonBall src={pokemon_ball} />
            </EmptyPokemon>
          );
        })}
      </BorderBox>
    </DashboardLayout>
  );
};

const DashboardLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0 30px 0;
`;

const LineupTitle = styled.div`
  font-size: 30px;
  font-weight: 800;
  margin: 0 0 30px 0;
`;

const BorderBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;

  margin-bottom: 20px;
`;

const EmptyPokemon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 180px;
  border: 1px dashed black;
  border-radius: 10px;
`;

const PokemonBall = styled.img`
  width: 80px;
  object-position: center;
  object-fit: cover;
`;
export default Dashboard;
