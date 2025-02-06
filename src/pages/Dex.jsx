import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import { PokemonContext } from "../PokemonContextProvider";

const Dex = () => {
  const { position } = useContext(PokemonContext);

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
`;
export default Dex;
