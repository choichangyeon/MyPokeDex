import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import PokemonList from "@components/PokemonList";
import Dashboard from "@components/Dashboard";

const Dex = () => {
  const position = useSelector((state) => state.position);
  useEffect(() => {
    window.scrollTo(0, position);
  }, [position]);

  return (
    <DexLayout>
      <Dashboard />
      <PokemonList />
    </DexLayout>
  );
};

const DexLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* background-color: green; */
`;
export default Dex;
