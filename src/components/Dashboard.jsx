import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import PokemonCard from "@components/PokemonCard";
import EmptyPokemon from "./EmptyPokemon";

const Dashboard = () => {
  const Lineup = useSelector((state) => state.Lineup);
  const Title = useMemo(
    () => <LineupTitle>나만의 포켓몬 파티</LineupTitle>,
    []
  );

  return (
    <DashboardLayout>
      {Title}
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
            <EmptyPokemon key={index} />
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

export default React.memo(Dashboard);
